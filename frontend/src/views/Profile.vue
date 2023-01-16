<template>
    <div class="p-6 bg-white rounded py-12">
        <h1 class="text-center font-bold text-2xl">PROFILE</h1>
        <form action="" method="post" class="max-w-[400px] mx-auto">
            <div class="flex flex-col items-center justify-center mt-6 w-full">
                <img src="https://via.placeholder.com/150" class="text-center w-16 h-16  rounded-full" alt="">
                <div class="w-full mt-2">
                    <label for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input v-model="user.email" type="email" name="email" id="email" disabled
                        class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="email@email.com">
                </div>
                <div class="w-full mt-2">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input v-model="user.name" type="text" name="name" id="name"
                        class="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="email@email.com">
                </div>
                <button :disabled="loading" type="submit"
                    class="mt-4 flex justify-center w-full text-white bg-indigo-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                    <div class="loader" v-if="loading"></div>
                    <span v-else>Save</span>
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { computed, reactive } from "vue"
import { useAuthStore } from '../store/auth';
import { storeToRefs } from "pinia"
const store = useAuthStore();
// const data = computed(()=>store.getUser)
const { auth } = storeToRefs(store)
const data = JSON.parse(localStorage.getItem('user'));

const user = reactive({
    email: data.email,
    name: data.name
})

</script>