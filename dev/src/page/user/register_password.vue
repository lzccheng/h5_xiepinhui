<template>
  <div class="wrap">
    <div class="registerMain">
      <ul>
        <li class="df ac">
          <span class="phone">+86</span>
          <input type="number" v-model="phone" placeholder="请输入手机号" maxlength="11" class="phoneNum">
        </li>
        <li>
          <input type="number" v-model="code" placeholder="验证码" class="codeNum">
          <input type="button" :value="countdown===60?'获取验证码':`${countdown+1}秒后重发`" class="sendCode_f" @click="getcode" :class="phone.length>=11?'getcode':''">
        </li>
        <li><input type="password" v-model="new_password1" placeholder="请输入密码" class="password"></li>
        <li><input type="password" v-model="new_password2" placeholder="请确认密码" class="repassword"></li>
      </ul>
      <button href="javascript:void(0);" @click="checkInfo" class="forgetBtn">注册</button>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/api.js";
import { XButton } from "vux";
export default {
  name: "login",
  props: {},
  components: {
    XButton
  },
  data() {
    return {
      phone: "",
      code: "",
      new_password1: "",
      new_password2: "",
      countdown: 60
    };
  },
  created() {
    let that = this;
  },
  methods: {
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
      if (!this.new_password1 || !this.new_password2) {
        this.$vux.toast.text("请输入密码");
        return;
      }
      if (this.new_password1.length < 5 || this.new_password1.length > 12) {
        this.$vux.toast.text("密码为6-12位数");
        return;
      }
      if (this.new_password1 !== this.new_password2) {
        this.$vux.toast.text("两次密码输入不一致");
        return;
      }
      let data = {
        tel: this.phone,
        plat: 3,
        pwd: this.$encrypt(this.new_password1),
        review_pwd: this.$encrypt(this.new_password2),
        code: this.code
      };
      this.$vux.loading.show({
        text: "Loading"
      });
      const [err, res] = await api.register(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      this.$vux.toast.text(res.msg);
      setTimeout(() => {
        that.$router.push("/login");
      }, 500);
    }
  }
};
</script>

<style lang="less">
.registerMain {
  padding: 0.6rem;
}
.registerMain li {
  list-style: none;
  border-bottom: 1px solid #e6e6e6;
}
.registerMain li input.sendCode_f {
  width: 28%;
  float: right;
  color: #999;
  box-sizing: border-box;
  border-radius: 0px;
  -webkit-appearance: none;
  margin-top: 0.3rem;
  border-radius: 5px;
  font-size: 0.24rem;
  height: 0.6rem;
  border-radius: 1rem;
  background: #fff;
  border: 0.01rem solid rgba(153, 153, 153, 1);
}
.registerMain li input.sendCode_f.getcode {
  color: #61D8D0;
  border: 0.01rem solid #61D8D0;
}
.registerMain .forgetBtn {
  width: 5.1rem;
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
  border-radius: 0.54rem;
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