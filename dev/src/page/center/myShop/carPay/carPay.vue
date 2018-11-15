<style lang="less" scoped>
    /* pages/orderInfo_pd/orderInfo_pd.wxss */

.order-address-box {
  background: #fff;
  margin-bottom: 5/50rem;
  line-height: 60/50rem;
  width: 100%;
}

.balance-lable {
  font-size: 14/50rem;
  color: #333;
  padding-left: 10/50rem;
}

.balance-price {
  color: #fb4c72;
}

.balance-icon {
  width: 25/50rem;
  height: 25/50rem;
  border-radius: 5/50rem;
  margin-left: 10/50rem;
}

.content::before {
  content: "";
  display: block;
  width: 100%;
  height: 3/50rem;
  background: url('http://img.xiepinhui.com.cn/small_app/Live/live_order/address_line.png') no-repeat;
  background-size: 100%;
}

.address-add {
  padding: 10/50rem 15/50rem;
}

.address {
  padding: 5/50rem 10/50rem;
}

.address-text icon {
  padding-right: 10/50rem;
}

.address-select-box {
  padding-top: 10/50rem;
  padding-bottom: 10/50rem;
}

.address-phone {
  width: 50%;
  text-align: right;
}

.address-header {
  padding: 0/50rem 15/50rem;
  font-size: 0.85rem;
}

.address-text text {
  font-size: 0.85rem;
  position: relative;
  top: 2/50rem;
}

.title-order {
  padding: 10/50rem 15/50rem;
  background: #fff;
  font-size: 12pt;
}

.title-order img {
  width: 20/50rem;
  height: 20/50rem;
  margin-right: 10/50rem;
}

.goods-box {
  padding: 10/50rem 15/50rem;
  background: #fff;
  position: relative;
}

.order-goods-left-img {
  width: 80/50rem;
  height: 80/50rem;
  border-radius: 5/50rem;
}

.order-goods-right-text {
  width: calc(100% - 90/50rem);
  padding-left: 10/50rem;
}

.order-goods-name {
  font-size: 12pt;
  color: #000;
}

.order-goods-space {
  font-size: 10pt;
  color: #888;
  line-height: 20/50rem;
}

.order-goods-price {
  font-size: 12pt;
  color: #000;
}

.weui-label {
  font-size: 12pt;
}

.weui-cell {
  background: #fff !important;
}

.weui-select {
  height: 40/50rem !important;
  line-height: 40/50rem;
  min-height: 40/50rem;
  border-right: 0/50rem;
}

.weui-cell__bd {
  font-size: 12pt;
}

.weui-select_in-select-after {
  text-align: right;
  font-size: 11pt;
}

.num-title {
  font-size: 12pt;
}

/*主容器*/

.stepperBox {
  background: #fff;
  padding: 10/50rem 15/50rem;
}

.stepper {
  width: 90/50rem;
  height: 28/50rem;
  /*给主容器设一个边框*/
  border-radius: 3/50rem;
  background: rgba(230, 230, 230, 1);
}

/*加号和减号*/

.stepper text {
  width: 30/50rem;
  line-height: 25/50rem;
  text-align: center;
}

/*数值*/

.stepper input {
  width: 30/50rem;
  height: 25/50rem;
  text-align: center;
  font-size: 12/50rem;
  border: 1/50rem solid #e6e6e6;
  background: #fff;
}

/*普通样式*/

.stepper .normal {
  color: black;
}

/*禁用样式*/

.stepper .disabled {
  color: #ccc;
}

.bottom-pay-box {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  line-height: 51/50rem;
}

.heji {
  padding-left: 15/50rem;
  font-size: 12pt;
}

.payBtn {
  background: #61d8d0 !important;
  color: #fff !important;
  font-size: 12pt;
  border-radius: 0;
  border: 0 !important;
  height: 51/50rem;
  line-height: 51/50rem;
}

.payBtn::after {
  display: none;
}

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
}

.model-box {
  width: 80%;
  margin: auto;
  background: #fff;
  text-align: center;
  border-radius: 5/50rem;
  padding: 20/50rem 0;
}

.model-box img {
  width: 80%;
  margin: auto;
  background: #fff;
  text-align: center;
  border-radius: 5/50rem;
}

.model-box .model-loading {
  width: 80%;
  margin: auto;
}

.model-box .model-erro {
  width: 100/50rem;
  height: 100/50rem;
  margin: auto;
}

.erro-title {
  font-size: 16pt;
}

.loading-title {
  font-size: 12pt;
}

.other-title {
  font-size: 12pt;
  color: #888;
}
.box_{
    background-color: #eee;
}
.paybtn{
  padding: 0 15/50rem;
}
.swith{
  position: relative;
  top: 14/50rem;
  right: 12/50rem;
}
</style>
<template>
    <div class="box_">
        <x-header :left-options="{backText:''}" title="补货确认订单" id="vux-header"></x-header>
        <div class="content">
            <div class='order-address-box flex flex-algin-center flex-pack-justify'>
                <div class="flex flex-align-center">
                    <img class="balance-icon" src="@/assets/images/myshop/Balance.png" alt="">
                    <span class="balance-lable">账户余额：<span class="balance-price">{{blanceInfo.rebate_amout}}</span></span>
                </div>
                <van-switch v-model="value" class="swith" @change="switchChange"/>
            </div>
            <div 
            class='goods-box flex line_xi_after flex-space'
            v-for="(item, index) in goodsInfo.list"
            :key="index">
                <img :src="item.goods_image" alt="" class="order-goods-left-img">
                <div class="order-goods-right-text">
                    <div class='order-goods-name'>{{item.goods_name}}</div>
                    <div class="order-goods-space  flex flex-pack-justify">
                        <span>{{item.goods_spec}}</span>
                        <span>x{{item.goods_num}}</span>
                    </div>
                    <div class="order-goods-price">￥{{item.purchase_price}}</div>
                </div>
            </div>
        </div>
        <div class='bottom-pay-box flex flex-pack-justify	flex-align-center'>
          <span class="heji">合计金额:￥{{goodsInfo.allPrice}}</span>
          <span class="payBtn paybtn" @click="gopay">微信支付</span>
        </div>
        <!-- <loading type="type3" v-if="isLoading"></loading> -->
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import { wxPay } from "@/utils/wx_sdk.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin ,XSwitch } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { setTimeout } from 'timers';
export default {
    name: "carPay",
    components: {
        loading,
        XHeader,
    },
    data(){
        return {
            isLoading: true,
            blanceInfo: {
                rebate_amout: 0
            },
            value: false,
            isBlance: false,
            oldPrice: 0,
        }
    },
    created() {
        this.getBlance();
        let carpayInfo = this.carpayInfo;
        if(carpayInfo.list){
          carpayInfo.list = carpayInfo.list.filter((item)=>{
            if(item.isSelect){
              return item;
            }
          })
        }
        this.goodsInfo = carpayInfo;
    },
    methods: {
        async getBlance(){
            let token = this.token;
            let account = this.account;
            if(token){
                let data = {
                    token,
                    account,
                    plat: 3,
                    sub_member_id: this.carpayInfo.sub_member_id
                }
                const [err, res] = await api.memberbalance(data);
                if (err) {
                    this.$vux.toast.text(err.msg);
                    return;
                }
                if(res.code == '2000'){
                    this.blanceInfo = res.data;
                }
            }
        },
        switchChange(){
          let val = this.value;
          if(val){
            this.goodsInfo.allPrice = this.goodsInfo.allPrice - this.blanceInfo.rebate_amout;
          }else{
            this.goodsInfo.allPrice = this.oldPrice;
          }
          if(this.goodsInfo.allPrice < 0){
            this.goodsInfo.allPrice = 0;
          }
          this.isBlance = val;
        },
        gopay(){
          if (window.isClick) {
            return;
          }
          window.isClick = true;
          setTimeout(()=>{
            window.isClick = false;
          },2000)
          this.carPay();
        },
        async carPay(){
          let that = this;
          this.$vux.loading.show({
            text: '支付中...'
          })
          let data = {
            plat: 3,
            account: this.account,
            token: this.token,
            cart_id: this.goodsInfo.carIdString,
            use_banlance: this.isBlance?'1':'0',
            pay_code: 2,
            small_openid: this.user.openid,
            sub_member_id: this.goodsInfo.sub_member_id?this.goodsInfo.sub_member_id: ''
          }
          const [err, res] = await api.addrefit(data);
          if (err) {
            this.$vux.toast.text(err.msg);
            return;
          }
          if(res.code == '2000'){
            var selfData = res;
             var subMemberId = that.goodsInfo.sub_member_id;
            if(selfData.data.pay_status==2){
              that.replace(subMemberId);
              return;
            }
            let success = res =>{
              that.replace(subMemberId);
            }
            let fail = err =>{
              that.replace(subMemberId);
            }
            wxPay(that,{...res.data.pay_param,success,fail})
          }
        },
        replace(subMemberId){
          let that = this;
          this.$store.dispatch('update_carpayInfo',{})
          if(subMemberId == 0){
            that.$router.replace({
              path: '/centerFull/myshop/subreplenishOrder'
            })
          }else{
            that.$router.replace({
              path: '/centerFull/myshop/subreplenishOrder'
            })
          }
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token", "carpayInfo"])
    },
}
</script>


