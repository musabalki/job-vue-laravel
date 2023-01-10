<template>
    <div class="p-6 bg-white rounded py-12">
        <h1 class="text-center font-bold text-2xl mb-4">SAVED JOBS</h1>
        <div v-for="c in contents" :key="c.title" class="mb-5 shadow py-2 mx-4 rounded px-4" >
            <div class="title" @click="c.expanded = !c.expanded">
                <div class="flex  items-center">
                    <img src="https://via.placeholder.com/150" class="w-10 rounded-full" alt="">
                    <p class="ml-3 font-medium">{{ c.title }}</p>
                </div>
                <div class="flex  items-center">
                    <span v-if="c.expanded">&#x2191;</span>
                    <span v-else>&#x2193;</span>
                </div>
            </div>
            <Transition :duration="550" name="fade">
                <div class="flex items-center pl-14 transition" v-if="c.expanded">
                {{ c.description }}
                </div>
            </Transition>
        </div>
    </div>
</template>
<script>
const contents = Array(5)
    .fill()
    .map((_, i) => {
        return {
            title: `Job ${i}`,
            description: `Lorem ipsum dolor sit amet. Sit similique galisum aut omnis velit ea sapiente quam ${i}`,
            expanded: false,
        };
    });
export default {
    name: "App",
    data() {
        return {
            contents,
        };
    },
};
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