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
                <div class="line"></div>
                <div class="flex flex-pack-justify item" @click="$router.push('paySetting')">
                    <span>支付设置</span>
                    <span class="iconfont icon-right-jiantou"></span>
                </div>
                <div class="flex flex-pack-justify item" @click="goIden" v-if="member_auth_status !== ''">
                    <span>实名认证</span>
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
            },
            member_auth_status: ''
        }
    },
    created() {
        this.getIden();
    },
    mounted() {
        
    },
    methods: {
        async getIden(){
            let data = {
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.newredmessage(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.member_auth_status = res.data.member_info.member_auth_status;
            }
        },
        goIden(){
            if(this.member_auth_status == 3){
                return this.$router.push('/centerFull/identity');
            }
            this.$router.push({
                path: '/centerFull/identity/identityStatus',
                query: {
                    status: this.member_auth_status
                }
            })
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
