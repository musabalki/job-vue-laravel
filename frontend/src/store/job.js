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
        saved:[1,3,5],
        totalCount:0,
        currentPage:0,
        typeJob:[],
        search:[],
        searchLoading:false
    }),
    getters:{
        
        // getFreelance(){
        //     return "type"
        // },
        // getPartTime(){
        //     return this.jobs
        // },
        // getFullTime(){

        // }
    },
    actions: {
        async searchJob(text){
            this.searchLoading=true;
            const store = useAuthStore();
            const res = await axios.post( 'https://jobapi.musabalki.com/api/search', {data:text},{
                headers:{
                    "Authorization":`Bearer ${store.getToken}`
                }
            })
            this.searchLoading=false
            this.jobs=res.data;
       
        },
        updateCurrentPage(page){
            this.currentPage=page
        },
        // addSaveJob(item){
        //     this.saved.push(item)
        //     console.log(this.saved)
        // },
        async addJob(job){
          
            const store = useAuthStore();
            const toast = useToast();
            
            const res = await axios.post( 'https://jobapi.musabalki.com/api/jobs', job,{
                    headers:{
                        "Authorization":`Bearer ${store.getToken}`
                    }
                }
            )
            
            this.jobs.push(res.data.data)
         
            toast.success("İlan eklendi.");
            this.detail="";
            await this.router.push("/")

        },
        getDetailData(id) {
            const index = this.jobs.findIndex(job => job.slug == id);
            
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
                    info: "",
                    save:0
                }
            }
            else {
                this.detail = this.jobs[index]
            }
        },
        async getJobs(offset=0,limit=5) {
            this.loading=true;
            console.log(this.loading)
            const authStore = useAuthStore();
            try {
               
                // const res = await axios.get("http://localhost:8000/api/jobs",{headers:{
                //     'Authorization':`Bearer ${authStore.getToken}`
                // }});
                const res = await axios.get(`https://jobapi.musabalki.com/api/paginate/${offset*limit}/${limit}`,{headers:{
                    'Authorization':`Bearer ${authStore.getToken}`
                }});
                this.jobs = res.data.data
                this.totalCount=res.data.totalCount
                this.loading = false;
                console.log(this.loading)
            } catch (err) {
                console.log("Error:",err)
                
            this.loading = false;
            }
        },
        async getType(type){
            try {
                this.loading=true;
                const authStore = useAuthStore();
                const res = await axios.post(`https://jobapi.musabalki.com/api/getType`,{type},{headers:{
                    'Authorization':`Bearer ${authStore.getToken}`
                }});
                this.typeJob = res.data.data
                this.loading = false;
            } catch (err) {
                console.log("Error:",err)
                
            this.loading = false;
            }
        }
    },
})