// stores/counter.js
import { defineStore } from 'pinia'
import Jobs from "./data.json"
import axios from 'axios'

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            auth:{},
            savedJobs:[],
            loading: false,
            token:localStorage.getItem('token') || null,
            errors:""
        }
    },
    getters:{
        getToken(){
            return this.token;
        },
        getErrors(){
            return this.errors
        }
    },
    actions: {
        getAuthData() {
            
        },
        async signup(user){
            this.loading=true;
            try{
                const res = await axios.post("http://localhost:8000/api/register",user,{'headers':{'Accept':'application/json'}});
                this.auth = res.data.user 
                this.loading=false
                console.log(this.auth)
            }catch(err){
                console.log("Error:", err.response.data.message)
                //console.log(err.response.data.errors)
                this.loading=false;
                this.errors=err.response.data.message
              
            }
        },
        async login(user){
            this.loading=true;
            this.errors="";
            try{
                const res = await axios.post("http://localhost:8000/api/login",user,{'headers':{'Accept':'application/json'}});
                this.auth = res.data.user 
                this.loading=false
                this.token = res.data.token
                localStorage.setItem('token',res.data.token);
               
            }catch(err){
                console.log("Error:", err.response.data.message)
                console.log(err.response.data.errors)
                this.loading=false;
                this.errors=err.response.data.message
                
            }
        }
    },
})