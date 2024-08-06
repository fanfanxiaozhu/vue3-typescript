<template>
  <div class="aside" :class="{ 'collapse': settingStore.isCollapseAside }">
    <div v-if="config.logoShow" class="logo">
      <img :src="config.logo" alt="logo" width="44">
      <span v-show="!settingStore.isCollapseAside">{{ config.title }}</span>
    </div>
    <el-scrollbar>
      <el-menu router :default-active="$route.path" :collapse="settingStore.isCollapseAside" background-color="#000"
        text-color="#fff">
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
import { useSettingStore } from '@/stores/modules/setting'

const settingStore = useSettingStore();
const menuList = reactive(constantRoutes);
</script>

<style lang="scss" scoped>
.aside {
  width: $aside-width;
  display: flex;
  flex-direction: column;
  background: #000;
  color: #fff;
  transition: all 0.3s;

  &.collapse {
    width: $aside-width-collapsed;
  }

  .logo {
    width: 100%;
    height: $height-logo;
    display: flex;
    align-items: center;
    margin-left: 8px;
    font-size: 14px;

    img {
      margin-right: 8px;
      border-radius: 50%;
    }
  }

  .el-scrollbar {
    height: calc(100vh - #{$height-logo});
  }

  .el-menu {
    width: 100%;
    border-right: none;
  }
}
</style>