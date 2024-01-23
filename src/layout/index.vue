<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!--  菜单组件 -->
        <el-menu background-color="#363636" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
      <!-- 工具栏区 -->
    </div>
    <div class="layout_tabber">456</div>
    <!-- 展示区  -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/layout/logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import Main from '@/layout/main/index.vue'
// 获取用户菜单数据
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base_layout_slider_width;
    background: $base_layout_slider_background;
    height: 100vh;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base_layout_slider_logo_height);
      .el-menu {
        border-right: 0px;
      }
    }
  }
  .layout_tabber {
    position: fixed;
    width: calc(100% - $base_layout_slider_width);
    height: $base_layout_tabber_height;
    background: $base_layout_tabber_background;
    top: 0px;
    left: $base_layout_slider_width;
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
  }
}
</style>
