import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from './views/HomeLayout.vue'
import HomePage from './views/HomePage.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Detail from './views/Detail.vue'
import NotFound from './views/NotFound.vue'
import Profile from './views/Profile.vue'
import SavedJobs from './views/SavedJobs.vue'
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
    { path: '/:pathMatch(.*)*',name:"notfound", component: NotFound }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
// GOOD
router.beforeEach((to, from, next) => {
    const store = useAuthStore();
    const token = localStorage.getItem('token')

    if (to.name === 'profile' && !token) next("/")
    else next()
})
export default router