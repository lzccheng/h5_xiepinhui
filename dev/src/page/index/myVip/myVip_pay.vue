<style scoped lang="less">
.vip-pay-touxiang{
  background: #fff;
  padding: 10px 15/50rem;
}
.touxiang{
  width: 70/50rem;
  height: 70/50rem;
  border-radius: 100/50rem;
}
.user-info{
  padding-left: 10/50rem;
  font-size: 12pt;
}
.mingpai-bg{
  background: #E8E8E8;
  color: #787878;
  padding: 0 5/50rem;
  border-radius: 100/50rem;
  font-size: 10pt;
}
.vip-info{
  position: relative;
  padding: 5/50rem 15/50rem;
  background: #fff;
  margin-top: 10/50rem;
}
.info-lable{
  font-size: 12pt;
}
.vip-shuoming{
  position: absolute;
  right: 15/50rem;
  top: 0;
  margin-top: 5/50rem;
}
.shuoming-title{
  font-size: 10pt;
}
.icon-wenhao{
  position: relative;
  top: -3/50rem;
}
.pay-info{
  background: #fff;
  padding:10px 15/50rem;
}
.info-box{
  background: #FFFBF1;
  border-radius: 5/50rem;
  padding: 10/50rem;
}
.info-title{
  color: #DCA313;
  font-size: 12pt;
  line-height: 30/50rem;
}
.old-info-title{
  font-size: 12pt;
  color: #C3C3C3;
  line-height: 30/50rem;
}
.shanchuxian{
  text-decoration: line-through;
}
.bottom-btn{
  width: 100%;
  position: fixed;
  bottom: 0;
  line-height: 51/50rem;
  text-align: center;
  background:#61D8D0;
  color: #fff;
  font-size: 12pt;
}
.page{
    background-color: #f8f8f8;
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div class="vip-pay-touxiang flex flex-align-center">
                <img class="touxiang" :src="userInfo.member_avatar"/>
                <div class="user-info">
                <div class="user-name">{{userInfo.member_nick}}</div>
                <div class="user-mingpai">
                    <span class="mingpai-bg" v-if="userInfo.member_grade==0">普通用户</span>
                    <span class="mingpai-bg" v-if="userInfo.member_grade==1">高级用户</span>
                    <span class="mingpai-bg" v-if="userInfo.member_grade==2">钻石用户</span>
                </div>
                </div>
            </div>
            <div class="vip-info flex ">
                <div v-if="vipType==0">
                    <span class="info-lable">高级会员</span>
                    <div class="vip-shuoming flex" @click='xieyi'>
                        <span class="shuoming-title">高级会员说明</span>
                        <span class="iconfont icon-wenhao"></span>
                    </div>
                </div>
                <div v-else-if="vipType==1">
                    <span class="info-lable">钻石会员</span>
                    <div class="vip-shuoming flex" @click='xieyi'>
                        <span class="shuoming-title">钻石会员说明</span>
                        <span class="iconfont icon-wenhao"></span>
                    </div>
                </div>
            </div>
            <div class="pay-info">
                <div class="info-box">
                <div class="flex info-title flex-pack-justify">
                    <span v-if="vipType==0">高级会员卡</span>
                    <span v-if="vipType==1">钻石会员卡</span>
                    <span>特惠价：{{userInfo.amount}}</span>
                </div>
                <div class="flex old-info-title flex-pack-justify">
                    <span>12个月会员</span>
                    <span class="shanchuxian">{{userInfo.original_price}}</span>
                </div>
                </div>
            </div>

            <div class="bottom-btn" @click='openVip'>
                同意协议并开通
                <span v-if="vipType==0">高级</span>
                <span v-else-if="vipType==1">钻石</span>会员卡
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { wxPay } from '@/utils/wx_sdk.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            userInfo: "",
            vipltoffer: "",
            viporiginal_price: "",
            vipType: "",
            member_grade: "",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '结算支付', //导航栏 中间的标题
            },
        }
    },
    created() {
        this.vipType = this.$route.query.vipType;
        this.showInfo();
    },
    mounted() {

    },
    methods: {
        async showInfo(){
            var type;
            var that = this;
            if (this.vipType == 0) {
                type = 1;
            } else {
                type = 2;
            }
            let data = {
                account: this.account,
                token: this.token,
                type,
            }
            const [err, res] = await api.paymentdisplay(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.userInfo = res.data;
            }
        },
        xieyi(){
            this.$router.push({
                path: '/centerFull/myshop/noShop',
                query: {
                    title: '会员卡协议',
                    url: 'https://m.xiepinhui.com.cn/smallweb/xieyi.html'
                }
            })
        },
        async openVip(){
            var type;
            var that = this;
            if (this.vipType==0){
                type=1;
            }else{
                type = 2;
            }
            let pay_code = window.isWeixin? 1: 2;
            let openid = window.isWeixin? this.user.openid : '';
            let data = {
                pay_code,
                openid,
                type,
                account: this.account,
                token: this.token,
            }
            this.$vux.loading.show({
                text: '支付中...'
            })
            const [err, res] = await api.gradepay(data);
            this.$vux.loading.hide();
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                let dd = {};
                let that = this;
                if(window.isWeixin){
                    dd = {...res.data.pay_param};
                    dd.success = res => {
                        that.$vux.toast.text('支付成功');
                        that.$router.replace('/center');
                    }
                    dd.fail = err => {
                        that.$vux.toast.text('支付失败');
                    }
                }else{
                    dd = {pay_param: res.data.pay_param}
                }
                wxPay(this, dd);
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
