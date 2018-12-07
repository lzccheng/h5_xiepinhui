<style scoped lang="less">
    .select-type {
    height: 130/100rem;
    line-height: 130/100rem;
    font-size: 28/100rem;
    display: flex;
}
.img-type {
    max-width: 52/100rem;
    height: 46/100rem;
    margin-top: 42/100rem;
    margin-right: 20/100rem;
}
.popup {
    width: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #333;
}
.popup-head {
    width: 100%;
    height: 100/100rem;
    position: relative;
    font-size: 34/100rem;
    border-bottom: 1px #f2f2f2 solid;
    line-height: 100/100rem;
    text-align: center;
}
.popup-head img {
    width: 26/100rem;
    height: 26/100rem;
    padding: 38/100rem 20/100rem;
    position: absolute;
    left: 0;
    top: 0;
}
.popup-list {
    height: 573/100rem;
}
.popup-list-item {
    width: 95%;
    height: 120/100rem;
    font-size: 34/100rem;
    line-height: 120/100rem;
    border-bottom: 1px #f2f2f2 solid;
    display: flex;
    margin-left: 2.5%;
    position: relative;
}
.popup-list-item-btn {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.popup-list-item img {
    max-width: 52/100rem;
    height: 46/100rem;
    margin-top: 38/100rem;
    margin-right: 20/100rem;
}
.bank-manage {
    width: 100%;
    height: 100/100rem;
    line-height: 100/100rem;
    text-align: center;
    border-top: 1px #f2f2f2 solid;
    font-size: 34/100rem;
    color: #61D8D0;
    margin-top: 10/100rem;
}
.withdraw-input {
    height: 70/100rem;
    font-size: 50/100rem;
    color: rgba(51,51,51,1);
    padding: 20/100rem 0;
    border-bottom: 1px #f2f2f2 solid;
    display: flex;
    box-sizing: content-box;
}
.withdraw-input text {
    line-height: 70/100rem;
}
.withdraw-input input{
    height: 100%;
    width: 80%;
    border: none;
}
.tipWordSmall{
  font-size: 20/100rem;
  color: #999;
  padding-left: 20/100rem;
}
.selectAmountContainer{
  padding:0/100rem 20/100rem;
  margin-top:30/100rem;
}
.titleRecharge{
  color: #666;
  font-size: 28/100rem;
}
.rechargeNumBox{
  flex-wrap: wrap;
  padding-left: 20/100rem;
  padding-right: 20/100rem;
  box-sizing: border-box;
  margin-top:75/100rem;
}
.rechargeNumBox .rechargeItem{
  width:30.70422535211%;
  border:1px solid #61D8D0;
  margin-right: 3.943661971%;
  box-sizing: border-box;
  margin-bottom: 24/100rem;
  text-align: center;
  font-size: 30/100rem;
  color: #61D8D0;
  border-radius: 10/100rem;
}
.rechargeItem:nth-child(3n){
  margin-right: 0/100rem;
}
.activeRecharge{
  color: #fff !important;
  background:#61D8D0 !important;
}
.descTip{
  font-size:24/100rem;
  margin-bottom: 15/100rem;
}
.moneyN{
  margin-top:15/100rem;
  margin-bottom:15/100rem;
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" title='充值' id='vux-header'></x-header>
        <!-- 内容下 -->
        <div class="cell select-type" @click="showBankList">
            <img :src="methodType.icon" mode="aspectFit" class="img-type">
            <span>{{methodType.pay_name}}</span>
            <div class="arrow-left"></div>
        </div>
        <div class="tipWordSmall">该卡本次最多可充值50,000.00元</div>
        <div class="selectAmountContainer">
            <div class="titleRecharge">充值金额</div>
            <div class="withdraw-input">
                <span>￥</span>
                <input type="text" v-model="money"/>
            </div>
        </div>
        <div class="rechargeNumBox flex">
            <div  v-for="(item,index) in choose_list" :class="activeTab==item.money?'rechargeItem activeRecharge':'rechargeItem'" @click='getCurrent(item.money)' :key="index">
                <div class="moneyN">{{item.money}}元</div>
                <!-- <div class="descTip">赠送：{{item.vcoin}}荟币</div> -->
            </div>
        </div>
        <div class="btn" @click="goToRecharge">立即充值</div>
        <!-- 内容end -->
        <!-- 充值方式 模态框-->
        <div class="shadow" v-if="isSelect">
            <div class="popup">
                <div class="popup-head">
                    <img src="https://img.xiepinhui.com.cn/mobile/wallet/ico_close.png" @click="showBankList" mode="widthFix">
                    选择支付方式
                </div>
                <div class="popup-list">
                    <div class="popup-list-item" v-for="(item,index) in methodList" :key="index">
                        <div class="popup-list-item-btn" :data-index="index" @click="selectType"></div>
                        <img :src="item.icon">
                        <span>{{item.pay_name}}</span>
                    </div>
                </div>
                <div class="bank-manage" @click="linkToBankCard" style="display:none;">
                    银行卡管理
                </div>
            </div>                                   
        </div>
   
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import { Group, Cell, XButton, Badge, XHeader } from "vux";
import { wxPay } from "@/utils/wx_sdk.js";
export default {
  components: {
    XHeader
  },
  data() {
    return {
        isSelect: false,
        methodList:[],
        methodType: {
        "pay_code": 2,
        "pay_name": "微信",
        "icon": 'http://img.xiepinhui.com.cn/mobile/bank/wxpay.png'
        },
        money:'',
        activeTab:'',
        choose_list: [],
    };
  },
  created() {
    
  },
  mounted() {
    this.rechargeTab();
  },
  methods: {
    async rechargeTab(){
        
        let data = {
            plat: 3,
            token: this.token,
            account: this.account
        }
        const [err, res] = await api.rechargeMoneyTab(data);
        if(err){
            this.$vux.toast.text(err.msg);
            return;
        }
        if(res.code == 2000){
            this.choose_list = res.data.choose_list;
        }
    },
    getCurrent(e){
        this.activeTab=e;
        console.log(this.activeTab)
        this.money=e;
    },
    showBankList() {
        // const isTrue = this.isSelect ? false : true;
        this.isSelect = !this.isSelect;
        this.rechargeWayList();
    },
    async rechargeWayList() {
        let data = {
            plat: 3,
            token: this.token,
            account: this.account,
            scene_id: 3
        };
        const [err, res] = await api.rechargeWayList(data);
        if(err){
            this.$vux.toast.text(err.msg);
            return;
        }
        if(res.code == 2000){
            var list_obj = res.data.list;
            this.methodList = list_obj;
        }
    },
    selectType(e) {
        const index = e.target.dataset.index;
        const data = this.methodList[index];
        this.methodType=data;
        this.showBankList()
    },
    linkToBankCard(){
        
    },
    async goToRecharge() {//offlineStoreRecharge
    if(window.isClick)return;
    window.isClick = true;
    setTimeout(() => {
        window.isClick = false;
    }, 2000);
    this.$vux.loading.show({
        text: '支付中...'
    })
    var that=this;
    let data = {
        plat: 3,
        token: this.token,
        account: this.account,
        openid: this.user.openid,
        recharge_money: this.money,
        pay_code: 2,//1支付宝，2微信
    };
    const [err, res] = await api.onlineRecharge(data);
    if(err){
        this.$vux.toast.text(err.msg);
        return;
    }
    if(res.code == 2000){
        let success = res =>{
            that.$vux.toast.text('充值成功','top');
            that.$router.replace('/drawIndex/myWallet');
        }
        let fail = err =>{
            that.$vux.toast.text('充值失败','top');
        }
        wxPay(that,{...res.data.paystr,success,fail})
    }
    
  },
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
