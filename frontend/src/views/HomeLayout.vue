<template>
    <div class="mx-auto container">
        <div class="grid grid-cols-12">
          <div class="md:col-span-3 hidden md:block">
            <WorkingType/>
            <Skills/>
          </div>
          <div class="md:col-span-9 col-span-12 space-y-4 md:ml-5">
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