// stores/counter.js
import { defineStore } from 'pinia'
import Jobs from "./data.json"
import axios from "axios"
import { useAuthStore } from './auth'
export const useJobStore = defineStore('job', {
    state: () => {
        return {
            jobs: [],
            loading: false,
            detail: null,
        }
    },
    actions: {
        addJob(job){
            
            // axios.post( '/single-file',
            //     job,
            //     {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            //     }
            // ).then(function(){
            //this.jobs.push(job)
            // })
            
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