<template>
  <div class="wrap">
    <div class="logion-top-bg"></div>
    <div class="loginMain">
      <div class="other_login" v-if="isWX" @click="wxLogin">
        <div class="wxLogin"></div>
        <div class="test">
          微信一键登录，安全又方便
        </div>
      </div>
      <ul class="login-input">
        <li>
          <span class="logion-lable">+86</span>
          <input style="padding-left: 1.1rem;" v-model="phone" maxlength="11" id="username" type="number" placeholder="手机">
        </li>
        <li>
          <input v-model="password" id="password" type="password" placeholder="请输入6-12位密码">
        </li>
      </ul>
      <p><a href="javascript:void(0);" @click="$router.push('find_password')" class="forgot pull-right">忘记密码？</a></p>
      <a href="javascript:void(0);" @click="checkInfo" class="loginBtn">登录</a>
      <div class="register" @click="$router.push('register_password')">还没有账号？ <span style="color: #61D8D0;">现在注册→</span></div>

    </div>
  </div>
</template>

<script>
import { api } from "@/utils/api.js";
import { isWeiXin, getQueryString } from "@/utils/comm.js";
import axios from "axios";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "login",
  props: {},
  components: {},
  data() {
    return {
      url: "",
      access_code: "",
      isWX: false,
      phone: "",
      password: ""
    };
  },
  created() {
    this.isWX = isWeiXin();
    this.url = window.location.search.split("?url=")[1] || "/"; //登录回退页
    this.access_code = getQueryString("code");
    if (this.user && !this.token) {
      let data = {
        plat: 3,
        type: 1,
        unionid: this.user.unionid,
        openid: this.user.openid,
        nick: this.user.nickname,
        avatar: this.user.headimgurl
      };
      this.loginthirdFun(data); //绑定手机号后获取token
    }
    if (this.access_code) {
      this.wxLogin();
    }
  },
  mounted() {},
  methods: {
    ...mapMutations(["updateManager", "updateToken", "updateAccount"]),
    ...mapActions(["updateUser"]),
    // 校验信息
    async checkInfo() {
      let that = this;
      let reg = /^1[0-9]{10,}$/; //10位以上
      let _test = reg.test(this.phone);
      if (!_test) {
        this.$vux.toast.text("请输入正确的手机号");
        return;
      }
      if (!this.password) {
        this.$vux.toast.text("请输入密码");
        return;
      }
      if (!(this.password.length > 5 && this.password.length < 12)) {
        this.$vux.toast.text("密码长度不正确");
        return;
      }
      let data = {
        plat: 3,
        tel: this.phone,
        pwd: this.$encrypt(this.password)
      };
      this.$vux.loading.show({
        text: "Loading"
      });
      const [err, res] = await api.login(data);
      if (err) {
        if (err.code === 4004) {
          this.$vux.toast.text("该账号尚未注册,清先注册");
          return;
        }
        this.$vux.toast.text(err.msg, "top");
        return;
      }
      console.log('登录',res)
      // return 
      this.$vux.toast.show({
        type: "success",
        text: "登录成功"
      });
      // 存储token
      this.updateUser(res.data);
      this.updateToken(res.data.token);
      this.updateAccount(res.data.account);
      localStorage["user"] = JSON.stringify(res.data);
      localStorage["account"] = res.data.account;
      localStorage["token"] = res.data.token;
      if (this.url === "/") {
        if(this.$route.query.from){
          return this.$router.replace(this.$route.query.from)
        }
        this.$router.replace("/");
      } else {
        window.location.href = unescape(this.url);
      }
    },
    //微信登录
    async wxLogin() {
      let that = this;
      console.log(this.access_code)
      if (
        !!this.access_code &&
        this.access_code !== "" &&
        this.access_code !== undefined
      ) {
        //设置回调页
        if (this.url == undefined || this.url == "/") {
          this.url = "/";
        } else {
          this.url = this.url.substring(0, this.url.indexOf("&code"));
        }
        axios
          //https://api.dev.xiepinhui.com.cn/old/wxnewlogin
          .get("https://api.dev.xiepinhui.com.cn/user/hfiveopenid", {
            params: {
              code: this.access_code
            }
          })
          .then(async function(res) {
            let data = {
              plat: 3,
              type: 1,
              unionid: res.data.data.unionid,
              openid: res.data.data.openid,
              nick: res.data.data.nickname,
              avatar: res.data.data.headimgurl
            };
            //存储user
            console.log('user user',res.data.data)
            that.updateUser(res.data.data);
            localStorage["user"] = JSON.stringify(res.data.data);
            that.loginthirdFun(data); //第三方登录
          })
          .catch(function(error) {
            console.log(error);
            this.$vux.toast.text("微信登录参数出错");
          });
      } else {
        // var fromurl = window.location.href;
        var fromurl = window.location.origin + '?url=/user/login';
        // console.log(9999,fromurl,window.location.origin)
        // console.log(encodeURIComponent(fromurl))
        // return
        // window.location.href =
        //   "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa4142cc3047c6dff&redirect_uri=" +
        //   encodeURIComponent(fromurl) +
        //   "&response_type=code&scope=snsapi_userinfo&state=getUser#wechat_redirect";
        window.location.href =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx47d52b6420c14397&redirect_uri=" +
          encodeURIComponent(fromurl) +
          "&response_type=code&scope=snsapi_userinfo&state=getUser#wechat_redirect";
          
      }
    },
    // 第三方登录
    async loginthirdFun(data) {
      let that = this;
      const [err, res] = await api.loginthird(data);
      if (err) {
        //绑定手机号
        if (err.code === 4999) {
          that.$router.push({
            path: "phone_bind",
            query: {
              url: that.url,
              unionid: data.unionid || data.openid
            }
          });
          return;
        }
        that.$vux.toast.text(err.msg); //code失效,刷新页面
        that.access_code = "";
        that.$router.push("/user/login");
        return;
      }
      //第三方登录成功 => 存储token
      //存储user
      console.log('user user',res.data)
      this.updateUser(res.data);
      localStorage["user"] = JSON.stringify(res.data);
      this.updateToken(res.data.token);
      this.updateAccount(res.data.account);
      localStorage["token"] = res.data.token;
      localStorage["account"] = res.data.account;
      if (that.url === "/") {
        that.$router.replace("/");
      } else {
        window.location.href = unescape(that.url);
      }
      that.$vux.toast.show({
        type: "success",
        text: "微信登录成功"
      });
    },
    async showShareCode(){
      let data = {
        plat: 3,
        account: this.account,
        token: this.token
      }
      const [err, res] = await api.login(data);
      if (err) {
        this.$vux.toast.text(err.msg, "top");
        return;
      }
      if(res.code == 2000){
        localStorage["SelfCode"] = res.data.code;
        localStorage["partner_type"] = res.data.partner_type;
      }
    }
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>


<style lang="less" scoped>
.wrap {
  height: 110%;
  min-height: 100%;
  min-height: 110vh;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
}
.logion-top-bg {
  width: 100%;
  background: url("http://img.xiepinhui.com.cn/small_app/programOldImgFile/upLogo.png");
  height: 2.45rem;
  background-size: 100% 100%;
}
.loginMain {
  box-sizing: border-box;
  padding: 0.65rem 1rem;
}
.other_login {
  .test {
    text-align: center;
    font-size: 0.28rem;
    color: rgb(51, 51, 51);
    padding-bottom: 0.61rem;
  }
}
.wxLogin {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 100%;
  background: url(http://img.xiepinhui.com.cn/web_logion/wx-login-btn.png);
  background-size: 100% 100%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.loginMain .login-input li {
  border-bottom: 1px #e6e6e6 solid;
  border-radius: 0;
}
.loginMain ul li {
  width: 100%;
  height: 1rem;
  background: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.12rem;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}
.loginMain ul li span {
  position: relative;
  font-size: 0.28rem;
  width: 0.7rem;
  height: 0.7rem;
  // border-right: 1px solid #ccc;
  display: inline-block;
  position: absolute;
  top: 0.15rem;
  left: 0.1rem;
}
.loginMain ul li span::after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  height: 50%;
  background: #999;
  transform: translateY(50%);
}
.logion-lable {
  height: 0.7rem;
  line-height: 0.7rem;
  color: #333;
}
.loginMain ul li input {
  width: 100%;
  height: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 0.2rem;
  color: #333;
  font-size: 0.28rem;
  box-sizing: border-box;
}
.loginMain p a {
  color: #61d8d0;
  // margin-top: 0.2rem;
  display: inline-block;
  font-size: 0.28rem;
}
.pull-right {
  float: right;
}
a {
  text-decoration: none;
}
.loginMain a.loginBtn {
  display: block;
  width: 100%;
  color: #fff;
  line-height: 0.92rem;
  height: 0.92rem;
  border: 1px solid #fff;
  text-align: center;
  box-sizing: border-box;
  margin-top: 1.1rem;
  border-radius: 5px;
  font-size: 0.28rem;
  background: #61d8d0;
  border-radius: 0.54rem;
}
.loginBtn {
  border: 0;
  background: #61d8d0;
  border-radius: 54px;
}
.register {
  margin-top: 0.39rem;
  text-align: center;
  font-size: 0.28rem;
  line-height: 40px;
}
</style>
