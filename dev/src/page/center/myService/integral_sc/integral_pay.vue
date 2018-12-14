<style scoped lang="less">
/* pages/orderInfo_pd/orderInfo_pd.wxss */
.order-address-box {
  padding: 5px 0/50rem;
  background: #fff;
  margin-bottom: 5/50rem;
  border-bottom: 2px #61D8D0 dashed;
}

.address-add {
  padding: 10px 15/50rem;
}

.address {
  padding: 5px 10/50rem;
}

.address-text span {
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
  padding: 0px 15/50rem;
  font-size: 18px;
}

.address-text span {
  font-size: 14px;
  position: relative;
  top: 2/50rem;
}

.title-order {
  padding: 5px 15/50rem;
  background: #fff;
  font-size: 12pt;
}

.title-order img {
  width: 20/50rem;
  height: 20/50rem;
  margin-right: 10/50rem;
}

.goods-box {
  padding: 10px 15/50rem;
  background: #f1f1f1;
  position: relative;
}

.order-goods-left-img {
  width: 25%;
}

.order-goods-right-text {
  width: 75%;
  padding-left: 10/50rem;
}

.order-goods-name {
  font-size: 12pt;
}

.order-goods-space {
  font-size: 11pt;
  color: #888;
}

.order-goods-price {
  font-size: 12pt;
  color: #61D8D0;
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
  padding: 5px 15/50rem;
}

.stepper {
  width: 90/50rem;
  height: 28/50rem;
  /*给主容器设一个边框*/
  border: 1px solid #ccc;
  border-radius: 3/50rem;
}

/*加号和减号*/

.stepper text {
  width: 30/50rem;
  line-height: 24/50rem;
  text-align: center;
}

/*数值*/

.stepper input {
  width: 30/50rem;
  height: 26/50rem;
  text-align: center;
  font-size: 12/50rem;
  /*给中间的input设置左右边框即可*/
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
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
  line-height: 44/50rem;
}

.heji {
  padding-left: 15/50rem;
  font-size: 12pt;
}

.payBtn {
  background: #61D8D0 !important;
  color: #fff !important;
  font-size: 12pt;
  padding: 3px 8/50rem;
  border-radius: 0;
  border: 0 !important;
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
.model-box{
  width: 80%;
  margin: auto;
  background: #fff;
  text-align: center;
  border-radius: 5/50rem;
  padding: 20/50rem 0;
}
.model-box img{
  width: 80%;
  margin: auto;
  background: #fff;
  text-align: center;
  border-radius: 5/50rem;
}
.model-box .model-loading{
  width:80%;
  margin: auto;
}
.model-box .model-erro{
  width: 100/50rem;
  height: 100/50rem;
  margin: auto;
}
.erro-title{
  font-size: 16pt;
}
.loading-title{
  font-size: 12pt;
}
.other-title{
  font-size: 12pt;
  color: #888;
}
.bottom-btn{
 background:#61D8D0;
 position: fixed;
 width: 100%;
 line-height:51/50rem;
 font-size: 12pt;
 text-align: center;
 color: #fff;
 bottom: 0;
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div class="content">
                <div class='order-address-box' @click='selectAddress'>
                    <div class="address-add flex flex-pack-justify flex-align-center" v-if="addressInfo==''">
                        <div class="flex flex-align-center address-text">
                        <span class='xipinhuiIcon xipinhui-dizhi'></span>
                        <span>请填写收货地址</span>
                        </div>
                        <span class="iconfont icon-right-jiantou"></span>
                    </div>
                    <div class="address-select-box" v-else>
                        <div class='flex  flex-align-center flex-pack-justify address-header'>
                        <div class="address-name">收货人:{{addressInfo.real_name}}</div>
                        <div class="address-phone">{{addressInfo.contact_phone}}</div>
                        </div>
                        <div class="address flex flex-pack-justify flex-align-center">
                        <div class='order-address-header'>
                            <div class="flex flex-align-center address-text">
                            <span class='xipinhuiIcon xipinhui-dizhi'></span>
                            <span>{{addressInfo.area_info}}{{addressInfo.address}}</span>
                            </div>
                        </div>
                        <span class="iconfont icon-right-jiantou"></span>
                        </div>
                    </div>
                </div>
                <div class="title-order flex flex-align-center line_xi_after">
                <img src='http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png'/>鞋品荟自营平台
                </div>
                <div class='goods-box flex flex-align-center'>
                <img mode='widthFix' class="order-goods-left-img" :src='goodsInfo.goodsimg'/>
                <div class="order-goods-right-text">
                    <div class='order-goods-name'>{{goodsInfo.goodsname}}</div>
                    <div class="order-goods-space">{{goodsInfo.goodspec.spec}}</div>
                    <div class="order-goods-price">{{goodsInfo.goodsprice}}积分</div>
                </div>
                </div>
                <div class="weui-cell weui-cell_select line_xi_after">
                <div class="weui-cell__hd weui-cell__hd_in-select-after" style="padding-left: 0">
                    <div class="weui-label">快递选择</div>
                </div>
                <div class="weui-cell__bd ">
                    <div :value="shipingIndex" :range="shippingInfo" range-key="e_name">
                        <div class="weui-select weui-select_in-select-after" id="selector">{{nowSelectshipping.e_name}}</div>
                    </div>
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                    <div class="weui-cell__bd">快递费用</div>
                    <div class="weui-cell__ft">￥{{nowSelectshipping.f_weight_price}}</div>
                </div>
                </div>
            </div>
            <div class="bottom-btn" @click="gopay">立即兑换</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
import MobileSelect from 'mobile-select';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            goodsInfo: "",
            addressInfo: "",
            num: 1,
            allmoney: "",
            provinceName: "",
            shippingInfo: "",
            goods_weight: "",
            nowSelectshipping: "",
            shipingIndex: 0,
            exprice: "0.00",
            total_count: "0.00",
            s_id: "",
            loading_pay: true,
            erro_pay: false,
            isLoading: false,
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '确认订单', //导航栏 中间的标题
            },
        }
    },
    created() {
        let res = window.localStorage.getItem('goodsInfo');
        if(res){
            res = JSON.parse(res);
        }
        this.goodsInfo = res;
        this.allmoney = res.goodsprice;
        if(this._addressInfo){
            this.addressInfo = this._addressInfo;
            this.shipping();
        }else{
            this.showaddress();
        }
    },
    mounted() {

    },
    methods: {
        selectAddress(){
            if(this.$stopClick(1000))return;
            this.$router.push({
                path: '/index/orderAddress',
                query: {
                    path: '/centerFull/myService/integral_pay'
                }
            })
        },
        async showaddress(){
            let data = {
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.addressdetail(data);
            if (err) {
                that.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                let addr = res.data.filter(item => {
                    if(item.is_default == 1){
                        return item;
                    } 
                })
                this.addressInfo = addr.length? addr[0]: res.data[0];
                this.shipping();
            }
        },
        async shipping(){
            let that = this;
            this.provinceName = that.addressInfo.area_info.substr(0, that.addressInfo.area_info.indexOf('_'))
            let data = {
                goods_id: that.goodsInfo.goods_id,
                province_id: that.addressInfo.province_id,
                province_name: that.addressInfo.area_info.substr(0, that.addressInfo.area_info.indexOf('_'))
            }
            const [err, res] = await api.nine_transport(data);
            if (err) {
                that.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                let that = this;
                this.shippingInfo = res.data.transport_company;
                this.goods_weight = res.data.goods_weight;
                for (var i = 0; i < res.data.transport_company.length; i++) {
                    if (res.data.transport_company[i].is_default == '1') {
                        this.nowSelectshipping = res.data.transport_company[i];
                        this.getTotal();
                    }
                }
                this.mobileSelect1 = new MobileSelect({
                    trigger: '#selector',
                    title: '选择快递',
                    wheels: [
                        {
                            data: this.shippingInfo
                        }
                    ],
                    callback: function(indexArr,data){
                        that.bindCountryChange(indexArr[0]);
                    },
                    keyMap: {
                        id:'e_id',
                        value: 'e_name'
                    },
                    ensureBtnColor: '#61D8D0',
                })
            }
        },
        async getTotal(){
            let that = this;
            var proWeight = Math.ceil(that.num * that.goods_weight) - 1;
            var exprice = parseFloat(parseFloat(proWeight * that.nowSelectshipping.m_weight_price) + parseFloat(that.nowSelectshipping.f_weight_price)).toFixed(2);
            this.total_count = parseFloat(parseFloat(that.goodsInfo.goodsprice * that.num) + parseFloat(exprice)).toFixed(2)
        },
        bindCountryChange(i){
            this.countryIndex = i;
            this.nowSelectshipping = this.shippingInfo[i];
            this.getTotal();
        },
        async gopay(){
            if(this.$stopClick(2000))return;
            console.log('stopClick')
            let that = this;
            if(this.user.openid){
                if(that.addressInfo == ""){
                    return that.$vux.toast.text('请填写收货地址');
                }
                let data = {
                    account: this.account,
                    token: this.token,
                    buy_type: 2,
                    openid: this.user.openid,
                    reciver_name: that.addressInfo.real_name,
                    reciver_address: that.addressInfo.area_info + that.addressInfo.address,
                    reciver_phone: that.addressInfo.contact_phone,
                    reciver_province_id: that.addressInfo.province_id,
                    reciver_city_id: that.addressInfo.city_id,
                    address_id: that.addressInfo.address_id,
                    pay_code: 2,
                    num: that.num,
                    goods_item_id: that.goodsInfo.goodspec.goods_item_id,
                    goods_id: that.goodsInfo.goods_id,
                    express_id: that.nowSelectshipping.e_id
                }
                const [err, res] = await api.exchangegoods(data);
                if (err) {
                    that.$vux.toast.text(err.msg);
                    return;
                }
                if(res.code == 2000){
                    var selfData = res;
                    if (selfData.data.total_amount == 0 || selfData.data.total_amount == "0.00") {
                        this.$router.replace('integral_order');
                    }else{
                        console.log(res)
                    }
                }
            }else{
                console.log('no openid')
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token', '_addressInfo'])
    }
}
</script>
