<style lang="less" scoped>
    @import '~@/assets/mobileSelect.less';

    .order-address-box {
    padding: 5/50rem 0/50rem;
    background: #fff;
    margin-bottom: 5/50rem;
    border-bottom: 2/50rem #FF8095 dashed;
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
    }

    .order-goods-right-text {
    width: 75%;
    padding-left: 10/50rem;
    }

    .order-goods-name {
    font-size: 12pt;
    }
    .redCoupon{
    color: rgba(251,76,114,1) !important;
    }
    .order-goods-space {
    font-size: 11pt;
    color: #888;
    }

    .order-goods-price {
    font-size: 12pt;
    color: red;
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
    color: rgba(251,76,114,1);
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
    color: #FB4C72;
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
</style>
<template>
    <div class="idnexWrapBox">
        <x-header :left-options="{backText:''}" :title="nvabarData.title" id="vux-header"></x-header>
        <!-- <loading type="type3" v-if="loadingShow"></loading> -->
        <div style="background-color: #eee">
            <div class="content">
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
                                    <span style="font-size:14pt">{{addressInfo.area_info}}{{addressInfo.address}}</span>
                                </div>
                            </div>
                            <span class="iconfont icon-right-jiantou"></span>
                        </div>
                    </div>
                </div>
                <div class='goods-box flex flex-align-center line_xi_after'>
                    <img :src="goodsInfo.goodsimg" class="order-goods-left-img" alt="">
                    <div class="order-goods-right-text">
                        <div class='order-goods-name'>{{goodsInfo.goodsname}}</div>
                        <div class="order-goods-space">{{goodsInfo.goodspec.spec}}</div>
                        <div class='order-goods-price'>{{goodsInfo.goodsprice}}</div>
                    </div>
                </div>
                <div class="flex flex-pack-justify flex-align-center stepperBox line_xi_after">
                    <span class="num-title">购买数量</span>
                    <div class="stepper flex">
                        <!-- 减号 -->
                        <span :class="minusStatus" @click="bindMinus">-</span>
                        <!-- 数值 -->
                        <input type="text" disabled v-model="num" @click="bindManual">
                        <!-- 加号 -->
                        <span class="normal" @click="bindPlus">+</span>
                    </div>
                </div>
                <div class="weui-cell  weui-cell_select line_xi_after" v-if="coupon_num!=0">
                    <div class="weui-cell__hd weui-cell__hd_in-select-after coupon-box">
                        <div class="weui-label coupon-box-left">优惠券
                            <span class="coupon-num-box" v-if="coupon_num!=0">{{coupon_num}}张优惠券</span>
                        </div>
                    </div>
                    <div class="weui-cell__bd " @click="selectCoupon">
                        <div class="weui-select weui-select_in-select-after" :class="coupon_text=='请选择优惠券'?'':'redCoupon'"></div>
                    </div>
                </div>
                <div class="weui-cell weui-cell_select line_xi_after" style="padding: 0">
                    <div class="weui-cell__hd weui-cell__hd_in-select-after">
                        <div class="weui-label">快递选择</div>
                    </div>
                    <div class="weui-cell__bd ">
                        <div class="weui-select weui-select_in-select-after" id="select">{{nowSelectshipping.e_name}}</div>
                    </div>
                </div>
                <div class="weui-cells weui-cells_after-title marT0">
                    <div class="weui-cell yunfei">
                        <div class="weui-cell__bd">邮费</div>
                        <div class="weui-cell__ft">￥{{exprice}}</div>
                    </div>
                </div>
                <div class="openVip" v-if="!vipInfo.whether_member" @click="openvip">
                    <div>
                        <span class="iconfont icon-mian"><span>开通会员卡可免邮哦</span></span>
                    </div>
                    <div class="small-vip-shipping">开通会员卡，平均每年可省1000多元</div>
                    <div>查看
                        <span class="iconfont icon-youbian"></span>
                    </div>
                </div>
                <div class="weui-cells weui-cells_after-title marT0" v-else style="position: relative">
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
                </div>
            </div>
            <div class='bottom-pay-box flex flex-pack-justify flex-align-center' style="border-top: 1px solid #eee;">
                <span class="heji">合计:￥<span class="zongjiaqian">{{total_count}}</span></span>
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
        }
    },
    mounted(){
        this.init();
    },
    methods: {  
        init(){
            let that = this;
            let goodsInfo = this.goodsInfo;
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
                trigger: '#select',
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
            this.getTotal(this);
            var proWeight = Math.ceil(this.num * this.goods_weight) - 1;
            var exprice = parseFloat(parseFloat(proWeight * this.nowSelectshipping.m_weight_price) + parseFloat(this.nowSelectshipping.f_weight_price)).toFixed(2);
            this.exprice = exprice;
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
                        this.getTotal();
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
            var count = parseFloat(parseFloat(that.goodsInfo.goodsprice * that.num) - parseFloat(coupon_price)).toFixed(2);
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
            if (this.isUsecoupon == 1) {
                if (parseFloat(this.goodsInfo.goodsprice * this.num) < this.nowCouponInfo.min_money) {
                    this.isUsecoupon = 0;
                    this.coupon_text = "请选择优惠券";
                    this.nowCouponInfo = "";
                    this.getTotal(this);
                }
            }
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
                pay_code: 2,
                express_id: that.nowSelectshipping.e_id,
                use_coupon: that.isUsecoupon,
                uc_id: that.nowCouponInfo.uc_id,
                free_post: that.free_post,
                goods_id: that.goodsInfo.goods_id,
                goods_item_id: that.goodsInfo.goodspec.goods_item_id,
                num: that.num,
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
                        that.$vux.toast.text('取消支付');
                    }
                }
                wxPay(this,{...res.data.pay_param,success, fail})
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
                            that.$vux.toast.text('取消支付');
                        }
                    }
                    wxPay(this,{...res.data.pay_param,success, fail})
                }
            }
        },
    },
    watch: {
        shippingInfo(){
            this.mobileSelect1.updateWheel(0, this.shippingInfo);
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token", "goodsInfo","_addressInfo"])
    },
}
</script>

