<script setup>
import TodoElement from "./TodoElement.vue"

defineProps({
    todos: {
        type: Array,
        required: true,
    },
})

const emit = defineEmits(["remove"])
</script>

<template>
    <table v-if="todos.length" id="todos">
        <thead>
        <tr>
            <th>ToDo</th>
            <th>Created</th>
            <th>Completed</th>
        </tr>
        </thead>

        <TransitionGroup name="fade" tag="tbody">
            <TodoElement
                v-for="todo in todos"
                :key="todo.id"
                :timestamp="todo.timestamp"
                @remove="emit('remove', todo.id)"
            >
                <template #description>
                    {{ todo.description }}
                </template>

                <template #actions>
                    <button @click.stop="emit('remove', todo.id)">
                        Löschen
                    </button>
                </template>
            </TodoElement>
        </TransitionGroup>
    </table>
    <div v-else class="noTodos">No Todos!</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
