import SvgIcon from './SvgIcon.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponents: any = { SvgIcon, ...ElementPlusIconsVue }

export default {
  install(app: any) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
  }
}
