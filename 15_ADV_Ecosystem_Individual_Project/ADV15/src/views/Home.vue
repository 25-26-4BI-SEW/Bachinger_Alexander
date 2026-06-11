<script setup>
import Navbar from '@/views/Navbar.vue';
import Hero from '@/views/Hero.vue';
import About from '@/views/About.vue';
import Footer from '@/views/Footer.vue';
</script>

<template>
    <Navbar :homepage="true" />
    <section id="home">
        <Hero />
        <About />
    </section>
    <Footer />
</template>
