// stores/counter.js
import { defineStore } from 'pinia'
import Jobs from "./data.json"
import axios from "axios"
import { useAuthStore } from './auth'
import { useToast } from 'vue-toastification'


export const useJobStore = defineStore('job', {
    state: () => ({
        jobs: [],
        loading: false,
        detail: null,
    }),
    actions: {
        async addJob(job){
          
            const store = useAuthStore();
            const toast = useToast();
        
            const res = await axios.post( 'http://localhost:8000/api/jobs', job,{
                    headers:{
                        "Authorization":`Bearer ${store.getToken}`
                    }
                }
            )
            
            this.jobs.push(res.data.data)
            console.log(res.data.data)
            toast.success("İlan eklendi.");
            this.detail="";
            await this.router.push("/")

            // setTimeout(()=>{
            //     this.router.push("/")
            // },2000)
          
        },
        getDetailData(id) {
            const index = this.jobs.findIndex(job => job.id == id);
            if (index == -1) {
                this.detail = {
                    id: "",
                    title: "",
                    slug: "",
                    description: "",
                    description2: "",
                    image: "",
                    type: "",
                    salary: "",
                    info: ""
                }
            }
            else {
                this.detail = this.jobs[index]
            }
        },
        async getJobs() {
            this.loading = true;
            const authStore = useAuthStore();
            try {
                const res = await axios.get("http://localhost:8000/api/jobs",{headers:{
                    'Authorization':`Bearer ${authStore.getToken}`
                }});
                this.jobs = res.data;
                
            } catch (err) {
                console.log("Error:",err)
            }
            this.loading = false;
        },
    },
})