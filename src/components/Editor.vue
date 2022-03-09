<template>
  <!-- 待裁剪图片 -->
  <div id="cropperjs-box">
    <img id="image" :src="src" alt="an image" @error="onError" />
  </div>

  <!-- Loading 遮盖层，cropper 准备中 -->
  <Loading v-show="loading" />

  <!-- 预览界面 -->
  <Previewer v-if="cropStatus.previewUrl" :previewUrl="cropStatus.previewUrl" />

  <!-- 操作过程数据速览 -->
  <Scanner :croppedData="croppedData" :imageData="imageData" />

  <!-- 工具栏 -->
  <Toolbar
    :cropStatus="cropStatus"
    @delete="onDelete"
    @clear="onClear"
    @preview="onPreview"
    @export="onExport"
    @upload="onUpload"
    @drag:mode="onDragMode"
    @aspectratio:set="onAspectRatioSet"
    @zoom="onZoom"
    @rotate="onRotate"
    @scale="onScale"
    @cropbox:move="onCropBoxMove"
    @cropbox:resize="onCropBoxResize"
  />
</template>

<script>
import Cropper from "cropperjs";
import Loading from "./Loading.vue";
import Previewer from "./Previewer.vue";
import Scanner from "./Scanner.vue";
import Toolbar from "./Toolbar.vue";
import "cropperjs/dist/cropper.min.css";
import "remixicon/fonts/remixicon.css";

Cropper.setDefaults({
  autoCrop: false,
  viewMode: 2,
  background: false,
  dragMode: "move",
});

export default {
  name: "Editor",
  props: {
    src: String,
    apiUrl: String,
    /*
     * 裁剪方式：
     * server - 服务端裁剪，上传起点位置、宽高、旋转、缩放等参数即可；
     * js - 页面裁剪，上传裁剪好的图片本身（Blob）
     */
    cropType: {
      type: String,
      default: 'Server'
    }
  },
  components: {
    Loading,
    Previewer,
    Scanner,
    Toolbar,
  },
  data() {
    return {
      loading: true,
      cropper: null,
      imageData: null,
      croppedData: null,
      cropStatus: {
        cropping: false,
        dragMode: "move",
        previewUrl: null,
      },
    };
  },
  mounted() {
    const image = document.getElementById("image");
    let this_ = this;
    let cropper = (this.cropper = new Cropper(image, {
      ready() {
        this_.imageData = cropper.getImageData();
        this_.loading = false;
        cropper.crop();
      },
      crop() {
        this_.croppedData = cropper.getData(true);
      },
      cropmove() {
        this_.cropStatus.cropping = true;
      },
      cropend() {
        this_.cropStatus.cropping = false;
      },
    }));
  },
  methods: {
    onError() {
      this.loading = false;
      this.cropper.destroy();
      this.$parent.error(new Error("图片资源错误或加载失败: " + this.src));
    },
    onDelete() {
      if (this.cropper) {
        this.cropper.destroy();
      }
      this.$parent.delete();
      // 到此，cropper 部分不被渲染，其中的预览也就不存在了，无需手动关闭
      // this.closePreview();
    },
    onClear() {
      this.cropper.clear();
      this.closePreview();
    },
    closePreview() {
      // 如果预览已打开，关闭它
      if (this.cropStatus.previewUrl) {
        this.cropStatus.previewUrl = null;
      }
    },
    onPreview() {
      // 切换预览
      if (this.cropStatus.previewUrl) {
        this.cropStatus.previewUrl = null;
      } else {
        let canvas = this.cropper.getCroppedCanvas({
          imageSmoothingEnabled: true,
          imageSmoothingQuality: "high",
        });
        this.cropStatus.previewUrl = canvas.toDataURL();
      }
    },
    onExport() {
      let dataUrl = this.cropper
        .getCroppedCanvas({
          imageSmoothingEnabled: true,
          imageSmoothingQuality: "high",
        })
        .toDataURL();
      let a = document.createElement("a");
      a.download = "cropped";
      a.href = dataUrl;
      a.click();
    },
    onUpload() {
      console.log(this.cropType)
      console.log(this.croppedData);
      console.log(this.apiUrl)
      if (this.apiUrl) {
        console.log('可上传')
        if (this.cropType.toLowerCase() == 'server') {
          console.log('服务端裁剪');
        } else {
          console.log('页面裁剪');
        }
      }
    },
    onDragMode(mode) {
      this.cropper.setDragMode(mode);
      this.cropStatus.dragMode = mode;
    },
    onAspectRatioSet(ratio) {
      this.cropper.setAspectRatio(ratio);
    },
    onZoom(ratio) {
      this.cropper.zoom(ratio);
    },
    onRotate(deg) {
      this.cropper.rotate(deg);
    },
    onScale(axis) {
      if (axis === "x") {
        this.cropper.scaleX(-1 * this.croppedData.scaleX);
      } else if (axis === "y") {
        this.cropper.scaleY(-1 * this.croppedData.scaleY);
      }
    },
    onCropBoxMove(offsetX, offsetY) {
      let data = this.croppedData;
      data.x = data.x + offsetX;
      data.y = data.y + offsetY;
      this.cropper.setData(data);
    },
    onCropBoxResize(direction, offset, len) {
      let data = this.croppedData;
      if (direction === "vertical") {
        data.y = data.y + offset;
        data.height = data.height + len;
      } else if (direction === "horizontal") {
        data.x = data.x + offset;
        data.width = data.width + len;
      }
      this.cropper.setData(data);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 500px) {
  div.toolbar.bottom {
    width: calc(90% - 10px); /* 减去左右的padding 5 × 2 */
  }
}
div#cropperjs-box {
  height: 100vh;
  width: 100vw;
}
/* Ensure the size of the image fit the container perfectly */
img {
  display: block;
  /* This rule is very important, please don't ignore this */
  max-width: 100%;
}
</style>