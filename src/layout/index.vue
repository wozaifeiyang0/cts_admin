<template>
  <div class="layout_container">
    <div class="layout_slider">
      <logo></logo>
    </div>
    <div class="layout_tabber">456</div>
    <div class="layout_main">789</div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/layout/logo/index.vue'
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base_layout_slider_width;
    background: $base_layout_slider_background;
    height: 100vh;
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
