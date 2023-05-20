import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);


//×¢²áElementUI
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/dist/index.css'
app.use(ElementPlus)
    .config.compilerOptions.isCustomElement = tag => tag.startsWith('el-')
    ;

app.mount('#app');