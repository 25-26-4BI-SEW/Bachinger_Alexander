<script setup>
import TodoElement from './TodoElement.vue'

defineProps({
    todos: Array,
})
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
        <tbody>
        <TodoElement
            v-for="item in todos"
            :completed="item.completed"
            :description="item.description"
            :timestamp="item.timestamp"
            @update:completed="(v) => item.completed = v"
        />
        </tbody>
    </table>
    <div v-else class="noTodos">No Todos!</div>
</template>