import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
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