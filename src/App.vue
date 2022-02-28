<template>
  <Picker
    v-if="!src"
    @paste="onPaste($event)"
    :errorMsg="errorMsg"
    @file:changed="onChange"
  />
  <Editor v-else :src="src" />
</template>

<script>
import Picker from "./components/Picker.vue";
import Editor from "./components/Editor.vue";
export default {
  name: "App",
  components: {
    Picker,
    Editor,
  },
  data() {
    return {
      src: '',
      // src: "/static/picture.jpg",
      errorMsg: null,
    };
  },
  mounted() {
    let src = window.location.search.substr(1);
    if (src) {
      this.src = src;
    }
  },
  methods: {
    clear() {
      this.src = null;
    },
    error(errorMsg) {
      // 显示错误信息
      this.errorMsg = errorMsg;
      this.src = null;
    },
    onPaste(e) {
      const { items } = e.clipboardData || window.clipboardData;
      e.preventDefault();
      if (items && items.length > 0) {
        new Promise((resolve, reject) => {
          const item = Array.from(items).pop();
          const error = new Error("请粘贴图片文件或URL");
          if (item.kind === "file") {
            resolve(item.getAsFile());
          } else if (item.kind === "string") {
            item.getAsString((url) => {
              if (/^(?:https?|data):/.test(url)) {
                const xhr = new XMLHttpRequest();
                const alert = () => {
                  reject(error);
                };
                xhr.onabort = alert;
                xhr.onerror = alert;
                xhr.ontimeout = alert;
                xhr.onprogress = () => {
                  if (
                    !/^image\/\w+$/.test(xhr.getResponseHeader("content-type"))
                  ) {
                    xhr.abort();
                  }
                };
                xhr.onload = () => {
                  resolve(xhr.response);
                };
                xhr.open("GET", url, true);
                xhr.responseType = "blob";
                xhr.send();
              } else {
                reject(error);
              }
            });
          } else {
            reject(error);
          }
        })
          .then((blob) =>
            this.read(blob, e).then((data) => {
              this.src = data.url;
            })
          )
          .catch(this.error);
      }
    },
    read(file, event) {
      return new Promise((resolve, reject) => {
        if (!file) {
          resolve();
          return;
        }
        if (/^image\/\w+$/.test(file.type)) {
          if (URL) {
            resolve({
              loaded: true,
              name: file.name,
              type: file.type,
              url: URL.createObjectURL(file),
            });
          } else {
            reject(new Error("您的浏览器不支持此操作。"));
          }
        } else {
          reject(new Error(`请 ${event ? event.type : "选择"}图片文件。`));
        }
      });
    },
    onChange($e) {
      this.errorMsg = null;
      let file = $e.files[0];
      if (!file) {
        return;
      }
      let fr = new FileReader();
      fr.onload = (event) => {
        this.src = event.target.result;
      };
      fr.readAsDataURL(file);
    },
  },
};
</script>