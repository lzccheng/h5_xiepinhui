<style lang="less" scoped>
.weui-label{
  font-size: 11pt;
}
.weui-cell{
  background: #fff !important;
}
.weui-select {
  height:44/50rem !important;
  line-height:44/50rem;
  min-height:44/50rem;
  border-right: 0/50rem;
}
.weui-cell__bd{
  font-size: 11pt;
}
.weui-select_in-select-after{
  text-align:right;
  font-size: 11pt;
}
.dizhilable{
  width: 150/50rem;
}
.dizhiinfo{
  width: 80%;
  text-align: left;
}
.well-box{
  background: #fff;
}
.shuoming-title{
  line-height:35/50rem;
}
.erro-color{
  color: red;
}
.bottom-btn{
  padding: 15/50rem;
}
.bottom-btn div{
  text-align: center;
  background: #61D8D0;
  color: #fff;
  font-size: 12pt;
  line-height: 35/50rem;
  border-radius: 5/50rem;
}
.bg{
    background: #F8F8F8;
}
input, textarea{
    border: none;
}
</style>
<template>
    <div class="bg">
        <x-header :left-options="{backText:''}" :title="nvabarData.title" id="vux-header"></x-header>
        <div>
            <div class="weui-cell weui-cell_select line_xi_after" v-if="typeStatus!=3">
                <div class="weui-cell__hd weui-cell__hd_in-select-after">
                <div class="weui-label">售后类型</div>
                </div>
                <div class="weui-cell__bd ">
                    <div class="weui-select weui-select_in-select-after" id="type">{{typeText}}</div>
                </div>
            </div>
            <div class="weui-cell weui-cell_select line_xi_after" v-if="typeStatus==3">
                <div class="weui-cell__hd weui-cell__hd_in-select-after">
                <div class="weui-label">换货原因</div>
                </div>
                <div class="weui-cell__bd ">
                    <div class="weui-select weui-select_in-select-after" id="resean">{{huanhuoText}}</div>
                </div>
            </div>
            <div class="weui-cell weui-cell_select line_xi_after" v-if="typeStatus!=3">
                <div class="weui-cell__hd weui-cell__hd_in-select-after">
                <div class="weui-label">退款原因</div>
                </div>
                <div class="weui-cell__bd ">
                    <div class="weui-select weui-select_in-select-after" id="moneyresean">{{reasonText}}</div>
                </div>
            </div>
            <div class="weui-cell weui-cell_select line_xi_after" v-if="typeStatus==3">
                <div class="weui-cell__hd weui-cell__hd_in-select-after">
                <div class="weui-label">快递选择</div>
                </div>
                <div class="weui-cell__bd ">
                    <div class="weui-select weui-select_in-select-after" id="shipping">{{shippingText}}</div>
                </div>
            </div>
            <div v-if="typeStatus==3" class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                <div class="weui-cell__bd dizhilable">换货地址</div>
                <div class="weui-cell__ft dizhiinfo">{{refuse_data.refund_address}}</div>
                </div>
            </div>
            <div v-if="typeStatus==3" class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                <div class="weui-cell__bd">快递金额</div>
                <div class="weui-cell__ft">￥{{shippingPrice}}</div>
                </div>
            </div>
            <div class="well-box" v-if="typeStatus!=3">
                <div class="weui-cell weui-cell_input">
                <div class="weui-cell__hd">
                    <div class="weui-label">退款金额</div>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" @input="tuiKuanmoney" placeholder="请输入退款金额" :value="price" />
                </div>
                </div>
                <div class="weui-cells__tips">(退款金额不得超过
                <span class="erro-color">{{refuse_data.refund_amount}}</span>元)</div>
            </div>
            <div class="well-box">
                <div class="weui-cells__title shuoming-title line_xi_after">退款说明</div>
                <div class="weui-cells weui-cells_after-title ">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请您详细填写退款说明。(最多180个字)" style="height: 3.3em" v-model="desc" />
                    <!-- <div class="weui-textarea-counter">0/200</div> -->
                    </div>
                </div>
                </div>
            </div>
            <div class="weui-cell weui-cell_input">
                <div class="weui-cell__hd">
                <div class="weui-label">联系电话</div>
                </div>
                <div class="weui-cell__bd">
                <input type="text" class="weui-input" placeholder="请输入联系电话" v-model="phoneNumber" />
                </div>
            </div>
            <div class='bottom-btn' style="background-color: #fff;">
                <div @click='tijiao'>提交申请</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import { Group, Cell, XButton, Badge, XHeader } from "vux";
import MobileSelect from 'mobile-select';
import { wxPay } from "@/utils/wx_sdk.js";
export default {
    components: {
        XHeader
    },
    data(){
        return {
            refuse_data: "",
            typeStatus: "",
            typeText: "请选择售后类型",
            order_goods_id: "",
            ReasonStatus: "",
            reasonText: "请选择退款原因",
            price: 0.00,
            orderid: "",
            huanhuoText: "请选择换货原因",
            huanhuoStatus: "",
            shippingText: "请选择快递",
            shippingStatus: "",
            shippingPrice: 0.00,
            imgList: "",
            desc:"",
            phoneNumber:"",
            refund_id:"",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '我要换货/退款', //导航栏 中间的标题
            },
        }
    },
    created(){
        this.orderid =  this.$route.query.orderid;
        this.typeStatus = this.$route.query.type;
        this.refund_id = this.$route.query.refund_id || '';
        this.update = this.$route.query.update || false;
        this.showInfo();
    },
    methods: {
        init(){
            let that = this;
            let typeStatus = this.typeStatus;
            let type;
            if(this.update){
                type = 'arerylist';
            }else{
                type = 'refuse_data';
            }
            // 售后类型
            if(typeStatus!=3){
                this.typeObj = new MobileSelect({
                    trigger: '#type',
                    title: '',
                    wheels: [
                        {
                            data: that[type].refund_type
                        }
                    ],
                    callback: function(indexArr,data){
                        that.typeStatus = data[0].value;
                        that.typeText = data[0].name;
                    },
                    keyMap: {
                        id:'value',
                        value: 'name'
                    },
                    ensureBtnColor: '#61D8D0',
                })
                // 退款原因
                this.moneyreseanObj = new MobileSelect({
                    trigger: '#moneyresean',
                    title: '',
                    wheels: [
                        {
                            data: that[type].refund_reason
                        }
                    ],
                    callback: function(indexArr,data){
                        that.ReasonStatus = data[0].value;
                        that.reasonText = data[0].name;
                    },
                    keyMap: {
                        id:'value',
                        value: 'name'
                    },
                    ensureBtnColor: '#61D8D0',
                })
            }
            // 换货原因
            if(typeStatus==3){
                this.reseanObj = new MobileSelect({
                    trigger: '#resean',
                    title: '',
                    wheels: [
                        {
                            data: that[type].egreason
                        }
                    ],
                    callback: function(indexArr,data){
                        that.huanhuoStatus = data[0].value;
                        that.huanhuoText = data[0].name;
                        if (that.huanhuoStatus == 1) {
                            this.shippingPrice = 0.00;
                        } else {
                        for (var i = 0; i < this.refuse_data.shipping_data.length; i++) {
                            if (this.refuse_data.shipping_data[i].value == this.shippingStatus) {
                                this.shippingPrice =this.refuse_data.shipping_data[i].expressfee
                            }
                        }
                        }
                    },
                    keyMap: {
                        id:'value',
                        value: 'name'
                    },
                    ensureBtnColor: '#61D8D0',
                })
                //快递选择
                this.shippingObj = new MobileSelect({
                    trigger: '#shipping',
                    title: '',
                    wheels: [
                        {
                            data: that[type].shipping_data
                        }
                    ],
                    callback: function(indexArr,data){
                        that.shippingStatus = data[0].value;
                        that.shippingText = data[0].name;
                        if (that.huanhuoStatus == 1) {
                            that.shippingPrice = 0.00;
                        } else {
                            for (var i = 0; i < that.refuse_data.shipping_data.length; i++) {
                                if (that.refuse_data.shipping_data[i].value == that.shippingStatus) {
                                    that.shippingPrice = that.refuse_data.shipping_data[i].expressfee;
                                }
                            }
                        }
                    },
                    keyMap: {
                        id:'value',
                        value: 'name'
                    },
                    ensureBtnColor: '#61D8D0',
                })
            }
        },
        tuiKuanmoney(event){
            console.log(event.target.valueAsNumber,this.price)
            let value = event.target.valueAsNumber;
            if (value > this.refuse_data.refund_amount) {
                this.$vux.toast.text("退款金额不得超过" + this.refuse_data.refund_amount);
            } else if (value < 0) {
                this.price = 0.00;
                this.$vux.toast.text("退款金额不得小于0");
            } else {
                if(value){
                    this.price = value;
                }
            }
        },
        async showInfo(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token
            }
            let err, res;
            if(this.update){
                data.refund_id = this.refund_id;
                [err, res] = await api.refundedit(data);
            }else{
                data.order_id = this.orderid;
                [err, res] = await api.refunapply(data);
            }
            
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                let that = this;
                if(this.update){
                    this.refuse_data = res.data.refund_data;
                    this.refund_address = res.data.refund_address;
                    this.arerylist = res.data;
                    this.typeStatus = res.data.refund_data.refund_type;
                    this.price = res.data.refund_data.refund_amount;
                    this.phoneNumber = res.data.refund_data.member_mobile; 	//买家联系电话，默认拿买家的收货电话
                    this.desc = res.data.refund_data.reason_info; //退换货原因(描述)
                    console.log(this.phoneNumber,3333)
                    if (res.data.refund_data.refund_type == "3") {
                        for (var n = 0; n < res.data.egreason.length; n++) {
                            if (res.data.refund_data.exchange_id == res.data.egreason[n].value) {
                                this.huanhuoText = res.data.egreason[n].name;
                                this.huanhuoStatus = res.data.egreason[n].value;
                            }
                        }
                        for (var b = 0; b < res.data.shipping_data.length; b++) {
                            if (res.data.refund_data.express_id == res.data.shipping_data[b].value) {
                                this.shippingText = res.data.shipping_data[b].name;
                                this.shippingStatus = res.data.shipping_data[b].value;
                                this.shippingPrice = res.data.shipping_data[b].expressfee;
                            }
                        }
                    } else {
                        if (res.data.refund_data.refund_type == "1") {
                            this.typeText = "我要退货退款";
                        } else if (res.data.refund_data.refund_type == "2") {
                            this.typeText = "我要退款（无需退货）";
                        }
                        for (var n = 0; n < res.data.refund_reason.length; n++) {
                            if (res.data.refund_data.reason_id == res.data.refund_reason[n].value) {
                                this.reasonText = res.data.refund_reason[n].name;
                                this.ReasonStatus = res.data.refund_reason[n].value;
                            }
                        }
                    }
                    this.init()
                }else{
                    console.log(8888)
                    for (var i = 0; i < res.data.refund_type.length; i++) {
                        if (res.data.refund_type[i].value == that.typeStatus) {
                            this.refuse_data =res.data;
                            this.price = res.data.refund_amount;
                            this.typeText = res.data.refund_type[i].name;
                            this.phoneNumber = res.data.member_mobile;
                            this.init()
                        }
                    }
                }
                
            }
        },
        tijiao(){
            if (this.typeStatus == "3") {
                if (this.huanhuoStatus == "") {
                    this.$vux.toast.text('请选择换货原因');
                } else if (this.shippingStatus == "") {
                    this.$vux.toast.text('请选择快递方式');
                } else if (this.desc == "") {
                    this.$vux.toast.text('请您填写退款说明');
                } else if (this.phoneNumber == "") {
                    this.$vux.toast.text('请您填写联系电话');
                } else {
                    this.tuikuan(this)
                }
            } else {
                if (this.ReasonStatus == "") {
                    this.$vux.toast.text('请选择退款原因');
                } else if (this.price == "") {
                    this.$vux.toast.text('请您填写退款金额');
                } else if (this.desc == "") {
                    this.$vux.toast.text('请您填写退款说明');
                } else if (this.phoneNumber == "") {
                    this.$vux.toast.text('请您填写联系电话');
                } else {
                    this.tuikuan(this)
                }
            }
        },
        async tuikuan(){
            let that = this;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                rtype: that.typeStatus, 		//退换货类型 1 2 3
                reason_id: that.ReasonStatus, //退款原因 类型为1和2的时候必填
                egreason_id: that.huanhuoStatus, //换货原因 类型为3必填
                express_id: that.shippingStatus, //快递ID   类型为3必填
                ramount: that.price, 	//退款金额   类型为1和2的时候必填
                mobile: that.phoneNumber, 	//买家联系电话，默认拿买家的收货电话
                reason_info: that.desc, //退换货原因(描述)
                voucher:"" //凭证 json 字符串
            }
            let err, res;
            if(this.update){
                data.refund_id = that.refund_id;
                [err, res] = await api.refundmodify(data);
            }else{
                data.order_id = that.orderid;
                [err, res] = await api.refunapplyadd(data);
            }
            if (err) {
                that.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                that.refund_id = res.data.refund_id;
                if(res.data.rtype == "3"){
                    if(res.data.pay_type.value == 0){
                        that.$vux.toast.text('申请已提交');
                        that.$router.push({
                            path: '/centerFull/orderFull/afterlistInfo',
                            query: {
                                refund_id: res.data.refund_id
                            }
                        })
                    }else{
                        that.$vux.confirm.show({
                            title: '支付邮费',
                            content: '您当前还需要支付',
                            async onConfirm(){
                                that.$vux.loading.show({
                                    text: '支付中...'
                                })
                                let data = {
                                    plat: 3,
                                    account: that.account,
                                    token: that.token,
                                    refund_id: that.refund_id,
                                    type: 1,
                                    openid: that.user.openid
                                }
                                const [err, res] = await api.refundselectpay(data);
                                if (err) {
                                    that.$vux.toast.text(err.msg);
                                    return;
                                }
                                if(res.code == 2000){
                                    that.$vux.toast.text('refundselectpay');
                                    var selfData = res;
                                    let success = res =>{
                                        that.$router.replace({
                                            path: '/centerFull/orderFull/afterlistInfo',
                                            query: {
                                                order_id: selfData.data.order_id,
                                                order_sn: selfData.data.data.order_sn,
                                            }
                                        })
                                    }
                                    let fail = err =>{

                                    }
                                    wxPay(that,{...res.data.pay_param,success,fail})
                                }
                            },
                            onCancel(){}
                        })
                    }
                }else{
                    this.$vux.toast.text(res.msg)
                    that.$router.push({
                        path: 'afterlistInfo',
                        query: {
                            refund_id: res.data.refund_id
                        }
                    })
                }
            }
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    }
}
</script>


