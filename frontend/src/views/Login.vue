<template>
    <div class="mx-auto container  justify-center">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" @submit.prevent="onSubmit">
                            <div>
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input v-model="state.email" type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="email@email.com">
                                    <div v-for="error of v$.email.$errors" :key="error.$uid">
                                    <span class="text-sm text-red-600 font-medium">{{ error.$message }}</span>
                                </div>
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input v-model="state.password"  type="password" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <div v-for="error of v$.password.$errors" :key="error.$uid">
                                    <span class="text-sm text-red-600 font-medium">{{ error.$message }}</span>
                                </div>
                                </div>
                               
                                <div class="text-red-500 text-sm font-semibold" v-if="authStore.errors">
                                    {{ authStore.errors }}
                                </div>
                                <button :disabled="loading" type="submit"
                                class="flex justify-center w-full text-white bg-indigo-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                <div class="loader" v-if="loading"></div>
                                <span v-else> Sign in</span>
                            </button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                                Don’t have an account yet? <router-link to="/signup"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                    up</router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
import { reactive,computed,ref } from "vue"
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength,sameAs, helpers} from '@vuelidate/validators'

const authStore = useAuthStore();

const loading = computed(()=>authStore.loading)
const errors = computed(()=>authStore.getErrors)

const state = reactive({
    email: '',
    password: '',
})


const rules = computed(()=>{
   return {
    email: { required:helpers.withMessage('Email is required', required), email },
    password: { required:helpers.withMessage('Password is required', required), minLength: minLength(5) },
}
})


const v$ = useVuelidate(rules, state)


const onSubmit = async () => {
    const result = await v$.value.$validate();
    if(result){
        authStore.login(state);
    }
}



</script>
<style scoped>
.loader{
    border: 5px solid #ffffffc9;
    border-radius: 50%;
    border-top: 5px solid #4a4a4a;
    width: 20px;
    height: 20px;
}
</style>