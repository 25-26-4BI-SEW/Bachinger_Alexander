<script setup>
import {ref} from "vue";
import DomainInput from "./components/DomainInput.vue";
import DomainLookup from "./components/DomainLookup.vue";

const domain = ref("");
</script>

<template>
  <main class="app">
    <h1>IP Address & Location Lookup</h1>
    <DomainInput @input="(val) => (domain = val)"/>
    <DomainLookup :domain="domain"/>
  </main>
</template>

<style scoped>
.app {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 1rem;
}
</style>
