import { createApp } from 'vue'
import 'element-plus/lib/theme-chalk/index.css';
import '@/style/index.scss'
import ElementPlus from 'element-plus';
import router from './router/index';
import store from './store/index';
import App from './App.vue'
import { get,post } from './api/index'
import VueWechatTitle from 'vue-wechat-title'
const app = createApp(App)
app.config.globalProperties.$get = get
app.config.globalProperties.$post = post
app.use(router)
app.use(store)
app.use(VueWechatTitle)
app.use(ElementPlus, { zIndex: 5000 })
app.mount('#app')
