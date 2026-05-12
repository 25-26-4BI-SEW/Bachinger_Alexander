<script setup>
import axios from "axios";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()

const recipe = ref(null);

onMounted(async () => {
    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/${route.params.id}/information`,
            {
                params: {
                    apiKey,
                    includeNutrition: false
                }
            }
        )
        recipe.value = response.data
    } catch (error) {
        console.error('Fehler beim Laden des Rezepts:', error)
    }
})
</script>

<template>
    <router-link :to="`/`">Zurück</router-link>
    <div v-if="recipe">
        <h2>{{ recipe.title }}</h2>
        <img :src="recipe.image" alt="recipe image"/>
        <h3>Zutaten</h3>
        <ul>
            <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
                {{ ingredient.original }}
            </li>
        </ul>
    </div>
    <div v-else>
        <p>Rezept wird geladen...</p>
    </div>
</template>