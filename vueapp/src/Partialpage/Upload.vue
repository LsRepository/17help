<template>
    <el-upload v-model:file-list="fileList"
               class="upload-demo"
               action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
               :on-preview="handlePreview"
               :on-remove="handleRemove"
               list-type="picture"
               :limit="1"
               :before-upload="beforeAvatarUpload"
               on-success
               >
        <el-button type="primary">点击上传头像</el-button>
    </el-upload>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'Upload',
    })
        ;
</script>
<script lang="ts" setup>

    import type { UploadProps, UploadUserFile } from 'element-plus'
    import { ElMessage } from 'element-plus'
    const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
        console.log(uploadFile, uploadFiles)
    }

    const handlePreview: UploadProps['onPreview'] = (file) => {
        console.log(file)
    }
    const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
        if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
            ElMessage.error('上传图片格式必须为JPEG或者PNG!')
            return false
        } else if (rawFile.size / 1024 / 1024 > 2) {
            ElMessage.error('图片大小不能超过2MB!')
            return false
        }
        console.log(FileList)
        return true
    }
</script>
