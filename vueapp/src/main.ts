import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import router from './router'
app.use(router)


//注册ElementUI
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
app.use(ElementPlus)
    ;

//记住一定要最后挂载id，否则无法全局注册
app.mount('#app');