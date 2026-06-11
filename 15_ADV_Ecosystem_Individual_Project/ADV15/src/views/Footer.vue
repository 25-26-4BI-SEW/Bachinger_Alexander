<script setup>
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<template>
    <div class="scrollToTop" @click="scrollToTop">
        <svg
            data-src="https://static.elfsight.com/icons/app-back-to-top-arrow-5.svg"
            viewBox="5 5 15 15"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.573 11.672a.615.615 0 0 1 .854 0l3.896 3.824a.578.578 0 0 1 0 .832.615.615 0 0 1-.853 0L12 12.92l-3.47 3.408a.615.615 0 0 1-.853 0 .578.578 0 0 1 0-.832zm0-4a.615.615 0 0 1 .854 0l3.896 3.824a.578.578 0 0 1 0 .832.615.615 0 0 1-.853 0L12 8.92l-3.47 3.408a.615.615 0 0 1-.853 0 .578.578 0 0 1 0-.832z"
            />
        </svg>
        <span>{{ t('scroll') }}</span>
    </div>
    <footer>
        <div class="copyright_container">
            <span class="copyright_symbol">&copy; {{ new Date().getFullYear() }}</span>
            <!--<br>-->
            <span>Alexander Bachinger</span>
        </div>
        <div class="socials">
            <a :href="`mailto:${t('contactEmail')}`">{{ t('contactEmail') }}</a>
            <div class="links">
                <a href="https://www.linkedin.com/in/alexander-b-053500298" target="_blank">LinkedIn</a>
                <span />
                <a href="https://github.com/AlexBa16" target="_blank">GitHub</a>
            </div>
        </div>
        <div class="legal_container">
            <a href="/legal#imprint">{{ t('legal.imprint.header') }}</a>
            <a href="/legal#privacy">{{ t('legal.privacy.footer_link') }}</a>
        </div>
    </footer>
</template>

<style scoped src="@/assets/css/footer.css"></style>