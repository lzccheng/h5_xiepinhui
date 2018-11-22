<template>
  <div class="wrap">
    <div class="registerMain">
      <ul>
        <li class="df ac">
          <span class="phone">+86</span>
          <input type="number" v-model="phone" placeholder="请输入新的手机号" maxlength="11" class="phoneNum">
        </li>
        <li>
          <input type="number" v-model="code" placeholder="验证码" class="codeNum">
          <input type="button" :value="countdown===60?'获取验证码':`${countdown+1}秒后重发`" class="sendCode_f" @click="getcode" :class="phone.length>10?'getcode':''">
        </li>
      </ul>
      <button href="javascript:void(0);" @click="checkInfo" class="forgetBtn">提交</button>
    </div>
  </div>
</template> 

<script>
import { api } from "@/utils/api.js";
import { isWeiXin, getQueryString } from "@/utils/comm.js";
import { XButton } from "vux";
import { mapGetters } from "vuex";
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
      countdown: 60,
      url: ""
    };
  },
  created() {
    this.url = getQueryString("url");
    console.log("url", this.url);
  },
  computed: {
    ...mapGetters(["user"])
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
        const [err, res] = await api.bindthirdsms(data);
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
      let openid = this.user.openid || getQueryString("unionid");
      if (!_test) {
        this.$vux.toast.text("请输入正确的手机号");
        return;
      }
      if (!this.code) {
        this.$vux.toast.text("请输入正确的验证码");
        return;
      }

      let data = {
        code: this.code,
        tel: this.phone,
        type: 3,
        openid,
        plat: 3
      };
      this.$vux.loading.show({
        text: "Loading"
      });
      const [err, res] = await api.bindtelthird(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      this.$vux.toast.text(res.msg);
      that.$router.push('/user/login');
      // setTimeout(() => {
      //   if (that.url === "/") {
      //     that.$router.push("/");
      //   } else {
      //     window.location.href = unescape(that.url);
      //   }
      // }, 500);
    }
  },
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