<template>
    <div v-if="loading && jobs.length == 0" class="text-center">
        <span class="loader"></span>
    </div>
    <div class="rounded-lg bg-white">
        <div class="flex items-center">
            <i class="pl-4 fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" class="w-full rounded-lg py-3 px-2 outline-none text-sm">
        </div>
    </div>
    <JobItem v-if="jobs.length > 0" v-for="item in jobs" :item="item" />
</template>
<script setup>
import JobItem from "./JobItem.vue"
import { useJobStore } from "../store/job.js"
import { onMounted, computed } from "vue";
import { storeToRefs } from 'pinia'

const { jobs, loading } = storeToRefs(useJobStore())
const store = useJobStore();

onMounted(async () => {
    await store.getJobs()
})

</script>