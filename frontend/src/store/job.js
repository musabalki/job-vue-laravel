// stores/counter.js
import { defineStore } from 'pinia'
import Jobs from "./data.json"

export const useJobStore = defineStore('job', {
    state: () => {
        return {
            jobs: [],
            loading: false,
            detail: null,
        }
    },
    actions: {
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
            await setTimeout(() => {
                this.jobs = Jobs
                this.loading = false;
            }, 500)
        },
    },
})