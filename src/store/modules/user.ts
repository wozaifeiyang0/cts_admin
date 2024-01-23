// 创建用户仓库
import { defineStore } from 'pinia'
// 引入用户接口
import { reqLogin } from '@/api/user'
// 引入用户数据类型
import type { loginFormData } from '@/api/user/type'

import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
// 引入路由（常量路由）
import { constantRoute } from '@/router/routes'

import { UserState } from './types/type'

let useUserStore = defineStore('User', {
  //数据存储
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 用户唯一标识token
      menuRoutes: constantRoute,
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
        SET_TOKEN(result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
