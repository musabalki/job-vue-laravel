<template>
    <div class="mx-auto container">
        <div class="grid grid-cols-12">
          <div class="col-span-3">
            <WorkingType/>
            <Skills/>
          </div>
          <div class="col-span-9 space-y-4 ml-5">
            <router-view></router-view>
          </div>
        </div>
      </div>
    
</template>


<script setup>
import WorkingType from "../components/WorkingType.vue"
import Skills from "../components/Skills.vue"
import JobList from "../components/JobList.vue";





</script>