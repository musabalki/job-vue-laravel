import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import Detail from './views/Detail.vue'
const routes = [
    {
    path: '/',
    name: 'Home',
    component: HomePage
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router