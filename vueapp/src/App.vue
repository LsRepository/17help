<template>
    <inputView>

    </inputView>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import InputView from './components/AddOrEdit.vue';
    export default defineComponent({
        name: 'App',
        components: {
            InputView
        }
    });
</script>

<style>
    #app {
    }
</style>