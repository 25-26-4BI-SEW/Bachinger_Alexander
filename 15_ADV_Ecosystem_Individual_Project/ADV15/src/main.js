import {createApp} from 'vue';
import App from '@/App.vue';
import router from '@/router/index.js';
import {i18n} from '@/i18n';
import '@/assets/css/style.css';
import {createPinia} from "pinia";

createApp(App).use(router).use(createPinia()).use(i18n).mount('#app');
