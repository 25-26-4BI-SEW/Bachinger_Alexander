<script setup>
import {onMounted, ref} from "vue";

const emit = defineEmits(["search"]);
const search = ref("");
const inputEl = ref(null); // DOM element
let debounceTimeout = null;

function emitChange() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => emit("search", search.value), 500
    );
}

function clearInput() {
    clearTimeout(debounceTimeout);
    search.value = "";
    emit("search", "");
}

onMounted(() => {
    inputEl.value.focus();
});

</script>

<template>
    <div class="input-wrapper">
        <input ref="inputEl" v-model.trim="search" name="recipe-keyword" placeholder="Search for recipes..." type="text"
               @input="emitChange">
        <button type="button" @click="clearInput">Clear</button>
    </div>
</template>