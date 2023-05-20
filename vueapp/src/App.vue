<template>
    <HelloWorld />
    默认按钮
    <!--<el-button class="primary">默认按钮</el-button>-->
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import HelloWorld from './components/HelloWorld.vue';

    export default defineComponent({
        name: 'App',
        components: {
            HelloWorld
        }
    });
</script>

<style>
    #app {
    }
</style>