import ResponseData from '../result'

// 定义用户相关数据类型
//
// 用户登录接口参数类型
export interface loginFormData {
  username: string
  password: string
}

// 定义登录接口放暑假类型
export interface loginResponseData extends ResponseData {
  data: string
}

// 定义获取用户信息返回类型
export interface userInfoReponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
