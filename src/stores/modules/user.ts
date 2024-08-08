import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfoType } from '@/api/user/type'
import { reqUserInfo } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('TOKEN'))
  const setToken = (_token: string) => {
    localStorage.setItem('TOKEN', _token)
    token.value = _token
  }

  const userInfo = ref<UserInfoType>({} as UserInfoType)
  const getUserInfo = async () => {
    const res = await reqUserInfo()
    if (res.code === 200) {
      setUserInfo(res.data.checkUser)
      return 'ok'
    } else {
      return Promise.reject('error')
    }
  }
  const setUserInfo = (_userInfo: UserInfoType) => {
    userInfo.value = _userInfo
  }

  const clearUserInfo = () => {
    token.value = ''
    localStorage.removeItem('TOKEN')
    userInfo.value = {} as UserInfoType
  }

  return { token, setToken, userInfo, getUserInfo, setUserInfo, clearUserInfo }
})
