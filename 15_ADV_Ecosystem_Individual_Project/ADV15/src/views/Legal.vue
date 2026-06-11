<script setup>
import Navbar from "@/views/Navbar.vue";
import Footer from "@/views/Footer.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n();

</script>
<template>
    <span id="imprint" aria-hidden="true" />
    <Navbar />
    <section class="legal">
        <!-- IMPRINT -->
        <header class="legal_header">
            <h1>{{ t('legal.imprint.header') }}</h1>
        </header>
        <section class="legal_section">
            <h2>{{ t('legal.imprint.title') }}</h2>

            <p>
                <strong>{{ t('legal.imprint.mediaOwnerLabel') }}</strong>
                <span>Alexander Bachinger</span>
            </p>
            <p>
                <strong>{{ t('legal.imprint.residenceLabel') }}</strong>
                <span>{{ t('legal.imprint.residenceValue') }}</span>
            </p>
            <p>
                <strong>{{ t('legal.imprint.contactLabel') }}</strong>
                <a :href="`mailto:${t('contactEmail')}`">{{ t('contactEmail') }}</a>
            </p>
            <span id="privacy" aria-hidden="true" />
            <p class="legal_muted">
                <strong>{{ t('legal.imprint.websiteTypeLabel') }}</strong>
                <span>{{ t('legal.imprint.websiteTypeValue') }}</span>
            </p>
        </section>
        <hr>
        <!-- PRIVACY -->
        <section class="legal_section">
            <h2>{{ t('legal.privacy.header') }}</h2>
            <article class="legal_block">
                <h3>{{ t('legal.privacy.controller.title') }}</h3>
                <p>
                    {{ t('legal.privacy.controller.text') }}
                    <strong>Alexander Bachinger</strong><br>
                    {{ t('legal.privacy.controller.address') }}<br>
                    <a :href="`mailto:${t('contactEmail')}`">{{ t('contactEmail') }}</a>
                </p>
            </article>
            <article class="legal_block">
                <h3>{{ t('legal.privacy.contacting.title') }}</h3>
                <p style="white-space: pre-line;">
                    {{ t('legal.privacy.contacting.text') }}
                </p>
                <p>
                    <strong>{{ t('legal.privacy.contacting.legalBasis_title') }}</strong>
                    <span style="white-space: pre-line;">{{ t('legal.privacy.contacting.legalBasis') }}</span>
                </p>
                <p>{{ t('legal.privacy.contacting.retention') }}</p>
            </article>

            <article class="legal_block">
                <h3>{{ t('legal.privacy.third.title') }}</h3>
                <p style="white-space: pre-line;">
                    {{ t('legal.privacy.third.text') }}
                </p>
                <p>
                    <strong>{{ t('legal.privacy.contacting.legalBasis_title') }}</strong>
                    {{ t('legal.privacy.third.legalBasis') }}
                </p>
                <p>{{ t('legal.privacy.third.retention') }}</p>
            </article>
            <article class="legal_block">
                <h3>{{ t('legal.privacy.logs.title') }}</h3>
                <p style="white-space: pre-line;">
                    {{ t('legal.privacy.logs.text') }}
                </p>
                <p>
                    <strong>{{ t('legal.privacy.contacting.legalBasis_title') }}</strong>
                    {{ t('legal.privacy.logs.legalBasis') }}
                </p>
                <p>{{ t('legal.privacy.logs.retention') }}</p>
            </article>
            <article class="legal_block">
                <h3>{{ t('legal.privacy.cookies.title') }}</h3>
                <p>{{ t('legal.privacy.cookies.text') }}</p>
            </article>
            <article class="legal_block">
                <h3>{{ t('legal.privacy.rights.title') }}</h3>
                <p style="white-space: pre-line;">
                    {{ t('legal.privacy.rights.text') }}
                </p>
            </article>
            <article class="legal_block">
                <h3>{{ t('legal.privacy.requests.title') }}</h3>
                <p>
                    {{ t('legal.privacy.requests.text') }}
                    <a :href="`mailto:${t('contactEmail')}`">{{ t('contactEmail') }}</a>
                </p>
            </article>
        </section>
    </section>

    <Footer />
</template>

<style scoped>
.legal {
    max-width: 900px;
    margin: 90px auto 0 auto;
    padding: 28px 18px;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}

.legal_header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
}

.legal h1 {
    font-size: var(--size_headline);
    margin: 0;
    letter-spacing: -0.01em;
}

.legal_section {
    margin-top: 18px;
}

.legal h2 {
    font-size: var(--size_section-titles);
    margin: 18px 0 10px;
}

.legal h3 {
    font-size: var(--size_subheadline);
    margin: 14px 0 8px;
}

.legal p {
    margin: 8px 0;
}

.legal strong {
    font-weight: 650;
}

.legal a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 3px;
}

.legal a:hover {
    text-decoration-thickness: 2px;
}

.legal hr {
    border: 0;
    border-top: 1px solid #e9e9e9;
    margin: 18px 0;
}

.legal_block {
    border: 1px solid #ededed;
    border-radius: 14px;
    padding: 14px 14px 12px;
    margin: 12px 0;
}

.legal_muted {
    margin-top: 30px !important;
    color: var(--darker_text);
}

/* Optional: nicer spacing for label/value pairs */
.legal p > strong {
    display: inline-block;
    min-width: 165px;
    margin-right: 8px;
    vertical-align: top;
}

/* Responsive tweaks */
@media (max-width: 560px) {
    .legal {
        padding: 22px 14px;
    }

    .legal h1 {
        //font-size: 1.45rem;
    }

    .legal p > strong {
        display: block;
        min-width: 0;
        margin-right: 0;
        margin-bottom: 2px;
    }

    .legal_block {
        padding: 12px;
    }
}
</style>