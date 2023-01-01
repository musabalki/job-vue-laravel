<template>
    <div class="flex items-center justify-between bg-white p-6 rounded-lg">
        <div class="flex items-center">
            <div class="mr-5">
                <i class="cursor-pointer text-2xl fa-regular fa-bookmark"></i>
            </div>
            <img class="w-12 rounded-full mr-4" :src="item.image" alt="">
            <div class="flex flex-col items-start">
                <h1 href="" class="font-medium">{{item.title }}</h1>
                <span class="text-sm text-gray-400">{{ item.description }}</span>
                <div class="mt-1">
                    <span v-if="item.type==1" class=" font-medium text-xs bg-violet-100 text-violet-500 px-3 py-1  rounded-lg inline-block">Full-time</span>
                    <span v-else-if="item.type==2" class=" font-medium text-xs bg-rose-100 text-rose-500 px-3 py-1  rounded-lg inline-block 	">Part-time</span>
                    <span v-else-if="item.type==3" class=" font-medium text-xs bg-amber-100 text-amber-500 px-3 py-1  rounded-lg inline-block">Freelance</span>
                    <span class="ml-2 font-medium text-xs bg-green-100 text-green-500 px-3 py-1 rounded-lg inline-block">
                        {{ item.price }}
                    </span>
                </div>
            </div>
        </div>
        <router-link :to="{ name: 'detail', params: { id: 123 } }" class="bg-indigo-500 rounded py-2 text-white px-4 text-xs">Detail</router-link>
    </div>
</template>
<script setup>
defineProps({item:Object})
</script>