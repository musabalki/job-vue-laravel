// stores/counter.js
import { defineStore } from 'pinia'
import Jobs from "./data.json"

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            auth:{
                username:"",
                image:"",
                savedJobs:[]
            },
            loading: false,
        }
    },
    actions: {
        getAuthData() {
            
        },
    },
})