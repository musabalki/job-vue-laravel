import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from './views/HomeLayout.vue'
import HomePage from './views/HomePage.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Detail from './views/Detail.vue'
import NotFound from './views/NotFound.vue'
import Profile from './views/Profile.vue'
import CreateJob from './views/CreateJob.vue'
import SavedJobs from './views/SavedJobs.vue'
import Type from './views/Type.vue'
import {useAuthStore} from "./store/auth.js"
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
                path: 'detail/:slug',
                name: 'detail',
                component: Detail
            },
        ]
    },
    {
        path: '/categories',
        name: 'categories',
        component: HomeLayout,
        children:[
            {
                path: ':type',
                name: 'type',
                component: Type
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
    {
        path: '/profile',
        name: 'profile',
        component: ()=>import("../src/views/Profile.vue")
    },
    {
        path: '/saved-jobs',
        name: 'savedjobs',
        component: SavedJobs
    },
    {
        path: '/create-job',
        name: 'createjob',
        component: CreateJob
    },
    { 
        path: '/:pathMatch(.*)*',
        name:"notfound", 
        component: NotFound 
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const store = useAuthStore();
    const token = localStorage.getItem('token')

    if (to.name === 'profile' && !token) next("/")
    else next()
})
export default router