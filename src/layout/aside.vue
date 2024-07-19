<template>
  <div class="aside">
    <div v-if="config.logoShow" class="logo">
      <img :src="config.logo" alt="logo" width="46">
      <span>{{ config.title }}</span>
    </div>
    <el-scrollbar>
      <el-menu router :default-active="activeMenu">
        <MenuList :menu="menuList"></MenuList>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang='ts'>
import config from '../config'
import MenuList from './menuList.vue'
import { reactive } from 'vue'
import { constantRoutes } from '../router/routes'
import { useRoute } from 'vue-router'
const router = useRoute()

const activeMenu = router.path
const menuList = reactive(constantRoutes);
</script>

<style lang="scss" scoped>
.aside {
  display: flex;
  flex-direction: column;

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
}
</style>