import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingStore = defineStore('setting', () => {
  const isCollapseAside = ref(false)

  const toggleCollapse = () => {
    isCollapseAside.value = !isCollapseAside.value
  }

  return { isCollapseAside, toggleCollapse }
})
