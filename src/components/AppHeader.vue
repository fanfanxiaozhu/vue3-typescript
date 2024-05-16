<template>
  <el-header>
    <div class="left">
      <img src="../assets/logo.svg" alt="logo" width="46">
      <span>Vue.js</span>
    </div>
    <div class="right">
      <span>{{ user.nickname }}</span>
      <el-icon :size="20">
        <Avatar />
      </el-icon>
    </div>
  </el-header>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
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
}
</style>