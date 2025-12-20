<script setup>
import {ref} from "vue";

const emit = defineEmits([]);
const todoInput = ref("");

function addTodo() {
  if (!todoInput.value) return;
  emit("add", todoInput.value);
  todoInput.value = "";
}
</script>

<template>
  <input type="text" v-model.trim="todoInput" placeholder="Enter Todo">
  <button type="button" @click="addTodo">Add</button>
</template>