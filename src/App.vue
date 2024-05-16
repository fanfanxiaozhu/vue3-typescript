<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppAside from './components/AppAside.vue'
</script>

<template>
  <AppHeader></AppHeader>
  <el-container>
    <AppAside></AppAside>
    <el-main>
      <RouterView></RouterView>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped></style>
