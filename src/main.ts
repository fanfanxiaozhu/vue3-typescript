import { createApp } from 'vue'
import router from './router'
import pinia from './stores'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import globalComponents from '@/components'
import 'virtual:svg-icons-register'

import App from './App.vue'

import '@/router/permission.ts'

import '@/styles/index.scss'

// console.log(import.meta.env)

const app = createApp(App)
app.use(ElementPlus)
app.use(globalComponents)
app.use(router)
app.use(pinia)

app.mount('#app')
