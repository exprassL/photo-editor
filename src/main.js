const { createApp } = require('vue');
import App from "./App.vue";

const confs = {
    registerData: {
        src: 'https://t8.baidu.com/it/u=2555169620,754667362&fm=167&app=3000&size=w560&q=100&n=0&f=JPEG&fmt=auto?sec=1646931600&t=25ecd67f2132d78ae06a9d0bd1a85d96',
        apiUrl: '/api/crop'
    }
}
createApp(App, confs).mount("#app");
