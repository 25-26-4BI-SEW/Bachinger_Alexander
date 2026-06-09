import {createRouter, createWebHistory} from 'vue-router'

import ProductListView from '../views/ProductListView.vue'
import ProductFormView from '../views/ProductFormView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ProductListView
    },
    {
        path: '/add',
        name: 'add-product',
        component: ProductFormView
    },
    {
        path: '/edit/:id',
        name: 'edit-product',
        component: ProductFormView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router