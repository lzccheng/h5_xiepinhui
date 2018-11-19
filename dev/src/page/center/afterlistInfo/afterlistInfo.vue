<style lang="less" scoped>
.after-content{
  padding-bottom: 51/50rem;
}
.top-box-chexiao {
	background: #fff;
	padding: 15/50rem;
	margin-bottom: 5/50rem;
  font-size: 12pt;
}

.chexiao-header {
	line-height: 30/50rem;
}

.chexiao-header img {
	width: 25/50rem;
	height: 25/50rem;
	margin-right: 5/50rem;
}
.textriceColor{
  color: red;
  font-weight: bold;
}
.xieshang{
  margin-bottom: 5/50rem;
}

.shop-img {
	width: 18/50rem;
	height: 18/50rem;
	margin-right: 5/50rem;
}
.list-box{
  padding:10/50rem 15/50rem;
  background: #fff;
  font-size: 12pt;
  margin-bottom: 5/50rem;
}
.kefu-box{
  position: absolute;
  right: 15/50rem;
  margin-top: 3/50rem;
  color: red;
}
.chuli-title{
  font-size: 9pt;
  line-height: 30/50rem;
  color: #888;
}
.bottom-footer {
	position: fixed;
	width: 100%;
	line-height: 44/50rem;
	background: #fff;
	bottom: 0;
	text-align: right;
	z-index:5
}

.footer-btn {
	background: #61D8D0;
	color: #fff;
	padding:4/50rem 10/50rem;
	border-radius: 5/50rem;
  margin-right: 15/50rem;
  font-size: 12pt;
}

.buzhou-item{
  line-height: 30/50rem;
  font-size:10pt;
}
._bg{
    background: #F8F8F8;
}
.weui-cells{
    margin-top: 0;
}
</style>
<template>
    <div class="_bg">
        <x-header :left-options="{backText:''}" :title="nvabarData.title" id="vux-header"></x-header>
        <div>
            <div class="after-content">
                <div class="top-box">
                <div class="top-box-chexiao">
                    <div class="chexiao-header flex flex-align-center" v-if='refund_Info.refund_state=="1"'>
                    <img src='http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png'/>
                    <span>申请已提交等待卖家处理</span>
                    </div>
                    <div class="chexiao-header flex flex-align-center" v-if='refund_Info.refund_state=="4"'>
                    <img src='http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png'/>
                    <span>卖家拒绝了您的申请</span>
                    </div>
                    <div class="chexiao-header flex flex-align-center" v-if='refund_Info.refund_state=="5"'>
                    <img src='http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png'/>
                    <span>申请已撤销</span>
                    </div>
                    <div class="chexiao-header flex flex-align-center" v-if='refund_Info.refund_state=="6"'>
                    <img src="http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png" />
                    <span>退款超时已关闭</span>
                    </div>
                    <div class="chexiao-header flex flex-align-center" v-if='refund_Info.refund_state=="3"'>
                    <img src='http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png'/>
                    <span>退款成功</span>
                    </div>
                    <div class="chexiao-header flex flex-align-center" v-if='refund_Info.refund_state=="2"'>
                    <img src='http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png'/>
                    <span>商家同意退货退款,请及时退货</span>
                    </div>
                    <div class="chuli-title" v-for="(item, index) in refund_Info.apply_desc" :key="index">{{item}}</div>
                </div>
                <div class="top-box-chexiao" v-if='refund_Info.refund_state=="2"'>
                    <div class="buzhou-box list-bottom">
                    <div class="">退款步骤</div>
                    <div class="buzhou-list flex flex-align-center ">
                        <div>① ----- 寄回----- </div>
                        <div class="buzhou-center-line"></div>
                        <div>②----- 及时填写物流单号</div>
                    </div>
                    </div>
                    <div class="buzhou-box buzhou-item">
                    <div>退货地址：{{refund_Info.refund_address}}</div>
                    <div>收件人：{{refund_Info.refund_addressee}}</div>
                    <div>联系电话：{{refund_Info.refund_mobile}}</div>
                    <div>商家留言：{{refund_Info.seller_message}}</div>
                    </div>
                </div>
                </div>

                <div class="weui-cells weui-cells_after-title xieshang" @click='linkxieshang'>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd ">协商处理</div>
                    <div class="weui-cell__ft weui-cell__ft_in-access" style="font-size: 0">
                    </div>
                </div>
                </div>
                <div class="list-box flex list-bottom flex-align-center aj-line_xi_after selectpopPicker" id="2">
                <span class="li-title">店铺名称：</span>
                <img class="shop-img" src="http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png"/>
                <span class="li-text">鞋品荟</span>
                <div class="kefu-box">
                    <!-- <contact-button></contact-button> -->
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                    <div class="weui-cell__bd">退款类型</div>
                    <div class="weui-cell__ft">{{refund_Info.refund_type_desc}}</div>
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title" v-if='refund_Info.refund_type!="3"'>
                <div class="weui-cell">
                    <div class="weui-cell__bd">退款金额</div>
                    <div class="weui-cell__ft">￥{{refund_Info.refund_amount}}</div>
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title" v-if='refund_Info.refund_type!="3"'>
                <div class="weui-cell">
                    <div class="weui-cell__bd">退款原因</div>
                    <div class="weui-cell__ft">{{refund_Info.reason_id}}</div>
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title" v-if='refund_Info.refund_type=="3"'>
                <div class="weui-cell">
                    <div class="weui-cell__bd">换货原因</div>
                    <div class="weui-cell__ft">{{refund_Info.exchange_id}}</div>
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                    <div class="weui-cell__bd">商品名称</div>
                    <div class="weui-cell__ft">{{refund_Info.goods_name}}</div>
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                    <div class="weui-cell__bd">订单编号</div>
                    <div class="weui-cell__ft">{{refund_Info.order_sn}}</div>
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                    <div class="weui-cell__bd">售后编号</div>
                    <div class="weui-cell__ft">{{refund_Info.refund_sn}}</div>
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                    <div class="weui-cell__bd">申请时间</div>
                    <div class="weui-cell__ft">{{refund_Info.add_time}}</div>
                </div>
                </div>
                <div class="weui-cells weui-cells_after-title" v-if='refund_Info.refund_state=="2"'>
                <div class="weui-cell">
                    <div class="weui-cell__bd">处理时间</div>
                    <div class="weui-cell__ft">{{refund_Info.seller_time}}</div>
                </div>
                </div>
            </div>

            <div class="bottom-footer aj-line_xi">
                <span class="footer-btn" v-if='refund_Info.refund_state=="3"' bindtap="goWheremoney">钱款去向</span>
                <span class="footer-btn" v-if='isxiugai' @click="xiugai">修改申请</span>
                <span class="footer-btn" v-if='refund_Info.refund_state=="1"&&refund_Info.revoke!=1' @click="chexiao">撤销申请</span>
                <span class="footer-btn" v-if='isTui' bindtap='ship'>填写退货信息</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import { Group, Cell, XButton, Badge, XHeader } from "vux";
export default {
    components: {
        XHeader
    },
    data(){
        return {
            refund_Info:"",
            refund_id:"",
            apply_desc: "",
            isTui:false,
            isxiugai:false,
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '鞋品荟', //导航栏 中间的标题
            },
        }
    },
    created(){
        this.refund_id = this.$route.query.refund_id;
        this.showInfo();
    },
    methods: {
        async showInfo(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                refund_id: this.refund_id
            }
            const [err, res] = await api.refunddetails(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                res.data.add_time = this.getLocalTime(res.data.add_time);
                res.data.seller_time = this.getLocalTime(res.data.seller_time);
                res.data.apply_desc = res.data.apply_desc.split("\\n");
                this.refund_Info = res.data;
                if (res.data.refund_state == "2") {
                    if (res.data.is_fill_in == 0) {
                        this.isTui = true;
                    } else {
                        this.isTui = false;
                    }
                } else {
                    this.isTui = false;
                }
                if (res.data.refund_type != "3") {
                    if (res.data.refund_state == "1") {
                        this.isxiugai = false;
                    } else {
                        this.isxiugai = true;
                    }
                } else {
                    if (res.data.refund_state == "1" || res.data.refund_state == "5") {
                        this.isxiugai = true;
                    } else {
                        this.isxiugai = false;
                    }
                }
            }
        },
        getLocalTime(nS){
            var time = new Date(nS * 1000);
            var date = (time.getFullYear()) + "-" +
                        (time.getMonth() + 1) + "-" +
                        (time.getDate()) + " " +
                        (time.getHours()) + ":" +
                        (time.getMinutes()) + ":" +
                        (time.getSeconds());
            return date;
        },
        linkxieshang(){
            this.$router.push({
                path: '/centerFull/orderFull/aftersteps',
                query: {
                    refund_id: this.refund_id
                }
            })
        },
        xiugai(){
            this.$router.push({
                path: '/centerFull/partner/aftersalerInfo',
                query: {
                    refund_id: this.refund_id,
                    update: 1
                }
            })
        },
        chexiao(){
            let that = this;
            this.$vux.confirm.show({
                title: '撤销申请',
                content: '申请售后仅可撤销一次，您确定要撤销申请？',
                cancelText:"暂不撤销",
                confirmText:"撤销申请",
                async onConfirm () {
                    let data = {
                        plat: 3,
                        account: that.account,
                        token: that.token,
                        refund_id: that.refund_id
                    }
                    const [err, res] = await api.refundrevoke(data);
                    if (err) {
                        this.$vux.toast.text(err.msg);
                        return;
                    }
                    if(res.code == 2000){
                        that.$vux.toast.text('撤销成功');
                        that.showInfo();
                    }
                }
            })
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    }
}
</script>

