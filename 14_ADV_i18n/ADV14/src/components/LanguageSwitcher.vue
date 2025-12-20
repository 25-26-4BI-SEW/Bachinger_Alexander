<script setup>
import {useI18n} from 'vue-i18n'

const {locale} = useI18n()

function setLanguage(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
  document.documentElement.lang = lang
}
</script>

<template>
  <div class="language">
    <a
        :class="{ active: locale === 'en' }"
        aria-label="Change Language to English"
        href="#"
        @click.prevent="setLanguage('en')"
    >EN</a>
    <a
        :class="{ active: locale === 'de' }"
        aria-label="Änder Sprache auf Deutsch"
        href="#"
        @click.prevent="setLanguage('de')"
    >DE</a>
  </div>
</template>