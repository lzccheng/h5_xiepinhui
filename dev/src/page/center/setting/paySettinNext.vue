<style scoped lang="less">
.content{
    .input{
        padding: 0.3rem;
        border-bottom: 1px solid #eee;
        input{
            border: none;
            &::placeholder{
                color: #666666;
                font-size: 14px;
            }
        }
    }
    .line{
        height: 8px;
        width: 100%;
        background-color: #f8f8f8;
    }
    .btn{
        margin-top: 5rem;
    }
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nav.title' id='vux-header'></x-header>
        <div class="content">
            <!-- <div class="line"></div> -->
            <div class="input">
                <input type="password" v-model="pwd" placeholder="输入原密码">
            </div>
            <div class="btn">
                <span @click="onHandleNext">下一步</span>
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
                title: '修改支付密码'
            },
            pwd: ''
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        async onHandleNext(){
            if(!this.pwd){
                return this.$vux.toast.text('请输入原密码', 'top');
            }
            let data = {
                token: this.token,
                account: this.account,
                pwd: this.$encrypt(this.pwd)
            }
            const [err, res] = await api.checkPayPwd(data);
            if (err) {
                this.$vux.toast.text(err.msg, 'top');
                return;
            }
            if(res.code == 2000){
                this.$router.push('/setTradeCode');
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
