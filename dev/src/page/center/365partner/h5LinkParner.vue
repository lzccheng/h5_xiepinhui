<style scoped lang="less">
.pages{
  background: #fff;
}
.smallShopDv1 img,.smallShopDv2 img,.smallShopDv3 img{
  width: 100%;
  display: block;
}
.titleTxt{
  color: #333;
  font-size: 30/100rem;
}
.openShopBtn{
  width: 300/100rem;
  height: 80/100rem;
  line-height: 80/100rem;
  text-align: center;
  color: #fff;
  background: #61D8D0;
  border-radius: 40/100rem;
  font-size: 38/100rem;
  margin:96/100rem auto;
}
.part1SmallShop span,.part2SmallShop span,.part3SmallShop span{
  font-size:24/100rem;
  color: #333;
  display: block;
  line-height: 50/100rem;
}
.contentSmallShopDv1{
  margin-top:180/100rem;
}
.contentSmallShopDv1,.contentSmallShopDv2,.contentSmallShopDv3{
  padding:0 20/100rem;
}
.goIndex{
  background: #61D8D0;
  color: #fff;
  width:120/100rem;
  height: 60/100rem;
  line-height: 60/100rem;
  border-top-right-radius: 30/100rem;
  border-bottom-right-radius: 30/100rem;
  text-align: center;
  font-size: 28/100rem;
  position: fixed;
}
.contentSmallShopDv2,.contentSmallShopDv3{
  margin-top:90/100rem;
}
</style>
<template>
    <div class="page" v-if="!account">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div class="smallShopDv1">
                <img mode="widthFix" src="http://img.xiepinhui.com.cn/small_app/mine/aboutIntro365/aboutIntro1.jpg"/>
            </div>
            <div class="goIndex" @click="gotoIndex">去首页</div>
            <div class="contentSmallShopDv1">
                <div class="titleTxt">申请协议</div>
                <div class="part1SmallShop">
                    <span>1、365合伙人申请仅限微信用户使用；</span>
                    <span>2、365合伙人申请仅为鞋品荟推广计划活动，同意申请开店即 默认同意以下规则；</span>
                    <span>3、申请人从[个人中心]点击[我的365]，按提示申请开通合伙人小店；</span>
                    <span>4、开店必须进行实名认证，并上传本人身份证正反面；</span>
                    <span>5、申请成功后可直接看到小店的粉丝、销量及收益；</span>
                    <span>6、365合伙人可直接获得平台赠送的365荟豆，荟豆用于购买商品</span>
                    <span>7、粉丝在商城购买商品，店主可获得相应的红包收益</span>
                    <span>8、每个店主有专属邀请码，邀请他人加入365开店计划，最高可领取180现金红包</span>
                    <span>9、所有小店售出的商品快递费用均由鞋品荟平台承担；</span>
                    <span>10、由鞋品荟官方线上客服直接对接进行服务，售前售后无忧</span>
                    <span>11、所有小店售出的商品均享受平台三包政策</span>
                    <span>12、开通并成为365合伙人后，您将在一个顺延年内获得以上权限，如需继续使用，请在到期后3天内进行充值续费</span>
                    <span>13、严禁盗刷行为，平台一经发现，有权取消开店资格，并保留法律追究权力；</span>
                    <span>14、鞋品荟保障所有申请人的隐私权，如申请人侵犯他人权益，鞋品荟有权保留证据并协助追究责任；</span>
                    <span>15、鞋品荟可在法律法规允许范围内对活动规则作解释。</span>
                </div>
            </div>
            <div class="smallShopDv2">
                <img mode="widthFix" src="http://img.xiepinhui.com.cn/small_app/mine/aboutIntro365/aboutIntro2.jpg"/>
            </div>
            <div class="contentSmallShopDv2">
                <div class="titleTxt">开店流程</div>
                <div class="part2SmallShop">
                    <span>1、进入首页，点击[个人中心]进入页面，点击[我的365]，按提示申请开通合伙人小店</span>
                    <span>2、如果有邀请码，请按要求填写邀请码，如没有则选择跳过此步骤</span>
                    <span>3、根据提示填写相关信息，包括<span class="orangeTxt">真实姓名、电话、清晰的身份证正反面照片</span>。严禁盗刷行为，平台一经发现，有权取消开店资格，并保留法律追究权力</span>
                    <span>4、勾选同意《鞋品荟365合伙人申请协议》，选择支付方式并支付365元</span>
                    <span>5、点击[立即申请]进入审核阶段，鞋品荟平台将在2个工作日内进行审核。如申请通过，则直接开店；如申请不通过，支付的365金额原路返还至支付账户中</span>
                    <span>6、申请成功后，合伙人可直接在[我的365]看到小店的粉丝、销量及收益</span>
                    <span>7、365合伙人可直接获得平台赠送的365荟豆，荟豆用于购买商品</span>
                    <span>8、合伙人转发店铺的任意链接至朋友圈、微群，用户通过链接进入商城并注册后，即可成为店铺的粉丝</span>
                    <span>9、粉丝在商城购买商品，合伙人可获得相应的红包收益</span>
                </div>
            </div>
            <div class="smallShopDv3">
                <img mode="widthFix" src="http://img.xiepinhui.com.cn/small_app/mine/aboutIntro365/aboutIntro3.jpg"/>
            </div>
            <div class="contentSmallShopDv3">
                <div class="titleTxt">邀请流程</div>
                <div class="part3SmallShop">
                    <span>1、进入首页，点击[个人中心]进入页面，点击[我的365]</span>
                    <span>2、点击[邀请好友]进入页面，点击复制邀请码，并发送给好友</span>
                    <span>3、好友在申请成为365合伙人时填写您的邀请码，并成功申请成为365合伙人，您即可获得180元现金红包奖励</span>
                    <span>4、当粉丝通过您的邀请码成为365合伙人后，TA的粉丝购买商品您可通过积累金额获得触发性返利红包</span>
                    <span>5、每个店主有一个专属邀请码</span>
                    <span>6、任何人通过您的邀请码申请开店，您均可获得现金红包奖励</span>
                    <span>7、现金红包可直接用于商城购买商品或提现</span>
                </div>
            </div>
            <div class="openShopBtn" @click="gotoShop">我要开店</div>
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
            nvabarData: {
                showCapsule: 1,
                title: '365合伙人加盟',
            },
            redmessageInfo: ''
        }
    },
    created() {
        console.log('account',this.account)
    },
    mounted() {
        if(this.account){
            this.getredmessageInfo();
        }
    },
    methods: {
        gotoIndex(){
            this.$router.push({
                path: '/index'
            })
        },
        async getredmessageInfo(){
            let data = {
                account: this.account,
                token: this.token
            };
            const [err, res] = await api.newredmessage(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            this.redmessageInfo = res.data;
            this.gotoShop();
        },
        async gotoShop(){
            if(!this.account){
                this.$router.push({
                    path: '/user/login',
                    query: {
                        url: '/centerFull/partner/h5LinkParner'
                    }
                })
                return;
            }
            let redmessageInfo = this.redmessageInfo;
            console.log(redmessageInfo)
            let codeInvite = ''
            if(window.localStorage.getItem('inviteOthersCode')){
                codeInvite = window.localStorage.getItem('inviteOthersCode')
                console.log(codeInvite)
            }
            if (this.user.user_type == 2 || this.user.user_type == 3) {
              this.$router.push("/centerFull/partner/inviteList");
            } else {
                let issmallshop = redmessageInfo.is_smallshop;
                let store_state = redmessageInfo.store_state;
                
                //判断是否已开通
                if (issmallshop == 0) {
                    //没开通
                    this.$router.push("/centerFull/partner/code");
                    if (store_state == 3) {
                        //正在审核中
                        this.$router.push({
                        path: "/centerFull/partner/applyStatic",
                        query: {
                            status: 1
                        }
                        });
                        return;
                    } else if (store_state == 4) {
                        //审核失败
                        this.$router.push({
                        path: "/centerFull/partner/applyStatic",
                        query: {
                            status: 0
                        }
                        });
                        return;
                    } else if (store_state == 0) {
                        this.$router.push({
                            path: '/centerFull/partner/code',
                            query: {
                                codeInvite
                            }
                        });
                        return;
                    } else {
                        this.$router.push({
                            path: '/centerFull/partner/code',
                            query: {
                                codeInvite
                            }
                        });
                        return;
                    }
                } else {
                    //开通了
                    this.$router.push("/centerFull/partner/inviteList");
                    return;
                }
            }
            this.$router.push({
                path: '/centerFull/partner/code',
                query: {
                    codeInvite
                }
            });
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
