<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>系统管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
// 控制图标切换
let layOutSettingStore = useLayoutSettingStore()
// 点击图标的方法
const changeIcon = () => {
  layOutSettingStore.fold = !layOutSettingStore.fold
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
