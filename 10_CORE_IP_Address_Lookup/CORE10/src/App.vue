<script setup>
import DomainInput from "./components/DomainInput.vue";
import DomainLookup from "./components/DomainLookup.vue";
import {ref} from "vue";

const domain = ref("");

function domainInfo(domainInput) {
  domain.value = domainInput;
}

</script>

<template>
  <DomainInput @input="domainInfo"/>
  <DomainLookup :domain="domain"/>
</template>

<style scoped>

</style>
