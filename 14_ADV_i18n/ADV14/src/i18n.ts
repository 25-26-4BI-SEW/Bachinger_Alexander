import {createI18n} from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language.split('-')[0]!
document.documentElement.lang = savedLang || (['en', 'de'].includes(browserLang) ? browserLang : 'en')!
export const i18n = createI18n({
    legacy: false,
    locale: savedLang || (['en', 'de'].includes(browserLang) ? browserLang : 'en'),
    fallbackLocale: 'en',
    messages: {en, de}
})
