<script setup>
import {ref} from "vue";
import RecipesSearch from "@/components/RecipesSearch.vue";
import SearchInput from "@/components/SearchInput.vue";

const searchTerm = ref("");
</script>

<template>
    <main>
        <SearchInput @input="(v) => searchTerm = v"></SearchInput>
        <br>
        <hr>
        <div v-if="searchTerm">Recipe for: {{ searchTerm }}</div>
        <RecipesSearch :recipeKeyword="searchTerm"></RecipesSearch>
    </main>
</template>