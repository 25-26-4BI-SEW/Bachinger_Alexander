import {createI18n} from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

const savedLang = localStorage.getItem('lang');
const browserLang = navigator.language.split('-')[0]!;
document.documentElement.lang = savedLang || (['en', 'de'].includes(browserLang) ? browserLang : 'en')!;

export const i18n = createI18n({
    legacy: false,
    locale: savedLang || (['en', 'de'].includes(browserLang) ? browserLang : 'en'),
    fallbackLocale: 'en',
    messages: {en, de},
    numberFormats: {
        en: {
            currency: {
                style: 'currency', currency: 'USD'
            }, decimal: {
                style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
            }, percent: {
                style: 'percent', useGrouping: false
            }
        }, de: {
            currency: {
                style: 'currency', currency: 'EUR'
            }, decimal: {
                style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
            }, percent: {
                style: 'percent', useGrouping: false
            }
        }
    },
    datetimeFormats: {
        'en': {
            short: {
                year: 'numeric', month: 'short', day: 'numeric'
            }, long: {
                year: 'numeric', month: 'short', day: 'numeric', weekday: 'short', hour: 'numeric', minute: 'numeric'
            }
        }, 'de': {
            short: {
                year: 'numeric', month: 'short', day: 'numeric'
            }, long: {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }
        }
    }
})
