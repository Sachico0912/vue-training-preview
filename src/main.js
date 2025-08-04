import { createApp } from 'vue' // Vue 的方法
import './style.css'
import App from './AppMain.vue' // Vue 的根元件
import router from './router'

createApp(App).use(router).mount('#app') //建構 Vue 的環境
