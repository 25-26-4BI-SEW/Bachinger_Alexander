<script setup>
import {ref, watch} from "vue";

const emit = defineEmits(["add"]);
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
});
</script>

<template>
    <input v-model.trim="todoInput" autofocus placeholder="Enter Todo" type="text"/>
    <button @click="addTodo">Add</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
</template>

<style scoped>
.error {
    color: red;
}
</style>