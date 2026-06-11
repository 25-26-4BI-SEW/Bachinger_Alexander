<script setup>
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
</script>

<template>
    <div class="about_me">
        <h1 class="subheading">
            {{ t('about.title') }}
        </h1>
        <div class="about_me_container">
            <p>{{ t('about.text') }}</p>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/about.css"></style>