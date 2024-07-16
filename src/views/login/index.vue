<template>
    <div class="wrap">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="form" :model="form" :rules="rules" ref="formRef">
                    <h1>Hello</h1>
                    <h3>欢迎来到二哈甄选运营平台</h3>
                    <el-form-item prop="username">
                        <el-input v-model="form.username" :prefix-icon="User" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="form.password" :prefix-icon="Lock" show-password>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="w-100" type="primary" :loading="loading"
                            @click="onSubmit(formRef)">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'
import { reqLogin } from '@/api/user'
import { useUserStore } from '@/stores/modules/user' 
const userStore = useUserStore()// useUserStore from '@/stores/user'
import { useRouter } from 'vue-router'
const router = useRouter()

const form = reactive({
    username: 'admin',
    password: '123456',
})

const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
})

const formRef = ref<FormInstance>()
const onSubmit = (formRef: any) => {
    if (!formRef) return;
    formRef.validate((valid: boolean) => {
        if (valid) {
            login();
        } else {
            return false
        }
    })
}

const loading = ref(false)
const login = () => {
    loading.value = true
    reqLogin(form).then((res) => {
        loading.value = false
        if (res.code === 200) {
            userStore.token = res.data.token as string;
            localStorage.setItem('TOKEN', res.data.token as string)
            router.push({ name: 'home' })
            ElNotification({
                type: 'success',
                message: `Hi,${form.username},欢迎回来!`,
            })
        } else {
            ElNotification({
                type: 'error',
                message: res.data.message,
            })
        }
    })
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