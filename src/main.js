import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入初始化样式
import '@/styles/common.scss'

import App from './App.vue'
const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
