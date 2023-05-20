import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);


//注册ElementUI
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
    .config.compilerOptions.isCustomElement = tag => tag.startsWith('el-')
    ;
//记住一定要最后挂载id，否则无法全局注册
app.mount('#app');