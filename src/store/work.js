import { defineStore } from "pinia";


export const work = defineStore({
    state: () => {
        return {
            jobType: [],
            jobCategories: []
        }
    },
    actions:{
        initData(){
            this.jobType=[
                {
                    id:1,
                    title:"Full Time",
                    slug:"full-time"
                },
                {
                    id:2,
                    title:"Part Time",
                    slug:"part-time"
                },
                {
                    id:3,
                    title:"Freelance",
                    slug:'freelance'
                },
                {
                    id:4,
                    title:"Intern",
                    slug:'intern'
                }
            ]
            this.jobCategories=[]
        }
    }

})