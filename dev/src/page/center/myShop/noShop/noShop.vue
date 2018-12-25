<style scoped lang="less">
.box_{
    width: 100%;
    height: 100%;
    iframe{
        border: none;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
<template>
    <div class="page" :style="{height: height + 'px'}">
        <x-header :left-options="{backText:''}" :title='title' ref="header" id='vux-header'></x-header>
        <div class="box_" :style="{height: height + 'px'}">
            <iframe :src="url" frameborder="0"></iframe>
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
            title: '',
            height: 0,
            url: ''
        }
    },
    created() {
        this.title = this.$route.query.title || '我的店铺';
        this.url = this.$route.query.url || 'https://m.xiepinhui.com.cn/join/index.html';
    },
    mounted() {
        this.$nextTick(()=>{
            this.height = window.innerHeight - this.$refs.header.$el.offsetHeight;
        })
    },
    methods: {

    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
