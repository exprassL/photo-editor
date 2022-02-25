### container, canvas & cropper box
![boxes in cropper.js](cropperJs.jpg "boxes in cropper.js")

### Otions, methods & event
```javascript
const image = document.getElementById("image");
this.cropper = new Cropper(image, {
    viewMode: 0|1|2|3,
    dragMode: 'crop|move|none',
    initialAspectRatio: NaN | Number,
    aspectRatio: NaN | Number,
    preview: document.getElementById("extra"),
    data: null | Object, // available when autoCrop is true
    preview: '' | Element, Array (elements), NodeList or String (selector),
    responsive: true |boolean, // 响应式，改变窗口大小时re-render
    restore: true | false, // 改变窗口大小时，存储cropped area data
    checkCrossOrigin: true | false,
    checkOrientation: true | false,
    modal: true | false, // 显示在image之上、crop box 之下
    guides: true | false, // dashed lines, crop box 之上
    center: true | false, // 中心点指示
    hight: true | fasle, // crop box 之上 white modal，使 crop box 高亮
    background: true | false, // 网格背景
    autoCrop: false | false,
    autoCropArea: 0.8 | Number,
    movable|rotatable|scalable|zoomable|zoomOnTouch|zoomOnWheel: true | false, // 针对 image
    wheelZoomRatio: 0.1 | Number, // 针对 image
    cropBoxmovable: true | false,
    cropBoxResizable: true | false,
    toggleDragModeOnDblclick: true | false, // 'crop' | 'move'
    minContainerWidth: 200 | Number,
    minContainerHeight: 100 | Number,
    minCanvasWidth: 0 | Number, // for image wrapper
    minCanvasHeight: 0 | Number,
    minCropBoxWidth: 0 | Number, // 相对页面
    minCropBoxHeight: 0 | Number,
    ready|cropstart|cropmove|cropend|crop|zoom: Function, // shortcus of events
    ready() {
    // 除setAspectRatio、replace、destroy外，
    // 其他方法都应在ready后调用
    // 手动打开 crop box
    // this.cropper.crop();
    // 重置 image 和 crop box 到初始状态
    // this.cropper.reset();
    // 清除 crop box
    // this.cropper.clear();
    // 替换图片源，（如果hasSameSize == true）重建 cropper
    // this.cropper.replace(url:String[, hasSameSize:boolean])
    // 启用/解冻 cropper
    // this.cropper.enable();
    // 停用/冻结 the cropper
    // this.cropper.disable();
    // 销毁 cropper, 从 image 移除相关实例
    // this.cropper.destroy();
    // 相对移动 canvas (image wrapper)（不是 crop box），单位 px，offsetY 缺省值等于 offsetX
    // this.cropper.move(offsetX:Number[, offsetY:Number:optional:defalut=offsetX]);
    // 移动 canvas (image wrapper)（不是 crop box）到绝对位置（相对），y 缺省值等于 x
    // this.cropper.moveTo(x:Number[, y:Number:optional:default=x])
    // 放大(ratio > 0)或缩小(ratio < 0) canvas (image wrapper)
    // this.cropper.zoom(ratio);
    // 缩放 canvas (image wrapper) 到原始尺寸的指定比例
    // ratio 必须为正，pivot 规定缩放中心点(基于 cropper container 左上角位置)，{x: Number, y: Number}
    // this.cropper.zoomTo(ratio[, pivot])
    // 相对旋转指定角度
    // this.cropper.rotate(degree);
    // 旋转到指定角度（相对原始位置）
    // this.cropper.rotateTo(degree);
    // 缩放+翻转？对称转换？
    // this.scale(scaleX[, scaleY])
    // this.scaleX(scaleX);
    // this.scaleY(scaleY);
    // 返回最终裁剪区域的位置和大小（基于原始图片的实际尺寸），rounded 规定是否近似（四舍五入）取整
    // 基于返回值：
    // {
    //   x: Number, offset left,
    //   y: Number, offset top,
    //   with: Number,
    //   height: Number,
    //   rotate: Number, degrees
    //   scaleX: Number,
    //   scaleY: Number
    // }
    // 后端可直接裁剪图片：rotate -> scale -> crop
    // this.cropper.getData([rounded:Boolean]);
    // 使用data 重设 cropped area 位置和大小
    // this.setData(data);
    // 返回Container 尺寸：{width: Number, height: Number}
    this.cropper.getContainerData();
    // 返回图片信息：left/top/width/height/naturalWidth/
    // naturalHeight/aspectRatio/rotate/scaleX/scaleY
    this.cropper.getImageData();
    // 返回canvas (image wrapper) 位置和尺寸：
    // left/top/width/height/naturalWidth/naturalHeight
    this.cropper.getCanvasData();
    // left/top/width/height
    // this.cropper.setCanvasData();
    // left/top/width/height
    this.cropper.getCropBoxData();
    // this.cropper.setCropBoxData();
    // 返回画入 cropped image 的 canvas(HTMLCanvasElement)，有损压缩；
    // 如未裁剪，则返回的 canvas 画入原图；
    // HTMLCanvas.toDataURL() -> base64 data url
    // HTMLCanvas.toBlob() -> blob for FormData
    // this.cropper.getCroppedCanvas(
    //   widht: Number,
    //   height: Number,
    //   minWidth: Number:default=0,
    //   minHeight: Number:default=0,
    //   maxWidth: Number:default=Infinity,
    //   maxHeight: Number:default=Infinity,
    //   fillColor: String:default='transparent',
    //   imageSmoothingEnabled: boolean:default=true,
    //   imageSmoothingQuality: 'low|medium|high'
    // );
    // mode: 'none|crop|move', 默认 'none'
    this.cropper.setDragMode([mode]);
    },
    crop(event) {
    console.log(event.detail.x);
    console.log(event.detail.y);
    console.log(event.detail.width);
    console.log(event.detail.height);
    console.log(event.detail.rotate);
    console.log(event.detail.scaleX);
    console.log(event.detail.scaleY);
    },
});
```