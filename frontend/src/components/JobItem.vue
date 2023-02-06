<template>
    <div class="flex items-center justify-between bg-white p-6 rounded-lg">
        <div class="flex  items-center">
            <!-- <div class="hidden md:block mr-5" @click="save(item)">
                <div v-if="deneme(props.item)!=1">
                    <i class="cursor-pointer text-2xl fa-regular fa-bookmark"></i>
                </div>
                <div v-else-if="deneme(props.item)==1">
                    <i class="cursor-pointer text-2xl fa-regular fa-solid fa-bookmark"></i>
                </div>
            </div> -->
            <img class="hidden md:block w-12 h-12 object-cover rounded-full mr-4" :src="item.image" alt=""/>
            <div class="flex flex-col items-start">
                <h1 href="" class="font-medium">{{item.title }}</h1>
                <span class="text-sm text-gray-400">{{ item.info }}</span>
                <div class="mt-1">
                    <span v-if="item.work_type==1" class=" font-medium text-xs bg-violet-100 text-violet-500 px-3 py-1  rounded-lg inline-block">Full-time</span>
                    <span v-else-if="item.work_type==2" class=" font-medium text-xs bg-rose-100 text-rose-500 px-3 py-1  rounded-lg inline-block 	">Part-time</span>
                    <span v-else-if="item.work_type==3" class=" font-medium text-xs bg-amber-100 text-amber-500 px-3 py-1  rounded-lg inline-block">Freelance</span>
                    <span class="ml-2 font-medium text-xs bg-green-100 text-green-500 px-3 py-1 rounded-lg inline-block">
                        {{ item.salary }}
                    </span>
                </div>
            </div>
        </div>
        <router-link :to="{ name: 'detail', params: { slug: item.slug } }" class="bg-indigo-600 rounded py-2 text-white px-4 text-xs">Detail</router-link>
    </div>
</template>
<script setup>
import {computed} from "vue"
import { storeToRefs } from "pinia";
import { useJobStore } from '../store/job';
const store = useJobStore();
const props = defineProps({item:Object})

const deneme = (p) =>{
    const res = store.saved.find(s=>s==p.id)
    if(res){
        return 1;
    }
    return 0;
}

const save = () =>{
    store.addSaveJob(props.item);
}
</script>