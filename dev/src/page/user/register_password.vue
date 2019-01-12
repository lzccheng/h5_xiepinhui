<template>
  <div class="wrap">
    <x-header :left-options="{backText:''}" title="注册" id="vux-header"></x-header>
    
    <div class="registerMain">
      <div class="tabBox flex">
        <span @click="onTabChange(i)" :class="{'activeTab': tabIndex == i}" v-for="(item, i) in ['账号密码注册', '验证码注册']" :key="i">{{item}}</span>
      </div>
      <div class="line"></div>
      <ul>
        <li class="df ac">
          <img src="@/assets/images/login/me_login_mobile@2x.png" alt="">
          <input type="number" v-model="phone" placeholder="请输入手机号" maxlength="11" class="phoneNum">
        </li>
        <li>
          <img src="@/assets/images/login/me_login_code@2x.png" class="codeNumImg" alt="">
          <input type="number" v-model="code" placeholder="验证码" style="width: 50%;" class="codeNum">
          <input type="button" :value="countdown===60?'获取验证码':`${countdown+1}秒后重发`" class="sendCode_f" @click="getcode" :class="phone.length>=11?'':'opcity'">
        </li>
        <li v-if="tabIndex == 0">
          <img src="@/assets/images/login/me_login_pwd@2x.png" alt="">
          <input :type="onLook?'text':'password'" v-model="new_password1" placeholder="请输入密码" class="password">
          <img class="me_login_mobile pass" @click="onChangeEye" v-if="onLook" src="@/assets/images/login/me_login_eye_open@2x.png" alt="">
          <img class="me_login_mobile pass" @click="onChangeEye" v-else src="@/assets/images/login/me_login_eye@2x.png" alt="">
        </li>
        <li v-if="tabIndex == 0">
          <img src="@/assets/images/login/me_login_pwd@2x.png" alt="">
          <input :type="onLook?'text':'password'" v-model="new_password2" placeholder="请确认密码" class="password">
          <img class="me_login_mobile pass" @click="onChangeEye" v-if="onLook" src="@/assets/images/login/me_login_eye_open@2x.png" alt="">
          <img class="me_login_mobile pass" @click="onChangeEye" v-else src="@/assets/images/login/me_login_eye@2x.png" alt="">
        </li>
      </ul>
      <button href="javascript:void(0);" @click="checkInfo" class="forgetBtn" :class="phone.length>=11?'':'opcity'">注册</button>
      <div>
        <div class="tips-box" @click="selectTips">
          <div class="icon" :class="{'active':tips}"></div>
          <div class="text">
            同意鞋品荟<span @click.stop="link">用户注册协议</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/api.js";
import { XButton, XHeader } from "vux";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "login",
  props: {},
  components: {
    XButton,
    XHeader
  },
  data() {
    return {
      phone: "",
      code: "",
      new_password1: "",
      new_password2: "",
      countdown: 60,
      onLook: false,
      checked: false,
      tips: false,
      tabIndex: 0
    };
  },
  created() {
    let that = this;
  },
  mounted () {
  },
  methods: {
    onTabChange(i){
      this.tabIndex = i;
    },
    link(){
      this.$router.push({
        path: '/centerFull/myshop/noShop',
        query: {
          url: 'https://api.xiepinhui.com.cn/website/storeprotocol',
          title: '注册协议'
        }
      })
    },
    selectTips() {
      this.tips = !this.tips;
    },
    onChangeEye(){
      this.onLook = !this.onLook;
    },
    // 获取验证码
    getcode() {
      let reg = /^1[0-9]{10,}$/; //10位以上
      let _test = reg.test(this.phone);
      if (_test) {
        this.setcode();
      } else {
        this.$vux.toast.text("请输入正确的手机号码", "top");
      }
    },
    async setcode() {
      let that = this;
      function settime(val) {
        if (that.countdown == 0) {
          that.countdown = 60;
          that.flag = false;
        } else {
          that.countdown--;
          setTimeout(function() {
            settime();
          }, 1000);
        }
      }
      //防抖
      if (!this.flag) {
        this.flag = true;
        let timestamp = Date.parse(new Date()) / 1000;
        let param = {
          plat: 3,
          tel: this.phone,
          time: timestamp,
          device_name: "web",
          version: 1
        };
        let data = {
          param: this.$encrypt(JSON.stringify(param))
        };
        const [err, res] = await api.register_sms(data);
        if (err) {
          this.$vux.toast.text(err.msg);
          this.flag = false;
          return;
        }
        this.$vux.toast.text(res.msg);
        settime();
      }
    },
    // 校验信息
    async checkInfo() {
      let that = this;
      let reg = /^1[0-9]{10,}$/; //10位以上
      let _test = reg.test(this.phone);
      if (!_test) {
        this.$vux.toast.text("请输入正确的手机号");
        return;
      }
      if (!this.code) {
        this.$vux.toast.text("请输入正确的验证码");
        return;
      }
      if (this.tabIndex == 0 && (!this.new_password1 || !this.new_password2)) {
        this.$vux.toast.text("请输入密码");
        return;
      }
      if (this.tabIndex == 0 && (this.new_password1.length < 5 || this.new_password1.length > 12)) {
        this.$vux.toast.text("密码为6-12位数");
        return;
      }
      if (this.tabIndex == 0 && this.new_password1 !== this.new_password2) {
        this.$vux.toast.text("两次密码输入不一致");
        return;
      }
      if (!this.tips) {
        this.$vux.toast.text("请勾选用户注册协议");
        return;
      }
      let data = {
        tel: this.phone,
        plat: 3,
        code: this.$encrypt(this.code)
      };
      if(this.tabIndex == 0){
        data.pwd = this.$encrypt(this.new_password1);
        data.review_pwd = this.$encrypt(this.new_password2);
        data.register_type = 1;
      }else{
        data.register_type = 2;
      }
      this.$vux.loading.show({
        text: "Loading"
      });
      const [err, res] = await api.register(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      // this.$vux.toast.text('注册成功');
      // 存储token
      this.updateUser(res.data);
      this.updateToken(res.data.token);
      this.updateAccount(res.data.account);
      localStorage["user"] = JSON.stringify(res.data);
      localStorage["account"] = res.data.account;
      localStorage["token"] = res.data.token;
      var fromurl = window.location.origin + '/user/login' + window.location.search;
      window.location.href =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx47d52b6420c14397&redirect_uri=" +
          encodeURIComponent(fromurl) +
          "&response_type=code&scope=snsapi_userinfo&state=child#wechat_redirect";
      // setTimeout(() => {
      //   that.$router.push("/user/login");
      // }, 500);
    },
    ...mapMutations(["updateManager", "updateToken", "updateAccount"]),
    ...mapActions(["updateUser"]),
  }
};
</script>

<style lang="less">
.tabBox{
  padding: 0.2rem 0;
  justify-content: space-around;
  .activeTab{
    color: #61D8D0;
  }
}
.registerMain {
  padding: 1rem 0.6rem;
}
.registerMain li {
  list-style: none;
  border-bottom: 1px solid #e6e6e6;
  .codeNumImg{
    position: relative;
    top: 0.1rem;
  }
  img{
    width: 0.35rem;
    vertical-align: center;
    margin-right: 0.2rem;
  }
  .password{
    width: 70%;
  }
}
.registerMain li input.sendCode_f {
  width: 28%;
  float: right;
  box-sizing: border-box;
  border-radius: 0px;
  -webkit-appearance: none;
  margin-top: 0.3rem;
  border-radius: 5px;
  font-size: 0.24rem;
  height: 0.6rem;
  border-radius: 3px;
  color: #fff;
  background: #61D8D0;
  border: none;
}
.opcity{
  opacity: 0.5;
}
.registerMain li input.sendCode_f.getcode {
}
.registerMain .forgetBtn {
  width: 100%;
  line-height: 0.92rem;
  background: #404042;
  display: block;
  color: #fff;
  text-align: center;
  font-size: 0.34rem;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 0.8rem;
  height: 0.92rem;
  background: #61D8D0;
  border-radius: 3px;
  border: none;
}
.registerMain li input {
  width: 100%;
  height: 1.1rem;
  border: none;
  outline: none;
  font-size: 0.28rem;
}
.registerMain li input.codeNum {
  width: 50%;
}
.phone {
  position: relative;
  color: #333;
  font-size: 0.32rem;
  box-sizing: border-box;
  padding-right: 0.18rem;
  margin-right: 0.18rem;
}
.phone::after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  height: 75%;
  width: 1px;
  background: #999;
  transform: translateY(25%);
}
.tips-box {
    display: flex;
    align-items: center;
    height: 1rem;
    padding-bottom: 0.2rem;
    .icon {
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.1rem;
      border: 1px solid #61d8d0;
      border-radius: 2px;
    }
    .icon.active {
      border: none;
      background: url("~@/assets/images/center/partner/yes.png") no-repeat;
      background-size: contain;
    }
    .text {
      color: #999;
      font-size: 0.24rem;
      span {
        color: #61d8d0;
      }
    }
  }
</style>