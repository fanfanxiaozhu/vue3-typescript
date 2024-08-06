<template>
  <el-container class="container">
    <Aside></Aside>
    <el-container class="content">
      <Header></Header>
      <Main></Main>
    </el-container>
  </el-container>
</template>

<script setup lang='ts'>
import Aside from './aside.vue'
import Header from './header.vue'
import Main from './main.vue'
</script>

<style lang='scss' scoped>
.container {
  height: 100vh;

  .content {
    flex-direction: column;
  }
}
</style>