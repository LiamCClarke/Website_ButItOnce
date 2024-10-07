import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/AppMain.vue'
import Categories from '../views/AppCategories.vue'
import SubCategories from '../views/AppSubCategories.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/sub-category',
        name: 'SubCategory',
        component: SubCategories
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router