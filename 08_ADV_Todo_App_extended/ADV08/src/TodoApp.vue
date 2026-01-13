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
        id: crypto.randomUUID(),
        description: description,
        timestamp: Date.now(),
    });
}

function removeTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>

<template>
    <TodoInput @add="addTodo"/>
    <TodoList :todos="todos" @remove="removeTodo"/>
</template>
