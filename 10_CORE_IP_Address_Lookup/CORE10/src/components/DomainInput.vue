<script setup>
import {ref} from "vue";

const emit = defineEmits(['input']);
const input = ref('');


function emitChange() {
  if (input.value.length > 3) emit('input', input.value);
}

function clearInput() {
  input.value = "";
  emit('input', null);
}
</script>

<template>
  <input v-model.trim="input" @input="emitChange" type="text" placeholder="Enter Domain">
  <button type="button" @click="clearInput">Clear</button>
</template>

<style scoped>
input {
  width: 500px;
}
</style>