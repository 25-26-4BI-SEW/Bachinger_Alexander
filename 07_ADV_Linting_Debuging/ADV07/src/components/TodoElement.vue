<template>
  <tr>
    <td>{{ description }}</td>
    <td>{{ getAge }}</td>
    <td
      class="complete"
      @click="toggleCompleted"
    >
      {{ completed ? "✅" : "❌" }}
    </td>
  </tr>
</template>

<script>
export default {
    name: "TodoElement",

    props: {
        description: {
            type: String,
            default: () => "",
        },
        timestamp: {
            type: Number,
            default: () => Date.now(),
        },
        completed: {
            type: Boolean,
            default: () => false,
        },
    },

    emits: ["update:completed"],

    computed: {
        getAge() {
            const diff = new Date() - new Date(this.timestamp);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            return days + 'd ' + hours + 'h ' + minutes + 'm';
        },
    },
    methods: {
        toggleCompleted() {
            this.$emit("update:completed", !this.completed);
        },
    },
};
</script>

<style scoped>
td.complete {
    cursor: pointer;
}
</style>