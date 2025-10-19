<script setup>
defineProps({
  description: String,
  timestamp: Date,
  completed: Boolean,
})

function getAge(timestamp) {
  const diff = new Date() - new Date(timestamp);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  // const seconds = Math.floor((diff / 1000) % 60);

  // return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
  return days + 'd ' + hours + 'h ' + minutes + 'm';
}

</script>

<template>
  <tr>
    <td>{{ description }}</td>
    <td>{{ getAge(timestamp) }}</td>
    <td>{{ completed ? "✅" : "❌" }}</td>
  </tr>
</template>

<style scoped>

</style>
