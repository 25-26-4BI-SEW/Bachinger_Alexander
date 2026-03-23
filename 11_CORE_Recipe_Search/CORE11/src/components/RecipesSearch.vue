<script setup>
import {onMounted, ref} from 'vue';
import {watchDebounced} from '@vueuse/core';
import axios from 'axios';

const props = defineProps({
    recipeKeyword: {
        type: String,
        required: false,
        default: '',
    }
})

const recipeList = ref([]);

const apiKey = import.meta.env.VITE_API_KEY;

watchDebounced(props.recipeKeyword, async () => {
    try {
        const recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${props.recipeKeyword}`);
        recipeList.value = recipes.data.results;
        console.log(recipeList.value);
    } catch (error) {
        console.error(error);
    }
}, {debounce: 500});

onMounted(() => {
    if (input.value)
        input.value.focus();
});
</script>

<template>
    <ul>
        <li v-for="r in recipeList" :key="r.id">
            {{ r.title }}
        </li>
    </ul>
</template>

<style scoped></style>