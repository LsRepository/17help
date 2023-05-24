<template>
    <div class="inputview">
        <div class="common-layout">
            <el-container>
                <el-header style="text-align:center">
                    <h2>找到VIP</h2>
                </el-header>
                <div style="border-bottom: 1px solid #409eff"></div>
                <!--如果没有查询条件，就分页显示所有的VIP-->
                <el-form-item label="昵称：（* 必填）" prop="nickname">
                    <el-input v-model="ruleForm.nickname" placeholder="唯一，便于内部检索" autocomplete="off" />
                </el-form-item>

                <el-form-item label="擅长领域：" prop="merit">
                    <el-select-v2 v-model="ruleForm.merit"
                                  :options="meritoptions"
                                  placeholder="请输入您的特长"
                                  style="width: 100%;  vertical-align: middle"
                                  allow-create
                                  filterable
                                  multiple
                                  clearable />
                </el-form-item>
                <el-form-item label="工作年限：" prop="merit">
                    <el-select-v2 v-model="ruleForm.merit"
                                  :options="meritoptions"
                                  style="width: 100%;  vertical-align: middle"
                                  placeholder="" />
                </el-form-item>





                <el-footer>Footer</el-footer>
            </el-container>
        </div>
    </div>

</template>

<script lang="ts" setup>
    //注册函数
    //defineComponent是vue3提供的一个函数，它接受一个配置对象，包含了组件的各种选项和逻辑，最终返回一个组件对象。
    //reactive 是Vue 3 提供的用于创建响应式数据对象。
    //ref 是vue3引用数据对象的函数。
    import { defineComponent, reactive, ref, getCurrentInstance } from 'vue'
    import Axios from 'axios'
    //此常量用来让label默认定为在输入框上方。
    const labelPosition = ref('top')

    //此常量用来设置form表单尺寸为默认。
    const formSize = ref('default')

    //此常量在代码使用 ref 函数创建了一个名为 ruleFormRef 的引用数据对象
    //并将其初始值设置为 undefined。在后续的代码中，该对象会被赋值为一个表单实例对象，
    //用于在提交表单时进行表单验证，通过 value 属性来获取该对象的值。
    const ruleFormRef = ref<any>()

    //特长可选项
    const meritArry = ['c#', 'java', 'sql', 'mySql', 'c++', 'vue', 'cli', 'html', 'css', 'jquery']

    //遍历特长数组放到可选项里
    const meritoptions = meritArry.map((item, idx) => ({
        value: item,
        label: `${meritArry[idx % 10]}`,
    }))

    //form表单绑定的变量
    const ruleForm = reactive({
        nickname: '',
        platform: '',
        platformnickName: '',
        personalhomepage: '',
        name: '',
        birthday: '',
        company: '',
        city: '',
        merit: '',
        phone: '',
        wechant: '',
        qq: '',
        dingTalk: '',
        email: '',
    })

    //邮箱的效验
    const checkemail = (rule: any, value: any, callback: any) => {
        setTimeout(() => {
            if (!isEmailValid(ruleForm.email)) {
                callback(new Error('邮箱格式不正确'))
            } else {
                callback()
            }
        }, 1000)
    }

    //验证邮箱的格式
    const isEmailValid = (email: any) => {
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(email);
    }

    //禁用今天之后的日期
    const disabledDate = (time: Date) => {
        return time.getTime() > Date.now()
    }

    //表单绑定的值效验规则
    const rules = ({
        nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 1, max: 20, message: '昵称最小长度为1最大长度为20', trigger: 'blur' },
        ],
        platform: [
            { required: true, message: '请输入平台', trigger: 'blur' },
            { min: 1, max: 10, message: '平台最小长度为1最大长度为10', trigger: 'blur' },
        ],
        platformnickName: [
            { required: true, message: '请输入平台昵称', trigger: 'blur' },
            { max: 20, message: '平台昵称最长为20', trigger: 'blur' },
        ],
        personalhomepage: [
            { required: true, message: '请输入个人主页Url', trigger: 'blur' },
            { type: 'url', message: 'url格式不合法', trigger: 'blur' },
        ],
        name: [
            { required: true, message: '请输入本人真实姓名', trigger: 'blur' },
            { min: 1, max: 5, message: '姓名长度最小为1最大长度为5', trigger: 'blur' },
        ],
        birthday: [
            { required: true, message: '请选择生日日期', trigger: 'blur' },
        ],
        company: [
            { required: true, message: '请输入所在公司名称', trigger: 'blur' },
            { min: 2, max: 10, message: '公司名称长度最小为2最大长度为10', trigger: 'blur' },
        ],
        city: [
            { required: true, message: '请输入城市', trigger: 'blur' },
            { min: 2, max: 5, message: '城市最小长度为 2 到 5', trigger: 'blur' },
        ],
        merit: [
            { required: true, message: '说一个特长呗', trigger: 'blur' },
        ],
        phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { type: 'number', message: 'QQ号必须为数字类型', trigger: 'blur' },
        ], wechant: [
            { required: true, message: '请输入微信号', trigger: 'blur' },
            { min: 1, max: 20, message: '微信最小长度1位最大长度20位', trigger: 'blur' },
        ],
        qq: [
            { required: true, message: '请输入QQ号', trigger: 'blur' },
            { type: 'number', message: 'QQ号必须为数字类型', trigger: 'blur' },

        ],
        dingTalk: [
            { required: true, message: '请输入钉钉账号', trigger: 'blur' },
            { min: 6, max: 20, message: '钉钉账户必须在6位到20位以内', trigger: 'blur' },
        ],
        email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { max: 20, message: '邮箱最大长度20', trigger: 'blur' },
            { validator: checkemail, trigger: 'blur' }
        ],
    })

    //平台的可选项
    const options = [
        {
            value: 'B站',
            label: 'B站',
        },
        {
            value: '知乎',
            label: '知乎',
        },
        {
            value: '快手',
            label: '快手',
        },
        {
            value: '抖音',
            label: '抖音',
        },
        {
            value: '博客源',
            label: '博客源',
        },
    ]



    //点击提交之后进行验证·
    const onsubmit = () => {
        ruleFormRef.value.validate((valid: boolean) => {
            const instance: any = getCurrentInstance();
            console.log(ruleForm.birthday)
            Axios.post('https://localhost:7089/Vip')
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.error(error)
                })
            console.log(ruleForm.birthday);
            if (valid) {
            }
        })
    }
</script>

<script lang="ts">
    export default defineComponent({
        name: 'InputView',
     
        })
        ;
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .el-select-v2 {
        height: 30px !important
    }
</style>