<template>
  <div class="orderindex">
    <!-- header -->
    <x-header :left-options="{backText:''}" title="我的店铺" id="vux-header"></x-header>
    <div>
      <div class='order-status-box flex flex-align-center flex-pack-justify'>
        <span>{{infodata.order_top_title}}
          <span class="small-icon">{{infodata.order_top_min_title}}</span>
        </span>
        <img class="status-icon" :src='infodata.order_top_icon' />
      </div>

      <div class="orderinfo-address-box flex flex-align-center">
        <span class='left-icon iconfont icon-dizhi'></span>
        <div class="address-select-box">
          <div class='flex  flex-pack-justify address-header'>
            <span class="address-name">收货人:{{infodata.reciver_name}}</span>
            <span class="address-phone">{{infodata.reciver_phone}}</span>
          </div>
          <div class='order-address-bottom'>
            <span>收货地址：{{infodata.reciver_address}}</span>
          </div>
        </div>
      </div>

      <div class="pindan-box" v-if="infodata.group_info&&infodata.group_info.length">
        <div class="pindan-header">
          <span class="iconfont icon-info_pindan"></span>
          <span v-if="infodata.group_info.second_avatar==''" class="header-title">待拼单，还差1人，剩余{{timeList[0].allTime}}</span>
          <span v-if="infodata.order_state==80||infodata.order_state==90" class="header-title">拼单未成功，退款成功</span>
          <span v-if="infodata.order_state==20||infodata.order_state==30||infodata.order_state==40||infodata.order_state==50||infodata.order_state==60||infodata.order_state==61||infodata.order_state==0"
            class="header-title">拼单成功</span>
        </div>

        <div class='flex pindan-touxing'>
          <img :src="infodata.group_info.first_avatar" />
          <img v-if="infodata.group_info.second_avatar!=''" :src="group_info.second_avatar" />
          <!-- <img class="other " v-if :src='../../../../pages/img/photo.png' /> -->
        </div>
      </div>

      <div class="ordershop-title flex line_xi_after flex-align-center">
        <img src="http://img.xiepinhui.com.cn/small_app/programOldImgFile/smalllogo.png" />
        <span>鞋品荟平台自营</span>
      </div>

      <div class='list-center-goods flex flex-align-center' v-if="infodata" v-for="(item,index) in infodata.goods_item_data"
        :key="index" @click='goodsInfo(item.goods_commonid)' :id="item.goods_commonid">
        <img class="left-goodsImage" :src='item.goods_image' />
        <div class='cetenr-goodsinfo'>
          <div class="goodsname">{{item.goods_name}}</div>
          <div class="goods-spec flex flex-pack-justify">
            <span class="goodsnum">{{item.goods_spec}}</span>
            <span class="goodsnum">x {{item.num}}</span>
          </div>
          <div class="goodsprice flex flex-pack-end">
            <div v-if="infodata.order_type!=3">
              <span v-if="isAfter==1" class="goods-shouhou-btn" @click.stop="after(infodata.order_id)" :id="infodata.order_id">申请售后</span>
              <span v-if="isAfter==2" class="goods-shouhou-btn" @click.stop="afterInfo(infodata.refund_id)" :id="infodata.refund_id">售后处理中</span>
              <span v-if="isAfter==3" class="goods-shouhou-btn-hui " @click.stop="afterInfo(infodata.refund_id)" :id="infodata.refund_id">售后关闭</span>
              <span v-if="isAfter==4" class=" goods-shouhou-btn-hui" @click.stop="afterInfo(infodata.refund_id)" :id="infodata.refund_id">售后完成</span>
            </div>
          </div>
        </div>
      </div>

      <div class="order-bottom flex  flex-align-center flex-pack-end  line_xi_after">
        <span class="text-font" v-if="infodata.goods_item_data">
          共{{infodata.goods_item_data[0].num}}件商品 合计:<span style='color:#FB4C72'>￥{{infodata.pay_amount}}</span>
          (含运费￥{{infodata.shipping_amount}})
        </span>
      </div>

      <div class="kefu-box flex flex-align-center">
        <button class='one '>
          <span class='kefu-icon iconfont icon-xiaoxi'></span>
          <span> 联系商家</span>
        </button>
        <a class="kefu-dianhua" href="tel:4009639299">
          <span class='kefu-icon iconfont icon-dianhua'></span>
          <span> 拨打电话</span>
        </a>
      </div>

      <div class="order-info" v-if="infodata">
         <!-- v-if="infodata.shipping_company" -->
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell">
            <div class="weui-cell__bd">快递方式：
              <span style='color:#333'>{{infodata.shipping_company}}</span>
            </div>
          </div>
          <div class="weui-cell" v-if="infodata.shipping_code">
            <div class="weui-cell__bd">运单编号：
              <span style='color:#333'>{{infodata.shipping_code}}</span>
            </div>
          </div>
          <div class="weui-cell copywrap">
            <div class="weui-cell__bd">订单编号：
              <span style='color:#333'>{{infodata.order_sn}}</span>
            </div>
            <div class="weui-cell__ft copy-btn" @click='copyTxt' :data-ordersn="infodata.order_sn">复制</div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__bd">下单时间：
              <span style='color:#333'>{{infodata.add_time}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata.order_state=='0'">
        <span class='moren' @click='quxiaoOrder' :data-deleteType="2" :data-order:id="infodata.order_id">删除订单</span>
        <span @click="buyagain" :data-goodsid='infodata.goods_item_data[0].goods_commonid'>再次购买</span>
      </div>
      <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata.order_state=='1'">
        <span class="moren" @click='quxiaoOrder' :data-deleteType="1" :data-order:id="infodata.order_id">取消订单</span>
        <span @click="gobay(infodata.order_id)" :data-orderid='infodata.order_id' v-if="infodata.active_type==0">去支付</span>
      </div>
      <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata.order_state=='10'">
        <span class="moren" @click='pindanquxiao' :data-deleteType="2" :data-order:id="infodata.order_id">取消订单</span>
        <button class="pindan-share" open-type="share">邀请好友拼单</button>
      </div>
      <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata.order_state=='20'">
        <span @click='goShip'>取消订单</span>
        <span @click="buyagain" :data-goodsid='infodata.goods_item_data[0].goods_commonid'>再次购买</span>
      </div>
      <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata.order_state=='30'">
        <span class='moren' @click='tixingFahuo' :data-orderid='infodata.order_id'>提醒发货</span>
        <span @click="buyagain" :data-goodsid='infodata.goods_item_data[0].goods_commonid'>再次购买</span>
      </div>
      <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata.order_state=='40'">
        <span class='moren' @click='goShip' :data-orderId='infodata.order_id' :data-code='infodata.shipping_code'>查看物流</span>
        <span @click="receiving" :data-orderid='infodata.order_id'>确认收货</span>
      </div>
      <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata.order_state=='50'">
        <span class='moren' @click="buyagain" :data-goodsid='infodata.goods_item_data[0].goods_commonid'>再次购买</span>
        <span @click="goeva" :data-orderid='infodata.order_id' :data-itemid="infodata.goods_item_data[0].goods_item_id">立即评价</span>
      </div>
      <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata.order_state=='51'">
        <span class="moren-hui" @click='quxiaoOrder' :data-deleteType="2" :data-order:id="infodata.order_id">删除订单</span>
        <span class='moren' @click="buyagain" :data-goodsid='infodata.goods_item_data[0].goods_commonid'>再次购买</span>
        <span @click="goeva" :data-orderid='infodata.order_id' :data-itemid="infodata.goods_item_data[0].goods_item_id">追加评价</span>
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
      orderid: "",
      ordersn: "",
      infodata: "",
      interval: "",
      timeList: {},
      isAfter: 0
    };
  },
  created() {
    this.showdata();
  },
  mounted: function() {
    this.$nextTick(function() {
      //   isScrollBottom(this.showdata);
    });
  },
  destroyed() {
    window.onscroll = null;
  },
  methods: {
    //商品详情
    goodsInfo(goodsId) {
      this.$router.push({
        path: '/index/goodsInfoPindan',
        query: {
          goodsId
        }
      })
    },
    after(order_id){
      this.$router.push({
        path: '/centerFull/partner/aftertype',
        query: {
          order_id
        }
      })
    },
    //售后
    afterInfo(refund_id) {
      this.$router.push({
        path: '/centerFull/orderFull/afterlistInfo',
        query: {
          refund_id
        }
      })
      // this.$vux.toast.text("售后");
    },
    //复制
    copyTxt(e) {
      let that = this;
      let text = e.currentTarget.dataset.ordersn;
      this.$copyText(text).then(function(e) {
        that.$vux.toast.text("复制成功", "top");
      });
    },
    //删除订单
    async quxiaoOrder(e) {
      let that = this;
      let orderid = e.currentTarget.dataset.orderid;
      let deleteType = e.currentTarget.dataset.deletetype;
      let confirmtext = "确认";
      let canceltext = "取消";
      let title = "";
      let content = "";
      if (deleteType == 1) {
        title = "取消订单";
        content = "真的要走吗？宝贝很抢手哦～";
        confirmtext = "去意已决";
        canceltext = "我再想想";
      } else {
        title = "删除订单";
        content = "确认删除订单？";
        confirmtext = "去意已决";
        canceltext = "";
      }
      this.$vux.confirm.show({
        title,
        content,
        confirmText: confirmtext,
        cancelText: canceltext,
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
          this.$router.go(-1);
        }
      });
    },
    //再次购买
    buyagain(e) {
      var goodsId = e.currentTarget.dataset.goodsid;
      this.$router.push({
        path: '/index/goodsInfoPindan',
        query: {
          goodsId
        }
      })
    },
    //支付
    async gobay(orderid) {
      this.$vux.loading.show({
        text: '支付中...'
      })
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
          that.showdata();
        }
        let fail = err =>{

        }
        wxPay(this,{...res.data.pay_param,success,fail})
      }
    },
    //取消拼单
    pindanquxiao() {
      this.$vux.alert.show({
        title: "暂时无法取消订单",
        content: "发起拼单24小时后，若未拼单成功，将 自动取消订单并退款哦",
        buttonText: "我知道了",
        onShow() {
          console.log("Plugin: I'm showing");
        }
      });
    },
    //查看物流
    goShip() {},
    //提醒发货
    async tixingFahuo(e) {
      let that = this;
      let order_id = e.currentTarget.dataset.orderid || "";
      let data = {
        plat: 3,
        account: that.account,
        token: that.token,
        order_id
      };
      this.$vux.confirm.show({
        title: "",
        content: "催发货后商家将会收到提醒，只能提醒发货一次哦～",
        async onConfirm () {
          const [err, res] = await api.shipnotify(data);
          if (err) {
            that.$vux.toast.text(err.msg);
            return;
          }
          that.$vux.toast.text(res.msg);
        }
      })
    },
    //确认收货
    receiving(e) {
      let that = this;
      let order_id = e.currentTarget.dataset.orderid;
      this.$vux.confirm.show({
        async onConfirm() {
          let data = {};
          const [err, res] = await api.orderreceive(data);
          if (err) {
            that.$vux.toast.text(err.msg);
            return;
          }
          that.$vux.toast.text(res.msg);
        },
        onCancel() {}
      });
    },
    //评价
    goeva(e) {
      let orderid = e.currentTarget.dataset.orderid;
      let itemid = e.currentTarget.dataset.itemid;
      this.$router.push({
        path: "/indexFull/goodsFull/fbPingjia",
        query: {
          orderid,
          itemid
        }
      });
    },
    //获取数据
    async showdata() {
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        order_id: this.$route.query.order_id,
        order_sn: this.$route.query.order_sn
      };
      const [err, res] = await api.neworderdetail(data);
      if (res) {
        console.log(res);
        switch (res.data.order_top_status) {
          case 4:
            this.isAfter = 1;
            break;
          case 5:
            this.isAfter = 1;
            break;
          case 6:
            this.isAfter = 1;
            break;
          case 11:
            this.isAfter = 3;
            break;
          case 12:
            this.isAfter = 3;
            break;
          case 13:
            this.isAfter = 1;
            break;
          case 14:
            this.isAfter = 1;
            break;
          case 15:
            this.isAfter = 1;
            break;
          case 18:
            this.isAfter = 3;
            break;
          case 19:
            this.isAfter = 3;
            break;
          case 25:
            this.isAfter = 3;
            break;
          case 7:
            this.isAfter = 2;
            break;
          case 8:
            this.isAfter = 2;
            break;
          case 16:
            this.isAfter = 2;
            break;
          case 17:
            this.isAfter = 2;
            break;
          case 23:
            this.isAfter = 2;
            break;
          case 28:
            this.isAfter = 2;
            break;
          case 9:
            this.isAfter = 4;
            break;
          case 10:
            this.isAfter = 4;
            break;
          case 24:
            this.isAfter = 4;
            break;
          case 27:
            this.isAfter = 4;
            break;
          case 20:
            this.isAfter = 1;
            break;
          case 21:
            this.isAfter = 1;
            break;
          case 22:
            this.isAfter = 1;
            break;
          default:
            this.isAfter = 0;
            break;
        }
        console.log(res.data);
        this.infodata = res.data;
        this.isAfter = this.isAfter;
      }
      //   wx.request({
      //     success: function(res) {
      //       if (res.data.code == "2000") {
      //         clearInterval(this.data.interval);
      //         if (res.data.data.group_info.time > 0) {
      //           var list = {};
      //           this.daojishi(res.data.data.group_info.time, this, 0, list, app);
      //         }
      //       }
      //     }
      //   });
    },
    ...mapActions(["update_storeInfo"])
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>

<style lang="less" scoped>
.orderindex {
  min-height: 100vh;
  box-sizing: border-box;
  background: #f8f8f8;
  padding-bottom: 1.5rem;
}
.order-status-box {
  background: linear-gradient(
    to right,
    rgba(254, 107, 85, 1),
    rgba(237, 63, 97, 1)
  );
  color: #fff;
  padding: 15/50rem;
  font-size: (14 * 2+4)/100rem;
}

.small-icon {
  font-size: (10 * 2+4)/100rem;
}

.status-icon {
  width: 55/50rem;
  height: 55/50rem;
}

.orderinfo-address-box {
  padding: 5/50rem 15/50rem;
  background: #fff;
}

.left-icon {
  width: 10%;
  font-size: (16 * 2+4)/100rem;
  color: #888;
}

.address-select-box {
  width: 90%;
}

.address-header {
  padding-bottom: 10/50rem;
  font-size: (11 * 2+4)/100rem;
}

.order-address-bottom {
  font-size: (10 * 2+4)/100rem;
  color: #888;
}

.weui-cell__bd {
  color: #888;
}

.weui-cells::after {
  display: none;
}

.pindan-box {
  padding: 0/50rem 15/50rem;
  background: #fff;
  margin-top: 5/50rem;
}

.icon-info_pindan {
  font-size: (16 * 2+4)/100rem;
  margin-right: 5/50rem;
  color: #fb4c72;
}

.header-title {
  font-size: (12 * 2+4)/100rem;
}

.pindan-touxing {
  padding: 10/50rem;
}

.pindan-touxing img {
  width: 50/50rem;
  height: 50/50rem;
  border-radius: 100%;
  margin-right: 10/50rem;
}

.ordershop-title {
  padding: 10/50rem 15/50rem;
  background: #fff;
  margin-top: 10/50rem;
  font-size: (11 * 2+4)/100rem;
}

.ordershop-title img {
  width: 20/50rem;
  height: 20/50rem;
  margin-right: 10/50rem;
}

.pindanImg {
  width: 30/50rem;
  height: 30/50rem;
  border-radius: 100%;
}

.pindanImg-box {
  padding: 5/50rem;
  position: absolute;
  right: 15/50rem;
}

.list-center-goods {
  background: rgba(248, 248, 248, 1);
  position: relative;
  padding: 5/50rem 0/50rem;
}

.left-goodsImage {
  width: 25%;
  padding-left: 0.2rem;
}

.cetenr-goodsinfo {
  width: 75%;
  padding: 0/50rem 15/50rem;
}

.goodsname {
  font-size: (11 * 2+4)/100rem;
  color: #333;
}

.goodsnum {
  font-size: (10 * 2+4)/100rem;
  color: #888;
  line-height: 30/50rem;
}

.goodsprice {
  font-size: (12 * 2+4)/100rem;
  color: #fe5e39;
}

.goods-shouhou-btn {
  border: 1/50rem #61d8d0 solid;
  color: #61d8d0;
  font-size: (10 * 2+4)/100rem;
  padding: 2/50rem 5/50rem;
  border-radius: 3/50rem;
}

.goods-shouhou-btn-hui {
  border: 1/50rem #333 solid;
  color: #333;
  font-size: (10 * 2+4)/100rem;
  padding: 2/50rem 5/50rem;
  border-radius: 3/50rem;
}

.order-bottom {
  padding: 5/50rem 0/50rem;
  line-height: 35/50rem;
  background: #fff;
}

.text-font {
  font-size: (10 * 2+4)/100rem;
  padding-right: 15/50rem;
  color: #888;
}

.order-info {
  background: #fff;
}

.info-item {
  padding: 10/50rem 15/50rem;
  font-size: (10 * 2+4)/100rem;
}

.info-item-other {
  padding: 5/50rem 15/50rem;
}

.other-title {
  font-size: (10 * 2+4)/100rem;
}

.item-pindan {
  padding: 10/50rem 15/50rem;
  font-size: (10 * 2+4)/100rem;
}
.copywrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copy-btn {
  border: 1/50rem #333 solid;
  color: #333;
  border-radius: 3/50rem;
  padding: 0/50rem 5/50rem;
}

.kefu-box {
  background: #fff;
  margin: 5/50rem 0/50rem;
}

.kefu-box button {
  width: 50%;
  background: #fff;
  border-radius: 0 !important;
  border: 0/50rem !important;
}

.kefu-box .one {
  border-right: 1/50rem #f1f1f1 solid !important;
  margin: 0;
}

.kefu-box text {
  font-size: (12 * 2+4)/100rem;
}

.kefu-box button::after {
  display: none;
}

.kefu-icon {
  color: #42b034;
  font-size: 14pt !important;
}

.icon-dianhua {
  font-size: 18pt !important;
}

.kefu-dianhua {
  display: block;
  color: #333;
  width: 50%;
  text-align: center;
  span {
    color: #333;
  }
}

.order-list-info-btn {
  position: fixed;
  width: 100%;
  bottom: 0/50rem;
  background: #fff;
  height: 51/50rem;
}

.order-list-info-btn span {
  border: 1/50rem #61d8d0 solid;
  background: #61d8d0;
  margin-right: 15/50rem;
  padding: 2/50rem 10/50rem;
  color: #fff;
  border-radius: 3/50rem;
  font-size: (10 * 2+4)/100rem;
}

.pindan-share {
  border: 1/50rem #61d8d0 solid;
  background: #61d8d0;
  margin-right: 15/50rem;
  padding: 2/50rem 10/50rem;
  color: #fff;
  border-radius: 3/50rem;
  font-size: (10 * 2+4)/100rem;
  margin-left: 0;
  line-height: 1.8;
}

.moren {
  border: 1/50rem #61d8d0 solid;
  color: #61d8d0 !important;
  background: none !important;
}

.moren-hui {
  border: 1/50rem #333 solid;
  color: #333 !important;
  background: none !important;
}
.weui-cells:before,
.weui-cell:before {
  display: none;
}
</style>
