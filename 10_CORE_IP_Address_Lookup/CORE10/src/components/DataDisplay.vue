<script setup>
import axios from "axios";
import {ref, watch} from "vue";

const props = defineProps({
  domain: String,
});

const ips = ref([])

async function getIP(domain) {
  if (!domain) {
    ips.value = [];
    return;
  }
  try {
    let res = await axios.get('http://www.dns-lg.com/us01/' + domain + '/a');
    if (res.data.answer) {
      ips.value = res.data.answer.map(record => record.rdata);
    } else {
      ips.value = ["No A records found"];
    }
  } catch (e) {
    ips.value = [];
  }
}

watch(
    () => props.domain,
    (newDomain, oldDomain) => {
      if (newDomain !== oldDomain) getIP(newDomain);
    }
)

</script>

<template>
  <div>
    <h2>DNS Lookup for {{ props.domain }}</h2>
    <h3>IPs:</h3>
    <div v-if="ips.length === 0">No Data...</div>
    <div v-for="ip in ips">{{ ip }}</div>
  </div>
</template>

<style scoped>

</style>