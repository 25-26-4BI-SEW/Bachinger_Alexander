<script setup>
import github_logo from '@/assets/logos/github.svg';
import linkedin_logo from '@/assets/logos/linkedin.svg';
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

</script>

<template>
    <div class="hero">
        <div class="hero_info">
            <div>
                <div class="hero_name">
                    Alexander <span>Bachinger</span>
                </div>
                <div class="hero_profession">
                    {{ t('hero.profession') }}
                </div>
                <div class="hero_socials">
                    <div class="socials_icons">
                        <a class="icon" href="https://github.com/AlexBa16" target="_blank">
                            <img :src="github_logo" alt="Github-logo">
                        </a>
                        <a
                            class="icon"
                            href="https://www.linkedin.com/in/alexander-b-053500298"
                            target="_blank"
                        >
                            <img :src="linkedin_logo" alt="LinkedIn-logo">
                        </a>
                    </div>
                    <div class="socials_buttons">
                        <div class="box_animation">
                            <span>{{ t('hero.cv') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero_image">
            <div class="portrait_container">
                <span class="portrait_cover_top" />
                <div class="portrait_wrapper">
                    <img alt="Portrait" src="/img/portrait.png">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/hero.css"></style>
