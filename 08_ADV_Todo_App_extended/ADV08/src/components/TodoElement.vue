<script setup>
import {computed} from "vue"

const props = defineProps({
    description: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Number,
        required: true,
    }
});

const emit = defineEmits(["remove"])

const getAge = computed(() => {
    const diff = new Date() - new Date(props.timestamp);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return days + 'd ' + hours + 'h ' + minutes + 'm';
})
</script>

<template>
    <tr>
        <td>{{ props.description }}</td>
        <td>{{ getAge }}</td>
        <td class="clickable" @click="emit('remove')">🗑️</td>
    </tr>
</template>

<style scoped>
.clickable {
    cursor: pointer;
}
</style>