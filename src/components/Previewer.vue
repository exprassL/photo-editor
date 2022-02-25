<template>
  <div class="preview-box">
    <div id="previewer">
      <!-- 水平、垂直居中，宽度自适应内容，预览 canvas 填充到此 div -->
      <img :src="previewUrl" alt="预览" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Previewer",
  props: {
    previewUrl: String,
  },
};
</script>

<style scoped>
div.preview-box {
  z-index: 7;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #333;
}
div#previewer {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
img {
  max-width: 60vw;
  max-height: 60vh;
}
</style>