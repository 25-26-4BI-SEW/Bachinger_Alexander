<script setup>
defineProps(['recipes']);
</script>

<template>
    <div class="grid">
        <div v-for="recipe in recipes" :key="recipe.id" class="card">
            <router-link :to="`/recipe/${recipe.id}`">
                <h3>{{ recipe.title }}</h3>
                <img :alt="recipe.title" :src="recipe.image"/>
            </router-link>
        </div>
    </div>
</template>