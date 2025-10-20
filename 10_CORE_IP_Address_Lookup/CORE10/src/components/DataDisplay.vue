<script setup>
import axios from "axios";

const props = defineProps({
  domain: String,
});

async function getIP(domain) {
  try {
    console.log(domain);
    let res = await axios.get('http://www.dns-lg.com/us01/' + domain + '/a');
    console.log(res);
    return res;
  } catch (e) {
    console.error('Error: ' + e);
  }
}

const ip = getIP(props.domain);

</script>

<template>
  <div>
    <h2>DNS Lookup for {{ props.domain }}</h2>
    <pre>{{ ip }}</pre>
  </div>
</template>

<style scoped>

</style>