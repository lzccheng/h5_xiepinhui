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
            <div>
                <div class="flex flex-pack-justify item" v-if="is_paypwd === false" @click="$router.push('/moblieCodeTrade')">
                    <span>设置支付密码</span>
                    <span class="iconfont icon-right-jiantou"></span>
                </div>
                <div class="flex flex-pack-justify item" v-if="is_paypwd" @click="$router.push('paySettinNext')">
                    <span>修改支付密码</span>
                    <span class="iconfont icon-right-jiantou"></span>
                </div>
                <div class="flex flex-pack-justify item" v-if="is_paypwd" @click="$router.push('/moblieCodeTrade')">
                    <span>忘记支付密码</span>
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
                title: '支付密码'
            },
            is_paypwd: ''
        }
    },
    created() {

    },
    mounted() {
        this.getBalance();
    },
    methods: {
        async getBalance(){
            let data = {
                plat: 3,
                token:this.token,
                account:this.account,
                sub_member_id:''
            };
            
            const [err, res] = await api.getBalance(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.is_paypwd = res.data.is_paypwd;
            }
            
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
