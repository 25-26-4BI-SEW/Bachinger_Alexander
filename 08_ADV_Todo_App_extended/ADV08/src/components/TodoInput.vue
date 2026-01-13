<script setup>
import {ref, watch} from "vue";

const emit = defineEmits([]);
const todoInput = ref("");
const errorMessage = ref("");

function addTodo() {
    if (!todoInput.value) return;
    emit("add", todoInput.value);
    todoInput.value = "";
}

watch(todoInput, () => {
    if (todoInput.value.length > 50) {
        errorMessage.value = "The character count exceeds 50 characters!";
    } else errorMessage.value = "";
})
</script>

<template>
    <input v-model.trim="todoInput" placeholder="Enter Todo" type="text" autofocus>
    <button type="button" @click="addTodo">Add</button>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
</template>

<style scoped>
.error {
    color: red;
}
</style>