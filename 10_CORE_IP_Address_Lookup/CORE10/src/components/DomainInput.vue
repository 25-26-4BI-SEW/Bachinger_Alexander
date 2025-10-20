<script setup>
import {ref, watch} from "vue";

const emit = defineEmits([]);
const input = ref("");

watch(input, (val) => {
  if (val.toString().length > 3) {
    console.log(val);
    emit("input", val);
  }
});

function clearInput() {
  input.value = "";
}
</script>

<template>
  <input type="text" v-model.trim="input" placeholder="Enter URL">
  <button type="button" @click="clearInput">Clear</button>
  <!--  <button type="button" @click="sendInput">Submit</button>-->
</template>

<style scoped>
input {
  width: 500px;
}
</style>