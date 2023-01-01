<template>
  <div class="bg-gray-50 p-6">
    <div class="max-w-[1100px] mx-auto">
      <div class="mx-auto container mb-4 ">
        <div class="grid grid-cols-12 items-center justify-between">
          <div class="col-span-3 ">
            <h1 class="text-2xl font-bold text-center">Job</h1>
            <span class="text-gray-500 text-sm text-center block">Find job</span>
          </div>
          <div class="col-span-9 ml-5 rounded-lg bg-white">
            <div class="flex items-center">
              <i class="pl-4 fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search" class="w-full rounded-lg py-3 px-2 outline-none text-sm">
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto container">
        <div class="grid grid-cols-12">
          <div class="col-span-3">
            <div class="bg-white p-6 rounded-lg">
              <h1 class="text-gray-800 font-medium text-lg mb-2">TYPE OF WORK</h1>
              <div class="flex flex-col space-y-2">
                <a href="" class="text-gray-600 text-sm">Freelance</a>
                <a href="" class="text-gray-600 text-sm">Full Time</a>
                <a href="" class="text-gray-600 text-sm">Part Time</a>
                <a href="" class="text-gray-600 text-sm">Intern</a>
              </div>
            </div>
            <div class="my-4 bg-white p-6 rounded-lg">
              <h1 class="text-gray-800 font-medium text-lg mb-2">SKILLS</h1>
              <div class="flex flex-col space-y-2">
                <a href="" class="text-gray-600 text-sm">Graphic Designer</a>
                <a href="" class="text-gray-600 text-sm">UI/UX Designer</a>
                <a href="" class="text-gray-600 text-sm">Mobile Designer</a>
                <a href="" class="text-gray-600 text-sm">Web Designer</a>
              </div>
            </div>
          </div>
          <div class="col-span-9 space-y-4 ml-5">
            <router-view></router-view>
          </div>
        </div>
      </div>
      
    </div>
  </div>

</template>

<script setup>

</script>
