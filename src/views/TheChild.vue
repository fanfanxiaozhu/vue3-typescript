<template>
    <div class="child">
        我是子组件
        <div>姓名：{{ personInfo?.name }}</div>
        <div>年龄：{{ personInfo?.age }}</div>
        <button @click="changeInfo">修改</button>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

// const props = defineProps(['name', 'age'])

// const emits = defineEmits(['updateInfo'])

// const changeInfo = () => {
//     emits('updateInfo', { name: '小罗', age: 33 })
// }

const props = defineProps({
    personInfo: Object
})
const emits = defineEmits(['update:personInfo'])
const changeInfo = () => {
    emits('update:personInfo', { name: '小罗', age: 33 })
}
</script>

<style lang='scss' scoped>
.child {
    height: 200px;
    background: yellowgreen;
}
</style>