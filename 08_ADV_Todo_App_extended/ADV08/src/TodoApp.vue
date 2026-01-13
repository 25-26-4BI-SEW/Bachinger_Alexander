<script setup>
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import {onMounted, ref, watch} from "vue";

const todos = ref([]);

onMounted(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
        try {
            todos.value = JSON.parse(saved);
        } catch (e) {
            console.error("Error while loading from LocalStorage:", e);
        }
    }
});
watch(todos, (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
}, {deep: true});

function addTodo(description) {
    todos.value.push({
        description,
        timestamp: Date.now(),
        completed: false,
    });
}
</script>

<template>
    <TodoInput @add="addTodo"/>
    <TodoList :todos="todos"/>
</template>

<style scoped>
/* Table styling, AI Generated*/
table {
    width: 100%;
    border-collapse: collapse;
    font-family: sans-serif;
    margin-top: 12px;
    background-color: #1e1e1e; /* dunkler Hintergrund */
    color: #f0f0f0; /* helle Schrift */
    border-radius: 8px;
    overflow: hidden;
}

th, td {
    padding: 12px 16px;
    text-align: left;
}

th {
    background-color: #3a3a3a;
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #2a2a2a;
}

tr:hover {
    background-color: #444;
}

td {
    border-bottom: 1px solid #555;
}

input[type="text"] {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #555;
    margin-right: 8px;
    background-color: #2a2a2a;
    color: #f0f0f0;
}

button {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    background-color: #4f46e5;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #6366f1;
}
</style>
