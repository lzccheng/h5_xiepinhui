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
    <div class="fan-header df fac">
    <div class="fan-header-avatar">
      <img :src='substorefan.user_info.member_avatar'/>
    </div>
    <div class="fan-header-userinfo df fs fw">
      <div class="user-name">{{substorefan.user_info.member_name}}</div>
      <div class="fan-number df fac">总粉丝：
        <span>{{substorefan.user_info.total_fan}}</span>
      </div>
    </div>
  </div>
  <div class="float-tabbar line_xi_after"
  style="">
    <div :class="currentTab==index?'float-tabbar-item active':'float-tabbar-item'" @click='checkFan' v-for="(item,index) in substorefan.fan_list" :key="index" :data-index="index" :data-subid='item.sub_member_id'>{{item.shop_name}}</div>
  </div>
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
      substorefan:{
        user_info:{
          member_avatar:'',
          member_name:'',
          total_fan:0
        }
      },
      fanList:[],
      currentTab: 0,//当前选中的子店铺
      list_page:1,
      sub_member_id:''
    };
  },
  created() {
    this.substorefanManage();
  },
  mounted(){
     this.$nextTick(function() {
      isScrollBottom(this.scrollBottomCB);
    });
  },
  methods: {
    //offlineStoreList
    //线下店铺列表接口
    async substorefanManage() {
      let data = {
        plat: 3,
        account: this.account,
        token: this.token
      };
      const [err, res] = await api.substorefanManage(data);//账号总粉丝数和店铺名称
      if (err) {
        console.log("err", err);
        return;
      }
      if (res && res.code == "2000") {
        console.log('res_data',res.data);
        this.substorefan = res.data;
        var sub_member_id=res.data.fan_list[0].sub_member_id;
        this.sub_member_id=sub_member_id;
        this.getFansList(sub_member_id);
        //this.fanList=res.data.fan_list[0].list;
        
      }
    },
    async getFansList(sub_member_id){
      console.log('sub_member_id',sub_member_id);
      let data={
        account:this.account,
        token:this.token,
        plat:3,
        page:this.list_page,
        sub_member_id
      }
      this.list_page++;
      const [err, res] = await api.substorefanList(data);//总店铺粉丝列表
      if (err) {
        console.log("err", err);
        return;
      }
      if (res && res.code == "2000") {
        console.log('粉丝列表',res.data);
        // this.substorefan = res.data;
        this.fanList = this.fanList.concat(res.data.list);
        //this.fanList=res.data.list;
        console.log(this.fanList);
        
        // console.log("线下店铺订单列表", this.subsaleslist);
      }
    },
    //线下店铺列表接口end
    // 切换店铺查看粉丝
    checkFan(event) {
      let index = event.currentTarget.dataset.index;
      console.log('点击',index)
      if(index==this.currentTab) return false;
      let subid = event.currentTarget.dataset.subid;
      console.log(subid)
      this.currentTab=index;
      this.list_page=1;
      this.fanList=[];
      this.sub_member_id=subid;
      this.getFansList(subid);
      console.log(this.fanList)
      // this.setData({
      //   currentTab: index,
      //   sub_member_id: subid,
      //   page: 1,
      //   fanList: null
      // })
      // this.checkCor()
      // this.getSubFan();
    },

    //滚动到底部回调
    scrollBottomCB() {
      console.log('滚动到底部',this.list_page)
      var sub_member_id=this.sub_member_id;
      this.getFansList(sub_member_id);
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
