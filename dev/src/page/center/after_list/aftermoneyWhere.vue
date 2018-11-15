<style scoped lang="less">

</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" title='鞋品荟' id='vux-header'></x-header>
        <div>
            钱去向
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            refund_id:"",
            dataInfo:"",
        }
    },
    created() {
        this.refund_id = this.$route.query.refund_id;
        this.show();
    },
    mounted() {

    },
    methods: {
        show(){

        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
