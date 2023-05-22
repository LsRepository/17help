import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import router from './router'
app.use(router)


//ע��ElementUI
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
app.use(ElementPlus)
    ;

//��סһ��Ҫ������id�������޷�ȫ��ע��
app.mount('#app');