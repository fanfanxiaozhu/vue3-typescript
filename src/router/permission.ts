import router from './index'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useUserStore } from '@/stores/modules/user'

router.beforeEach(async (to, from) => {
  nprogress.start()
  const userStore = useUserStore()
  if (userStore.token) {
    if (to.path === '/login') {
      return '/'
    } else {
      if (!userStore.userInfo.userId) {
        try {
          await userStore.getUserInfo()
          return to.path
        } catch (error) {
          userStore.clearUserInfo()
          return '/login'
        }
      }
    }
  } else {
    if (to.path !== '/login') {
      return '/login'
    }
  }
})

router.afterEach((to, from) => {
  nprogress.done()
})
