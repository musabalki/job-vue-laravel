<template>
  <div class="bg-gray-50 p-6 min-h-screen">
    <div class="max-w-[1100px] mx-auto">
      <Header/>
      <router-view></router-view>      
    </div>
  </div>

</template>

<script setup>

import Header from "./components/Header.vue"
import {useRoute } from "vue-router";
import HomeLayout from './views/HomeLayout.vue'

const router = useRoute();

console.log(router.params)

</script>
