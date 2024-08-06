<template>
  <el-header>
    <div class="left">
      <el-icon class="icon-collapse" @click="settingStore.toggleCollapse">
        <Expand v-if="settingStore.isCollapseAside" />
        <Fold v-else />
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight">
        <template v-for="(router, index) in $route.matched" :key="index">
          <el-breadcrumb-item v-if="!router.meta.hidden" :to="{ path: router.path }">
            <el-icon>
              <component :is="router.meta.icon" />
            </el-icon>
            {{ router.meta.title }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-button icon="Refresh" circle @click="settingStore.toggleRefresh" />
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
  border-bottom: 1px solid var(--el-border-color);

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .left {
    .icon-collapse {
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