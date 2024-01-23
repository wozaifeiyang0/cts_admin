<template>
  <el-button icon="Refresh" circle size="small" />
  <el-button icon="FullScreen" circle size="small" />
  <el-button icon="Setting" circle size="small" />
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

<script setup lang="ts"></script>
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
