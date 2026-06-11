<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useI18n} from "vue-i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

const props = defineProps({
    homepage: {type: Boolean, required: false, default: false}
});

const {t} = useI18n();

const links = [
    {id: "home", name: "nav.home"},
    {id: "skills", name: "nav.skills"},
];

const activeSection = props.homepage ? ref("home") : ref("");
const navbarScrolled = ref(false);
const isMenuOpen = ref(false);
let isManualScroll = false;

const handleScroll = () => {
    if (isManualScroll) return;

    const scrollPosition = window.scrollY + window.innerHeight / 3;
    for (const link of links) {
        const section = document.getElementById(link.id);
        if (section) {
            const {offsetTop, offsetHeight} = section;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                activeSection.value = link.id;
            }
        }
    }
    navbarScrolled.value = window.scrollY > 10;
};

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    activeSection.value = id;
    isManualScroll = true;
    navbarScrolled.value = id !== "home";
    isMenuOpen.value = false;
    section.scrollIntoView({behavior: "smooth"});
    setTimeout(() => isManualScroll = false, 800);
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
    <nav :class="{ scrolled: navbarScrolled || isMenuOpen, open: isMenuOpen }" class="navbar_container">
        <div class="navbar">
            <a class="logo" href="/">
                <img alt="Logo" src="/logo.svg">
            </a>
            <input id="menu-toggle" v-model="isMenuOpen" type="checkbox">
            <label class="menu-button-container" for="menu-toggle">
                <span class="menu-button" />
            </label>
            <ul :class="{ open: isMenuOpen }" class="nav_links">
                <li v-for="link in links" :key="link.id">
                    <a
                        :class="{ active: activeSection === link.id }"
                        :href="'/home#' + link.id"
                        class="nav-item"
                        @click="scrollToSection(link.id)"
                    >
                        {{ t(link.name) }}
                    </a>
                </li>
                <li class="mobile-lang">
                    <LanguageSwitcher />
                </li>
            </ul>
            <div class="desktop-lang">
                <LanguageSwitcher />
            </div>
        </div>
    </nav>
</template>

<style scoped src="@/assets/css/navbar.css"></style>
