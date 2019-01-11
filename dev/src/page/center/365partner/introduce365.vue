<style scoped lang="less">
.top{
    img{
        width: 100%;
        display: inline-block;
        border: none;
    }
}
.btnimg{
    text-align: center;
    img{
        width: 7.19rem;
        display: inline-block;
        margin: 0.3rem auto 0.1rem;;
    }
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" :title='nav.title' id='vux-header'></x-header>
        <div>
            <div class="top">
                <img src="@/assets/images/new365/top.png" alt="">
                <img src="@/assets/images/new365/top2.png" alt="">
                <img src="@/assets/images/new365/top3.png" alt="">
                <img src="@/assets/images/new365/top4.png" alt="">
            </div>
            <div class="btnimg">
                <img src="@/assets/images/new365/btn.png" @click="$router.push('code')" alt="">
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader,
        
    },
    data() {
        return {
            nav: {
                title: '365小店'
            },
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
