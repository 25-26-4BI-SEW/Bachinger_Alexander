<script setup>
import {onMounted, ref} from "vue";

const emit = defineEmits(["input"]);
const input = ref("");
const inputEl = ref(null); // DOM element
let debounceTimeout = null;

function emitChange() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => emit("input", input.value), 500);
}

function clearInput() {
    clearTimeout(debounceTimeout);
    input.value = "";
    emit("input", "");
}

onMounted(() => {
    inputEl.value?.focus();
});

</script>

<template>
    <div class="input-wrapper">
        {{ input.value }}
        <input ref="inputEl" v-model.trim="input" name="recipe-keyword" placeholder="Search for recipes..." type="text"
               @input="emitChange">
        <button type="button" @click="clearInput">Clear</button>
    </div>
</template>