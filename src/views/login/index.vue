<template>
    <div class="wrap">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="form" :model="form" label-width="auto">
                    <h1>Hello</h1>
                    <h3>欢迎来到二哈甄选运营平台</h3>
                    <el-form-item>
                        <el-input v-model="form.username" :prefix-icon="User" />
                    </el-form-item>
                    <el-form-item>
                        <el-input type="password" v-model="form.password" :prefix-icon="Lock" show-password>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="w-100" type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
const form = reactive({
    username: 'admin',
    password: '123456',
})

const onSubmit = () => {
    console.log('submit!')
}

</script>

<style lang='scss' scoped>
.wrap {
    height: 100vh;
    background: $color-bg;

    .el-row {
        height: 100%;
    }

    .form {
        position: relative;
        top: 30%;
        width: 60%;
        padding: 20px;
        background: #337ecc;
        border-radius: 8px;
        color: #fff
    }

    h1 {
        font-size: 28px;
    }

    h3 {
        font-size: 16px;
        margin: 20px 0;
    }
}
</style>