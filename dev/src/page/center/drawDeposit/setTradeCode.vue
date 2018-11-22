<style lang="less" scoped>
    .remind {
    font-size: 34/100rem;
    color: #333;
    padding: 71/100rem 0;
    text-align: center;
}

.input-list {
    width: 634/100rem;
    height: 108/100rem;
    background: rgba(255,255,255,1);
    border: 1px #ccc solid;
    margin: 0 auto;
    position: relative;
}
.input-list input {
    width: 100%;
    height: 1.08rem;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    font-size: 0.2rem;
    box-sizing: border-box;
    background: #61D8D0;
}
.input-val {
    display: flex;
    width: 100%;
    height: 100%;
}
.val-item {
    width: 16.6%;
    height: 100%;
    border-right: 1px #ccc solid;
}
.val-item:last-child {
    border: none;
}

.val-item-bg {
    background: url("https://img.xiepinhui.com.cn/mobile/wallet/ico_dot.png") no-repeat center;
    background-size: 17% auto;
}

.desc {
    text-align: center;
    font-size: 28/100rem;
    color: #999;
    margin-top: 30/100rem;
}
.imgPay{
    width: 259/100rem;
    display: block;
    margin: 82/100rem auto;
}
.title {
    text-align: center;
    font-size: 34/100rem;
    color: #333;
    margin-top: 20/100rem;
}
</style>

<template>
  <div class="shopindex idnexWrapBox">
    <x-header :left-options="{backText:''}" title="设置交易密码" id="vux-header"></x-header>
    <!-- 主体内容  oninput=""-->
    <div v-if="showSetting">
      <div class="remind">设置6位数字支付密码</div>
      <div class="input-list">

        <div class="inputBox">
            <input type="number" maxlength="6" v-model="password" v-on:input ="bindPwd"/>
        </div>
        
        <div class="input-val">
          <div :class="password.length > 0 ? 'val-item val-item-bg' : 'val-item'"></div>
          <div :class="password.length > 1 ? 'val-item-bg val-item' : 'val-item'"></div>
          <div :class="password.length > 2 ? 'val-item-bg val-item' : 'val-item'"></div>
          <div :class="password.length > 3 ? 'val-item-bg val-item' : 'val-item'"></div>
          <div :class="password.length > 4 ? 'val-item-bg val-item' : 'val-item'"></div>
          <div :class="password.length > 5 ? 'val-item-bg val-item' : 'val-item'"></div>
        </div>

      </div>
      <div class="desc">设置后在账户有风险的情况下支付需要手机验证</div>
      <div :class="password.length !== 6 ? 'btn btn-disabled' : 'btn' " @click="setPwd">保存</div>
  </div>

  <div v-if="showSuccess">
      <img src="https://img.xiepinhui.com.cn/mobile/wallet/ico_pwd_success.png" class="imgPay" mode="widthFix"/>
      <div class="title">支付密码设置成功</div>
      <div class="btn" @click="linkToPage">返回提现首页</div>
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
      password: '',
      // isFocus: false,
      // showSetting:true,
      // showSuccess:false
      showSetting:true,
      showSuccess:false
    };
  },
  created() {
    
  },
  mounted() {
    this.$nextTick(function() {});
  },
  methods: {

    bindPwd(e){
      var password=this.password;
      if(password.length>5){
        this.password=password.slice(0,6);
      }
    },
    async setPwd(){
      var param={
        plat: 3,
        token:this.token,
        account:this.account,
        pwd: this.$encrypt(this.password)
      };
      const [err, res] = await api.setTradePassword(param);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
          this.showSuccess=true;
          this.showSetting=false;
        }
      }

    },
    linkToPage(){
      this.$router.push('../../index/index');
    },
    

  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
