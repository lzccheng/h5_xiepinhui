<style lang="less" scoped>
.header-bg {
  width: 100%;
  height: 50/50rem;
  background: #61d8d0;
  border-radius: 0 0 30/50rem 30/50rem;
  position: fixed;
}
.offline-cards {
  overflow-x: hidden;
  position: relative;
  top: 15/50rem;
  padding: 0 10/50rem;
  z-index: 2;
  background: #f8f8f8;
}
.cards-item {
  background: #fff;
  border-radius: 5/50rem;
  padding: 15/50rem;
  position: relative;
}

.item-top-avatar img {
  width: 54/50rem;
  height: 54/50rem;
  border-radius: 100%;
  vertical-align: middle;
}

.item-top-userinfo {
  padding-left: 10/50rem;
}

.item-top-userinfo .user-name {
  font-size: 14/50rem;
  color: #333;
}

.item-top-userinfo .user-phoneNumber {
  font-size: 13/50rem;
  color: #999;
}

.item-top-transaction {
  width: 50%;
}

.item-top-transaction-item {
  font-size: 12/50rem;
  color: #999;
  text-align: center;
}

.item-top-transaction-item:first-of-type {
  margin-right: 30/50rem;
}

.transaction-item-num {
  font-size: 13pt;
  color: #61d8d0;
}

.cards-item-center {
  padding: 15/50rem 0;
  text-align: right;
  padding-bottom: 20/50rem;
}

.body-center-btn span {
  font-size: 14/50rem;
  padding: 3px 15px;
  text-align: center;
}

.body-center-btn .btn-one {
  color: rgba(97, 216, 208, 1);
  box-shadow: 0px 3px 3px 0px rgba(195, 241, 238, 1);
  border-radius: 40/50rem;
  border: 1px solid rgba(97, 216, 208, 1);
  margin-right: 36/50rem;
  box-sizing: border-box;
}

.body-center-btn .btn-two {
  background: rgba(97, 216, 208, 1);
  box-shadow: 0px 4px 4px 0px rgba(195, 241, 238, 1);
  border: 1px solid rgba(97, 216, 208, 1);
  border-radius: 40px;
  color: #fff;
}

.cards-item-foot {
  padding: 10/50rem 0;
}

.funds-item {
  width: 25%;
  color: rgba(153, 153, 153, 1);
  font-size: 12/50rem;
  text-align: center;
}

.funds-number {
  font-size: 13pt;
  color: #333;
}

.lockBuckle {
  width: 100%;
  position: absolute;
  height: 40/50rem;
  z-index: 2;
}

.lockBuckle img {
  width: 12/50rem;
  height: 40/50rem;
}

.lockBuckle img:last-of-type {
  position: absolute;
  right: 30/50rem;
}

.vermicelli-plate {
  background: #fff;
  margin-top: 8/50rem;
  margin-bottom: 15/50rem;
  border-radius: 5px;
  padding: 0 10px;
  padding-bottom: 15/50rem;
}

.vermicelli-header {
  padding-top: 20px;
}

.vermicelli-header-title {
  position: relative;
  padding-left: 20/50rem;
  font-size: 15/50rem;
  height: 21/50rem;
  line-height: 21/50rem;
  color: #333;
}

.vermicelli-header-title::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 100%;
  background: #61d8d0;
  border-radius: 3px;
  left: 0;
  top: 0;
}

.vermicelli-header-more {
  position: absolute;
  right: 20/50rem;
  margin-top: 7/50rem;
  font-size: 13px !important;
  color: #999;
}

.vermicelli-header-more .iconfont {
  font-size: 13/50rem !important;
}

.vermicelli-body {
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.vermicelli-body-item {
  width: calc(100% / 6);
  text-align: center;
  padding-top: 10/50rem;
}

.vermicelli-body-item img {
  width: 42/50rem;
  height: 42/50rem;
  border-radius: 100%;
  vertical-align: middle;
}
.null-bg .null-img {
  width: 150/50rem;
  padding-top: 50/50rem;
  display: block;
  margin:auto;
}
.null-title {
  font-size: 12/50rem;
  padding: 15/50rem 0/50rem;
  color: #888;
  text-align: center;
}

</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="线下店铺" id="vux-header"></x-header>
    <!-- 主体内容 storeList-->
    <div class="offline-header">
      <div class="header-bg"></div>
    </div>
  <div class="offline-cards">

    <div v-if="subsaleslist.length>0">

      <div v-for="(item,index) in subsaleslist"  :key="index">
        <div class="cards-item">
          <div class="cards-item-top df fac">
            <div class="item-top-avatar">
              <img :src='item.member_avatar'/>
            </div>
            <div class="item-top-userinfo">
              <div class="user-name">{{item.shop_name}}</div>
              <div class="user-phoneNumber">{{item.member_mobile}}</div>
            </div>
            <div class="item-top-transaction df fpe">
              <div class="item-top-transaction-item">
                <div class="transaction-item-num">{{item.total_sales || 0}}</div>
                <div>总成交额</div>
              </div>
              <div class="item-top-transaction-item">
                <div class="transaction-item-num">{{item.total_revenue || 0}}</div>
                <div>总收益</div>
              </div>
            </div>
          </div>

          <div class="cards-item-center line_xi_after">
            <div class="body-center-btn">
              <span class="btn-one"  :data-submemberid='item.sub_member_id' @click="applyOrderLink">申请提现</span>
              <span class="btn-two"  :data-submemberid='item.sub_member_id' @click="orderLink">订单管理</span>
            </div>
          </div>

          <div class="cards-item-foot df">
            <div class="funds-item">
              <div class="funds-number">{{item.date_sales || 0}}</div>
              <div>今日成交额</div>
            </div>
            <div class="funds-item">
              <div class="funds-number">{{item.date_visitor || 0}}</div>
              <div>今日访客</div>
            </div>
            <div class="funds-item">
              <div class="funds-number">{{item.date_order || 0}}</div>
              <div>今日订单</div>
            </div>
            <div class="funds-item">
              <div class="funds-number">{{item.date_fan || 0}}</div>
              <div>今日粉丝</div>
            </div>
          </div>
          <div class="lockBuckle ">
            <img src='@/assets/images/offline/offline_lockBuckle.png'/>
            <img src='@/assets/images/offline/offline_lockBuckle.png'/>
          </div>
        </div>
        <div class="vermicelli-plate">
          <div class="vermicelli-header">
            <span class="vermicelli-header-title">粉丝总数：{{item.total_fan || 0}}人</span>
            <span class="vermicelli-header-more" bindtap='moreFan' data-subid="">查看更多<span class="iconfont icon-right-jiantou"></span></span>
          </div>
          <div class="vermicelli-body">
            <!-- {{item.fan_list}} -->
            <div class="vermicelli-body-item" v-for="(itemFan,indexFan) in item.fan_list" :key="indexFan">
              <img :src='itemFan.member_avatar'/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-else class="null-bg"> 
        <img  src='@/assets/images/null/null_fan.png' class="null-img"/>
        <div class="null-title">当前暂无店铺</div>
    </div>

  </div>
    <!-- 主体内容end -->
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
export default {
  name: "subStoreList",
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
      storeList: [],
      store_list_page: 1,
      fanShow_bottom: false,
      loading_bottom: false,
      selectModelStatus: false,
      img1: false,
      img1_sn: "",
      shopStr: "",
      shopOwnerStr: "",
      shopTel: "",
      subsaleslist:[]
    };
  },
  created() {
    this.getStoreList();
  },
  methods: {
    //线下店铺列表接口
    async getStoreList(){
      let data={
        plat: 3,
        account: this.account,
        token: this.token
      };
      const [err, res] = await api.offlineStoreList(data);
      if (err) {
        console.log("err", err);
        return;
      }
      if(res && res.code=="2000"){
        this.subsaleslist=res.data.list;
        console.log('this.subsaleslist',this.subsaleslist)
      }
    },
    //线下店铺列表接口end
    orderLink(e){
      var subOrderId=e.target.dataset.submemberid;
      this.$router.push({
        path:'/offlineStoreOrder',
        name:'offlineStoreOrder',
        params:{
          subOrderId:subOrderId
        }
      });
    },
    applyOrderLink(e){
      var subOrderId=e.target.dataset.submemberid;
      console.log(subOrderId)
      this.$router.push({//跳路由
        path: '/drawIndex',
        query: {
          sub_member_id:subOrderId//这里有个子店铺id
        }
      });
    }

  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  },
};
</script>
