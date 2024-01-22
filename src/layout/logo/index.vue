<template>
  <div class="logo" v-if="!setting.logo_hide">
    <img :src="setting.logo_path" alt="" v-if="!setting.logo_img_hide" />
    <p v-if="!setting.logo_title_hide">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  heigth: $base_layout_slider_logo_width;
  color: white;
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 40px;
    heigth: 40px;
  }
  p {
    font-size: $base_layout_slider_logo_title_font_size;
    margin-left: 10px;
  }
}
</style>
