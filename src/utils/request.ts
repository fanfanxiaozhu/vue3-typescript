import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/modules/user'

const request = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000
})

request.interceptors.request.use((config) => {
  const userStore = useUserStore()
  config.headers.token = userStore.token || ''

  return config
})

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message = ''
    const status = error?.response?.status
    switch (status) {
      case 400:
        message = '请求错误'
        break
      case 401:
        message = '未授权,请登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = `请求地址出错: ${error.response.config.url}`
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误'
        break
      default:
        message = '网络错误'
        break
    }
    ElMessage.error(message)
    return Promise.reject(error)
  }
)

export default request
