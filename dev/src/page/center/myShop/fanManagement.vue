<style lang="less" scoped>
.fan-header {
  height: 125/50rem;
  background: url('https://img.xiepinhui.com.cn/small_app/myShop/fan_bg.png') no-repeat;
  background-size: 100% 100%;
  padding: 0 10/50rem;
}
.fan-header-avatar img {
  width: 60/50rem;
  height: 60/50rem;
  border-radius: 100%;
}
.fan-header-userinfo {
  padding-left: 10/50rem;
}
.user-name,.fan-number {
  width: 100%;
  color: rgba(255, 255, 255, 1);
  font-size: 14/50rem;
}

.user-name {
  font-size: 15/50rem;
}

.fan-number span {
  font-size:18/50rem;
  font-family: PingFang-SC-Medium;
  color: rgba(255, 255, 255, 1);
}

.float-tabbar {
  height: 50/50rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 50/50rem;
  background: #fff;
  font-size: 16px;
  white-space: nowrap;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  z-index: 9;
  overflow-x: scroll;
}

.float-tabbar-item {
  width: calc(100% / 3);
  display: inline-block;
  text-align: center;
  color: #666;
}

.float-tabbar-item.active {
  color: rgba(97, 216, 208, 1);
  position: relative;
}

.float-tabbar-item.active:after {
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  width: 50%;
  background: rgba(97, 216, 208, 1);
  bottom: 0;
  border-radius: 5px;
  left: 0;
  right: 0;
  margin: auto;
}

.fan-list-item {
  padding: 10/50rem;
  background: #fff;
}

.fan-list-item-body {
  padding-left: 10/50rem;
  width: 100%;
}

.body-left {
  line-height: 25/50rem;
  width:50%;
}

.fan-name span {
  font-size: 15/50rem;
  color: #333;
  padding-right: 5px;
}

.fan-sex {
  width: 13/50rem;
  height: 13/50rem;
}

.fan-phone span, .fan-time span {
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  padding-left: 5px;
}

.fan-time span {
  font-size: 12px;
  color: rgba(153, 153, 153, 1);
}

.body-right {
  text-align: right;
}

.right-shouyi {
  color: rgba(251, 76, 114, 1);
  font-size: 15/50rem;
}

.right-xiaofei {
  color: rgba(102, 102, 102, 1);
  font-size: 12/50rem;
}

.fanNull {
  text-align: center;
  color: #b4b4b4;
  font-size:14/50rem;
}

</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="粉丝管理" id="vux-header"></x-header>
    <!-- 主体内容 storeList-->
  <div class="fan-list-content" v-if="fanList.length>0">
    <div class="fan-list-item df fac  line_xi_after" data-fanid="34534" v-for="(itemFan,indexFan) in fanList" :key="indexFan">
      <div class="fan-header-avatar">
        <img :src='itemFan.member_avatar'/>
      </div>
      <div class="fan-list-item-body df fac fpj">
        <div class="body-left">
          <div class="fan-name df fac">
            <span>{{itemFan.member_name}}</span>
            <img class="fan-sex" v-if="itemFan.member_sex && itemFan.member_sex=='1'" src="@/assets/images/myshop/nan.png"/>
            <img class="fan-sex" v-if="itemFan.member_sex && itemFan.member_sex=='2'" src="@/assets/images/myshop/nv.png"/>
          </div>
          <div class="fan-phone df fac">
            <img class="fan-sex" src="@/assets/images/myshop/phone.png"/>
            <span>{{itemFan.member_mobile}}</span>
          </div>
          <div class="fan-time df fac">
            <img class="fan-sex" src="@/assets/images/myshop/time.png"/>
            <span>{{itemFan.add_time}}</span>
          </div>
        </div>
        <div class="body-right">
          <div class="right-shouyi">收益：{{itemFan.amount}}元</div>
          <div class="right-xiaofei">总消费：{{itemFan.order_amount}}元</div>
        </div>
      </div>
    </div>
    
  </div>

    <div class="null-bg" v-else>
      <img src='@/assets/images/null/null_fan.png' class="null-img"/>
      <div class="fanNull">暂无粉丝数据</div>
      <div class="fanNull">赶紧去邀请粉丝吧</div>
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
      fanShow_bottom: false,
      loading_bottom: false,
      fanList:[],
      list_page:1,
    };
  },
  created() {
    this.getFansList();
    
  },
  mounted(){
     this.$nextTick(function() {
      isScrollBottom(this.scrollBottomCB);
    });
  },
  methods: {
    async getFansList(){
      
      let data={
        account:this.account,
        token:this.token,
        plat:3,
        page:this.list_page,
      }
      this.list_page++;
      const [err, res] = await api.storefanList(data);//子店铺粉丝列表
      if (err) {
        console.log("err", err);
        return;
      }
      if (res && res.code == "2000") {
        this.fanList = this.fanList.concat(res.data.list);
      }
    },
    //线下店铺列表接口end
    //滚动到底部回调
    scrollBottomCB() {
      console.log('滚动到底部',this.list_page)
      this.getFansList();
    }
  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  },
  
};
</script>
