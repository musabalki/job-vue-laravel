<template>
    <div class="bg-white p-6 rounded-lg">
        <h1 class="text-gray-800 font-medium text-lg mb-2">TYPE OF WORK</h1>
        <div class="flex flex-col space-y-2">
            <router-link to="/categories/freelance" class="text-gray-600 text-sm px-2 py-1" :class="typeControl('freelance')">Freelance</router-link>
            <router-link to="/categories/full-time" class="text-gray-600 text-sm px-2 py-1" :class="typeControl('full-time')">Full Time</router-link>
            <router-link to="/categories/part-time" class="text-gray-600 text-sm px-2 py-1" :class="typeControl('part-time')">Part Time</router-link>
        </div>
    </div>
    {{  }}
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const typeControl= (type) => {
    if(type==route.params.type){
        return 'bg-gray-200 rounded';
    }else{
        return 0;
    }
}
</script>