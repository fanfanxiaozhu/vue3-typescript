import router from './index'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from) => {
  nprogress.start()
})

router.afterEach((to, from) => {
  nprogress.done()
})
