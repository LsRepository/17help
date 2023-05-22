<template>
    <div id="inputview">
        <div class="common-layout">
            <el-container>
                <el-header style="text-align:center">
                    <h2>VIP信息录入</h2>
                </el-header>
                <div style="border-bottom: 1px solid #409eff"></div>
                <div style="margin: 20px" />
                <el-main>
                    <el-form ref="ruleFormrRef"
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
                                    <el-input v-model="ruleForm.nickname" placeholder="唯一，便于内部检索" autocomplete="off" />
                                </el-form-item>
                                <el-select v-model="ruleForm.platform" clearable placeholder="Select">
                                    <el-option v-for="item in options"
                                               :key="item.value"
                                               :label="item.label"
                                               :value="item.value" />
                                </el-select>
                                <el-form-item label="昵称：" prop="platformnickName">
                                    <el-input v-model="ruleForm.platformnickName" />
                                </el-form-item>
                                <el-form-item label="个人主页（URL)：" prop="personalhomepage">
                                    <el-input v-model="ruleForm.personalhomepage" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <h3>个人资料</h3>
                                <div class="grid-content ep-bg-purple" />

                                <el-form-item label="真实姓名：" prop="name">
                                    <el-input v-model="ruleForm.name" />
                                </el-form-item>
                                <el-form-item label="生日：" prop="birthday">
                                    <el-input v-model="ruleForm.birthday" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <h3>工作/技能</h3>
                                <div class="grid-content ep-bg-purple" />
                                <el-form-item label="公司：" prop="cpmpany">
                                    <el-input v-model="ruleForm.company" placeholder="简称即可" />
                                </el-form-item>
                                <el-form-item label="所在城市：" prop="city">
                                    <el-input v-model="ruleForm.city" />
                                </el-form-item>
                                <el-form-item label="擅长领域：" prop="merit">
                                    <el-input v-model="ruleForm.merit" placeholder="比如web应用java SQL 微信小程序" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <h3>联系方式</h3>
                                <div class="grid-content ep-bg-purple" />
                                <el-form-item label="移动电话：" prop="phone">
                                    <el-input v-model="ruleForm.phone" />
                                </el-form-item>
                                <el-form-item label="微信：" prop="wechant">
                                    <el-input v-model="ruleForm.wechant" />
                                </el-form-item>
                                <el-form-item label="QQ：" prop="qq">
                                    <el-input v-model="ruleForm.qq" />
                                </el-form-item>
                                <el-form-item label="钉钉：" prop="dingTalk">
                                    <el-input v-model="ruleForm.dingTalk" />
                                </el-form-item>
                                <el-form-item label="Email：" prop="email">
                                    <el-input v-model="ruleForm.email" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="2"></el-col>
                        </el-row>
                    </el-form>
                    <el-button style="margin-left:45%" type="primary" @click="submitForm">Submit</el-button>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { reactive, ref } from 'vue'
    //import type { FormInstance, FormRules } from 'element-plus'
    const labelPosition = ref('top')

    //const formSize = ref('default')
    //const ruleFormRef = ref<FormInstance>()
    //const ruleForm = reactive({
    //    nickname: '',
    //    platform: '',
    //    platformnickName: '',
    //    personalhomepage: '',
    //    name: '',
    //    birthday: '',
    //    cpmpany: '',
    //    city: '',
    //    merit: '',
    //    phone: '',
    //    wechant: '',
    //    qq: '',
    //    dingTalk: '',
    //    email: '',
    //})

    //const rules = ({
    //    nickname: [
    //        { required: true, message: '请输入昵称', trigger: 'blur' },
    //    ],
    //    platform: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: '平台最小长度为3最大长度为5', trigger: 'blur' },
    //    ],
    //    platformnickName: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    personalhomepage: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    name: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    birthday: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    cpmpany: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    city: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    merit: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    phone: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ], wechant: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    qq: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    dingTalk: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //    email: [
    //        { required: true, message: 'Please input Activity name', trigger: 'blur' },
    //        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    //    ],
    //})
    //const options = [
    //    {
    //        value: 'B站',
    //        label: 'B站',
    //    },
    //    {
    //        value: '知乎',
    //        label: '知乎',
    //    },
    //    {
    //        value: '快手',
    //        label: '快手',
    //    },
    //    {
    //        value: '抖音',
    //        label: '抖音',
    //    },
    //    {
    //        value: '博客源',
    //        label: '博客源',
    //    },
    //]
    //const onSubmit = () => {
    //    ruleFormRef.value?.validate((valid) => {
    //        if (valid) {
    //            // 表单验证通过，执行接下来的操作
    //            console.log('submit form');
    //        } else {
    //            // 表单验证不通过
    //            console.log('validate error');
    //        }
    //    });

</script>
<script lang="ts">
    const ruleForm = ({
        nickname: '',
        platform: '',
        platformnickName: '',
        personalhomepage: '',
        name: '',
        birthday: '',
        cpmpany: '',
        city: '',
        merit: '',
        phone: '',
        wechant: '',
        qq: '',
        dingTalk: '',
        email: '',
        usernameErrorMsg:'',
    })
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

    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'InputView',
        data() {
            return {
                reuleForm: Object
            }
        },
        watch: {
            nickname: function (newVal, oldVal) {
                if (!newVal) {
                    // 用户名为空时显示错误消息
                    this.usernameErrorMsg = '用户名不能为空'
                } else {
                    this.usernameErrorMsg = ''
                }
            },
            password: function (newVal, oldVal) {
                if (!newVal) {
                    // 密码为空时显示错误消息
                   // this.passwordErrorMsg = '密码不能为空'
                } else {
                    //this.passwordErrorMsg = ''
                }
            }
        }, methods: {
            submitForm() {
                // 表单提交逻辑
            }
        }

    });


</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
</style>