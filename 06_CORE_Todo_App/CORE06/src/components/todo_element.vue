<script setup>
import {ref} from 'vue'

defineProps({
  description: String,
  timestamp: Date,
  completed: Boolean,
})

function formatDate(timestamp) {
  const d = new Date(timestamp)
  return d.getHours() + ':' + d.getMinutes() + ', ' + String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + d.getFullYear();
}
</script>

<template>
  <tr>
    <th>{{ description }}</th>
    <th>{{ formatDate(timestamp) }}</th>
    <th>{{ completed }}</th>
  </tr>
</template>

<style scoped>

</style>
