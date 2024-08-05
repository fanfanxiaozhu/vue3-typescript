<template>
  <el-header>
    <div class="left">
      <el-icon @click="settingStore.toggleCollapse">
        <Expand v-if="settingStore.isCollapseAside" />
        <Fold v-else />
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/acl/user' }">权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <span v-if="false">v-if</span>
        <span v-show="false">v-show</span>
        <span style="visibility: hidden;">visible</span>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-button icon="Refresh" circle />
      <el-button icon="FullScreen" circle />
      <el-button icon="Setting" circle />
      <img class="avatar" src="../assets/logo.png" alt="avatar">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ user.nickname }}
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useSettingStore } from '@/stores/modules/setting'
const settingStore = useSettingStore();

const user = ref({ nickname: 'Y小了个p' });
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .left {
    .el-icon {
      margin-right: 12px;
      cursor: pointer;
    }
  }

  .right {
    .avatar {
      margin: 0 12px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
}
</style>