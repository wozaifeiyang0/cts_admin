<template>
  <el-button icon="Refresh" circle size="small" @click="changeRefresh" />
  <el-button icon="FullScreen" circle size="small" @click="fullScreen" />
  <el-button icon="Setting" circle size="small" @click="" />
  <img src="../../../../public/logo.png" />
  <el-dropdown>
    <span class="el-dropdown-link">
      Admin
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="Plus">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
// setting 仓库
let layoutSetting = useLayoutSettingStore()
// 刷新方法
const changeRefresh = () => {
  layoutSetting.refresh = !layoutSetting.refresh
}

// 切换全屏方法
const fullScreen = () => {
  let full = document.fullscreenElement
  // 判断是否全屏状态
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped lang="scss">
img {
  width: 24px;
  height: 24px;
  margin: 0px 10px;
}
</style>
