<style lang="less" scoped>
.tab-wrap {
}
.orderindex {
  margin-top: 0.96rem;
}

.null-bg {
  text-align: center;
  margin: 1.6rem auto;
}

.null-img {
  width: 3.22rem;
  height: 3.62rem;
  margin: 0rem auto;
  background: url("~@/assets/images/null/zanwudingdan.png") no-repeat;
  background-size: contain;
}
.null-title {
  color: #888;
}
.orderlist-tab {
  position: fixed;
  min-width: 100%;
  background: #fff;
  z-index: 3;
  white-space: nowrap;
  overflow: auto;
  font-size: 0;
  top: 0.92rem;
}

.order-li {
  display: inline-block;
  width: 20%;
  text-align: center;
  font-size: 0.28rem;
}

.order-li span {
  line-height: 0.8rem;
  height: 0.8rem;
  padding-bottom: 8/100rem;
}

.order-active {
  border-bottom: 2/100rem #61d8d0 solid;
  color: #61d8d0;
}

.content {
  margin-top: 40/100rem;
}

.order-list-box {
  background: #fff;
  margin-bottom: 5/100rem;
}

.list-top-box {
  padding: 5/100rem 15/100rem;
  font-size: 0.28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-top-box .top-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.list-top-box .top-left img {
  width: 0.3rem;
  height: 0.3rem;
  padding-right: 10/100rem;
}

.status {
  color: #fb4c72;
}

.list-center-goods {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  box-sizing: border-box;
  padding: 0.2rem;
}

.goods-img {
  width: 1.6rem;
  height: 1.6rem;
}

.left-goodsImage {
  width: 70/100rem;
  height: 65/100rem;
  padding: 5/100rem 10/100rem 5/100rem 15/100rem;
}

.cetenr-goodsinfo {
  width: 55%;
}

.cetenr-goodsinfo .goodsname {
  padding-top: 5/100rem;
  font-size: 0.28rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.cetenr-goodsinfo .goods-spec {
  padding-top: 5/100rem;
  font-size: 9pt;
  color: #888;
}

.right-goodsnum {
  width: 20%;
  text-align: right;
  padding-right: 15/100rem;
}

.right-goodsnum .goodsprice {
  font-size: 9pt;
}

.right-goodsnum .goodsnum {
  font-size: 9pt;
  color: #888;
}

.order-bottom {
  padding: 3/100rem 0/100rem;
  line-height: 35/100rem;
}

.order-bottom-btn {
  padding: 8/100rem 15/100rem;
  text-align: right;
}

.order-btn {
  padding: 3/100rem 15/100rem;
  border-radius: 5/100rem;
  margin-top: 5/100rem;
  margin-bottom: 5/100rem;
  padding-bottom: 3/100rem;
  font-size: 0.28rem;
  margin-left: 5/100rem;
  color: #61d8d0;
  border: 1/100rem #61d8d0 solid;
}

.order-btn-hui {
  border: 1/100rem #afafaf solid !important;
  color: #333 !important;
}

.lianxikefu {
  border: 1/100rem #afafaf solid !important;
  border-radius: 5/100rem;
  font-size: 0.28rem;
  color: #333;
  margin: 0;
  background: none;
  height: 0.3rem;
  line-height: 0.3rem;
}

.text-font {
  font-size: 0.28rem;
  padding-right: 15/100rem;
  color: #888;
}

.span-font {
  display: block;
  text-align: right;
  font-size: 0.28rem;
  padding-right: 15/100rem;
  color: #888;
}

.pindan-share {
  border: 1/100rem #61d8d0 solid !important;
  padding: 2/100rem 10/100rem;
  color: #61d8d0;
  margin-right: 0;
  background: none !important;
  border-radius: 3/100rem;
  font-size: 0.28rem;
  margin-left: 0;
  line-height: 1.8;
}

.redboder {
  border: 1/100rem #e71f19 solid;
  color: #e71f19;
}

.img-list {
  position: absolute;
  left: 15/100rem;
}

.img-list image {
  width: 30/100rem;
  height: 30/100rem;
  border-radius: 100%;
  float: left;
  margin-right: 5/100rem;
}

.list-title-huodong {
  font-size: 0.28rem;
  border-radius: 5/100rem;
  line-height: 20/100rem;
  color: #fb4c72;
}

.active-title {
  font-size: 0.28rem;
  padding-left: 5/100rem;
}

.loading {
  text-align: center;
  width: 100%;
  font-size: 10pt;
  color: #888;
  line-height: 44px;
}
</style>

<template>
  <div class="orderindex">
    <!-- header -->
    <x-header :left-options="{backText:''}" title="订单列表" id="vux-header"></x-header>
    <div class='orderlist-tab flex line_xi_after flex-pack-justify'>
      <div class="order-li">
        <span :class="tabindex==1?'order-active':''" data-index='1' @click='tabnav'>全部</span>
      </div>
      <div class="order-li">
        <span :class="tabindex==2?'order-active':''" data-index='2' @click='tabnav'>待付款</span>
      </div>
      <div class="order-li">
        <span :class="tabindex==3?'order-active':''" data-index='3' @click='tabnav'>待发货</span>
      </div>
      <div class="order-li">
        <span :class="tabindex==4?'order-active':''" data-index='4' @click='tabnav'>待收货</span>
      </div>
      <div class="order-li">
        <span :class="tabindex==5?'order-active':''" data-index='5' @click='tabnav'>待评价</span>
      </div>
    </div>
    <div class="tab-wrap">
      <!-- 暂无订单 -->
      <div v-if="isshow==2" class="null-bg">
        <div class="null-img"></div>
        <div class="null-title">当前暂无订单</div>
      </div>
      <!-- detail -->
      <div class="content">
        <div class='order-list-box' v-for="(item,index) in listInfo" :key="index" v-if="listInfo">
          <div class='list-top-box flex flex-align-center flex-pack-justify'>
            <div class='top-left flex flex-align-center'>
              <img src="http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png" />
              鞋品荟平台自营
            </div>
            <span class=" status" v-if='item.order_state=="0"'>交易关闭</span>
            <span class=" status" v-if='item.order_state=="1"'>未支付</span>
            <span class=" status" v-if='item.order_state=="10"'>拼单中,差1人</span>
            <span class=" status" v-if='item.order_state=="30"'>待发货</span>
            <span class=" status" v-if='item.order_state=="40"'>待收货</span>
            <span class=" status" v-if='item.order_state=="50"'>待评价</span>
            <span class=" status" v-if='item.order_state=="60"'>已评价</span>
            <span class=" status" v-if='item.order_state=="61"'>交易已完成</span>
            <span class=" status" v-if='item.order_state=="70"'>退款/售后中</span>
            <span class=" status" v-if='item.order_state=="80"'>拼单失败,退款成功</span>
            <span class=" status" v-if='item.order_state=="90"'>退款/售后已完成</span>
          </div>

          <div class='list-center-goods flex ' @click='openInfo' :data-orderId='item.order_id' :data-status="item.order_state"
            :data-groupid="item.group_id" :data-ordersn="item.order_sn">
            <img class="goods-img" :src='item.goods_info.goods_image' />
            <div class='cetenr-goodsinfo'>
              <div class="goodsname">{{item.goods_info.goods_name}}</div>
              <div class="goods-spec">{{item.goods_info.goods_spec}}</div>
            </div>
            <div class='right-goodsnum'>
              <div class="goodsprice">￥{{item.goods_info.unit_price}}</div>
              <div class="goodsnum">{{item.goods_info.num}}</div>
            </div>
          </div>
          <div class="order-bottom flex  flex-align-center flex-pack-end  line_xi_after">
            <div class="img-list" v-if="item.order_type==2">
            </div>
            <div class="img-list list-title-huodong" v-if="item.order_type==2">
              <div v-if="item.active_type==0">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">直接购买</span>
              </div>
              <div v-if="item.active_type==1">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">砍价活动</span>
              </div>
              <div v-if="item.active_type==2">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">圣诞活动</span>
              </div>
              <div v-if="item.active_type==3">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">优惠券活动</span>
              </div>
              <div v-if="item.active_type==4">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">秒杀活动</span>
              </div>
              <div v-if="item.active_type==5">
                <span class="active-title">定时折扣</span>
                <span class="iconfont icon-hdMingpai">1</span>
              </div>
            </div>
            <div class="img-list list-title-huodong" v-if="item.order_type==3">
              <div v-if="item.active_type==0">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">活动订单</span>
              </div>
              <div v-if="item.active_type==1">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">砍价活动</span>
              </div>
              <div v-if="item.active_type==2">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">圣诞活动</span>
              </div>
              <div v-if="item.active_type==3">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">优惠券活动</span>
              </div>
              <div v-if="item.active_type==4">
                <span class="iconfont icon-hdMingpai"></span>
                <span class="active-title">秒杀活动</span>
              </div>
              <div v-if="item.active_type==5">
                <span class="active-title">定时折扣</span>
                <span class="iconfont icon-hdMingpai">1</span>
              </div>
            </div>
            <span class="span-font">共{{item.goods_info.num}}件商品 合计:<span style='color:#333'>￥{{item.pay_amount}}</span>
              (含运费￥{{item.shipping_amount}})</span>
          </div>
          <div class="order-bottom-btn flex flex-pack-end flex-align-center" v-if='item.order_state=="0"'>
            <span class="order-btn order-btn-hui" @click='quxiaoOrder' data-deleteType="2" :data-index="index"
              :data-orderid="item.order_id">删除订单</span>
            <span class="order-btn order-btn-hui" @click="buyagain(item.goods_info.goods_id)" :data-goodsid='item.goods_info.goods_id'>再次购买</span>
          </div>
          <div class="order-bottom-btn " v-if='item.order_state=="1"'>
            <span class="order-btn order-btn-hui" @click='quxiaoOrder' data-deleteType="1" :data-index="index"
              :data-orderid="item.order_id">取消订单</span>
            <span class="order-btn" @click="gobay(item.order_id)" v-if="item.active_type==0" :data-orderId='item.order_id'>去付款</span>
          </div>
          <div class="order-bottom-btn flex flex-pack-end" v-if='item.order_state=="10"'>
            <button class="pindan-share" open-type="share" :data-groupid='item.group_id'>邀请好友拼单</button>
          </div>
          <div class="order-bottom-btn flex flex-pack-end flex-align-center" v-if='item.order_state=="30"'>
            <span class="order-btn order-btn-hui" @click="tixingFahuo(item.order_id)" :data-orderid='item.order_id' :data-index="index">提醒发货</span>
            <span class="order-btn order-btn-hui" @click="buyagain(item.goods_info.goods_id)" :data-goodsid='item.goods_info.goods_id'>再次购买</span>
          </div>
          <div class="order-bottom-btn flex flex-pack-end flex-align-center" v-if='item.order_state=="40"'>
            <span class="order-btn order-btn-hui" @click="goShip(item.order_id,item.shipping_code)" :data-orderid='item.order_id' :data-code='item.shipping_code'>查看物流</span>
            <span class="order-btn " @click="receiving(item.order_id,index)" :data-orderId='item.order_id' :data-index="index">确认收货</span>
          </div>
          <div class="order-bottom-btn flex flex-pack-end flex-align-center" v-if='item.order_state=="50"'>
            <span class="order-btn order-btn-hui" @click='quxiaoOrder' data-deleteType="2" :data-index="index"
              :data-orderid="item.order_id">删除订单</span>
            <span class="order-btn order-btn-hui" @click="buyagain(item.goods_info.goods_id)" :data-goodsid='item.goods_info.goods_id'>再次购买</span>
            <span class="order-btn" @click="goeva" :data-orderId='item.order_id' :data-itemid='item.goods_info.goods_item_id'>立即评价</span>
          </div>
          <div class="order-bottom-btn " v-if='item.order_state=="60"'>
            <span class="order-btn order-btn-hui" @click='quxiaoOrder' data-deleteType="2" :data-index="index"
              :data-orderid="item.order_id">删除订单</span>
            <span class="order-btn" @click="goeva" :data-orderId='item.order_id' :data-itemid='item.goods_info.goods_item_id'>追加评价</span>
          </div>
          <div class="order-bottom-btn " v-if='item.order_state=="61"'>
            <span class="order-btn order-btn-hui" @click='quxiaoOrder' data-deleteType="2" :data-index="index"
              :data-orderid="item.order_id">删除订单</span>
            <span class="order-btn order-btn-hui" @click="buyagain(item.goods_info.goods_id)" :data-goodsid='item.goods_info.goods_id'>再次购买</span>
          </div>
          <div class="order-bottom-btn " v-if='item.order_state=="70"' @click="refund(item.refund_id)" :data-refundid='item.refund_id'>
            <span class="order-btn">售后详情</span>
          </div>
          <div class="order-bottom-btn " v-if='item.order_state=="80"||item.order_state=="90"' @click="buyagain(item.goods_info.goods_id)"
            :data-goodsid='item.goods_info.goods_id'>
            <span class="order-btn order-btn-hui" @click='quxiaoOrder' data-deleteType="2" :data-index="index"
              :data-orderid="item.order_id">删除订单</span>
            <span class="order-btn order-btn-hui" @click="buyagain(item.goods_info.goods_id)" :data-goodsid='item.goods_info.goods_id'>再次购买</span>
          </div>
        </div>
        <div class="loading" v-if="upLoading">加载中...</div>
        <div class="loading complete" v-if="upLoadingComplete">已加载全部数据</div>
      </div>
    </div>
  </div>
</template>

<script>
import { isScrollBottom } from "@/utils/comm.js";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import { wxPay } from "@/utils/wx_sdk.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader } from "vux";
export default {
  name: "shop",
  props: {},
  components: {
    Group,
    Cell,
    XButton,
    Badge,
    XHeader,
    loading
  },
  data() {
    return {
      isshow: 1,
      tabindex: 1, //tab
      upLoading: true,
      upLoadingComplete: false,
      page: 1,
      listInfo: []
    };
  },
  created() {
    this.tabindex = this.$route.query.tabindex || 1;
    this.showdata();
  },
  mounted: function() {
    this.$nextTick(function() {
      isScrollBottom(this.showdata);
    });
  },
  destroyed() {
    window.onscroll = null;
  },
  methods: {
    //切换
    tabnav(e) {
      this.tabindex = e.currentTarget.dataset.index;
      this.page = 1;
      this.isshow = 1;
      this.upLoading = true;
      this.upLoadingComplete = false;
      this.listInfo = [];
      this.showdata();
    },
    // 订单数据
    async showdata() {
      if (this.upLoadingComplete) {
        return;
      }
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        type: this.tabindex,
        page: this.page,
        version: "1.0.0"
      };
      this.page++;
      this.upLoading = true;
      const [err, res] = await api.getneworderlist(data);
      if (res && res.code == "2000") {
        if (!res.data.list.length) {
          console.log(res.data.list, this.page);
          if (this.page == 2) {
            this.isshow = 2;
            this.upLoading = false;
            this.upLoadingComplete = false;
            return;
          }
          this.upLoading = false;
          this.upLoadingComplete = true;
          return;
        }
        if (res.data.list.length < 5) {
          this.showdata();
        }
        this.listInfo = this.listInfo.concat(res.data.list);
        this.upLoading = false;
      }
    },
    openInfo(e) {
      let order_id = e.currentTarget.dataset.orderid;
      let order_sn = e.currentTarget.dataset.ordersn;
      this.$router.push({
        path: "/centerFull/orderFull/orderlistinfo",
        query: {
          order_id,
          order_sn
        }
      });
    },
    //删除订单
    async quxiaoOrder(e) {
      let that = this;
      let orderid = e.currentTarget.dataset.orderid;
      let deleteType = e.currentTarget.dataset.deletetype;
      let index = e.currentTarget.dataset.index;
      let token = this.token;
      let account = this.account;
      let title = "",
        content = "";
      if (deleteType == 1) {
        title = "取消订单";
        content = "确认取消订单？";
      } else {
        content = "确认删除订单？";
        title = "删除订单";
      }
      this.$vux.confirm.show({
        title,
        content,
        async onConfirm() {
          that.$vux.loading.show({
            text: "处理中..."
          });
          let data = {
            plat: 3,
            account: that.account,
            token: that.token,
            order_id: orderid,
            type: deleteType
          };
          const [err, res] = await api.cancelorder(data);
          that.$vux.loading.hide();
          if (err) {
            that.$vux.toast.text(err.msg);
            return;
          }
          that.$vux.toast.text(res.msg);
          that.listInfo.splice(index, 1);
        }
      });
    },
    async gobay(orderid) {
      this.$vux.loading.show({
        text: "支付中..."
      });
      let that = this;
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        order_id: orderid,
        pay_code: 2,
        openid: this.user.openid
      }
      const [err, res] = await api.orderunpaidpay(data);
      if (err) {
        that.$vux.toast.text(err.msg);
        return;
      }
      if(res.code == 2000){
        var selfData = res;
        let success = res =>{
          that.$router.push({
            path: '/centerFull/orderFull/orderlistinfo',
            query: {
              order_id: selfData.data.order_id,
              order_sn: selfData.data.data.order_sn,
            }
          })
        }
        let fail = err =>{

        }
        wxPay(this,{...res.data.pay_param,success,fail})
      }
    },
    tixingFahuo(orderid) {
      let that = this;
      this.$vux.confirm.show({
        title: '',
        content: '催发货后商家将会收到提醒，只能提醒发货一次哦～',
        async onConfirm(){
          let data = {
            plat: 3,
            account: this.account,
            token: this.token,
            order_id: orderid
          }
          const [err, res] = await api.shipnotify(data);
          if (err) {
            that.$vux.toast.text(err.msg);
            return;
          }
          if(res.code == 2000){
            that.$vux.toast.text('提醒成功');
          }
        },
        onCancel(){}
      })
    },
    buyagain(goodsId) {
      this.$router.push({
        path: '/index/goodsInfoPindan',
        query: {
          goodsId
        }
      })
    },
    goShip(order_id,shipping_code) {
      this.$vux.text('开发中...')
      return
      this.$router.push({
        path: 'order_ship',
        query: {
          order_id,
          shipping_code
        }
      })
    },
    receiving(orderid,index) {
      let that = this;
      this.$vux.confirm.show({
        title: '确认收货',
        content: '确认收到货物？',
        confirmColor: "#FB4C72",
        async onConfirm(){
          that.$vux.loading.show({
            text: '请求中...'
          })
          let data = {
            plat: 3,
            order_id: orderid,
            token: that.token,
            account: that.account,
          }
          const [err, res] = await api.orderreceive(data);
          if (err) {
            that.$vux.toast.text(err.msg);
            return;
          }
          if(res.code == 2000){
            that.listInfo.splice(index, 1);
            that.$vux.toast.text('收货成功');
          }
        },
        onCancel(){}
      })
    },
    //评价
    goeva(e) {
      let orderid = e.currentTarget.dataset.orderid;
      let itemId = e.currentTarget.dataset.itemid;
      this.$router.push({
        path: "/indexFull/goodsFull/fbPingjia",
        query: {
          orderid,
          itemId
        }
      });
    },
    refund(refundid) {
      this.$router.push({
        path: '/centerFull/orderFull/afterlistInfo',
        query: {
          refund_id: refundid
        }
      })
    },
    ...mapActions(["update_storeInfo"])
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
