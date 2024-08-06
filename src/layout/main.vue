<template>
  <el-main>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component v-if="!settingStore.isRefresh" :is="Component" />
      </transition>
    </router-view>
  </el-main>
</template>

<script setup lang='ts'>
import { useSettingStore } from '@/stores/modules/setting'
const settingStore = useSettingStore();
</script>

<style lang='scss' scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all .3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>