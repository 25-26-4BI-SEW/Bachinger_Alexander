<script setup>
import {ref} from "vue";

const emit = defineEmits(["input"]);
const input = ref("");
let debounceTimeout = null;

function emitChange() {
  clearTimeout(debounceTimeout);
  if (input.value.length > 3) debounceTimeout = setTimeout(() => emit("input", input.value), 500);
  // A new timer (setTimeout) is set. --> The code in the function will only be executed after 500ms if the user does not continue typing during this time.
}

function clearInput() {
  input.value = "";
  emit("input", null);
}
</script>

<template>
  <div class="input-wrapper">
    <input v-model.trim="input" placeholder="Enter domain (e.g. sub.domain.tld)" type="text" @input="emitChange"/>
    <button type="button" @click="clearInput">Clear</button>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

input {
  width: 400px;
  padding: 0.5rem;
  border: 1px solid #bbb;
  border-radius: 6px;
}

button {
  background-color: #eee;
  border: none;
  border-radius: 6px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #ddd;
}
</style>
