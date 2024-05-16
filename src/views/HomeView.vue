<script setup lang="ts">
import { ref } from 'vue'
import TheChild from './TheChild.vue'
// import SvgIcon from '@/components/SvgIcon.vue'
interface Person {
  name: string,
  age: number
}
const person = ref({
  name: '小杨',
  age: 32,
})

const updateInfo = (param: Person) => {
  // person.value.name = param.name
  // person.value.age = param.age
  person.value = param
}

</script>

<template>
  <div>首页</div>
  <!-- <TheChild :name="person.name" :age="person.age" @update-info="updateInfo"></TheChild> -->
  <TheChild v-model:personInfo="person"></TheChild>
  <el-button>button</el-button>
  <SvgIcon name="home" color="pink" width="50px" height="50px"></SvgIcon>
</template>
