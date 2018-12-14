<style scoped lang="less">

</style>
<template>
    <div class="page idnexWrapBox">

    </div>
</template>

<script type="text/ecmascript-6">
export default {
    components: {
    },
    data() {
        return {

        }
    },
    created() {
        let type = this.$route.query.type || '';
        window.location.href = 'https://m.xiepinhui.com.cn/html/pro.html?type=' + type;
    },
    mounted() {

    },
    methods: {

    },
    computed: {
    }
}
</script>
