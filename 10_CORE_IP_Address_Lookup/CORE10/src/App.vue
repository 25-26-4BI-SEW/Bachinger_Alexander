<script setup>
import DomainInput from "./components/DomainInput.vue";
import DataDisplay from "./components/DataDisplay.vue";
import {ref} from "vue";

const domain = ref("");

function domainInfo(domainInput) {
  domain.value = domainInput;
}

</script>

<template>
  <DomainInput @input="domainInfo"/>
  <DataDisplay :domain="domain"/>
</template>

<style scoped>

</style>
