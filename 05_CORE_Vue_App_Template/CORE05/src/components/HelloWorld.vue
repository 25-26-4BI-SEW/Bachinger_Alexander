<script setup>
import {ref} from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

function increment() {
  if (count.value < 10) count.value++
}

function decrement() {
  if (count.value > 0) count.value--
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div>Count is {{ count }}</div>
    <hr>
    <p>Min: 0 <br>Max: 10</p>
    <hr>
    <button type="button" @click="decrement()">-</button>
    <button type="button" @click="increment()">+</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
    >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
    >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
