<template>
    
    <div class="rounded-lg bg-white">
        <div class="flex items-center">
            <i class="pl-4 fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search"  @keyup.enter="submit" class="w-full rounded-lg py-3 px-2 outline-none text-sm">
        </div>
    </div>
    <div v-if="loading && jobs.length == 0 || searchLoading ==true" class="text-center">
        <span class="loader"></span>
    </div>
    <JobItem v-if=" jobs.length > 0" v-for="item in jobs" :item="item" />
      <div v-if="loading==false && jobs.length==0" class="text-center bg-red-100 text-red-500 font-semibold rounded px-4 py-2">
      Not found
    </div>
    <div v-if="jobs.length>0" class="flex justify-center">
        <vue-awesome-paginate
        :total-items="store.totalCount"
        :items-per-page="5"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onClickHandler"
    />
    </div>
    
</template>
<script setup>
import JobItem from "./JobItem.vue"
import { useJobStore } from "../store/job.js"
import { onMounted, computed, ref} from "vue";
import { storeToRefs } from 'pinia'

const { jobs, loading,searchLoading } = storeToRefs(useJobStore())
const store = useJobStore();
const currentPage = ref(1);

const onClickHandler = async (page) => {
    currentPage.value=page
    store.updateCurrentPage(page)
    await store.getJobs(page-1)
};

onMounted(async () => {
    await store.getJobs()
})
const submit = (e) =>{
  store.searchJob(e.target.value)
}
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