<style lang="less" scoped>
.center {
    width: 100%;
    text-align: center;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
}
.shadow{
  position: fixed;
  width:100%;
  background: rgba(0,0,0,0.5);
  top:0px;
  height: 100%;
  max-width: 750px;
}
.image {
    width: 216/100rem;
    display: block;
    margin: 0 auto;
}
.title {
    font-size: 34/100rem;
    color: #666;
    margin-top: 60/100rem;
}

.money {
    font-size: 60/100rem;
    color: rgba(51,51,51,1);
    margin-top: 26/100rem;
}

.btn-list {
    display: flex;
    font-size: 30/100rem;
    color: #61D8D0;
    line-height:70/100rem;
    margin-top: 90/100rem;
}
.btn-list div {
    width: 210/100rem;
    height: 70/100rem;
    background: rgba(255,255,255,1);
    border-radius: 35/100rem;
    border: 1px solid #61D8D0;
    margin-left: 30/100rem;

}
.set-pwd {
    width: 542/100rem;
    background: #fff;
    border-radius: 20/100rem;
    text-align: center;
}
.set-pwd .title {
    font-size: 40/100rem;
    margin: 20/100rem 0;
    color:rgba(0,0,0,1);
}
.set-pwd .desc {
    width: 80%;
    font-size: 30/100rem;
    margin: 20/100rem auto;
}

.set-pwd-list {
    display: flex;
    border-top: 1px #f2f2f2 solid;
    height: 80/100rem;
    line-height: 80/100rem;
    font-size: 34/100rem;
    color: #61D8D0;
    margin-top: 40/100rem;
    text-align: center;
}
.set-pwd-list div {
    width: 50%;
}
.set-pwd-list .close {
    color:rgba(102,102,102,1);
    border-right: 1px #f2f2f2 solid;
}
.btn {width:90%;
height:92/100rem;
line-height:92/100rem;
background:#61d8d0;
border-radius:46/100rem;
margin:58/100rem auto;
font-size:34/100rem;
color:rgba(255, 255, 255, 1);
text-align:center;
outline:none;
}

</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="我的余额" id="vux-header"></x-header>
    <!-- 主体内容 -->
    <div>
        <div class="center">
            <img src="https://img.xiepinhui.com.cn/mobile/wallet/ico_wallet.png"  class="image"/>
            <div class="title">我的余额</div>
            <div class="money">￥{{balance}}</div>
            <div class="btn" @click="withdraw" data-submemberid=''>提现</div>
            <div class="btn-list">
              <div data-url="./clearness/clearness" @click="linkToPage('/drawIndex/clearness')">提现明细</div>
              <div data-url="isPwd == 0 ? '../password/moblieCode/moblieCode' : '../password/password'" @click="linkToPage('/setTradeCode')">设置密码</div>
              <div data-url="./bankCard/bankCard" @click="linkToPage('/addCard')">银行卡管理</div>
            </div>
        </div>
        <div class="shadow" v-if="isShadow">
            <div class="set-pwd center">
              <div class="title">提示</div>
              <div class="desc">您还没有设置交易密码，是否 前往设置？</div>
              <div class="set-pwd-list">
                <div class="close" @click="cancelshadowToggle">取消</div>
                <div data-url="isPwd == 0 ? '../password/moblieCode/moblieCode' : '../password/password'" @click="goPage">前往设置</div>
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
    loading,
  },
  data() {
    return {
      balance: "",
      isShadow: false,
      isPwd: '',
    };
  },
  created() {
    this.getBalance();
  },
  mounted(){
     this.$nextTick(function() {
       console.log('路由参数：',this.$route.query.sub_member_id);
    });
  },
  methods: {
    async getBalance() {
      var sub_member_id='';
      sub_member_id=this.$route.query.sub_member_id;
      console.log('sub_member_id',sub_member_id)
      // if(!sub_member_id){
      //   sub_member_id="";
      // }
      let data = {
        plat: 3,
        token:this.token,
        account:this.account,
        sub_member_id:sub_member_id
      };
      
      const [err, res] = await api.getBalance(data);
       if (err) {
        console.log("err", err);
        return;
      }else if(res.code==2000){
        console.log(res.data)
        this.balance=res.data.rebate_amout;
        var isPwd=res.data.is_paypwd;
        this.isPwd=isPwd;
        if (!isPwd) {
          console.log('isPwd是false')
          this.shadowToggle();
          return;
        }
      }else{
        console.log(res.code)
      }


    },
    shadowToggle () {
      this.isShadow=true;
    },
    withdraw(){
      var isPwd=this.isPwd;
      if (!isPwd) {
        this.shadowToggle();
        return;
      }else{
        var sub_member_id='';
        sub_member_id=this.$route.query.sub_member_id;
        //this.$router.push('/drawCash');
        this.$router.push({//跳路由
          path: '/drawCash',
          query: {
            sub_member_id:sub_member_id
          }
        });
      }
    },
    goPage(){
      this.$router.push('./moblieCodeTrade');
    },
    cancelshadowToggle() {
     this.isShadow=false;
    },
    linkToPage(path){
      this.$router.push({
        path
      })
    }
  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  },
  
};
</script>
