<template>
    <el-upload v-model:file-list="fileList"
               class="upload-demo"
               action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
               :on-preview="handlePreview"
               :on-remove="handleRemove"
               list-type="picture"
               :limit="1">
        <el-button type="primary">Click to upload</el-button>
        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
            </div>
        </template>
    </el-upload>
</template>
<script lang="ts">
    export default defineComponent({
        name: 'InputView',
    })
        ;
</script>
<script lang="ts" setup>

    import { ref, defineComponent } from 'vue'

    import type { UploadProps, UploadUserFile } from 'element-plus'



    const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
        console.log(uploadFile, uploadFiles)
    }

    const handlePreview: UploadProps['onPreview'] = (file) => {
        console.log(file)
    }
</script>
