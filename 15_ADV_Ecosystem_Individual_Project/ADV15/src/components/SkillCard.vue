<script setup>
import {ref, watchEffect} from 'vue';

const props = defineProps({
    file: {type: String, required: true},
    link_src: {type: String, required: false, default: "#"},
    name: {type: String, required: true},
});

const skillIcons = import.meta.glob('@/assets/skills/*.svg', {query: '?url', import: 'default'});
const baseIcons = import.meta.glob('@/assets/icons/*.svg', {query: '?url', import: 'default'});

const iconUrl = ref(null);

watchEffect(async () => {
    const key = '/src/assets/skills/' + props.file;
    const loader = skillIcons[key] ?? baseIcons['/src/assets/icons/not-found.svg'];
    iconUrl.value = loader ? await loader() : null;
});
</script>


<template>
    <a
        :href="props.link_src"
        class="skill"
        rel="noopener noreferrer"
        target="_blank"
    >
        <img
            v-if="iconUrl"
            :alt="props.file"
            :src="iconUrl"
            class="skill_icon"
        >
        <span class="skill_name">{{ props.name }}</span>
    </a>
</template>

<style scoped src="@/assets/css/skills.css"></style>