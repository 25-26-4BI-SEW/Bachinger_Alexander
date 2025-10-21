<script setup>
import axios from "axios";
import {ref, watch} from "vue";

const props = defineProps({
  domain: String,
});

const ips = ref([])
const loading = ref(false);
const error = ref(null);

async function getIP(domain) {
  if (!domain) {
    ips.value = [];
    return;
  }
  try {
    console.log("Domain:" + domain);
    let api = 'http://www.dns-lg.com/us01/' + domain + '/a';
    // let api = 'http://www.dns-lg.com/us01/orf.at/a';
    let res = await axios.get(api);
    const answer = res.data.answer;
    // ips.value = answer.map(record => record.rdata);
    if (res.data.answer) {
      ips.value = res.data.answer.map(record => record.rdata);
    } else {
      ips.value = ["No A records found"];
    }
  } catch (e) {
    error.value = e.message;
    ips.value = [];
  } finally {
    loading.value = false;
  }
}

watch(
    () => props.domain,
    (newDomain) => {
      getIP(newDomain);
    },
    {immediate: true}
);

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