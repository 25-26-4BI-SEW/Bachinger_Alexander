<script setup>
import RecipesSearch from "@/components/RecipesSearch.vue";
import SearchInput from "@/components/SearchInput.vue";

const props = defineProps({
    searchTerm: {
        type: String,
        required: false, default: ""
    },
})
</script>

<template>
    <main>
        <SearchInput @input="props.searchTerm"></SearchInput>
        <RecipesSearch :searchTerm="props.searchTerm"></RecipesSearch>
    </main>
</template>
