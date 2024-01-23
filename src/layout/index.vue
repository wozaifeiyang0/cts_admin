<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{fold:layoutSettingStore.fold ? true : false}">
      <Logo :hiddenTitle="layoutSettingStore.fold ? true : false"></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!--  菜单组件 -->
        <el-menu
          :default-active="$route.path"
          background-color="#363636"
          text-color="white"
          :collapse="layoutSettingStore.fold ? true : false"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
      <!-- 工具栏区 -->
    </div>
    <div class="layout_tabber" :class="{fold:layoutSettingStore.fold ? true : false}">
      <Tabber></Tabber>
    </div>
    <!-- 展示区  -->
    <div class="layout_main" :class="{fold:layoutSettingStore.fold ? true : false}">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import Main from '@/layout/main/index.vue'
import Tabber from '@/layout/tabber/index.vue'
// 获取setting数据仓库
import  useLayoutSettingStore  from "@/store/modules/setting";
// 获取用户菜单数据
import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'
// 用户仓库实例
let userStore = useUserStore()
// layout 仓库实例
let layoutSettingStore = useLayoutSettingStore();

const $route = useRoute()
</script>
<script lang="ts">
export default {
  name:'Layout'
}
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base_layout_slider_width;
    background: $base_layout_slider_background;
    height: 100vh;
    transition: all 0.3s;
    
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base_layout_slider_logo_height);
      .el-menu {
        border-right: 0px;
      }
    }
    &.fold {
      width: $base_layout_slider_min_width;
    }
  }
  .layout_tabber {
    position: fixed;
    width: calc(100% - $base_layout_slider_width);
    height: $base_layout_tabber_height;
    background: $base_layout_tabber_background;
    top: 0px;
    left: $base_layout_slider_width;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base_layout_slider_min_width);
      left: $base_layout_slider_min_width;
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base_layout_slider_width);
    height: calc(100vh - $base_layout_tabber_height);
    background-color: $base_layout_main_background;
    top: $base_layout_tabber_height;
    left: $base_layout_slider_width;
    overflow: auto;
    padding: 20px;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base_layout_slider_min_width);
      left: $base_layout_slider_min_width;
    }
  }
}
</style>
