<script setup>
import {ref, watch} from 'vue';
import axios from 'axios';

const props = defineProps({
    recipeKeyword: {
        type: String,
        required: false,
        default: '',
    }
});

const recipeList = ref([]);
const apiKey = import.meta.env.VITE_API_KEY;

watch(() => props.recipeKeyword, async (recipeKeyword) => {
        if (!recipeKeyword) return;
        try {
            const recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${recipeKeyword}`);
            recipeList.value = recipes.data.results;
        } catch (error) {
            console.error(error);
        }
    }
);

</script>

<template>
    <ul>
        <li v-for="r in recipeList" v-if="recipeList === ''" :key="r.id">
            {{ r.title }}
        </li>
        <li v-else>No Recipe found</li>
    </ul>
</template>

<style scoped></style>