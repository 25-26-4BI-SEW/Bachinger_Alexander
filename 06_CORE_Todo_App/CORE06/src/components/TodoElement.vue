<script setup>

const props = defineProps({
  description: String,
  timestamp: Date,
  completed: Boolean,
});

const emit = defineEmits(["update:completed"]);

function getAge(timestamp) {
  const diff = new Date() - new Date(timestamp);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return days + 'd ' + hours + 'h ' + minutes + 'm';
}

function toggleCompleted() {
  emit("update:completed", !props.completed);
}
</script>

<template>
  <tr>
    <td>{{ description }}</td>
    <td>{{ getAge(timestamp) }}</td>
    <td class="complete" @click="toggleCompleted">{{ completed ? "✅" : "❌" }}</td>
  </tr>
</template>

<style scoped>
td.complete {
  cursor: pointer;
}
</style>