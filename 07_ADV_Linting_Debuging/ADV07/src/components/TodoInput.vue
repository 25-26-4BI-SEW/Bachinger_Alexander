<script setup>
import {ref} from "vue";

const emit = defineEmits(["add"]);
const todoInput = ref("");

function addTodo() {
  if (!todoInput.value) return;
  emit("add", todoInput.value);
  todoInput.value = "";
}
</script>

<template>
  <input
    v-model.trim="todoInput"
    type="text"
    placeholder="Enter Todo"
  >
  <button
    type="button"
    @click="addTodo"
  >
    Add
  </button>
</template>