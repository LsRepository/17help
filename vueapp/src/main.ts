import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import router from './router'
app.use(router)


//注册ElementUI
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

//注册axios
import axios from 'axios'
export default axios
//注册日期格式
import dayjs from 'dayjs'
//注册语言包
import 'dayjs/locale/zh-cn'
//日期格式使用中文
dayjs.locale('zh-cn')
//全局注册
import locale from 'element-plus/lib/locale/lang/zh-cn'
//全局使用element-plus和中文
app.use(ElementPlus,{
    locale
})

const http = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 5000
})

app.config.globalProperties.$http = http

//记住一定要最后挂载id，否则无法全局注册
app.mount('#app');