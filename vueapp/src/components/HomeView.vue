<template>
    <div class="home">
        <el-container>
            <template>
                <el-page-header @back="goBack">
                    <template #content>
                        <span class="text-large font-600 mr-3"> Title </span>
                    </template>
                </el-page-header>
            </template>
            <script lang="ts" setup>
                const goBack = () => {
                    console.log('go back')
                }
            </script>
        </el-container>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'Home',
    });</script>

<style scoped>
</style>
