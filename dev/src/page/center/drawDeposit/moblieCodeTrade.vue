<style lang="less" scoped>
    .remind {
          font-size: 26/100rem;
          color: #999;
          padding: 20/100rem 0rem;
          text-align: center;
      }
      .cell-input span {
          display: block;
          width: 100/100rem;
      }
      .cell-input input.code {
          width: 325/100rem;
      }
      .code-btn {
          width: 224/100rem;
          height: 80/100rem;
          line-height: 80/100rem;
          margin-top: 10/100rem;
          text-align: center;
          border-left: 1px #f2f2f2 solid;
          color: #61D8D0;
      }
      .cell {
        background: rgba(255, 255, 255, 1);
        margin-top: 20/100rem;
        padding: 0 20/100rem;
        position: relative;
      }
      .cell .cell-input {
        height: 100/100rem;
        border-bottom: 1px #f2f2f2 solid;
        font-size: 28/100rem;
        color: rgba(51, 51, 51, 1);
        line-height: 100/100rem;
        display: flex;
        position: relative;
      }
      .cell .cell-input text {
        margin: 0 25/100rem;
      }
      .cell .cell-input input {
        width: 70%;
        height: 100%;
        border: none;
        text-align: center;
      }
      .cell .cell-input-code input {
        width: 200/100rem;
      }
      .cell .cell-input-code .cell-input-btn {
        width: 160/100rem;
        height: 50/100rem;
        line-height: 50/100rem;
        border-radius: 25/100rem;
        font-size: 26/100rem;
        border: 1px solid #61d8d0;
        color: #61d8d0;
        background: #fff;
        text-align: center;
        margin-top: 24/100rem;
        margin-left: 10/100rem;
      }
      
</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="交易密码" id="vux-header"></x-header>
    <!-- 主体内容 -->
    <div>
      <div class="remind">为了您的账户安全，请先完成身份验证</div>
      <div class="cell">
        <div class="cell-input">
          <span>手机号</span>
          <input type="text" v-model="tel" />
        </div>
        <div class="cell-input">
          <span>校验码</span>
          <input type="text" maxlength="6" placeholder="请输入校验码" class="code" v-model="code" />
          <div class="code-btn" @click="getCode">
            {{num >= 60 ? '获取验证码' : num+'s'}}
          </div>
        </div>
      </div>
      <div class="btn" @click="checkSMS">提交</div>
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
      isShadow: false,
      isPwd: 0,
      tel:13726768507,
      num: 60,
      code:''
    };
  },
  created() {
    
  },
  mounted() {
    this.$nextTick(function() {});
  },
  methods: {
    countDown () {
      console.log(888)
      console.log(this.num)
      let c = this.num
      c--
      if ( c < 1) {
        // this.setData({
        //   num: 60
        // })
        this.num=60;
        return
      }

      // this.setData({
      //   num: c
      // })
      this.num=c;

      console.log('c',c)

      setTimeout(()=>{
        this.countDown();
      },1000)
    },
    async getCode () {
      this.countDown();
      var tel_user = this.Trim(this.tel);
      var that=this;

      var param={
        tel:tel_user,
        plat:3,
        type:1,//类型1设置支付密码验证码，2找回支付密码验证码，3提现验证码
        time:new Date().getTime(),
        version:'1.0.1',
        device_name:'MAX123'
      };
      
      param=JSON.stringify(param);
      param=this.$encrypt(param);
      
      param={
        param:param
      };
      const [err, res] = await api.sendTradePassword(param);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        console.log('发送验证码中')
      }

      
    },
    shadowToggle() {
      this.isShadow = true;
    },
    async checkSMS(){
      console.log(this.tel,this.code)
      if(this.tel=='' || !this.tel){
        this.$vux.toast.text('电话号码不能为空');
        return false;
      }else if(this.code=='' || !this.code){
        this.$vux.toast.text('验证码不能为空');
        return false;
      }else{
        var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
        var tel_user = this.Trim(this.tel);
        if (!phoneReg.test(tel_user)) {
          this.$vux.toast.text('请输入有效的手机号！');
          return false;
        }else{
          var data={
            tel:this.tel,
            plat: 3,
            type: 1,//1设置支付密码验证码，2找回支付密码验证码
            code: this.code
          };
          const [err, res] = await api.checkTradePassword(data);
          if(err){
            this.$vux.toast.text(err.msg);
            return;
          }else{
            if(res.code==2000){
              this.$router.push("./setTradeCode");
            }
          }

        }
      }
    },
    //去掉字符串前后所有空格：
    Trim(str) {
      str=String(str);//注意这里是字符串才有replace函数
      return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    //滚动到底部回调
    cancelshadowToggle() {
      this.isShadow = false;
    }
  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
