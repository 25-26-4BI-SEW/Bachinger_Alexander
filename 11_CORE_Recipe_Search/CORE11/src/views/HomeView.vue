<script setup>
import axios from 'axios'
import {ref} from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import RecipeList from '@/components/RecipeList.vue'

const recipes = ref([])

const loadRecipes = async (query) => {
    if (!query) return
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
            apiKey,
            query
        }
    })
    recipes.value = response.data.results;
}
</script>

<template>
    <SearchBar @search="loadRecipes"/>
    <RecipeList :recipes="recipes"/>
</template>
