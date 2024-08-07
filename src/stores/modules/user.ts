import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfoType } from '@/api/user/type'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('TOKEN'))
  const setToken = (_token: string) => {
    localStorage.setItem('TOKEN', _token)
    token.value = _token
  }

  const userInfo = ref<UserInfoType>({} as UserInfoType)
  const setUserInfo = (_userInfo: UserInfoType) => {
    userInfo.value = _userInfo
  }

  const clearUserInfo = () => {
    token.value = ''
    localStorage.removeItem('TOKEN')
    userInfo.value = {} as UserInfoType
  }

  return { token, setToken, userInfo, setUserInfo, clearUserInfo }
})
