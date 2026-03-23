<script setup>
import {ref} from "vue";

const emit = defineEmits(["input"]);
const input = ref("");
let debounceTimeout = null;

function emitChange() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => emit("input", input.value), 500);
    // A new timer (setTimeout) is set. --> The code in the function will only be executed after 500ms if the user does not continue typing during this time.
}

function clearInput() {
    input.value = "";
    emit("input", "");
}
</script>

<template>
    <div class="input-wrapper">
        <input v-model.trim="input" name="recipe-keyword" placeholder="Search for recipes..." type="text"
               @input="emitChange">
        <button type="button" @click="clearInput">Clear</button>
    </div>
</template>