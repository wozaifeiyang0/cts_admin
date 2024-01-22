// 创建用户仓库
import { defineStore } from 'pinia'
// 引入用户接口
import { reqLogin } from '@/api/user'
// 引入用户数据类型
import type { loginFormData } from '@/api/user/type'

let useUserStore = defineStore('User', {
  //数据存储
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'), // 用户唯一标识token
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      let result = await reqLogin(data)
      // 登录是否成功
      if (result.code == 200) {
        // 用户仓库赋值
        this.token = result.data.token
        // 本地存储持久化
        localStorage.setItem('TOKEN', result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
