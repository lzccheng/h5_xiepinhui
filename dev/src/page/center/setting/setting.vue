<style scoped lang="less">
.content{
    .item{
        padding: 0.2rem 0.3rem;
        color: #333333;
        border-bottom: 1px solid #eee;
    }
    .line{
        height: 8px;
        width: 100%;
        background-color: #f8f8f8;
    }
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nav.title' id='vux-header'></x-header>
        <div class="content">
            <!-- <div class="line"></div>   -->
            <div class="">
                <div class="flex flex-pack-justify item" @click="$router.push('/user/password_change')">
                    <span>修改密码</span>
                    <span class="iconfont icon-right-jiantou"></span>
                </div>
                <div class="flex flex-pack-justify item" @click="$router.push('/user/phone_change')">
                    <span>修改手机号</span>
                    <span class="iconfont icon-right-jiantou"></span>
                </div>
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
        XHeader
    },
    data() {
        return {
            nav: {
                title: '设置'
            }
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
