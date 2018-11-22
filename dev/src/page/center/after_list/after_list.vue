<style scoped lang="less">

.swiper-tab {
  position: fixed;
  /* top: 0/50rem; */
  width: 100%;
  background: #fff;
  text-align: center;
  line-height: 80/100rem;
  z-index: 2;
}

.swiper-tab-list {
  font-size: 30/100rem;
  display: inline-block;
  width: 50%;
  color: #777;
}

.on {
  color: #61D8D0;
  border-bottom: 2/50rem solid #61D8D0;
}

.swiper-box {
  display: block;
  width: 100%;
  padding-top: 90/100rem;
}
.jinggao{
  color: red;
  padding:5/50rem 15/50rem;
  font-size: 9pt;
}
.red-list{
  padding:5/50rem 15/50rem;
  background: #fff;
}
.list-bottom{
  padding-top:3/50rem;
}
.list-bottom img{
  width: 50/50rem;
  height: auto;
}
.avatar-box{
  text-align: center;
  padding: 10/50rem 0/50rem; 
}
.avatarImg{
  width: 75/50rem;
  height: 75/50rem;
  margin: auto;
}
.bottom-after{
  border-bottom: 1/50rem #f1f1f1 solid;
}
.eva-null{
  width:100%;
  text-align: center;
  font-size: 10pt;
  color: #888;
  padding-top: 44/50rem;
}
.eva-null img{
  width:20%;
}
.null-img{
  width:30% !important;
}
.orderlist-tab {
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 3
}

.order-li {
  width: 20%;
  text-align: center;
  font-size: 10pt;
  float: left;
}

.order-li text {
  line-height: 40/50rem;
  padding-bottom: 8/50rem;
}

.order-active {
  border-bottom: 2/50rem red solid;
}
.order-list-box {
  background: #fff;
  margin-bottom: 5/50rem;
}

.list-top-box {
  padding: 5/50rem 15/50rem;
  font-size:10pt;
}

.list-top-box .top-left {
  line-height: 30/50rem;
}

.list-top-box .top-left img {
  width: 20/50rem;
  height: 20/50rem;
  padding-right: 10/50rem;
}

.status {
  color: red;
}

.list-center-goods {
  background: #f5f5f5;
}

.left-goodsImage {
  width: 70/50rem;
  height: 65/50rem;
  padding: 5/50rem 10/50rem 5/50rem 15/50rem;
}

.cetenr-goodsinfo {
  width: 55%;
}

.cetenr-goodsinfo .goodsname {
  padding-top: 5/50rem;
  font-size: 10pt;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.cetenr-goodsinfo .goods-spec {
  padding-top: 5/50rem;
  font-size: 9pt;
  color: #888;
}

.right-goodsnum {
  width: 20%;
  text-align: right;
  padding-right: 15/50rem;
}

.right-goodsnum .goodsprice {
  font-size: 9pt;
}

.right-goodsnum .goodsnum {
  font-size: 8pt;
  color: #888;
}

.order-bottom {
  padding: 3/50rem 0/50rem;
  line-height: 35/50rem;
}

.order-bottom-btn {
  padding:8/50rem 15/50rem;
  text-align: right;
}

.order-btn {
  padding: 3/50rem 15/50rem;
  border-radius: 5/50rem;
  margin-top: 5/50rem;
  margin-bottom: 5/50rem;
  padding-bottom: 3/50rem;
  font-size: 12pt;
  margin-left: 5/50rem;
  color: #fff;
  background: #61D8D0;
}

.text-font {
  font-size:10pt;
  padding-right: 15/50rem;
}

.redboder {
  border: 1/50rem #e71f19 solid;
  color: #e71f19;
}

.img-list {
  position: absolute;
  left: 15/50rem;
}
.orderType{
  border: 1/50rem red solid;
  color: red;
  border-radius: 5/50rem;
  padding: 0/50rem 10/50rem;
  font-size: 9pt;
}
.img-list img {
  width: 30/50rem;
  height: 30/50rem;
  border-radius: 100%;
  float: left;
  margin-right: 5/50rem;
}
.padd{
    padding-top: 0.9rem;
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" title='售后/退款' id='vux-header'></x-header>
        <div>
            <div class="flex swiper-tab line_xi_after line_xi_before">
                <div class="swiper-tab-list" :class="currentTab==0 ? 'on' : ''" @click="swichNav(0)">全部</div>
                <div class="swiper-tab-list" :class="currentTab==1 ? 'on' : ''" @click="swichNav(1)">待处理</div>
            </div>
            <div class="padd">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide>
                        <div class="eva-null" v-if="isNull_0">
                            <img mode='widthFix' src='@/assets/images/null/zanwupingjia.png'/>
                            <div>当前暂无售后订单</div>
                            </div>
                            <div class="content">
                            <div class='order-list-box' v-for="(item,index) in onelistInfo" :key="index">
                                <div class='list-top-box flex flex-align-center flex-pack-justify'>
                                <div class='top-left flex flex-align-center'>
                                    <img src="http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png"/>
                                    鞋品荟平台自营
                                </div>
                                <span class=" status" v-if='item.refund_state=="1"'>
                                <span v-if="item.refund_type=='1'">退款退货中</span>
                                <span v-else-if="item.refund_type=='2'">退款中</span>
                                <span v-else>换货中</span>
                                </span>
                                <span class=" status" v-else-if='item.refund_state=="2"'>卖家同意退款</span>
                                <span class=" status" v-else-if='item.refund_state=="3"'>已完成</span>
                                <span class=" status" v-else-if='item.refund_state=="4"'>卖家拒绝退款</span>
                                <span class=" status" v-else-if='item.refund_state=="5"'>申请已撤销</span>
                                <span class=" status" v-else-if='item.refund_state=="6"'>退款已关闭</span>
                                </div>
                                <div class='list-center-goods flex ' v-for="(goodsItem,index) in item.refundgoods" @click='openInfo(item.refund_id)' :data-refundid='item.refund_id' :key="index">
                                <img class="left-goodsImage" :src='goodsItem.goods_img'/>
                                <div class='cetenr-goodsinfo'>
                                    <div class="goodsname">{{goodsItem.goods_name}}</div>
                                    <div class="goods-spec">{{goodsItem.goods_spec}}</div>
                                </div>
                                <div class='right-goodsnum'>
                                    <div class="goodsprice">￥{{goodsItem.goods_price}}</div>
                                    <div class="goodsnum">x {{goodsItem.num}}</div>
                                </div>
                                </div>
                                <div class="order-bottom flex  flex-align-center flex-pack-end  line_xi_after">
                                <div class="img-list">
                                    <span v-if="item.order_type=='1'" class="orderType">单独购买商品</span>
                                </div>
                                <span class="text-font">实付金额:￥{{item.order_amount}} 退款金额<span style="color: #CF2D28;font-size:10pt;">￥{{item.refund_amount}}</span></span>
                                </div>
                                <div class="order-bottom-btn " v-if="item.refund_state=='3'" @click="buyagain(item.refundgoods[0].goods_id)" :data-goodsid='item.refundgoods[0].goods_id'>
                                <span class="order-btn" @click='goWheremoney(item.refund_id)' :data-id="item.refund_id">钱款去向</span>
                                </div>
                            </div>
                            <div class="loading" v-if="oneupLoading">加载中...</div>
                            <div class="loading complete" v-if="oneupLoadingComplete">已加载全部数据</div>
                            </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="eva-null" v-if="isNull_1">
                            <img mode='widthFix' src='@/assets/images/null/zanwupingjia.png'/>
                            <div>当前暂无待处理</div>
                            </div>
                            <div class="content">
                            <div class='order-list-box' v-for="(item,index) in twolistInfo" :key="index">
                                <div class='list-top-box flex flex-align-center flex-pack-justify'>
                                <div class='top-left flex flex-align-center'>
                                    <img src="http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png"/>
                                    鞋品荟平台自营
                                </div>
                                <span class=" status" v-if='item.refund_state=="1"'>
                                <span v-if="item.refund_type=='1'">退款退货中</span>
                                <span v-else-if="item.refund_type=='2'">退款中</span>
                                <span v-else>换货中</span>
                                </span>
                                <span class=" status" v-else-if='item.refund_state=="2"'>卖家同意退款</span>
                                <span class=" status" v-else-if='item.refund_state=="3"'>已完成</span>
                                <span class=" status" v-else-if='item.refund_state=="4"'>卖家拒绝退款</span>
                                <span class=" status" v-else-if='item.refund_state=="5"'>申请已撤销</span>
                                <span class=" status" v-else-if='item.refund_state=="6"'>退款已关闭</span>
                                </div>
                                <div class='list-center-goods flex ' v-for="(goodsItem, index) in item.refundgoods" :key="index" @click='openInfo(item.refund_id)' :data-refundid='item.refund_id'>
                                <img class="left-goodsImage" :src='goodsItem.goods_img'/>
                                <div class='cetenr-goodsinfo'>
                                    <div class="goodsname">{{goodsItem.goods_name}}</div>
                                    <div class="goods-spec">{{goodsItem.goods_spec}}</div>
                                </div>
                                <div class='right-goodsnum'>
                                    <div class="goodsprice">￥{{goodsItem.goods_price}}</div>
                                    <div class="goodsnum">x {{goodsItem.num}}</div>
                                </div>
                                </div>
                                <div class="order-bottom flex  flex-align-center flex-pack-end  line_xi_after">
                                <div class="img-list">
                                    <span v-if="item.order_type=='1'" class="orderType">单独购买商品</span>
                                </div>
                                <span class="text-font">实付金额:￥{{item.order_amount}} 退款金额<text style="color: #CF2D28;font-size:10pt;">￥{{item.refund_amount}}</text></span>
                                </div>
                            </div>
                            <div class="loading" v-if="twoupLoading">加载中...</div>
                            <div class="loading complete" v-if="twoupLoadingComplete">已加载全部数据</div>
                            </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import 'swiper/dist/css/swiper.css';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { isScrollBottom } from '@/utils/comm.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    components: {
        XHeader,
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                autoplay: false,
                autoHeight: true,
                on: {
                    slideChangeTransitionStart: () =>{
                        this.currentTab = this.$refs.mySwiper.swiper.activeIndex;
                    }
                }
            },
            onelistInfo: "",
            twolistInfo: "",
            winWidth: 0,
            winHeight: 0,
            // tab切换  
            currentTab: 0,
            oneupLoading: false,
            oneupLoadingComplete: false,
            twoupLoading: false,
            twoupLoadingComplete: false,
            onepage: 1,
            twopage: 1,
            total_amout: "0.00",
            avatar: "",
            isNull_1: false,
            isNull_0: false,
        }
    },
    created() {
        this.showoneData();
        this.showTwoDate();
    },
    mounted() {
        this.$nextTick(()=>{
            isScrollBottom(this.onBottom);
        })
    },
    destroyed () {
        window.onscroll = null;  
    },
    methods: {
        onBottom(){
            if (this.currentTab == 0) {
                if (!this.oneupLoadingComplete) {
                    this.showoneData()
                }
            } else {
                if (!this.twoupLoadingComplete) {
                    this.showTwoDate()
                }
            }
        },
        swichNav(current){
            if(this.currentTab != current){
                this.currentTab = current;
            }else{
                return;
            }
            this.$nextTick(()=>{
                this.$refs.mySwiper.swiper.slideTo(current);
            })
        },
        async showoneData(){
            let that = this;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                page: this.onepage,
                type: 0
            }
            const [err, res] = await api.refundlist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                if (this.onelistInfo == "") {
                        if (res.data.list == "") {
                            this.isNull_0 = true;
                        } else {
                            this.onelistInfo = res.data.list;
                            this.isNull_0 = false;
                            this.onepage = this.onepage + 1;
                            this.oneupLoading = false;
                        }
                    } else {
                        this.onelistInfo = that.onelistInfo.concat(res.data.list);
                        if (res.data.list == "") {
                            this.oneupLoadingComplete = true;//把“没有数据”设为true，显示  
                            this.oneupLoading = false;//把"加载中"的变量设为false，隐藏
                        } else {
                            this.onelistInfo = this.onelistInfo;
                            this.onepage = this.onepage + 1;
                            this.oneupLoading = false;
                        }
                    }
            }
        },
        async showTwoDate(){
            let that = this;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                page: this.twopage,
                type: 1
            }
            const [err, res] = await api.refundlist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                if (that.twolistInfo == "") {
                    if (res.data.list == "") {
                        this.isNull_1 = true;
                    } else {
                        this.twolistInfo = res.data.list;
                        this.twopage = this.twopage + 1;
                        this.isNull_1 = false;
                    }
                    } else {
                        this.twolistInfo = this.twolistInfo.concat(res.data.list);
                        if (res.data.list != "") {
                            this.twopage = this.twopage + 1;
                            this.twoupLoading = false;
                        } else {
                            this.twoupLoadingComplete = true;//把“没有数据”设为true，显示
                            this.twoupLoading = false;//把"加载中"的变量设为false，隐藏
                        }
                    }
            }
        },
        openInfo(refund_id){
            this.$router.push({
                path: '/centerFull/orderFull/afterlistInfo',
                query: {
                    refund_id
                }
            })
        },
        buyagain(){

        },
        goWheremoney(refund_id){
            this.$router.push({
                path: '/centerFull/orderFull/aftermoneyWhere',
                query: {
                    refund_id
                }
            })
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>

