import SvgIcon from './SvgIcon/index.vue'
//引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 收集所有自定义的组件
const allComponents: any = { SvgIcon }
// 对外暴露插件
export default {
  // 默认加载插件执行的方法
  install(app: any) {
    // 遍历组件进行注册
    Object.keys(allComponents).forEach((key) => {
      // 注册组件
      app.component(key, allComponents[key])
    })

    //将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
