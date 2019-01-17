<style scoped lang="less">
.contentbox{
    background-color: #f8f8f8;
    padding: .2rem;
}

</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" title='365小店7折专区' id='vux-header'></x-header>
        <div class="contentbox">
            <goods-list pearentClass="gooditem"></goods-list>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
import GoodsList from '@/components/goodsList365';
export default {
    components: {
        XHeader,
        GoodsList
    },
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
