<style scoped lang="less">
page{
  background:#F7F7F7;
}
.mine-top-box{
  position: relative;
  width: 100%;
  text-align: center;
  background:#61d8d0 url('http://img.xiepinhui.com.cn/small_app/mine/mine_top_bg.png') no-repeat; 
  background-size:100%;
  background-position: bottom;
  height:297/100rem;
}
.extra_new_top{
  padding-top:58/100rem;
box-sizing:border-box;
}
.userInfo-top{
  padding: 0px 24/100rem;
  width: 100%;
  box-sizing: border-box;
}
.mine-top-box .avatar{
  width: 120/100rem;
  height: 120/100rem;
  border-radius: 50%;
  margin-bottom: 5/50rem;
  float: left;
}
.right_top_contentBox{
  padding-left:138/100rem;
}
.nickName{
   color: #fff;
}
.nickName.border{
  border: 1px #fff solid;
  border-radius: 5/50rem;
  width: 100/50rem;
  margin: auto;
  color: #fff;
  font-weight: bold;
}
.user-nick{
   padding-left: 10/50rem;
   text-align: left;
}
.userInfoName_box{
  font-size:30/100rem;
line-height:30/100rem;
}
.bianji{
width:28/100rem;
height:28/100rem;
padding-left:10/50rem;
}
.user-biaoshi{
  text-align: left;
  overflow:hidden;
  margin-left:32/100rem;
  margin-right: 14/100rem;
}
.aboutGradeBox{
  float:left;
}
.user-biaoshi img{
  width:78/100rem;
}
.copyTipBox{
  font-size: 22/100rem;
}
.user-biaoshi .code{
  width: 25/50rem;
  height: 25/50rem;
  padding-left:10/50rem;
  float: right;
  margin-top: 20/100rem;
}
.code img{
  width:20/50rem;
  height: 20/50rem;
  padding-top: 5/50rem;
}
.userNameBox{
  color: #333;
  font-size: 30/100rem;
}
.numWallet{
  font-size: 50/100rem;
  margin-top:26/100rem;
  line-height: 50/100rem;
}
.descAmountBox{
  padding-top:25/100rem;
  padding-bottom: 25/100rem;
}
.line_bottom{
  border-bottom: 1px solid #F7F7F7;
}
.descLeftOne{
  color: #333;
  font-size: 28/100rem;
}
.descRightOne{
  color:#999999;
  font-size:24/100rem;
}
.contentPartBox{
  margin-top:20/100rem;
}
.top_part_content{
  padding:0px 24/100rem;
  background: #fff;
}
.bottom_part_content{
  margin-top:20/100rem;  
  padding:0px 24/100rem;
  background: #fff;
}
.btn-recharge,.btn-withdraw{
  color: #fff;
  width:120/100rem;
  line-height: 50/100rem;
  text-align: center;
  background: #61d8d0;
  font-size: 34/100rem;
  border-radius: 50/100rem;
  vertical-align: middle;
  height: 50/100rem;
}
.huibidv{
  color: #666;
  font-size: 28/100rem;
}
.huibidv img{
  width:40/100rem;
  margin-right:24/100rem;
  vertical-align: middle;
}
.huibiNum{
  color: #333;
  font-size: 34/100rem;
  vertical-align: middle;
  line-height: 34/100rem;
}
.huibiNum .iconfont{
  color:#999999;
  font-size: 14/50rem;
}
.icon-right-jiantou{
  vertical-align: text-bottom;
}
.btn-withdraw{
  background: #EC7B7D;
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" title='我的钱包' id='vux-header'></x-header>
        <div v-if="infoData">
            <div class="mine-top-box extra_new_top" style="background-image:url(http://img.xiepinhui.com.cn/small_app/walletPic/walletBg_1.png)">
                <!-- 内容下 -->
                <div class="userInfo-top">
                    <img class="avatar" :src="avatar"/>
                    <div class="right_top_contentBox">
                        <div class='nickName user-nick'>
                            <div class="flex  flex-align-center userInfoName_box"> 
                                <div class="userNameBox">{{nickName}}</div>
                                <div class="user-biaoshi">
                                    <img mode='widthFix' v-if="grade==0" src="http://img.xiepinhui.com.cn/small_app/mine/buy_vip.png"/>
                                    <img mode='widthFix' v-if="grade==1"    src="http://img.xiepinhui.com.cn/small_app/mine/gaoji_vip.png"/>
                                    <img v-if="grade==2" mode='widthFix' src="http://img.xiepinhui.com.cn/small_app/mine/zuanshi_vip.png"/>
                                </div>
                                <div class="xipinhuiIcon xipinhui-openEye float-item-img" @click="visibleNUM" v-if="eyeOpenIf"></div>
                                <div class="xipinhuiIcon xipinhui-closeEye float-item-img" @click="visibleNUM" v-if="!eyeOpenIf"></div>
                                <!-- <image class="bianji" bindtap='wanshan' src='http://img.xiepinhui.com.cn/small_app/mine/bianji.png'></image> -->
                            </div>
                            <div class="numWallet" v-if="eyeOpenIf">¥{{infoData.money_total}}</div>
                            <div class="numWallet" v-if="!eyeOpenIf">********</div>
                        </div>
                    </div>
                </div>
                
                <!-- 内容上end -->
            </div>
            <div class="contentPartBox">
                <div class="top_part_content">
                    <div class="flex flex-pack-justify descAmountBox line_bottom">
                        <div class="descLeftOne">充值金额(元)</div>
                        <div class="descRightOne">充值明细</div>
                    </div>
                    <div class="flex flex-pack-justify descAmountBox">
                        <div style="color:#61D8D0"><span style="font-size:20rpx;">¥</span>{{infoData.money_data[0].money_amout}}</div>
                        <div class="btn-recharge" @click="goRecharge" :style="{background:user_type==3?'#ccc':''}">充值</div>
                    </div>
                    <div class="flex flex-pack-justify descAmountBox">
                        <div class="huibidv">
                            <img :src="infoData.money_data[0].list[0].image" mode="widthFix"/>{{infoData.money_data[0].list[0].name}}
                        </div>
                        <div class="huibiNum">{{infoData.money_data[0].list[0].amount}}<span class="iconfont icon-right-jiantou"></span></div>
                    </div>
                </div>
                <div class="bottom_part_content">
                    <div class="flex flex-pack-justify descAmountBox line_bottom">
                        <div class="descLeftOne">收益总金额(元)</div>
                        <div class="descRightOne">提现明细</div>
                    </div>
                    <div class="flex flex-pack-justify descAmountBox">
                        <div style="color:#EC7B7D"><text style="font-size:20rpx;">¥</text>{{infoData.money_data[1].money_amout}}</div>
                        <div class="btn-withdraw" @click.stop="goWithdraw">提现</div>
                    </div>
                    <div class="flex flex-pack-justify descAmountBox line_bottom" :data-name="item.name" @click="goFanLiPage(item.name)" :key="index" v-for="(item,index) in infoData.money_data[1].list">
                        <div class="huibidv">
                            <img :src="item.image" mode="widthFix"/>{{item.name}}
                        </div>
                        <div class="huibiNum">{{item.amount}}<span class="iconfont icon-right-jiantou"></span></div>
                    </div>
                    <!-- <div class="flex flex-pack-justify descAmountBox line_bottom">
                        <div class="huibidv">
                            <image src="http://img.xiepinhui.com.cn/small_app/walletPic/offlineFanli.png" mode="widthFix"></image>线下店推广返利
                        </div>
                        <div class="huibiNum">6000<icon class="iconfont icon-right-jiantou"></icon></div>
                    </div>
                    <div class="flex flex-pack-justify descAmountBox line_bottom">
                        <div class="huibidv">
                            <image src="http://img.xiepinhui.com.cn/small_app/walletPic/goodsFanli.png" mode="widthFix"></image>推广商品返利
                        </div>
                        <div class="huibiNum">6000<icon class="iconfont icon-right-jiantou"></icon></div>
                    </div> -->
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
            eyeOpenIf:true,
            grade:'',
            nickName: '',
            avatar: '',
            infoData: '',
            user_type:''
        }
    },
    created() {
        this.grade = this.$route.query.grade || '';
        this.infoShow();
    },
    mounted() {
        this.nickName = this.user.nick;
        this.avatar = this.user.avatar;
        var userType = this.user.user_type;
        this.user_type=userType;
    },
    methods: {
        async infoShow(){
            let data = {
                plat: 3,
                token: this.token,
                account: this.account
            }
            const [err, res] = await api.usermoneyprofile(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.infoData = res.data;
            }
        },
        visibleNUM(){
            this.eyeOpenIf = !this.eyeOpenIf;
        },
        goWithdraw(){
            console.log('drawIndex')
            this.$router.push('/myBlack')
        },
        goFanLiPage(whichFanLi){
            switch (whichFanLi) {
                case '365推广返利':
                    this.$router.push({
                        path: 'rebateRecord',
                        query: {
                            recordType: 1
                        }
                    })
                    break;
                case '线下推广返利':
                    this.$router.push({
                        path: 'rebateRecord',
                        query: {
                            recordType: 2
                        }
                    })
                    break;
                case '粉丝购买商品返利': 
                    this.$router.push({
                        path: 'rebateRecord',
                        query: {
                            recordType: 3
                        }
                    })
                    break;
            }
        },
        goRecharge(){
            var userType = this.user.user_type;
            this.user_type=userType;
            alert(userType)
                if (userType==3){
                    // wx.showModal({
                    //     title: '提示',
                    //     content: '你没有权限',
                    //     showCancel:false
                    // });
                    this.$vux.toast.text('你没有权限');
                }else{
                    this.$router.push({
                        path: 'rechargeMoneyOnline',
                        query: {
                            //recordType: 3
                        }
                    });
                }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
