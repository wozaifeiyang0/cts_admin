// 设置token函数
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}
// 获取token函数
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
