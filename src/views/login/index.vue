<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">一</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到甄选</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
http://localhost:5173/#/login
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

// 定义是否加载变量
let loading = ref(false)
// 获取路由器
const router = useRouter()

// 用户仓库
let useStore = useUserStore()
// 收集用户和密码数据
let loginForm = reactive({ username: 'admin', password: '111111' })

// 登录函数
const login = async () => {
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    // 登录成功跳转到首页
    router.push('/')
    // 显示登录成功提示信息
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
  } catch (error: Error) {
    // 显示登录失败提示信息
    ElNotification({
      type: 'error',
      message: error.message,
    })
  }
  loading.value = false
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    width: 80%;
    top: 30vh;
    position: relative;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      font-size: 40px;
      color: white;
    }
    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
