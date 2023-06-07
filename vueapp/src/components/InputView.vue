<template>
    <div class="inputview">
        <div class="common-layout">
            <el-container>
                <el-header style="text-align:center">
                    <h2>VIP信息录入</h2>
                </el-header>
                <div style="border-bottom: 1px solid #409eff"></div>
                <el-radio-group v-model="labelPosition" label="label position">
                    <el-radio-button label="left">Left</el-radio-button>
                    <el-radio-button label="right">Right</el-radio-button>
                    <el-radio-button label="top">Top</el-radio-button>
                </el-radio-group>
                <div style="margin: 20px" />
                <el-main>
                    <el-form ref="ruleFormRef"
                             :model="ruleForm"
                             :rules="rules"
                             :label-position="labelPosition"
                             label-width="100px"
                             class="demo-ruleForm"
                             :size="formSize"
                             status-icon
                             style="max-width: 100%">
                        <el-row :gutter="30">
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <h3>账户信息</h3>
                                <el-form-item label="昵称：（* 必填）" prop="nickname">
                                    <el-input v-model="ruleForm.nickname" placeholder="唯一，便于内部检索" autocomplete="off" clearable />
                                </el-form-item>
                                <el-form-item label="输入您的平台" prop="platform">
                                    <el-input v-model="ruleForm.platform" clearable />
                                </el-form-item>
                                <el-form-item label="所在平台昵称：" prop="platformNickName">
                                    <el-input v-model="ruleForm.platformNickName" clearable />
                                </el-form-item>
                                <el-form-item label="个人主页（URL)：" prop="personalHomepage">
                                    <el-input v-model="ruleForm.personalHomepage" clearable />
                                </el-form-item>
                                <div v-for="item in ruleForm.platformNickNameArray">
                                    <el-badge class="item">
                                        <el-button type="primary">{{item}}</el-button>
                                    </el-badge>
                                </div>
                                <br />
                                <el-button @click="onSubmitPlatformNickName">继续添加</el-button>
                            </el-col>
                            <el-col :span="5">
                                <h3>个人资料</h3>
                                <div class="grid-content ep-bg-purple" />
                                <el-form-item label="真实姓名：" prop="name">
                                    <el-input v-model="ruleForm.name" clearable />
                                </el-form-item>
                                <el-form-item label="生日：" prop="birthday">
                                    <el-date-picker v-model="ruleForm.birthday"
                                                    type="date"
                                                    placeholder="请选择日期吧"
                                                    :disabled-date="disabledDate"
                                                    style="width:100%"
                                                    format="YYYY年MM月DD日 dddd" />
                                </el-form-item>
                                <el-form-item label="性别：" prop="gender">
                                    <el-radio-group v-model="ruleForm.gender">
                                        <el-radio :label="true">男</el-radio>
                                        <el-radio :label="false">女</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="上传头像" prop="gender" style="width:100%">
                                    <Upload></Upload>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <h3>工作/技能</h3>
                                <div class="grid-content ep-bg-purple" />
                                <el-form-item label="公司：" prop="company">
                                    <el-input v-model="ruleForm.company" placeholder="简称即可" clearable />
                                </el-form-item>
                                <el-form-item label="所在城市：" prop="city">
                                    <el-input v-model="ruleForm.city" clearable />
                                </el-form-item>
                                <el-form-item label="擅长领域：" prop="merit">
                                    <el-input v-model="ruleForm.merit" placeholder="请输入您的特长" clearable />
                                </el-form-item>
                                <el-form-item label="工作年限：(单位年)" prop="workYears">
                                    <el-input-number v-model="ruleForm.workYears"  style="width:100%" />
                                </el-form-item>
                                <div v-for="item in ruleForm.meritWorkYearsArray">
                                    <el-badge class="item">
                                        <el-button type="primary">{{item}}</el-button>
                                    </el-badge>
                                </div>
                                <br />
                                <el-button @click="onSubmitMeritWorkYearsText">继续添加</el-button>
                            </el-col>
                            <el-col :span="5">
                                <h3>联系方式</h3>
                                <div class="grid-content ep-bg-purple" />
                                <el-form-item label="移动电话：" prop="phone">
                                    <el-input v-model.number="ruleForm.phone" clearable />
                                </el-form-item>
                                <el-form-item label="微信：" prop="wechant">
                                    <el-input v-model="ruleForm.wechant" clearable />
                                </el-form-item>
                                <el-form-item label="QQ：" prop="qq">
                                    <el-input v-model.number="ruleForm.qq" clearable />
                                </el-form-item>
                                <el-form-item label="Email：" prop="email">
                                    <el-input v-model="ruleForm.email" clearable />
                                </el-form-item>
                                <el-form-item label="其他：" prop="rests">
                                    <el-input v-model="ruleForm.rests" clearable />
                                </el-form-item>
                            </el-col>
                            <el-col :span="2"></el-col>
                        </el-row>
                    </el-form>
                    <el-button style="margin-left:45%" type="primary" @click="onSubmit">提交</el-button>
                </el-main>
                <el-footer></el-footer>
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
    import { CaretBottom } from '@element-plus/icons-vue'
    //导入axios请求
    import request from '../Axios/request'
    //此常量用来让label默认定为在输入框上方。
    const labelPosition = ref('top')
    //计数器绑定值
    const num = ref(1)
    //此常量用来设置form表单尺寸为默认。
    const formSize = ref('default')
    //此常量在代码使用 ref 函数创建了一个名为 ruleFormRef 的引用数据对象
    //并将其初始值设置为 undefined。在后续的代码中，该对象会被赋值为一个表单实例对象，
    //用于在提交表单时进行表单验证，通过 value 属性来获取该对象的值。
    const ruleFormRef = ref<any>()
    //form表单绑定的变量
    const ruleForm = reactive({
        nickname: '',
        platform: '',
        platformNickName: '',
        personalHomepage: '',
        name: '',
        birthday: '',
        gender: Boolean,
        company: '',
        city: '',
        merit: '',
        workYears: '',
        phone: '',
        wechant: '',
        qq: '',
        email: '',
        rests: '',
        platformNickNameArray: [],
        meritWorkYearsArray: []
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
            { min: 1, max: 10, message: '平台最小长度为1最大长度为10', trigger: 'blur' },
        ],
        platformNickName: [
            { max: 20, message: '平台昵称最长为20', trigger: 'blur' },
        ],
        personalHomepage: [
            { type: 'url', message: 'url格式不合法', trigger: 'blur' },
        ],
        name: [
            { min: 1, max: 5, message: '姓名长度最小为1最大长度为5', trigger: 'blur' },
        ],
        birthday: [
        ],
        company: [
            { min: 2, max: 10, message: '公司名称长度最小为2最大长度为10', trigger: 'blur' },
        ],
        city: [
            { min: 2, max: 5, message: '城市最小长度为 2 到 5', trigger: 'blur' },
        ],
        merit: [
            { min: 1, max: 10, message: '特长最小长度为 1 到 10', trigger: 'blur' },
        ],
        workYears: [
        ],
        phone: [
            { type: 'number', message: 'QQ号必须为数字类型', trigger: 'blur' },
        ],
        wechant: [
            { min: 1, max: 20, message: '微信最小长度1位最大长度20位', trigger: 'blur' },
        ],
        qq: [
            { type: 'number', message: 'QQ号必须为数字类型', trigger: 'blur' },
        ],
        email: [
            { max: 20, message: '邮箱最大长度20', trigger: 'blur' },
            //{ validator: checkemail, trigger: 'blur' }
        ],
    })

    const radio = ref(2)

    //点击提交之后进行验证·
    const onSubmit = () => {
        if (ruleForm.nickname.length > 0) {
            const instance: any = getCurrentInstance();
            ruleForm.birthday = "";
            console.log(typeof (ruleForm))
            request('http://localhost:7089/Vip', "POST", JSON.parse(JSON.stringify(ruleForm)), {})
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }

    //提交平台昵称
    const onSubmitPlatformNickName = () => {
        if (ruleForm.platform.length > 0 && ruleForm.platformNickName.length > 0) {
            ruleForm.platformNickNameArray.push(((ruleForm.platform + " " + ruleForm.platformNickName) as never))
            ruleForm.platform = ""
            ruleForm.platformNickName = ""
        } else {

        }
    }

    //提交工作技能及时长
    const onSubmitMeritWorkYearsText = () => {
        if (ruleForm.merit.length > 0) {
            ruleForm.meritWorkYearsArray.push(((ruleForm.merit + " " + ruleForm.workYears + "年") as never));
            ruleForm.merit = "";
        }
    }

</script>

<script lang="ts">
    import Upload from '@/Partialpage/Upload.vue'
    export default defineComponent({
        name: 'InputView',
        components: {
            Upload
        }
    })
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .el-select-v2 {
        height: 30px !important
    }

    .example-showcase .el-select-v2 {
        margin-right: 20px;
    }

    .item {
        margin-top: 10px;
        margin-right: 40px;
    }

    .el-dropdown {
        margin-top: 1.1rem;
    }
</style>
