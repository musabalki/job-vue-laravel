import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from './views/HomeLayout.vue'
import HomePage from './views/HomePage.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Detail from './views/Detail.vue'
import NotFound from './views/NotFound.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeLayout,
        children:[
            {
                path: '',
                name: 'homepage',
                component: HomePage
            },
            {
                path: '/detail/:id',
                name: 'detail',
                component: Detail
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    { path: '/:pathMatch(.*)*',name:"notfound", component: NotFound }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router