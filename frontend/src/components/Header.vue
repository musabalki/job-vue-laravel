<template>
    <div class="mx-auto container mb-4 ">
        <div class="grid grid-cols-12 items-center justify-between">
            <div class="col-span-3 ">
                <router-link to="/" class="block text-3xl font-bold text-center">Job</router-link>
                <span class="text-gray-500 text-sm text-center block">Find job</span>
            </div>
            <div class="col-span-9 flex justify-end items-center ml-5 rounded-lg">
                <div class="flex justify-center">

                    <template v-if="!user">
                        <router-link to="/login" class="mx-2 text-white bg-slate-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  0">Login</router-link>
                        <router-link to="/signup" class="text-white bg-slate-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Sign Up</router-link>
                    </template>
                   
                    <div v-if="user" class="relative inline-block ">
                        <!-- Dropdown toggle button -->
                        <button  id="c-button"
                            class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                            <span class="pointer-events-none	 mx-1">{{store.getUser.name}}</span>
                            <svg class="pointer-events-none	 w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                                    fill="currentColor"></path>
                            </svg>
                        </button>

                        <!-- Dropdown menu -->
                        <div :class="!data ? 'hidden' : 'block' " id="d-menu" class=" absolute right-0 z-20 w-60 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
                            <a href="#"
                                class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                                    src="https://via.placeholder.com/150" alt="jane avatar">
                                <div class="mx-1">
                                    <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">{{store.getUser.name}}</h1>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">{{store.getUser.email}}</p>
                                </div>
                            </a>

                            <hr class="border-gray-200 dark:border-gray-700 ">

                            <router-link to="/profile"
                                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                view profile
                            </router-link>

                            <!-- <router-link to="saved-jobs"
                                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                Saved Jobs
                            </router-link> -->

                            <router-link to="/create-job"
                                class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                Create Job Posting
                            </router-link>

                            <hr class="border-gray-200 dark:border-gray-700 ">

                            <button @click="logout" 
                                class="w-full text-left block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
   
    </script>
<script setup>
import {ref,computed,onMounted} from "vue"
import {useAuthStore} from "../store/auth"
import router from '../router'

const data = ref(false);
const store = useAuthStore();

const user = computed(()=>store.getToken)

const toggle = () =>{
    console.log(data.value)
    data.value=!data.value
}

const logout = () =>{
    localStorage.removeItem('token')
    store.logout()
    router.push('/')
}
if(user){
    window.onload = (event) => {
        let popup = document.querySelector('#d-menu');
        let button = document.querySelector('button');

        button.onclick = () => {popup.style.display = 'block';}

        window.onclick = e => {
            if (e.target != button) {
            popup.style.display = 'none';
            }
        }
    };
}
</script>