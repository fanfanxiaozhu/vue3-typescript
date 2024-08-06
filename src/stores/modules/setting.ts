import { defineStore } from 'pinia'
import { ref, nextTick } from 'vue'

export const useSettingStore = defineStore('setting', () => {
  const isCollapseAside = ref(false)
  const toggleCollapse = () => {
    isCollapseAside.value = !isCollapseAside.value
  }

  const isRefresh = ref(false)
  const toggleRefresh = () => {
    isRefresh.value = !isRefresh.value
    nextTick(() => {
      isRefresh.value = !isRefresh.value
    })
  }

  return { isCollapseAside, toggleCollapse, isRefresh, toggleRefresh }
})
