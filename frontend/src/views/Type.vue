<template>
    <div class="rounded-lg bg-white">
        <div class="flex items-center">
            <i class="pl-4 fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" class="w-full rounded-lg py-3 px-2 outline-none text-sm">
        </div>
    </div>
    <div v-if="loading " class="text-center">
        <span class="loader"></span>
    </div>
    <JobItem v-if="loading==false && typeJob.length > 0" v-for="item in typeJob" :item="item" />
    <div v-if="loading==false && typeJob.length==0" class="text-center bg-red-100 text-red-500 font-semibold rounded px-4 py-2">
      Not found
    </div>
</template>
<script setup>
import JobItem from "../components/JobItem.vue"
import { useJobStore } from "../store/job.js"
import { onMounted, computed, ref, watch} from "vue";
import { storeToRefs } from 'pinia'
import { useRoute } from "vue-router";

const { typeJob, loading } = storeToRefs(useJobStore())
const store = useJobStore();
const currentPage = ref(1);
const route = useRoute();

const typ = ref(route.params.type)
watch(route.params.type,(oldd,neww)=>{
    console.log(2)
})

onMounted(async () => {
    await store.getType(route.params.type)
})

</script>
<style>
 .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 28px;
    width: 28px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
    font-size: 12px;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #4f46e5 !important;
    color: white;
  }
  </style>