<template>
  <!-- 操作过程数据速览 -->
  <!-- 源图数据 -->
  <div id="image-data" v-if="imageData">
    <label>About Image</label>
    <ul>
      <li>W, H: {{ imageData.naturalWidth }}, {{ imageData.naturalHeight }}</li>
      <li>AR: {{ imageData.aspectRatio.toFixed(3) }}</li>
    </ul>
  </div>
  <!-- 裁剪数据，相对源图尺寸 -->
  <div id="cropped-data" v-if="croppedData">
    <label>Cropped Data</label>
    <ul>
      <li>x, y: {{ croppedData.x }}, {{ croppedData.y }}</li>
      <li>W, H: {{ croppedData.width }}, {{ croppedData.height }}</li>
      <li>R: {{ croppedData.rotate }}</li>
      <li>SX, SY: {{ croppedData.scaleX }}, {{ croppedData.scaleY }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Scanner",
  props: {
    imageData: Object,
    croppedData: Object,
  },
};
</script>

<style scoped>
#image-data {
  position: fixed;
  top: 0;
  background: rgb(245 241 241 / 0.5);
  width: 60px;
  height: 60px;
  border-bottom-right-radius: 100%;
  padding: 5px;
  max-width: calc(50vw - 10px);
}
#image-data label {
  transform: rotate(-45deg);
  display: block;
}
#image-data ul {
  display: none;
}
#image-data:hover label {
  display: inline;
}
#image-data:hover {
  background: rgb(33 33 33 / 0.8);
  width: auto;
  height: auto;
  color: rgb(245 241 241 / 0.5);
  border-bottom-right-radius: 10px;
}
#image-data:hover ul {
  display: block;
}
#cropped-data {
  position: fixed;
  top: 0;
  padding: 5px;
  color: rgb(245 241 241 / 0.5);
  max-width: calc(50vw - 10px);
  right: 0;
}
#cropped-data:hover {
  background: rgb(33 33 33 / 0.8);
  border-bottom-left-radius: 10px;
}
</style>