<template>
  <!-- 工具栏，顶部，裁剪操作时隐藏 -->
  <div class="toolbar top" v-show="!cropStatus.cropping">
    <i
      title="删除"
      @click="$emit('delete')"
      class="ri-xl ri-delete-bin-line"
    ></i>
    <i
      title="撤销"
      @click="$emit('clear')"
      class="ri-xl ri-arrow-go-back-line"
    ></i>
    <i
      title="预览"
      @click="$emit('preview')"
      :class="`ri-xl ri-eye-${!cropStatus.previewUrl ? '' : 'close-'}line`"
    ></i>
    <i
      title="导出"
      @click="$emit('export')"
      class="ri-xl ri-download-2-line"
    ></i>
  </div>
  <!-- 工具栏，中间，微调时用，裁剪操作时隐藏 -->
  <div class="toolbar middle" v-show="!cropStatus.cropping && more">
    <span></span>
    <span></span>
    <span>
      <i
        title="轻微上扩"
        class="ri-xl ri-arrow-up-line"
        @click="$emit('cropbox:resize', 'vertical', 0 - span, span)"
      ></i>
      <i
        title="轻微下裁"
        class="ri-xl ri-arrow-down-line"
        @click="$emit('cropbox:resize', 'vertical', span, 0 - span)"
      ></i>
    </span>
    <span></span>
    <span></span>

    <span></span>
    <span></span>
    <span>
      <i
        title="轻微上移"
        class="ri-xl ri-arrow-up-circle-line"
        @click="$emit('cropbox:move', 0, 0 - span)"
      ></i>
    </span>
    <span></span>
    <span></span>

    <span>
      <i
        title="轻微左扩"
        class="ri-xl ri-arrow-left-line"
        @click="$emit('cropbox:resize', 'horizontal', 0 - span, span)"
      ></i>
      <i
        title="轻微右裁"
        class="ri-xl ri-arrow-right-line"
        @click="$emit('cropbox:resize', 'horizontal', span, 0 - span)"
      ></i>
    </span>
    <span>
      <i
        title="轻微左移"
        class="ri-xl ri-arrow-left-circle-line"
        @click="$emit('cropbox:move', 0 - span, 0)"
      ></i>
    </span>
    <span>
      <i
        title="轻微左旋"
        class="ri-xl ri-anticlockwise-2-line"
        @click="$emit('rotate', span)"
      ></i>
      <i
        title="轻微右旋"
        class="ri-xl ri-clockwise-2-line"
        @click="$emit('rotate', 0 - span)"
      ></i>
    </span>
    <span>
      <i
        title="轻微右移"
        class="ri-xl ri-arrow-right-circle-line"
        @click="$emit('cropbox:move', span, 0)"
      ></i>
    </span>
    <span>
      <i
        title="轻微左裁"
        class="ri-xl ri-arrow-left-line"
        @click="$emit('cropbox:resize', 'horizontal', 0, 0 - span)"
      ></i>
      <i
        title="轻微右扩"
        class="ri-xl ri-arrow-right-line"
        @click="$emit('cropbox:resize', 'horizontal', 0, span)"
      ></i>
    </span>

    <span></span>
    <span></span>
    <span>
      <i
        title="轻微下移"
        class="ri-xl ri-arrow-down-circle-line"
        @click="$emit('cropbox:move', 0, span)"
      ></i>
    </span>
    <span></span>
    <span></span>

    <span></span>
    <span></span>
    <span>
      <i
        title="轻微上裁"
        class="ri-xl ri-arrow-up-line"
        @click="$emit('cropbox:resize', 'vertical', 0, 0 - span)"
      ></i>
      <i
        title="轻微下扩"
        class="ri-xl ri-arrow-down-line"
        @click="$emit('cropbox:resize', 'vertical', 0, span)"
      ></i>
    </span>
    <span></span>
    <span></span>
  </div>
  <!-- 工具栏，底部，裁剪操作时隐藏 -->
  <div class="toolbar bottom" v-show="!cropStatus.cropping">
    <i
      title="移动"
      @click="$emit('drag:mode', 'move')"
      class="ri-xl ri-drag-move-2-line"
      v-if="cropStatus.dragMode != 'move'"
    ></i>
    <i
      title="裁剪"
      @click="$emit('drag:mode', 'crop')"
      class="ri-xl ri-crop-line"
      v-if="cropStatus.dragMode != 'crop'"
    ></i>
    <i
      title="方形"
      @click="$emit('aspectratio:set', (square = !square) ? 1 : NaN)"
      :class="{ active: square }"
      class="ri-xl ri-shape-2-line"
    ></i>
    <i
      title="放大"
      @click="$emit('zoom', 0.1)"
      class="ri-xl ri-zoom-in-line"
    ></i>
    <i
      title="缩小"
      @click="$emit('zoom', -0.1)"
      class="ri-xl ri-zoom-out-line"
    ></i>
    <i
      title="左旋"
      @click="$emit('rotate', -45)"
      class="ri-xl ri-anticlockwise-line"
    ></i>
    <i
      title="右旋"
      @click="$emit('rotate', 45)"
      class="ri-xl ri-clockwise-line"
    ></i>
    <i
      title="倒置"
      @click="$emit('scale', 'x')"
      class="ri-xl ri-arrow-left-right-line"
    ></i>
    <i
      title="翻转"
      @click="$emit('scale', 'y')"
      class="ri-xl ri-arrow-up-down-line"
    ></i>
    <i
      title="更多"
      :class="{ active: more }"
      @click="more = !more"
      class="ri-xl ri-tools-line"
    ></i>
    <i
      title="对比"
      class="ri-xl ri-contrast-drop-line"
      @click="setContrast"
    ></i>
  </div>
  <div class="toolbar ruler" v-show="!cropStatus.cropping && more">
    <i class="ri-xl ri-ruler-line" title="标尺" @click="changeSpan">
      x {{ span }}
    </i>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    cropStatus: {
      type: Object,
      default: () => {
        return {
          cropping: false,
          dragMode: "move",
          previewUrl: null,
        };
      },
    },
  },
  emits: [
    "delete",
    "clear",
    "preview",
    "export",
    "drag:mode",
    "zoom",
    "rotate",
    "scale",
    "aspectratio:set",
    "cropbox:move",
    "cropbox:resize",
  ],
  data() {
    return {
      square: false,
      more: false,
      span: 1,
      contrast: false
    };
  },
  methods: {
    changeSpan() {
      if (this.span === 1) {
        this.span = 5;
      } else if (this.span === 5) {
        this.span = 10;
      } else {
        this.span = 1;
      }
    },
    // 调整按钮图标背景，增加对比度
    setContrast() {
      this.contrast = !this.contrast
      let bg = this.contrast ? 'rgb(245 241 241)' : '';
      document.querySelectorAll('i').forEach((i) => {
        i.style.background = bg;
      });
    }
  },
};
</script>

<style scoped>
div.toolbar {
  position: fixed;
  text-align: center;
  background: rgb(245 241 241 / 0.2);
  left: 50%;
  transform: translateX(-50%);
  margin: 1em auto;
  padding: 5px;
  border-radius: 10px;
  z-index: 8;
}
div.toolbar.top {
  top: 0;
}
div.toolbar.middle {
  top: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  display: grid;
  grid-template-columns: repeat(5, 5em);
  pointer-events: none;
}
div.toolbar.middle i {
  line-height: 2em;
  pointer-events: none;
  pointer-events: auto;
}
div.toolbar.bottom {
  bottom: 0;
}
div.toolbar i {
  cursor: pointer;
  margin: 1px 3px;
  color: #3d77da;
}
div.toolbar i.active {
  color: rgb(231, 76, 60);
}
div.toolbar.ruler {
  bottom: 3em;
}
i {
  line-height: normal;
  border-radius: 25%;
  -webkit-tap-highlight-color: transparent;
}
</style>