import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import router from './router'
app.use(router)


//ע��ElementUI
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

//ע��axios
import 'axios'
//ע�����ڸ�ʽ
import dayjs from 'dayjs'
//ע�����԰�
import 'dayjs/locale/zh-cn'
//���ڸ�ʽʹ������
dayjs.locale('zh-cn')
//ȫ��ע��
import locale from 'element-plus/lib/locale/lang/zh-cn'
//ȫ��ʹ��element-plus������
app.use(ElementPlus, {
    locale
})

//��סһ��Ҫ������id�������޷�ȫ��ע��
app.mount('#app');