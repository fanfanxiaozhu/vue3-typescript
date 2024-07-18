<template>
    <div v-for="(item, index) in menuList" :key="index">
        <el-menu-item v-if="!item.meta.hidden && !item.children" :index="item.path">
            <el-icon>
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-menu-item>
        <template v-if="!item.meta.hidden && item.children && item.children.length">
            <el-sub-menu :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <MenuList :menu="item.children"></MenuList>
            </el-sub-menu>
        </template>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, defineProps } from 'vue'

const props = defineProps(['menu'])
// console.log(props)
const menuList = props.menu
// console.log(menuList)
</script>

<script lang="ts">
export default {
    name: 'MenuList'
}
</script>

<style lang='scss' scoped></style>