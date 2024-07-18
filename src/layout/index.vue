<template>
    <el-container class="container">
        <Aside></Aside>
        <el-container class="content">
            <Header></Header>
            <el-main>
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import Header from './header.vue'
import Aside from './aside.vue'

</script>

<style lang='scss' scoped>
.container {
    height: 100vh;

    .content {
        flex-direction: column;
    }
}
</style>