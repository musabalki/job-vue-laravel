<template>
    <div class="p-6 bg-white rounded py-12">
        <h1 class="text-center font-bold text-2xl mb-4">CREATE JOB</h1>
        <form action="" method="post" class="max-w-[600px] mx-auto">
            <div class="flex flex-col items-center justify-center mt-6 w-full">
                <div class="w-full mt-2">
                    <label for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input  type="text" name="email" id="email" 
                        class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="">
                </div>
                <div class="w-full mt-2">
                    <label for="salary"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                    <input type="text" name="text" id="description" 
                        class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="">
                </div>
                <div class="w-full mt-2">
                    <label for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brief Description</label>
                    <input  type="text" name="email" id="description" 
                        class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="">
                </div>
                <div class="w-full mt-2">
                    <label for="salary"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Work Type</label>
                        <select name="" id="" class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="1">Full-time</option>
                            <option value="2">Part-time</option>
                            <option value="3">Freelance</option>
                        </select>
                   
                </div>
                <div class="w-full mt-2">
                    <label for="detail"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detail</label>
                        <!-- <textarea  class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="" id="" cols="30" rows="5"></textarea> -->
                        <QuillEditor style="height:300px"  theme="snow" />
                </div>
                
                
                <div class="w-full mt-2">
                    <label for="image"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                    <input type="file" name="image" id="image" 
                        class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="">
                        
                </div>
            </div>
            <button :disabled="loading" type="submit"
                    class="mt-4 flex justify-center w-full text-white bg-indigo-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                    <div class="loader" v-if="loading"></div>
                    <span v-else>Save</span>
                </button>
        </form>
    </div>
</template>
<script setup>

</script>
<style scoped>

.shadow{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.title {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s;
  max-height: 500px;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
  max-height: 0px;
}
</style>