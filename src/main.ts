import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import globalComponents from '@/components'
import 'virtual:svg-icons-register'

import App from './App.vue'

import '@/styles/index.scss'

// console.log(import.meta.env)

const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(globalComponents)
app.use(createPinia())
app.use(router)

app.mount('#app')
