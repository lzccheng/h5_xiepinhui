<style lang="less" scoped>
.float-tabbar {
  height: 50/50rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 50/50rem;
  background: #fff;
  font-size: 0;
  white-space: nowrap;
  position: fixed;
  top: 0.92rem;
  z-index: 9;
}

.float-tabbar-item {
  width: 20%;
  display: inline-block;
  text-align: center;
  color: #666;
  font-size: 16/50rem;
}

.float-tabbar-item.active {
  color: rgba(97, 216, 208, 1);
  position: relative;
}

.float-tabbar-item.active:after {
  content: "";
  display: block;
  height: 2/50rem;
  position: absolute;
  width: 50%;
  background: rgba(97, 216, 208, 1);
  bottom: 0;
  border-radius: 5/50rem;
  left: 0;
  right: 0;
  margin: auto;
}

.offline-roder-content {
  padding-top: 50/50rem;
}

.order-item {
  padding: 0 10/50rem;
  background: #fff;
  margin-bottom: 10/50rem;
}

.order-item-header {
  padding: 5/50rem 0;
}

.order-shop-name {
  font-size: 15/50rem;
  color: #333;
  padding-left: 10/50rem;
}

.order-status {
  font-size: 12/50rem;
  color: #999;
}

.item-body-header {
  line-height:35/50rem;
}

.order-id, .order-time {
  font-size: 12/50rem;
  color: #666;
}

.left-img {
  padding-top: 5/50rem;
}

.left-img img {
  width: 80/50rem;
  height: 80/50rem;
  border-radius: 5/50rem;
  vertical-align: middle;
}

.right-content {
  width: 100%;
  padding-left: 10/50rem;
}

.right-center-top-goosname {
  font-size: 15/50rem;
  color: #333;
}

.right-content-top {
  width: 100%;
}

.right-center-top-space {
  font-size: 12/50rem;
  color: #999;
}

.right-content-bottom {
  width: 100%;
}

.right-content-bottom-num {
  text-align: right;
  font-size: 12/50rem;
  color: #999;
}

.space-info {
  font-size: 12/50rem;
  color: #999;
}

.space-info-pirce {
  font-size: 17/50rem;
  color: #333;
}

.item-body-bottom {
  text-align: right;
  line-height: 44/50rem;
  font-size: 14/50rem;
  color: #333;
}

</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="线下订单" id="vux-header"></x-header>
    <!-- 主体内容 storeList-->
    <div class="float-tabbar  line_xi_after">
      <div :class="currentTab==1?'float-tabbar-item active':'float-tabbar-item'" @click='checkTabbar' data-index="1">全部</div>
      <div :class="currentTab==2?'float-tabbar-item active':'float-tabbar-item'" @click='checkTabbar' data-index="2">今日</div>
      <div :class="currentTab==3?'float-tabbar-item active':'float-tabbar-item'" @click='checkTabbar' data-index="3">三日内</div>
      <div :class="currentTab==4?'float-tabbar-item active':'float-tabbar-item'" @click='checkTabbar' data-index="4">一周内</div>
      <div :class="currentTab==5?'float-tabbar-item active':'float-tabbar-item'" @click='checkTabbar' data-index="5">一月内</div>
    </div>

    <div class="offline-roder-content">
      <div class="null-bg" v-if="subsaleslist.length<=0">
        <img  src='@/assets/images/null/null_fan.png' class="null-img"/>
        <div class="null-title">当前暂无订单</div>
      </div>
      <div v-else>
        <div class="order-item"  v-for="(item,index) in subsaleslist" :key="index">
          <div class="order-item-header df fac fpj line_xi_after">
            <div class="item-header-left">
              <span class="iconfont icon-live-shop"></span>
              <span class="order-shop-name">{{item.red_order_sn}}</span>
            </div>
            <div class="order-status">交易关闭</div>
          </div>
          <div class="order-item-body">
            <div class="item-body-header  df fpj">
              <div class="order-id">单号：{{item.red_order_sn}}</div>
              <div class="order-time">{{item.red_addtime}}</div>
            </div>
            <div class="item-body-center df" v-for="(_item,goodsindex) in item.order_goods" :key="goodsindex">
              <div class="left-img">
                <img :src='_item.goods_image'/>
              </div>
              <div class="right-content df fw fs">
                <div class="right-content-top">
                  <div class="right-center-top-goosname">{{_item.goods_name || ''}}</div>
                  <!-- <div class="right-center-top-space">{{_item.goods_spec}}</div> -->
                </div>
                <div class="right-content-bottom">
                  <div class="right-content-bottom-num">x{{_item.goods_num || 0}}</div>
                  <div class="space-info df fac fpj">
                    <span>{{_item.goods_spec || ''}}</span>
                    <span class="space-info-pirce">￥{{_item.goods_price || 0}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-body-bottom ">
            <span> 共{{item.order_total_num}}件商品</span>
            <span style='padding-left:10/50rem;'>合计： ￥{{item.red_order_amount}}元</span>
          </div>
        </div>
      </div>

    </div>
    <!-- 主体内容end -->
  </div>
</template>

<script>
import { isScrollBottom } from "@/utils/comm.js";
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
      subsaleslist_page: 1,
      fanShow_bottom: false,
      loading_bottom: false,
      subsaleslist: [],
      listPage:1,
      dataIndex:'',
      currentTab:1
    };
  },
  created() {
    //默认1全部
    this.offlineStoreOrderList(1);
  },
  mounted(){
     this.$nextTick(function() {
      isScrollBottom(this.scrollBottomCB);
    });
  },
  methods: {
    //offlineStoreList
    //线下店铺列表接口
    async offlineStoreOrderList(type) {
      var routerParams = this.$route.params.subOrderId;
      console.log('传进来的参数：',routerParams);
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        page:this.listPage,
        type:type,
        sub_member_id:routerParams || ""
      };
      this.listPage++;
      this.dataIndex=type;
      const [err, res] = await api.offlineStoreOrderList(data);
      if (err) {
        console.log("err", err);
        return;
      }
      if (res && res.code == "2000") {
        this.subsaleslist = this.subsaleslist.concat(res.data.list);
        // this.subsaleslist = res.data.list;
        console.log("线下店铺订单列表", this.subsaleslist);
      }
    },
    //线下店铺列表接口end

    checkTabbar(ev){
      var dataIndex=ev.currentTarget.dataset.index;
      this.dataIndex=dataIndex;
      this.currentTab=dataIndex;
      this.listPage=1;
      this.subsaleslist=[];
      this.offlineStoreOrderList(dataIndex);
      console.log(ev.currentTarget.dataset.index);
    },
    //滚动到底部回调
    scrollBottomCB() {
      var dataIndex=this.dataIndex;
      //this.loading_bottom = true;
      this.offlineStoreOrderList(dataIndex);
    }
    // getParams () {
    //   // 取到路由带过来的参数 
    //   var routerParams = this.$route.params.subOrderId
    //   console.log('传进来的参数：',routerParams);
    // },

  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  },
  

};
</script>
