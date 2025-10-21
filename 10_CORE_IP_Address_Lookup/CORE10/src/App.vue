<script setup>
import DomainInput from "./components/DomainInput.vue";
import DataDisplay from "./components/DataDisplay.vue";
import {ref} from "vue";

const domain = ref("");

function domainInfo(domainInput) {
  domain.value = domainInput.value;
  console.log(domainInput);
}

</script>

<template>
  <DomainInput @input="(domain) => domainInfo(domain)"/>
  <DataDisplay :domain="domain"/>
</template>

<style scoped>

</style>
