<script setup>
import {computed, reactive, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import SkillCard from '@/components/SkillCard.vue';
import {useSkillStore} from '@/stores/skills.js';
import Navbar from "@/views/Navbar.vue";
import Footer from "@/views/Footer.vue";

const {t} = useI18n();
const store = useSkillStore();

const panelOpen = ref(false);
const mode = ref('add');   // 'add' | 'edit'
const activeCategory = ref('');
const editingSkillName = ref('');  // original name before edit

const form = reactive({
    categoryTitle: '',
    file: '',
    name: '',
});

const formError = ref('');

// ── Computed ────────────────────────────────────────────────────────────────
const categoryTitles = computed(() => store.skills.map((c) => c.title));

// ── Helpers ─────────────────────────────────────────────────────────────────
function resetForm() {
    form.categoryTitle = store.skills[0]?.title ?? '';
    form.file = '';
    form.name = '';
    formError.value = '';
    editingSkillName.value = '';
}

function openAdd() {
    mode.value = 'add';
    resetForm();
    panelOpen.value = true;
}

function openEdit(categoryTitle, skill) {
    mode.value = 'edit';
    formError.value = '';
    form.categoryTitle = categoryTitle;
    form.file = skill.file;
    form.name = skill.name;
    editingSkillName.value = skill.name;
    activeCategory.value = categoryTitle;
    panelOpen.value = true;
}

function closePanel() {
    panelOpen.value = false;
    resetForm();
}

function submitForm() {
    formError.value = '';

    if (!form.name.trim() || !form.file.trim()) {
        formError.value = 'All fields are required.';
        return;
    }

    if (mode.value === 'add') {
        store.addSkill(form.categoryTitle, {
            file: form.file.trim(),
            name: form.name.trim(),
        });
    } else {
        store.updateSkill(activeCategory.value, editingSkillName.value, {
            file: form.file.trim(),
            name: form.name.trim(),
        });
        // if category changed, move the skill
        if (form.categoryTitle !== activeCategory.value) {
            store.deleteSkill(activeCategory.value, form.name.trim());
            store.addSkill(form.categoryTitle, {
                file: form.file.trim(),
                name: form.name.trim(),
            });
        }
    }

    closePanel();
}

function removeSkill(categoryTitle, skillName) {
    store.deleteSkill(categoryTitle, skillName);
}
</script>

<template>
    <Navbar :homepage="false" />
    <section id="skills" class="skills">
        <div class="skills__header">
            <h1 class="subheading">
                {{ t('nav.skills') }}
            </h1>
            <button class="btn btn--add" @click="openAdd">
                + Add skill
            </button>
        </div>

        <div
            v-for="section in store.skills"
            :key="section.title"
            class="skill_subcategory"
        >
            <h2 class="subheading">
                {{ t(section.title) }}
            </h2>

            <div :class="'hover-' + section.color" class="skill_container">
                <div
                    v-for="skill in section.skills"
                    :key="skill.name"
                    class="skill_card_wrapper"
                >
                    <SkillCard
                        :file="skill.file"
                        :name="skill.name"
                    />
                    <div class="skill_card_actions">
                        <button
                            class="btn btn--icon"
                            title="Edit"
                            @click="openEdit(section.title, skill)"
                        >
                            EDIT
                        </button>
                        <button
                            class="btn btn--icon btn--danger"
                            title="Remove"
                            @click="removeSkill(section.title, skill.name)"
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <Transition name="panel">
            <div v-if="panelOpen" class="skill_panel">
                <div class="skill_panel__backdrop" @click="closePanel" />

                <div class="skill_panel__drawer">
                    <header class="skill_panel__head">
                        <h3>{{ mode === 'add' ? 'Add skill' : 'Edit skill' }}</h3>
                        <button class="btn btn--icon" @click="closePanel">
                            ✕
                        </button>
                    </header>

                    <div class="skill_panel__body">
                        <p v-if="formError" class="skill_panel__error">
                            {{ formError }}
                        </p>

                        <label class="field">
                            <span class="field__label">Category</span>
                            <select v-model="form.categoryTitle" class="field__input">
                                <option
                                    v-for="cat in categoryTitles"
                                    :key="cat"
                                    :value="cat"
                                >{{ t(cat) }}
                                </option>
                            </select>
                        </label>

                        <label class="field">
                            <span class="field__label">Name</span>
                            <input
                                v-model="form.name"
                                class="field__input"
                                placeholder="e.g. React"
                                type="text"
                            >
                        </label>

                        <label class="field">
                            <span class="field__label">Icon filename</span>
                            <input
                                v-model="form.file"
                                class="field__input"
                                placeholder="e.g. react.svg"
                                type="text"
                            >
                        </label>
                    </div>

                    <footer class="skill_panel__foot">
                        <button class="btn btn--secondary" @click="closePanel">
                            Cancel
                        </button>
                        <button class="btn btn--primary" @click="submitForm">
                            {{ mode === 'add' ? 'Add skill' : 'Save changes' }}
                        </button>
                    </footer>
                </div>
            </div>
        </Transition>
    </section>
    <Footer />
</template>

<style scoped src="@/assets/css/skills.css"></style>

<style scoped>
.skills__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.skill_card_wrapper {
    position: relative;
    display: inline-flex;
}

.skill_card_actions {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    opacity: 0;
    background: rgba(0 0 0 / 0.45);
    border-radius: inherit;
    transition: opacity 0.18s ease;
}

.skill_card_wrapper:hover .skill_card_actions,
.skill_card_wrapper:focus-within .skill_card_actions {
    opacity: 1;
}

.btn {
    cursor: pointer;
    border: none;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 1;
    padding: 0.45rem 1rem;
    transition: opacity 0.15s;
}

.btn:hover {
    opacity: 0.8;
}

.btn--add {
    background: var(--primary, #4f7cff);
    color: #fff;
}

.btn--primary {
    background: var(--primary, #4f7cff);
    color: #fff;
}

.btn--ghost {
    background: transparent;
    border: 1px solid currentColor;
}

.btn--icon {
    padding: 0.3rem 0.5rem;
    background: #fff;
    color: #111;
    font-size: 0.8rem;
}

.btn--danger {
    background: #e74c3c;
    color: #fff;
}

.skill_panel {
    position: fixed;
    inset: 0;
    z-index: 200;
    display: flex;
    justify-content: flex-end;
}

.skill_panel__backdrop {
    position: absolute;
    inset: 0;
    background: rgba(0 0 0 / 0.4);
}

.skill_panel__drawer {
    position: relative;
    z-index: 1;
    width: min(400px, 92vw);
    height: 100%;
    background: var(--background, #1e1e2e);
    display: flex;
    flex-direction: column;
    box-shadow: -4px 0 24px rgba(0 0 0 / 0.3);
}

.skill_panel__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(255 255 255 / 0.08);
}

.skill_panel__head h3 {
    margin: 0;
    font-size: 1.1rem;
}

.skill_panel__body {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.skill_panel__foot {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    padding: 1.25rem 1.5rem;
    border-top: 1px solid rgba(255 255 255 / 0.08);
}

.skill_panel__error {
    background: rgba(231 76 60 / 0.15);
    border: 1px solid #e74c3c;
    border-radius: 6px;
    padding: 0.6rem 0.9rem;
    font-size: 0.85rem;
    color: #e74c3c;
    margin: 0;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.field__label {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.6;
}

.field__input {
    width: 100%;
    padding: 0.55rem 0.75rem;
    border-radius: 6px;
    border: 1px solid rgba(255 255 255 / 0.15);
    background: rgba(255 255 255 / 0.06);
    color: inherit;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.15s;
    box-sizing: border-box;
}

.field__input:focus {
    border-color: var(--primary, #4f7cff);
}

.panel-enter-active,
.panel-leave-active {
    transition: opacity 0.2s ease;
}

.panel-enter-active .skill_panel__drawer,
.panel-leave-active .skill_panel__drawer {
    transition: transform 0.25s ease;
}

.panel-enter-from,
.panel-leave-to {
    opacity: 0;
}

.panel-enter-from .skill_panel__drawer,
.panel-leave-to .skill_panel__drawer {
    transform: translateX(100%);
}
</style>
