<template>
  <div class="logo" v-if="!setting.logo_hide">
    <img :src="setting.logo_path" alt="" v-if="!setting.logo_img_hide" />
    <p v-if="!setting.logo_title_hide && !hiddenTitle">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
defineProps(['hiddenTitle'])
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base_layout_slider_logo_height;
  color: white;
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base_layout_slider_logo_title_font_size;
    margin-left: 10px;
  }
}
</style>
