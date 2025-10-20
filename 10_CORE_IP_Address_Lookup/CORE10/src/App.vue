<script setup>
import DomainInput from "./components/DomainInput.vue";
import DataDisplay from "./components/DataDisplay.vue";
import {ref, watch} from "vue";

const domain = ref("");

// watch(domain, (newVal, oldVal) => {
//   if (newVal === oldVal) return;
//   domainInfo(newVal);
// })
//
// function domainInfo(domainInput) {
//   console.log(domainInput);
// }

</script>

<template>
  <DomainInput @input="domain"/>
  <DataDisplay :domain/>
</template>

<style scoped>

</style>
