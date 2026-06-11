<script setup>
import {useI18n} from 'vue-i18n';
import SkillCard from '@/components/SkillCard.vue';
import sections from '@/data/skills.json';
import {useSkillStore} from "@/stores/skills.js";

const {t} = useI18n();
// const store = useSkillStore();
</script>

<template>
    <section id="skills" class="skills">
        <h1 class="subheading">
            {{ t('nav.skills') }}
        </h1>
        <div v-for="section in sections" :key="section.title" class="skill_subcategory">
            <h2 class="subheading">
                {{ t(section.title) }}
            </h2>

            <div :class="'hover-' + section.color" class="skill_container">
                <SkillCard
                    v-for="skill in section.skills"
                    :key="skill.name"
                    :file="skill.file"
                    :link_src="skill.link_src"
                    :name="skill.name"
                />
            </div>
        </div>
    </section>
</template>

<style scoped src="@/assets/css/skills.css"></style>
