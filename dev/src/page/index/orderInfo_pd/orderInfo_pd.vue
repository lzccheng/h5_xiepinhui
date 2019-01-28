<style lang="less" scoped>
    @import '~@/assets/mobileSelect.less';
    @color: #61D8D0;
    .order-address-box {
    padding: 5/50rem 0/50rem 0;
    background: #fff;
    margin-bottom: 5/50rem;
    // border-bottom: 2/50rem #FF8095 dashed;
    }
    .order-address-box::after{
        content: "";
        display: block;
        width: 100%;
        height:3px;
        background: url('http://img.xiepinhui.com.cn/small_app/Live/live_order/address_line.png') no-repeat;
        background-size: 100%;
    }
    .address-add {
    padding: 10/50rem 15/50rem;
    }

    .address {
    padding: 5/50rem 10/50rem;
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
    font-size: 12pt;
    }

    .address-header {
    padding: 0/50rem 15/50rem;
    font-size: 0.85rem;
    }

    .address-text span {
    font-size: 0.85rem;
    position: relative;
    top: 2/50rem;
    }

    .title-order {
    padding: 5/50rem 15/50rem;
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
    width: 25%;
    img{
        width: 100%;
    }
    }

    .order-goods-right-text {
    width: 75%;
    padding-left: 10/50rem;
    }

    .order-goods-name {
    font-size: 12pt;
    }
    .redCoupon{
    color: @color !important;
    }
    .order-goods-space {
    font-size: 11pt;
    color: #888;
    }

    .order-goods-price {
    font-size: 12pt;
    color: @color;
    }
    .oldPrice{
        color: #FB4C72 !important;
        margin-left: 0.2rem;
        font-size: 10px;
        span{
            text-decoration: line-through !important;
        }
    }
    .weui-label {
    font-size: 12pt;
    }

    .weui-cell {
    background: #fff !important;
    }

    .weui-select {
    height:51/50rem !important;
    line-height:51/50rem;
    min-height:51/50rem;
    border-right: 0/50rem;
    }
    .yunfei{
    padding: 15/50rem;
    }
    .weui-cell__bd {
    font-size: 12pt;
    }

    .weui-select_in-select-after {
    text-align: right;
    font-size: 11pt;
    color: #888;
    }

    .num-title {
    font-size: 12pt;
    }
    .coupon-box{
    position: relative;
    width: 50%;
    }
    .coupon-num-box{
    background: url(https://m.xiepinhui.com.cn/img/nine/coupon/coupon_num_bg.png) no-repeat;
    background-size: 100% 100%;
    padding:3/50rem 10/50rem;
    padding-left:15/50rem;
    font-size: 10pt;
    text-align: center;
    color: @color;
    }
    .coupon-box-left{
    width: 100%;
    }
    /*主容器*/

    .stepperBox {
    background: #fff;
    padding:10/50rem 15/50rem;
    }

    .stepper {
    width: 90/50rem;
    height: 28/50rem;
    /*给主容器设一个边框*/
    border: 1/50rem solid #ccc;
    border-radius: 3/50rem;
    }

    /*加号和减号*/

    .stepper span {
    width: 30/50rem;
    line-height: 24/50rem;
    text-align: center;
    background:rgba(230,230,230,1);
    }

    /*数值*/

    .stepper input {
    width: 30/50rem;
    height: 26/50rem;
    text-align: center;
    font-size: 12/50rem;
    /*给中间的input设置左右边框即可*/
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background: none;

    }

    /*普通样式*/

    .stepper .normal {
    color: black;
    background-color: #ccc;
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
    color: @color;
    }
    .zongjiaqian{
    font-size: 14pt;
    }
    .payBtn {
    background: #61D8D0 !important;
    color: #fff !important;
    font-size: 12pt;
    padding: 3/50rem 15/50rem;
    border-radius: 0;
    border: 0 !important;
    }
    .fontSize{
        font-size: 14px;
    }
    .payBtn::after {
    display: none;
    }
    .address-name{
        font-size: 12pt;
    }
    .span{
        font-size: 12pt;
    }
    .marT0{
        margin-top: 0;
    }
    .iconH{
        width:24/100rem;
        margin-left:10/100rem;
    }
    .huidouprice{
        color: #61D8D0;
    }
    .deductionBox{
        margin-top:15/100rem;
        background: #fff;
        padding: 0 15/50rem;
    }
    .lDeductionBox{
        padding-top:22/100rem;
        padding-bottom: 22/100rem;
    }
    .iconBg{
        width:60/100rem;
        text-align: center;
        background: #F2C25E;
        border-radius: 20/100rem;
        height: 60/100rem;
        line-height: 60/100rem;
        position: relative;
        bottom: -0.07rem;
    }
    .purseIcon{
        color: #fff;
        display: inline-block;
        font-size: 25px;
    }
    .itemDescTitle{
        font-size: 10pt;
        color: #333;
        margin-left:24/100rem;
        line-height: 80/100rem;
    }
    .aboutChoice{
        font-size:28px;
        color: #61D8D0; 
    }
    .grayIsIcon{
        font-size: 28px;
        color: #C6C6C6;
    }
    .iconPicHIcon{
        width:60/100rem;
        height:60/100rem;
    }
    .huibiDeduction{
        font-size: 10pt;
        color: #61D8D0;
        margin-left:24/100rem;
        line-height: 80/100rem;
    }
    .sign_dv{
        position: absolute;
        background: #61D8D0;
        font-size: 12px;
        color: #fff;
        top:26/100rem;
        border-top-right-radius: 30/100rem;
        border-bottom-right-radius: 30/100rem;
        width:150/100rem;
        text-align: center;
        line-height: 30/100rem;
        height: 30/100rem;
    }
    .myselft{
        white-space: nowrap;
        span{
            margin-left: .2rem;
            color: #888
        }
    }
</style>
<template>
    <div class="idnexWrapBox" :style="{height: '100%'}">
        <x-header :left-options="{backText:''}" :title="nvabarData.title" id="vux-header"></x-header>
        <!-- <loading type="type3" v-if="loadingShow"></loading> -->
        <div style="background-color: #f8f8f8;height: 100%;">
            <div class="content">
                <div class="weui-cell weui-cell_select line_xi_after" style="padding: 0" @click="$router.push({path: 'GoodsExpress', query: {query: $route.query,store_id}})">
                    <div class="weui-cell__hd weui-cell__hd_in-select-after">
                        <div class="weui-label fontSize myselft">配送方式 <span class="">可选到店自提</span></div>
                    </div>
                    <div class="weui-cell__bd ">
                        <div class="weui-select weui-select_in-select-after fontSize">{{myselft || '快递送货'}}</div>
                        <!-- <div class="_select_mob" id="_select_mob">{{nowSelectshipping.e_name}}</div> -->
                    </div>
                </div>
                <div class='order-address-box' @click="selectAddress">
                    <div class="address-add flex flex-pack-justify flex-align-center" v-if="addressInfo==''">
                        <div class="flex flex-align-center address-text">
                            <span class='iconfont icon-dizhi' style="font-size: 12pt"></span>
                            <span style="font-size: 12pt">请填写收货地址</span>
                        </div>
                        <span class="iconfont icon-right-jiantou"></span>
                    </div>
                    <div v-else>
                        <div class='flex  flex-align-center flex-pack-justify address-header'>
                            <div class="address-name">收货人:{{addressInfo.real_name}}</div>
                            <div class="address-phone">{{addressInfo.contact_phone}}</div>
                        </div>
                        <div class="address flex flex-pack-justify flex-align-center">
                            <div class='order-address-header'>
                                <div class="flex flex-align-center address-text">
                                    <span class='iconfont icon-dizhi span' style="font-size: 14pt"></span>
                                    <span style="font-size:11pt">{{addressInfo.area_info}}{{addressInfo.address}}</span>
                                </div>
                            </div>
                            <span class="iconfont icon-right-jiantou"></span>
                        </div>
                    </div>
                </div>
                <div class='goods-box flex flex-align-center line_xi_after' v-if="goodsInfo">
                    <div class="order-goods-left-img">
                        <img :src="goodsInfo.goodsimg" class="" alt="">
                        <div class="sign_dv" v-if="s_id">荟币专区商品</div>
                    </div>
                    <div class="order-goods-right-text">
                        <div class='order-goods-name fontSize'>{{goodsInfo.goodsname}}</div>
                        <div class="order-goods-space fontSize">{{goodsInfo.goodspec.spec}}</div>
                        <div v-if="s_id == '-1'">
                            <span class="huidouprice padd-top" v-if="s_id == '-1'">
                              <span class="fontSize">￥:</span>
                              <span class="fontSize">{{goodsInfo.vcoin_pay_price}}+{{goodsInfo.vcoin_price}}</span>
                              <img src="@/assets/images/huidou.png" class="iconH" mode="widthFix"/>
                            </span>
                        </div>
                        <div v-else class='order-goods-price'><span style="font-size: 10px">￥</span>{{(goodsInfo.goodsprice * member_discount).toFixed(2)}}<span v-if="!s_id && user.user_type == 4" class="oldPrice">￥<span>{{goodsInfo.goodsprice}}</span>(365专享{{(member_discount * 10).toFixed(1)}}折)</span><span v-if="!s_id && user.user_type == 1" class="oldPrice" @click="$router.push('/centerFull/partner/introduce365')">(开通365小店专享7折优惠)</span></div>
                    </div>
                </div>
                <div class="flex flex-pack-justify flex-align-center stepperBox line_xi_after" v-if="!s_id">
                    <span class="num-title fontSize">购买数量</span>
                    <div class="stepper flex">
                        <!-- 减号 -->
                        <span :class="minusStatus" @click="bindMinus">-</span>
                        <!-- 数值 -->
                        <input type="text" disabled v-model="num" @click="bindManual">
                        <!-- 加号 -->
                        <span class="normal" @click="bindPlus">+</span>
                    </div>
                </div>
                <!-- <div class="weui-cell  weui-cell_select line_xi_after" v-if="coupon_num!=0">
                    <div class="weui-cell__hd weui-cell__hd_in-select-after coupon-box">
                        <div class="weui-label coupon-box-left">优惠券
                            <span class="coupon-num-box" v-if="coupon_num!=0">{{coupon_num}}张优惠券</span>
                        </div>
                    </div>
                    <div class="weui-cell__bd " @click="selectCoupon">
                        <div class="weui-select weui-select_in-select-after" :class="coupon_text=='请选择优惠券'?'':'redCoupon'"></div>
                    </div>
                </div> -->
                <div class="weui-cell weui-cell_select line_xi_after" style="padding: 0">
                    <div class="weui-cell__hd weui-cell__hd_in-select-after">
                        <div class="weui-label fontSize">快递选择</div>
                    </div>
                    <div class="weui-cell__bd ">
                        <div class="weui-select weui-select_in-select-after fontSize" id="_select_mob">{{nowSelectshipping.e_name}}</div>
                        <!-- <div class="_select_mob" id="_select_mob">{{nowSelectshipping.e_name}}</div> -->
                    </div>
                </div>
                <div class="weui-cells weui-cells_after-title marT0">
                    <div class="weui-cell yunfei">
                        <div class="weui-cell__bd fontSize">{{s_id?'快递费':'邮费'}}</div>
                        <div class="weui-cell__ft">￥{{exprice}}</div>
                    </div>
                </div>
                <div class="deductionBox" v-if="s_id">
                    <div class="itemDeduction">
                        <div class="flex flex-pack-justify lDeductionBox">
                            <div class="flex">
                                <div class="iconBg">
                                    <div class="xipinhuiIcon xipinhui-moneypurse purseIcon"></div>
                                </div>
                                <div class="itemDescTitle fontSize">
                                    余额：{{restMoney}}
                                </div>
                            </div>
                            <van-switch v-model="ifUseBalance" @change="useBalanceFun" active-color="#61D8D0"/>
                            <!-- <div @click.stop="useBalanceFun">
                                <div :class="ifUseBalance?'aboutChoice':'grayIsIcon'" class="xipinhuiIcon xipinhui-choice"></div>
                            </div>  -->
                        </div>
                        <div class="flex  flex-pack-justify lDeductionBox" style="padding-top: 0;">
                            <div class="flex">
                                <img mode="widthFix" style="position: relative;bottom: -0.10rem;" src="@/assets/images/HIcon.png" class="iconPicHIcon"/>
                                <div class="huibiDeduction fontSize">
                                    <span>荟币：共{{huidounum}}个</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="openVip" v-if="!vipInfo.whether_member && !s_id" @click="openvip">
                    <div>
                        <span class="iconfont icon-mian"><span>开通会员卡可免邮哦</span></span>
                    </div>
                    <div class="small-vip-shipping">开通会员卡，平均每年可省1000多元</div>
                    <div>查看
                        <span class="iconfont icon-youbian"></span>
                    </div>
                </div>
                <div class="weui-cells weui-cells_after-title marT0" v-if="vipInfo.whether_member" style="position: relative">
                    <group> 
                        <div class="weui-cell weui-cell_switch">
                            <div class="weui-cell__bd">使用会员免邮服务
                                <span class="shengyu-num">(本月剩{{vipInfo.frequency || '0'}}次机会)</span>
                            </div>
                            <div class="weui-cell__ft">
                                <van-switch v-model="vipSwitch" @change="switch1Change"/>
                            </div>
                        </div>
                    </group>
                </div> -->
            </div>
            <div class='bottom-pay-box flex flex-pack-justify flex-align-center' style="border-top: 1px solid #eee;">
                <span class="heji fontSize" :class="s_id ? 'huidouprice' : ''">{{s_id?'需付款':'合计'}}:￥<span class="zongjiaqian">{{total_count}}</span></span>
                <span class="payBtn" @click.self="gopay">微信支付</span>
            </div>
        </div>
    </div>
</template>
<script>
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin ,XSwitch ,Picker } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import { wxPay } from "@/utils/wx_sdk.js";
// import { aliPay } from "@/utils/ali_sdk.js";
import MobileSelect from 'mobile-select';

export default {
    components: {
        XHeader,
        loading,
        Group,
    },
    data(){
        return {
            loadingShow: true,
            minusStatus: "",
            num: 1,
            allmoney: "",
            provinceName: "",
            shippingInfo: "",
            goods_weight: "",
            addressInfo: "",
            nowSelectshipping: "",
            shipingIndex: 0,
            exprice: "0.00",
            total_count: "0.00",
            group_id: "",
            coupon_text: "请选择优惠券",
            nowCouponInfo: "",
            isUsecoupon: 0,
            coupon_num: '',
            ordertype: "",
            vipInfo: '',
            vipSwitch: false,
            free_post: 0,
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '确认订单', //导航栏 中间的标题
            },
            s_id: '',
            ifUseBalance: false,
            huidounum: 0,
            restMoney: 0,
            member_discount: 1,
            myselft: '',
            aboutShopInfo: '',
            store_id: ''
        }
    },
    created () {
        this.goodsInfo = JSON.parse(sessionStorage['goodsInfo']);
        this.myselft = this.$route.query.myselft || '';
        this.aboutShopInfo = this.$route.query.aboutShopInfo? JSON.parse(this.$route.query.aboutShopInfo) : '';
        if(this.aboutShopInfo){
            this.myselft = this.aboutShopInfo.shop_name;
            this.store_id = this.aboutShopInfo.shop_id;
        }
    },
    mounted(){
        this.s_id = this.$route.query.s_id || this.goodsInfo._s_id || '';
        if(!this.token){
            this.$vux.toast.text('你还没登录哦~', 'top');
            return this.$router.replace({
                path: '/user/login',
                query: {
                    url: this.$route.fullPath
                }
            })
        }
        console.log(this.user.user_type)
        this.init();
        // this.s_id && this.getHuidou();
        this.getHuidou();
    },
    methods: {  
        init(){
            let goodsInfo = this.goodsInfo;
            let that = this;
            if(goodsInfo.btnType = 'buy'){
                this.ordertype = 0;
            }else if(goodsInfo.btnType = 'pindan'){
                this.ordertype = 1;
            }
            this.allmoney = goodsInfo.goodsprice;
            this.group_id = this.$route.query.group_id || '';
            this.couponNum();
            if(this._addressInfo){
                this.addressInfo = this._addressInfo;
                this.shipping();
            }else{
                this.showaddress();
            }
            
            this.mobileSelect1 = new MobileSelect({
                trigger: '#_select_mob',
                title: '选择快递',
                wheels: [
                    {
                        data: [{e_id: '',e_name: ''}]
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
        },
        async couponNum(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                goods_id: this.goodsInfo.goods_id,
                num: this.num,
                order_type: this.ordertype
            }
            // return
            if(!this.account){
                let {pathname, search, hash} = window.location;
                this.$router.push({
                    path: '/user/login',
                    query: {
                        from: pathname + search + hash
                    }
                })
            }
            const [err, res] = await api.couponnum(data);
            if (err) {
                if(err.code == 3010){
                    return;
                }
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.data && res.data != ''){
                this.coupon_num = res.data.num;
            }
        },
        bindCountryChange(i){
            this.countryIndex = i;
            this.nowSelectshipping = this.shippingInfo[i];
            var proWeight = Math.ceil(this.num * this.goods_weight) - 1;
            var exprice = parseFloat(parseFloat(proWeight * this.nowSelectshipping.m_weight_price) + parseFloat(this.nowSelectshipping.f_weight_price)).toFixed(2);
            this.exprice = exprice;
            this.s_id? this.calculateZongjia() : this.getTotal(this);
        },
        async showaddress(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.addressdetail(data);
            this.loadingShow = false;
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000 && res.data != ''){
                 let arr = res.data.filter(item=>{
                    if(item.is_default == 1){
                        return item;
                    }
                });
                this.addressInfo = arr.length > 0?arr[0]:res.data[0];
                this.shipping();
            }
        },
        async shipping(){
            this.provinceName = this.addressInfo.area_info.substr(0, this.addressInfo.area_info.indexOf('_'));
            let data = {
                plat: 3,
                goods_id: this.goodsInfo.goods_id,
                province_id: this.addressInfo.province_id,
                province_name: this.provinceName
            }
            const [err, res] = await api.nine_transport(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.shippingInfo = res.data.transport_company.filter((item,i)=>{
                    item.value = item.e_name;
                    item.id = item.e_id;
                    return item;
                });
                this.goods_weight = res.data.goods_weight;
                for (var i = 0; i < res.data.transport_company.length; i++) {
                    if (res.data.transport_company[i].is_default == '1') {
                        this.nowSelectshipping = res.data.transport_company[i];
                        this.exprice = res.data.transport_company[i].f_weight_price;
                        !this.s_id && this.getTotal();
                    }
                }
            }
        },
        getTotal(){
            let that = this;
            var proWeight = Math.ceil(that.num * that.goods_weight) - 1;
            var exprice = parseFloat(parseFloat(proWeight * that.nowSelectshipping.m_weight_price) + parseFloat(that.nowSelectshipping.f_weight_price)).toFixed(2);
            var coupon_price = that.nowCouponInfo.amount;
            if (!coupon_price) { coupon_price = 0 }
            let member_discount = this.s_id ? 1 :that.member_discount;
            var count = parseFloat(parseFloat(that.goodsInfo.goodsprice * member_discount * that.num) - parseFloat(coupon_price)).toFixed(2);
            if (count < 0) {
                count = 0;
            }
            if (that.vipInfo.whether_member) {
                if (count != 0) {
                    count = count * (that.vipInfo.member_discount / 10);
                }
                if (that.vipSwitch) {
                    if (that.vipInfo.frequency > 0) {
                        exprice = exprice - 8;
                        if (exprice < 0) {
                            exprice = 0;
                        }
                    }
                }
            }
            that.total_count = parseFloat(parseFloat(count) + parseFloat(exprice)).toFixed(2);
        },
        bindManual(){

        },
        /* 点击减号 */
        bindMinus(){
            var num = this.num;
            // 如果大于1时，才可以减  
            if (num > 1) {
                num--;
            }
            // 只有大于一件的时候，才能normal状态，否则disable状态  
            var minusStatus = num <= 1 ? 'disabled' : 'normal';
            // 将数值与状态写回 
            this.num = num;
            this.minusStatus = minusStatus;
            var proWeight = Math.ceil(this.num * this.goods_weight) - 1;
            var exprice = parseFloat(parseFloat(proWeight * this.nowSelectshipping.m_weight_price) + parseFloat(this.nowSelectshipping.f_weight_price)).toFixed(2);
            this.getTotal(this);
            this.couponNum();
            // if (this.isUsecoupon == 1) {
            //     if (parseFloat(this.goodsInfo.goodsprice * this.num) < this.nowCouponInfo.min_money) {
            //         this.isUsecoupon = 0;
            //         this.coupon_text = "请选择优惠券";
            //         this.nowCouponInfo = "";
            //         this.getTotal(this);
            //     }
            // }
        },
        /* 点击加号 */
        bindPlus(){
            var num = this.num;
            // 不作过多考虑自增1  
            if (num == this.goodsInfo.goodspec.goods_storage) {
                this.$vux.toast.text('库存不足');
            } else {
                num++;
                // 只有大于一件的时候，才能normal状态，否则disable状态  
                var minusStatus = num < 1 ? 'disabled' : 'normal';
                // 将数值与状态写回  
                this.num = num;
                this.minusStatus = minusStatus;
            }
            var proWeight = Math.ceil(this.num * this.goods_weight) - 1;
            var exprice = parseFloat(parseFloat(proWeight * this.nowSelectshipping.m_weight_price) + parseFloat(this.nowSelectshipping.f_weight_price)).toFixed(2);
            this.exprice = exprice;
            this.getTotal(this);
            this.couponNum();
        },
        selectAddress(){
            this.$router.push({
                path: '/index/orderAddress',
                query: {
                    group_id: this.group_id || ''
                }
            })
        },
        selectCoupon(){
            let data = {
                token: this.token,
                account: this.account
            }
        },
        openvip(){
            return
            this.$router.push({
                path: '/index/myVip',
            })
        },
        switch1Change(value){
            let that = this;
            var free_post;
            if (this.vipInfo.frequency == 0) {
                this.$vux.toast.text('本月可用免邮次数不足');
                this.vipSwitch = false;
                free_post = 0;
            } else {
                if (value) {
                    free_post = 1
                } else {
                    free_post = 0
                }
                this.vipSwitch = value;
                this.getTotal(this);
            }
            this.free_post = free_post;
        },
        gopay(){
            
            if(this.goodsInfo.btnType == 'buy'){
                this.dandu_buy()
                return;
            }
            if(this.data.goodsInfo.btnType == "pindan"){
                if(this.data.group_id != "undefined"){
                    //参与拼单
                    this.pindan_buy(this, this.data.group_id, "fightgroups")
                }else{
                    //发起拼单
                    this.pindan_buy(this, "", "startorder")
                }
            }
        },
        async dandu_buy(){
            let that = this;
            if(this.addressInfo == ""){
                return this.$vux.toast.text('请填写收货地址');
            }
            if(this.nowSelectshipping == ""){
                return this.$vux.toast.text('请选择快递公司');
            }
            var jsonArr;
            jsonArr = [{
                "goods_item_id": that.goodsInfo.goodspec.goods_item_id,
                "goods_id": that.goodsInfo.goods_id,
                "goods_num": that.num
            }];
            if(window.isClick)return;
            window.isClick = true;
            setTimeout(() => {
                window.isClick = false;
            }, 2000);
            var goods_json = JSON.stringify(jsonArr);
            let data = {
                plat: 3,
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
                goods_json: goods_json,
                pay_code: window.isWeixin?2 : 1,
                express_id: that.nowSelectshipping.e_id,
                use_coupon: that.isUsecoupon,
                uc_id: that.nowCouponInfo.uc_id,
                free_post: that.free_post,
                goods_id: that.goodsInfo.goods_id,
                goods_item_id: that.goodsInfo.goodspec.goods_item_id,
                num: that.num,
                return_url: window.isWeixin? '': window.location.origin + '/centerFull/orderFull/orderlist?tabindex=3'
            }
            let _data = {};
            if(this.s_id){
                _data.use_coupon = 0;
                _data.uc_id = 0;
                _data.free_post = 0;
                _data.shipping_type = this.store_id? 3 : 2;
                _data.pick_shop_id = this.aboutShopInfo? this.aboutShopInfo.shop_id || 0 : 0;
                _data.pay_recharge = this.ifUseBalance? 1 : 0;
                _data.pay_vcoin = 1;
                _data.order_type = 4;
                data = Object.assign(data, _data);
            }
            this.$vux.loading.show({
                text: '支付中...'
            })
            const [err, res] = await api.buy(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                var selfData = res;
                this.order_id = selfData.data.order_id;
                if (selfData.data.total_amount == 0 || selfData.data.total_amount == "0.00") {
                    this.$router.push({
                        path: '/centerFull/orderFull/orderlistinfo',
                        query: {
                            order_id: selfData.data.order_id,
                            order_sn: selfData.data.order_sn
                        }
                    })
                    return;
                }
                let success = res => {
                    that.$router.replace({
                        path: '/centerFull/orderFull/orderlistinfo',
                        query: {
                            order_id: selfData.data.order_id,
                            order_sn: selfData.data.order_sn
                        }
                    })
                    that.$vux.toast.text('支付成功','top');
                }
                let fail = async err => {
                    if(that.isUsecoupon == 1){
                        let data = {
                            plat: 3,
                            order_id: selfData.data.order_id,
                            token: that.token,
                            account: that.account
                        }
                        const [err, res] = await api.returned(data);
                    }
                    that.$vux.toast.text('支付失败','top');
                }
                // aliPay({ orderStr: res.data.pay_param })
                if(window.isWeixin){
                    return wxPay(this,{...res.data.pay_param,success, fail})
                }
                // wxPay(this,{pay_param: res.data.pay_param,success, fail})
            }
            
        },
        async pindan_buy(that, group_id, action){
            if(that.addressInfo == ""){
               return this.$vux.toast.text('请填写收货地址');
            }
            let data = {
                plat: 3,
                account: that.account,
                token: that.token,
                buy_type: 2,
                openid: that.user.openid,
                reciver_name: that.addressInfo.real_name,
                reciver_address: that.addressInfo.area_info + that.addressInfo.address,
                reciver_phone: that.addressInfo.contact_phone,
                reciver_province_id: that.addressInfo.province_id,
                reciver_city_id: that.addressInfo.city_id,
                address_id: that.addressInfo.address_id,
                pay_code: 2,
                group_id: group_id,
                goods_num: that.num,
                goods_item_id: that.goodsInfo.goodspec.goods_item_id,
                goods_id: that.goodsInfo.goods_id,
                express_id: that.nowSelectshipping.e_id,
                use_coupon: that.isUsecoupon,
                uc_id: that.nowCouponInfo.uc_id,
                free_post: that.free_post
            }
            const [err, res] = await api[action](data);
            if (err) {
                that.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                var selfData = res;
                if (selfData.data.total_amount == 0 || selfData.data.total_amount == "0.00") {
                    that.$router.push({
                        path: '/centerFull/orderFull/orderlistinfo',
                        query: {
                            order_id: selfData.data.order_id,
                            order_sn: selfData.data.order_sn
                        }
                    })
                }else{
                    let success = res => {
                        if(action == 'fightgroups'){
                            that.$router.replace({
                                path: '/centerFull/orderFull/orderlistinfo',
                                query: {
                                    order_id: selfData.data.order_id,
                                    order_sn: selfData.data.order_sn
                                }
                            })
                        }else{
                            that.$router.replace({
                                path: '/centerFull/orderFull/pindanInfo',
                                query: {
                                    group_id: selfData.data.group_id
                                }
                            })
                        }
                        that.$vux.toast.text('支付成功','top');
                    }
                    let fail = async err => {
                        if(that.isUsecoupon == 1){
                            let data = {
                                plat: 3,
                                order_id: selfData.data.order_id,
                                token: that.token,
                                account: that.account
                            }
                            const [err, res] = await api.returned(data);
                        }
                        that.$vux.toast.text('支付失败','top');
                    }
                    wxPay(this,{...res.data.pay_param,success, fail})
                }
            }
        },
        useBalanceFun(){
            this.calculateZongjia();
        },
        accAdd(num1, num2){
            var r1, r2, m;
            try {
                r1 = num1.toString().split('.')[1].length;
            } catch (e) {
                r1 = 0;
            }
            try {
                r2 = num2.toString().split(".")[1].length;
            } catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2));
            // return (num1*m+num2*m)/m;
            return Math.round(num1 * m + num2 * m) / m;
        },
        accSub(num1, num2){
            var r1, r2, m,n;
            try {
                r1 = num1.toString().split('.')[1].length;
            } catch (e) {
                r1 = 0;
            }
            try {
                r2 = num2.toString().split(".")[1].length;
            } catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2));
            n = (r1 >= r2) ? r1 : r2;
            return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
        },
        async getHuidou(){
            var that=this;
            var goods_id = that.goodsInfo.goods_id;
            var tempArr = JSON.stringify([goods_id]);
            let data = {
                account: this.account,
                token: this.token,
                scene_id: 2,
                goods_id: tempArr
            }
            const [err, res] = await api.confirm_roder(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.member_discount = res.data.member_discount || 1;
                if(!this.s_id)return;
                var f_weight_price = res.data.shipping_method && res.data.shipping_method.transport_company ? res.data.shipping_method.transport_company[0].f_weight_price : 0;
                var m_weight_price = res.data.shipping_method && res.data.shipping_method.transport_company ? res.data.shipping_method.transport_company[0].m_weight_price : 0;
                var goods_weight = res.data.goods_weight;
                var goods_num=goods_weight.length;
                var goodsTotalWeight=0;
                var free_shipping = res.data.free_shipping;//是否包邮。1包邮，0不包邮
                var x;
                for (x in goods_weight){
                    goodsTotalWeight =goodsTotalWeight+Number(goods_weight[x]['goods_weight']);
                }
                var expressPrice=0;
                if(free_shipping==1){//包邮的话
                    var temp_goods_num = this.accSub(goods_num, 1);
                    var temp_goods_total_weight = this.accMul(goodsTotalWeight , temp_goods_num);
                    var temp_m_weight_price = this.accMul(temp_goods_total_weight, Number(m_weight_price));
                    var temp_f_weight_price = this.accAdd(temp_m_weight_price, Number(f_weight_price));
                    expressPrice = this.accSub(temp_f_weight_price, 0);//把8变成0
                    //expressPrice = (goodsTotalWeight * (goods_num - 1)) * Number(m_weight_price) + Number(f_weight_price)-8;
                    if(expressPrice<0){
                        expressPrice=0;
                    }else{
                        expressPrice=expressPrice;
                    }
                }else{
                    expressPrice = (goodsTotalWeight * (goods_num - 1)) * Number(m_weight_price) + Number(f_weight_price);
                }
                var vcoin_pay_price=that.goodsInfo.vcoin_pay_price;
                var vcoin_price = that.goodsInfo.vcoin_price;
                var paymemt_method = res.data.paymemt_method;
                var restMoney='';
                var huidounum='';
                for(var u=0;u<paymemt_method.length;u++){
                    if (paymemt_method[u].pay_code==3){//表示账户余额
                        restMoney = paymemt_method[u].amount;
                    }
                    if(paymemt_method[u].pay_code == 4){//表示荟豆数
                        huidounum = paymemt_method[u].amount;
                    }
                } 
                var ifUserestMoney = that.ifUseBalance;
                this.nowSelectshipping = res.data.shipping_method && res.data.shipping_method.transport_company ? res.data.shipping_method.transport_company[0] : 0;
                this.exprice = expressPrice;
                this.shippingInfo = res.data.shipping_method && res.data.shipping_method.transport_company ? res.data.shipping_method.transport_company : 0;
                this.goodsTotalWeight = goodsTotalWeight;
                this.goods_num = goods_num;
                this.free_shipping = free_shipping;
                this.paymemt_method = paymemt_method;
                this.restMoney = restMoney;
                this.huidounum = huidounum;
                this.vcoin_pay_price = vcoin_pay_price;
                this.vcoin_price = vcoin_price;
                this.ifUseBalance = ifUserestMoney;
                this.calculateZongjia();
            }
        },
        accMul(num1,num2){
            var m = 0, s1 = num1.toString();
            var s2 = num2.toString();
            try { m += s1.split(".")[1].length } catch (e) { };
            try { m += s2.split(".")[1].length } catch (e) { };
            return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
        },
        calculateZongjia(){
            let OriginalPrice = this.vcoin_pay_price;
            let needHuidouNum = this.vcoin_price;
            let huidouNum = this.huidounum;
            let postFree = this.exprice;
            let restMoney = this.restMoney;
            let ifUserestMoney = this.ifUseBalance;
            var total_count='';
            var huidoujia='';
            if (needHuidouNum <= huidouNum){//如果拥有荟豆很多
                huidoujia=0;
            }else{
                huidoujia=needHuidouNum-huidouNum;//1个荟豆等于1块
            }
            total_count = this.accAdd(OriginalPrice, huidoujia);  //OriginalPrice+huidoujia+postFree;
            total_count = this.accAdd(total_count,postFree);
            if (ifUserestMoney){//如果用余额
                if (total_count > restMoney) {
                    total_count = this.accSub(total_count, restMoney); //total_count - restMoney;
                } else {
                    total_count = 0;
                }
            }else{//不用余额
                total_count = this.accAdd(OriginalPrice, huidoujia);  //OriginalPrice+huidoujia+postFree;
                total_count = this.accAdd(total_count, postFree);
            }
            this.total_count = total_count.toFixed(2);
        }   
    },
    watch: {
        shippingInfo(){
            if(this.shippingInfo){
                this.mobileSelect1.updateWheel(0, this.shippingInfo);
            }
        },
        member_discount(){
            if(!this.s_id)this.getTotal();
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token" ,"_addressInfo"])
    },
}
</script>

