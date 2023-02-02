<template>
    <div class="bg-white p-6">
        <h1 class="text-main text-3xl font-semibold mb-3">{{ detail.title }}</h1>
        <div class="space-x-2 mb-2">
            <span class="font-medium text-xs bg-green-100 text-green-500 px-3 py-1 rounded-lg inline-block">{{ detail.salary }}</span> 
            <span v-if="detail.work_type==1" class=" font-medium text-xs bg-violet-100 text-violet-500 px-3 py-1  rounded-lg inline-block">Full-time</span>
                    <span v-else-if="detail.work_type==2" class=" font-medium text-xs bg-rose-100 text-rose-500 px-3 py-1  rounded-lg inline-block 	">Part-time</span>
                    <span v-else-if="detail.work_type==3" class=" font-medium text-xs bg-amber-100 text-amber-500 px-3 py-1  rounded-lg inline-block">Freelance</span>
        </div>
        <div v-html="detail.description">
        </div>
       
        
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {useJobStore} from "../store/job.js"

const route = useRoute()
const {slug} = route.params;
const store = useJobStore();

const {getDetailData} = store;
getDetailData(slug)


const {detail} = storeToRefs(store)

</script>