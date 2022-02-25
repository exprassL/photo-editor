<template>
  <!-- 图片资源选择器 -->
  <div id="main-box">
    <div id="prepare-box">
      粘贴或拖拽图片至此，或从本地图片中
      <label onclick="document.querySelector('#image-file').click();"
        >选取...</label
      >
      <input
        type="file"
        id="image-file"
        accept="image/*"
        title="选择图片"
        @change="$emit('file:changed', $event.target)"
      />
    </div>
    <div id="error-box" v-if="errorMsg">
      {{ errorMsg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Picker",
  props: {
    errorMsg: Error,
  },
  emits: ["file:changed"],
};
</script>

<style scoped>
#main-box {
  color: rgb(205 201 201 / 1);
  width: 100%;
  height: 100vh;
}
#prepare-box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#prepare-box label {
  cursor: pointer;
  color: #0074d9;
}
#image-file {
  display: none;
}
#error-box {
  position: fixed;
  left: 50%;
  top: 5px;
  color: lightcoral;
  transform: translateX(-50%);
}
</style>