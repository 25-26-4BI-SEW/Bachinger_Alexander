<script lang="ts" setup>
defineProps({
    msg: {
        type: String,
        default: "",
    }
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      {{ msg }}
    </h1>
    <h2>{{ $t('whatLang') }}</h2>
    <h3>
      You’ve successfully created a project with
      <a
        href="https://vite.dev/"
        rel="noopener"
        target="_blank"
      >Vite</a> +
      <a
        href="https://vuejs.org/"
        rel="noopener"
        target="_blank"
      >Vue 3</a>.
    </h3>
  </div>
  <br>
  <hr>
  <br>
  <div>
    <p>{{ $t('car', 1) }}</p>
    <p>{{ $t('car', 2) }}</p>

    <p>{{ $t('apple', 0) }}</p>
    <p>{{ $t('apple', 1) }}</p>
    <p>{{ $t('apple', 10) }}</p>
  </div>
  <br>
  <hr>
  <br>
  <div>
    <p>{{ $n(10000, 'currency') }}</p>          <!--Changes-->
    <p>{{ $n(10000, 'currency', 'en') }}</p>    <!--Always English-->
    <p>{{ $n(10000, 'currency', 'de') }}</p>    <!--Always German-->
    <p>{{ $n(10000, 'currency', 'de', {useGrouping: false}) }}</p>
    <p>{{ $n(987654321, 'currency', {notation: 'compact'}) }}</p>
    <p>{{ $n(0.99123, 'percent') }}</p>
    <p>{{ $n(0.99123, 'percent', {minimumFractionDigits: 2}) }}</p>
    <p>{{ $n(12.11612345, 'decimal') }}</p>
    <p>{{ $n(12145281111, 'decimal') }}</p>
    <p>{{ $n(12145281111, 'decimal', 'en') }}</p>
    <p>{{ $n(12145281111, 'decimal', 'de') }}</p>
  </div>
  <br>
  <hr>
  <br>
  <div>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $d(new Date(), 'long') }}</p>
    <p>{{ $d(new Date(), 'long', 'de') }}</p>
    <p>{{ $d(new Date(), 'long', 'en') }}</p>
  </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
