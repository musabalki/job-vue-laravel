<template>
    <div v-if="loading" class="text-center">
        <span class="loader"></span>
    </div>
    <JobItem v-if="jobs.length>0" v-for="item in jobs" :item ="item" />  
</template>
<script setup>
import JobItem from "./JobItem.vue"
import {useJobStore} from "../store/job.js"
import { onMounted } from "vue";
import { storeToRefs } from 'pinia'

const { jobs, loading} = storeToRefs(useJobStore())
const {initialData} = useJobStore();

onMounted(()=>{
    initialData()
})

</script>