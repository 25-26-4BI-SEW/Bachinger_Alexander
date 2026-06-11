import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import Legal from '@/views/Legal.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes: [{
        path: '/home', name: 'homepage', component: Home
    }, {
        path: '/', redirect: {name: 'homepage'}
    }, {
        path: '/legal', name: 'imprint', component: Legal
    }, {
        path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound
    }]
});

export default router;
