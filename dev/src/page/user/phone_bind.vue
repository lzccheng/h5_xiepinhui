<template>
  <div class="wrap">
    <div class="registerMain">
      <ul>
        <li class="df ac">
          <img src="@/assets/images/login/me_login_mobile@2x.png" alt="">
          <input type="number" v-model="phone" placeholder="请输入新的手机号" maxlength="11" class="phoneNum">
        </li>
        <li>
          <img src="@/assets/images/login/me_login_code@2x.png" class="codeNumImg" alt="">
          <input type="number" v-model="code" placeholder="验证码" class="codeNum">
          <input type="button" :value="countdown===60?'获取验证码':`${countdown+1}秒后重发`" class="sendCode_f" @click="getcode" :class="phone.length>10?'':'opcity'">
        </li>
      </ul>
      <button href="javascript:void(0);" :class="phone.length>10?'':'opcity'" @click="checkInfo" class="forgetBtn">提交</button>
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
    // localStorage.setItem('close','我还在哦，亲~~')
    console.log(5555,localStorage.getItem('close'))
    // window.onunload = function(){
    //   alert('你确定离开？')
    //   return alert('你确定离开？');
    // }
    // window.onbeforeunload  = function(){
    //   alert('你确定离开？？？？？？？')
    //   return alert('你确定离开？？？？？？？');
    // }
  },
  computed: {
    ...mapGetters(["user"])
  },
  beforeDestroy () {
    // alert(8888888)
    // return false;
  },
  destroyed () {
    // alert(9999)
    // return false;
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
</style>