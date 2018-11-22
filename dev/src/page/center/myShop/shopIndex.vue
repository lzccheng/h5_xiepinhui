<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="我的店铺" id="vux-header"></x-header>
    <div class="store-user-header">
      <div class="store-user-avatar">
        <img :src='storeInfo.member_avatar' />
        <div class="store-user-name" :class="{'smallfont':storeInfo.member_name>=10000}">{{storeInfo.member_name||''}}</div>
      </div>
      <div class="store-fundsInfo flex ">
        <div class="funds-item">
          <div class="funds-number" :class="{'smallfont':storeInfo.total_sales>=10000}">{{storeInfo.total_sales}}</div>
          <div>总成交额(元)</div>
        </div>
        <div class="funds-item">
          <div class="funds-number" :class="{'smallfont':storeInfo.total_revenue>=10000}">{{storeInfo.total_revenue}}</div>
          <div>总收益(元)</div>
        </div>
        <div class="funds-item">
          <div class="funds-number" :class="{'smallfont':storeInfo.total_fan>=10000}">{{storeInfo.total_fan}}</div>
          <div>总粉丝</div>
        </div>
        <div class="funds-item">
          <div class="funds-number" :class="{'smallfont':storeInfo.rebate_amout>=10000}">{{storeInfo.rebate_amout|money_fil}}</div>
          <div>总余额(元)</div>
        </div>
      </div>
    </div>
    <div class="store-income flex">
      <div class="funds-item">
        <div class="funds-number" :class="{'smallfont2':storeInfo.date_revenue>=10000}">{{storeInfo.date_revenue|money_fil}}</div>
        <div>今日成交额(元)</div>
      </div>
      <div class="funds-item">
        <div class="funds-number" :class="{'smallfont2':storeInfo.date_visitor>=10000}">{{storeInfo.date_visitor|money_fil}}</div>
        <div>今日访客</div>
      </div>
      <div class="funds-item">
        <div class="funds-number" :class="{'smallfont2':storeInfo.date_order>=10000}">{{storeInfo.date_order|money_fil}}</div>
        <div>今日订单</div>
      </div>
      <div class="funds-item">
        <div class="funds-number" :class="{'smallfont2':storeInfo.date_fan>=10000}">{{storeInfo.date_fan|money_fil}}</div>
        <div>今日粉丝</div>
      </div>
    </div>
    <div class="store-manage flex flex-warp">
      <div class='store-manage-item' v-if="storeInfo" v-for="(item,index) in storeInfo.manage_list" @click='manageClick($event)'
        :key="index" :data-isopen='item.is_open' :data-type='item.type'>
        <div class="store-manage-item-img">
          <img :src="item.icon" />
        </div>
        <div class="store-manage-item-lable">{{item.title||''}}</div>
      </div>
      
    </div>
    <div class="bgc">
      <loading type="type3" v-if="isLoading"></loading>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader } from "vux";
import { share, wxPay } from "@/utils/wx_sdk.js";
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
      isLoading: true,
      storeInfo: {
        total_sales: 0,
        date_sales: 0,
        total_revenue: 0,
        date_revenue: 0,
        total_fan: "0",
        date_fan: 0,
        date_order: 0,
        date_visitor: 0,
        rebate_amout: "0.00",
        member_name: "鞋品荟第110店铺",
        member_avatar:
          "http://img.xiepinhui.com.cn/sys/default/user/avatar.jpg",
        // manage_list: [
        //   {
        //     type: "4",
        //     title: "店铺设置",
        //     icon: "http://img.xiepinhui.com.cn/mobile/app/set_store.png",
        //     is_open: true
        //   },
        //   {
        //     type: "5",
        //     title: "粉丝管理",
        //     icon: "http://img.xiepinhui.com.cn/mobile/app/fan.png",
        //     is_open: true
        //   },
        //   {
        //     type: "6",
        //     title: "订单管理",
        //     icon: "http://img.xiepinhui.com.cn/mobile/app/order.png",
        //     is_open: true
        //   },
        //   {
        //     type: "3",
        //     title: "库存管理",
        //     icon: "http://img.xiepinhui.com.cn/mobile/app/kucun.png",
        //     is_open: true
        //   },
        //   {
        //     type: "3",
        //     title: "库存管理",
        //     icon: "http://img.xiepinhui.com.cn/mobile/app/kucun.png",
        //     is_open: true
        //   },
        //   {
        //     type: "3",
        //     title: "库存管理",
        //     icon: "http://img.xiepinhui.com.cn/mobile/app/kucun.png",
        //     is_open: true
        //   }
        // ]
      }
    };
  },
  created() {
    this.getThelordstore();
  },
  methods: {
    async getThelordstore() {
      let data = {
        plat: 3,
        account: this.account,
        token: this.token
      };
      const [err, res] = await api.thelordstore(data);
      if (err) {
          this.$vux.toast.text(err.msg);
          this.isLoading = false;
          return;
      }
      if (res && res.code == "2000") {
        this.storeInfo = res.data;
      }
      this.isLoading = false;
    },
    manageClick(e) {
      let type = e.currentTarget.dataset.type;
      let isopen = e.currentTarget.dataset.isopen;
      // this.$vux.toast.text(type);
      var clickType=type;
      var _this=this;
      var clickUrl='';

      if (!isopen) {
        this.$vux.toast.text("暂无权限");
        return;
      }
      switch (clickType) {
        case "1":
          clickUrl ="offlineStore";//线下店铺
          break;
        case "5":
          clickUrl = "fanManagement";//子账号的粉丝管理
          break;
        case "3":
          clickUrl =
            "inventoryManage?type=" +
            clickType;
          break;
        case "4":
          let _storeInfo = {
            shop_name: this.storeInfo.member_name,
            real_name: this.storeInfo.member_truename,
            sub_member_id: this.storeInfo.member_id,
            tel: this.storeInfo.member_mobile,
            member_avatar: this.storeInfo.member_avatar
          };
          this.update_storeInfo(_storeInfo);
          clickUrl = "shopSetting?sub_member_id="+this.storeInfo.member_id;
          break;
        case "2":
          clickUrl = "subStoreList";//子账号管理
          break;
        case "6":
          clickUrl = "offlineStoreOrder";//子账号的线下订单
          break;
        case "7":
          clickUrl = "subfanManagement";//总账号的粉丝管理
          break;
        case "8":
          clickUrl = "centerFull/myshop/replenishCar/replenishCar";
          break;
        case "9":
          clickUrl = "centerFull/myshop/replenishmentOrder/replenishmentOrder";
          break;
        case "10":
          clickUrl = "subinventoryManage"; //库存管理
          break;
        case "11":
          clickUrl = "subreplenishCar";
          break;
        case "12":
          clickUrl = "subreplenishOrder";
          break;
      }
      _this.$router.push(clickUrl);
    },
    ...mapActions(["update_storeInfo"])
  },
  filters: {
    //金额格式化
    money_fil(val) {
      if (!val) {
        return;
      }
      val = Number(val);
      if (val >= 10000) {
        return val / 10000 + "万";
      }
      return val;
    }
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>

<style lang="less" scoped>
.shopindex {
  background: #f8f8f8;
}
.store-user-header {
  min-height: 4rem;
  background: url("https://img.xiepinhui.com.cn/small_app/myShop/myShop_bg.png")
    no-repeat;
  background-size: 100%;
}
.store-user-avatar {
  height: 2.4rem;
  text-align: center;
  box-sizing: border-box;
  padding-top: 15px;
  overflow: hidden;
}
.store-user-avatar img {
  height: 1.33rem;
  width: 1.33rem;
  border-radius: 50%;
  border: 0.1rem solid #fff;
}
.store-user-name {
  text-align: center;
  color: #fff;
  font-size: 0.28rem;
}
.store-fundsInfo {
  min-height: 1.5rem;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px 15px;
}
.funds-item {
  width: 25%;
  color: rgba(224, 255, 253, 1);
  font-size: 0.26rem;
  text-align: center;
}
.funds-number {
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 1);
}
.store-income {
  background: #fff;
}
.store-income {
  padding: 15px 15px;
}
.store-income .funds-item {
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
}
.store-income .funds-number {
  font-size: 0.4rem;
  color: rgba(97, 216, 208, 1);
}
.store-manage {
  margin-top: 10px;
  background: #fff;
}
.store-manage-item {
  width: 25%;
  text-align: center;
  padding: 14px 0;
  border-bottom: 1px rgba(242, 242, 242, 1) solid;
  border-right: 1px rgba(242, 242, 242, 1) solid;
  box-sizing: border-box;
}
.store-manage-item-img img {
  width: 0.7rem;
  height: 0.7rem;
}
.store-manage-item-lable {
  font-size: 13px;
  color: rgba(51, 51, 51, 1);
}
.flex {
  display: flex;
}
.flex-warp {
  flex-wrap: wrap;
}
.smallfont {
  font-size: 0.3rem;
  min-height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  word-break: break-all;
}
.store-income .smallfont2 {
  font-size: 0.32rem;
  min-height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  word-break: break-all;
}
.bgc{
  background-color: #fff;
}
</style>
