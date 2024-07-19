<template>
    <el-container class="container">
        <Aside></Aside>
        <el-container class="content">
            <Header></Header>
            <el-main>
                <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>
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

.fade-enter-from {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {
    transition: all .3s;
}

.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>