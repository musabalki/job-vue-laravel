// stores/counter.js
import { defineStore } from 'pinia'
import Jobs from "./data.json"
import axios from 'axios'
import { useToast } from "vue-toastification";

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            auth:JSON.parse(localStorage.getItem('user')) || {},
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
        },
        getUser(){
            return this.auth;
        }
    },
    actions: {
        getAuthData() {
            
        },
        async signup(user){
            this.loading=true;
            const toast = useToast();

            try{
                const res = await axios.post("http://localhost:8000/api/register",user,{'headers':{'Accept':'application/json'}});
                this.auth = res.data.user 
                this.loading=false
                this.router.push('/login');
                toast.success("Kayıt başarılı", { timeout: 1500 });
            }catch(err){
                //console.log("Error:", err.response.data.message)
                //console.log(err.response.data.errors)
                this.loading=false;
                this.errors=err.response.data.message
                toast.error("Kayıt başarısız", { timeout: 1500 });
              
            }
        },
        async login(user){
            const toast = useToast();
            
            this.loading=true;
            this.errors="";
            try{
                const res = await axios.post("http://localhost:8000/api/login",user,{'headers':{'Accept':'application/json'}});
                this.auth = res.data.user 
                this.loading=false
                this.token = res.data.token
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('user',JSON.stringify(res.data.user));
                this.router.push('/');
                toast.success("Giriş yapıldı", { timeout: 1500 });
                console.log(res.data)
               
            }catch(err){
                console.log("Error:", err.response.data.message)
                console.log(err.response.data.errors)
                this.loading=false;
                this.errors=err.response.data.message
                toast.error("Giriş başarısız", { timeout: 1500 });
                
            }
        },
        logout(){
            const toast = useToast();
            toast.success("Çıkış yapıldı", { timeout: 1500 });
            this.auth=""
            this.token=""
        }
    },
})