<template>
    <el-upload v-model:file-list="fileList"
               class="upload-demo"
               action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
               :on-preview="handlePreview"
               :on-remove="handleRemove"
               list-type="picture"
               :limit="1"
               :before-upload="beforeAvatarUpload">
        <el-button type="primary">点击上传头像</el-button>
        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
            </div>
        </template>
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

    import type { UploadProps, UploadUserFile, ElMessage } from 'element-plus'

    const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    }

    const handlePreview: UploadProps['onPreview'] = (file) => {
    }
    const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
        if (rawFile.type !== 'image/jpeg') {
            ElMessage.error('Avatar picture must be JPG format!')
            return false
        } else if (rawFile.size / 1024 / 1024 > 2) {
            ElMessage.error('Avatar picture size can not exceed 2MB!')
            return false
        }
        return true
    }
</script>
