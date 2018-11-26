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
        <x-header :left-options="{backText:''}" title='我的店铺' ref="header" id='vux-header'></x-header>
        <div class="box_" :style="{height: height + 'px'}">
            <iframe src="https://m.xiepinhui.com.cn/join/index.html" frameborder="0"></iframe>
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
            height: 0
        }
    },
    created() {

    },
    mounted() {
        this.$nextTick(()=>{
            this.height = window.innerHeight - this.$refs.header.$el.offsetHeight;
            console.log(this.height)
        })
    },
    methods: {

    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
