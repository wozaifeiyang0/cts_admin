// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
import App from './App.vue'
//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'
//引入模板的全局的样式
import '@/styles/index.scss'
// 引入路由
import router from './router'
//引入仓库
import pinia from './store'

const app = createApp(App)

app.use(ElementPlus)

app.use(gloalComponent)

app.use(router)

//安装仓库
app.use(pinia)

app.mount('#app')
