<style lang="less" scoped>
.fan-list-content {
  padding-bottom: 55/50rem;
}
.fan-header-avatar img {
  width: 60/50rem;
  height: 60/50rem;
  border-radius: 100%;
}

.fan-list-item {
  padding: 10/50rem;
  padding-bottom: 0;
  background: #fff;
  margin-top: 10/50rem;
}
.fan-name {
  font-size: 16/50rem;
}
.account-item-top {
  padding: 10/50rem 0;
}

.fan-list-item-body {
  padding-left: 10/50rem;
}

.body-left {
  line-height: 25/50rem;
}

.fan-sex {
  width: 13/50rem;
  height: 13/50rem;
}

.fan-phone text {
  color: rgba(102, 102, 102, 1);
  font-size: 14/50rem;
}

.account-operation {
  line-height: 35/50rem;
  font-size: 15/50rem;
  padding: 5/50rem;
}

.account-operation .account-btn {
  width: 100%;
  text-align: center;
}
.account-btn.password {
  color: #61d8d0;
}
.add-account {
  text-align: center;
  line-height: 51/50rem;
  font-size: 16/50rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #81d7d2;
  z-index: 9;
  color: #fff;
}
.bottom_box {
  margin-top: 20/50rem;
  margin-bottom: 20/50rem;
  text-align: center;
  font-size: 24/50rem;
  color: #666;
}
</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="粉丝管理" id="vux-header"></x-header>
    <!-- 主体内容 storeList-->
    <div class="fan-list-content">

      <div class="fan-list-item"  v-for="(item,index) in storeList" :key="index">
        <div class='account-item-top df ai line_xi_after'>
          <div class="fan-header-avatar">
            <img :src="item.member_avatar" alt="">
          </div>
          <div class="fan-list-item-body">
            <div class="body-left">
              <div class="fan-name df ai">
                <span>{{item.shop_name}}</span>
              </div>
              <div class="fan-phone">
                <span>店长:{{item.member_name}}</span>
              </div>
              <div class="fan-phone">
                <span>手机:{{item.member_mobile}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="account-operation df ai">
          <div class="account-btn password" @click='resetPasswordFun' :data-id="item.sub_member_id" :data-name="item.shop_name">重置密码</div>
        </div>
        <div class="bottom_box" v-if="loading_bottom">
          加载中~
        </div>
        <div class="bottom_box" v-if="fanShow_bottom">
          别戳啦没有更多新数据啦~
        </div>

      </div>

      
  </div>
  <!-- <div class="add-account" @click='addNewAccount'>添加店铺子账号</div> -->
  <router-link class="add-account" :to="{ name: 'addSubStore', params: {}}">添加店铺子账号</router-link>
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
    loading,
    
  },
  data() {
    return {
      storeList: [],
      store_list_page:1,
      fanShow_bottom:false,
      loading_bottom:false
    };
  },
  created() {
    this.getStoreList();
  },
  mounted(){
     this.$nextTick(function() {
      isScrollBottom(this.scrollBottomCB);
    });
  },
  methods: {
    async getStoreList() {
      
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        page: this.store_list_page
      };
      //this.loading_bottom = true;
      this.store_list_page++;
      const [err, res] = await api.allMyShopList(data);

       if (err) {
        console.log("err", err);
        return;
      }
      // if (res.data && res.data.list.length < 1) {
        
      //   return;
      // }
      this.storeList = this.storeList.concat(res.data.list);


    },
    async resetPasswordFun(e) {
      // 显示
      const _this = this; // 需要注意 onCancel 和 onConfirm 的 this 指向
      var shopName=e.target.dataset.name;
      var shopSubId=e.target.dataset.id;
      this.$vux.confirm.show({
        content: "是否将子账号"+shopName+"密码重置为123456？",
        // 组件除show外的属性
        onCancel() {
          console.log(this); // 非当前 vm
          console.log(_this); // 当前 vm
        },
        async onConfirm() {//闭包问题
          let data ={
              plat: 3,
              account: _this.account,
              token: _this.token,
              sub_member_id:shopSubId
          };
          const [err, res] =await api.resetManagePwd(data);
          if(res && res.code=="2000"){
            _this.$vux.toast.show({
              text: '修改成功'
            });
          }
          

        }
      });
    },
    addNewAccount() {},
    //滚动到底部回调
    scrollBottomCB() {
      this.getStoreList();
    }
  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  },
  
};
</script>
