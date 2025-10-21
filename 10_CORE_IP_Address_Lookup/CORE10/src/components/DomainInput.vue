<script setup>
import {ref, watch} from "vue";

const emit = defineEmits(["input"]);
const input = ref("");

watch(input, (val) => {
  if (val.toString().length > 3) emit("input", val);
});

function clearInput() {
  input.value = "";
}
</script>

<template>
  <input type="text" v-model.trim="input" placeholder="Enter Domain">
  <button type="button" @click="clearInput">Clear</button>
</template>

<style scoped>
input {
  width: 500px;
}
</style>