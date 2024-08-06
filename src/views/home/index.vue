<template>
	<div>
		我是首页
	</div>
</template>

<script setup lang='ts'>
import { ElNotification } from 'element-plus'
import { reqUserInfo } from '@/api/user'
import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()

const getUserInfo = () => {
	reqUserInfo().then((res) => {
		if (res.code === 200) {
			userStore.setUserInfo(res.data.checkUser)
		} else {
			ElNotification({
				type: 'error',
				message: '获取用户信息失败',
			})
		}
	})
}

getUserInfo()
</script>

<style lang='scss' scoped></style>