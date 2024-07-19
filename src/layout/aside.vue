<template>
  <el-menu router :default-active="activeMenu">
    <div v-if="config.logoShow" class="logo">
      <img :src="config.logo" alt="logo" width="46">
      <span>{{ config.title }}</span>
    </div>
    <el-scrollbar>
      <MenuList :menu="menuList"></MenuList>
    </el-scrollbar>
  </el-menu>
</template>

<script setup lang='ts'>
import config from '../config'
import MenuList from './menuList.vue'
import { reactive } from 'vue'
import { constantRoutes } from '../router/routes'
import { useRoute } from 'vue-router'
const router = useRoute()

const menuList = reactive(constantRoutes);
const activeMenu = router.path
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: calc(100vh - #{$height-logo});
}

.logo {
  height: $height-logo;
  display: flex;
  align-items: center;
}

.el-menu {
  width: 200px;
}
</style>