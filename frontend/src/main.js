import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import "./assets/style.css"
import { markRaw } from 'vue'
// adapt this based on where your router is
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';



const pinia = createPinia()
const app = createApp(App)
app.component('QuillEditor', QuillEditor)
// Vue.component('QuillEditor', VueQuill.QuillEditor);

pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

app.use(Toast);
app.use(pinia)
app.use(router)
app.mount('#app')
