import SvgIcon from './SvgIcon.vue'

const allGlobalComponents: any = { SvgIcon }

export default {
  install(app: any) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
  }
}
