<template>
  <el-menu router @open="handleOpen" @close="handleClose">
    <div v-if="config.logoShow" class="logo">
      <img :src="config.logo" alt="logo" width="46">
      <span>{{ config.title }}</span>
    </div>
    <menuList :menu="menuList"></menuList>
  </el-menu>
</template>

<script setup lang='ts'>
import config from '../config'
import MenuList from './menuList.vue'
import { reactive } from 'vue'
import { constantRoutes } from '../router/routes'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const menuList = reactive(constantRoutes);
console.log('父组件------', menuList)

</script>

<style lang="scss" scoped>
.logo {
  height: $height-logo;
  display: flex;
  align-items: center;
}

.el-menu {
  width: 200px;
}
</style>