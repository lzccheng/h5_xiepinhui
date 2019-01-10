<template>
  <div class="wrap">
    <x-header :left-options="{backText:''}" title="找回密码" id="vux-header"></x-header>
    <div class="registerMain">
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
        <li>
          <img src="@/assets/images/login/me_login_pwd@2x.png" alt="">
          <input :type="onLook?'text':'password'" v-model="new_password1" placeholder="请输入新密码" class="password">
          <img class="me_login_mobile pass" @click="onChangeEye" v-if="onLook" src="@/assets/images/login/me_login_eye_open@2x.png" alt="">
          <img class="me_login_mobile pass" @click="onChangeEye" v-else src="@/assets/images/login/me_login_eye@2x.png" alt="">
        </li>
        <li>
          <img src="@/assets/images/login/me_login_pwd@2x.png" alt="">
          <input :type="onLook?'text':'password'" v-model="new_password2" placeholder="请确认新密码" class="password">
          <img class="me_login_mobile pass" @click="onChangeEye" v-if="onLook" src="@/assets/images/login/me_login_eye_open@2x.png" alt="">
          <img class="me_login_mobile pass" @click="onChangeEye" v-else src="@/assets/images/login/me_login_eye@2x.png" alt="">
        </li>
      </ul>
      <button href="javascript:void(0);" @click="checkInfo" class="forgetBtn" :class="phone.length>=11?'':'opcity'">完成</button>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/api.js";
import { XButton, XHeader } from "vux";
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
    };
  },
  created() {},
  methods: {
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
      function settime() {
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
        const [err, res] = await api.findpwd_sms(data);
        if (err) {
          this.$vux.toast.text(err.msg);
          this.flag = false;
          return;
        }
        this.$vux.toast.text(res.msg);
        settime();
      } else {
        console.log("函数防抖");
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
      if (!this.new_password1 || !this.new_password2) {
        this.$vux.toast.text("请输入新的密码");
        return;
      }
      if (this.new_password1 !== this.new_password2) {
        this.$vux.toast.text("两次密码输入不一致");
        return;
      }
      let data = {
        tel: this.phone,
        // code: this.$encrypt(this.code.toString()),
        code: this.code,
        pwd: this.$encrypt(this.new_password1.toString()),
        review_pwd: this.$encrypt(this.new_password2.toString()),
        plat: 3
      };
      if (!this._flag) {
        this.$vux.loading.show({
          text: "Loading"
        });
        this._flag = true;
        const [err, res] = await api.getmemberinfo(data);
        await setTimeout(() => { //节流
          this._flag = false
        }, 1000);
        if (err) {
          this.$vux.toast.text(err.msg);
          return;
        }
        this.$vux.toast.text(res.msg);
        await setTimeout(() => {
          that.$router.go(-1);
        }, 500);
      }else{
        console.log('节流')
      }
    }
  }
};
</script>

<style lang="less">
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
  width: 70%;
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
</style>