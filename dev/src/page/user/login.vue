<template>
  <div class="wrap" v-if="access_codeShow">
    <!-- <div class="logion-top-bg"></div>
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

    </div> -->

    <!-- 新登录页面 -->
    <div class="page">
      <div>
          <div class="top">
              <div class="other_login" v-if="isWX" @click="wxLogin">
                  <div class="wxLogin"></div>
                  <div class="test">
                  微信一键登录，安全又方便
                  </div>
              </div>
          </div>
          <div class="elseLogin">
              <div class="tab flex">
                  <span @click="onTabHandle(i)" :class="curTabIndex == i? 'active': ''" :key="i" v-for="(item, i) in ['账号登录', '验证码登录']">{{item}}</span>
              </div>
              <div class="infoBox">
                  <div class="input">
                      <p>
                          <img class="me_login_mobile" src="@/assets/images/login/me_login_mobile@2x.png" alt="">
                          <input type="text" v-model="phone" placeholder="手机号码">
                      </p>
                      <p v-if="curTabIndex == 0">
                          <img class="me_login_mobile" src="@/assets/images/login/me_login_pwd@2x.png" alt="">
                          <input :type="onLook? 'text': 'password'" v-model="password" placeholder="请输入密码">
                          <img class="me_login_mobile pass" @click="onChangeEye" v-if="onLook" src="@/assets/images/login/me_login_eye_open@2x.png" alt="">
                          <img class="me_login_mobile pass" @click="onChangeEye" v-else src="@/assets/images/login/me_login_eye@2x.png" alt="">
                      </p>
                      <p class="code" v-if="curTabIndex == 1">
                          <img class="me_login_mobile" src="@/assets/images/login/me_login_code@2x.png" alt="">
                          <input v-model="codeSMS" type="text" placeholder="请输入验证码">
                          <span class="sendCode" @click="onSendCode" :class="{ opacity: !phone || second < 60}">{{second == 60?'发送验证码': second + 's'}}</span>
                      </p>
                  </div>
                  <div class="btn" :class="{ opacity: !phone }" @click="checkInfo">
                      <span>登录</span>
                  </div>
                  <div class="flex flex-pack-justify regist">
                      <div @click="$router.push('register_password')">注册</div>
                      <div v-if="curTabIndex == 0" @click="$router.push('find_password')">忘记密码?</div>
                  </div>
              </div>
          </div>
      </div>
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
      password: "",
      state: "",
      access_codeShow: true,
      isWX: window.isWeixin,
      curTabIndex: 0,
      onLook: false,
      second: 60,
      phone: '',
      codeSMS: '',
      isRegister: true
    };
  },
  created() {
    this.isWX = isWeiXin();
    this.url = window.location.search.split("?url=")[1] || "/"; //登录回退页
    this.access_code = getQueryString("code");
    this.state = getQueryString("state") || "";
    console.log(this.$route.query)
    console.log('state',this.state)
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
      this.access_codeShow = false;
      this.wxLogin();
    }
    
  },
  mounted() {
    console.log('process',process.env.NODE_ENV)
  },
  methods: {
    ...mapMutations(["updateManager", "updateToken", "updateAccount"]),
    ...mapActions(["updateUser"]),
    // 校验信息
    async checkInfo() {
      let that = this;
      let reg = /^1[0-9]{10,}$/; //10位以上
      let _test = reg.test(this.phone);
      console.log(this.phone)
      if (!_test) {
        this.$vux.toast.text("请输入正确的手机号", "top");
        return;
      }
      if (this.curTabIndex == 0 && !this.password) {
        this.$vux.toast.text("请输入密码", "top");
        return;
      }
      if (this.curTabIndex == 0 && !(this.password.length > 5 && this.password.length < 12)) {
        this.$vux.toast.text("密码长度不正确", "top");
        return;
      }
      console.log(this.codeSMS)
      if(this.curTabIndex == 1 && !this.codeSMS){
          return this.$vux.toast.text("验证码不能为空", "top");
        }
      let data = {
        plat: 3,
        tel: this.phone
      };
      
      let err, res;
      if(this.curTabIndex == 0){
        data.pwd = this.$encrypt(this.password);
      }
      if(this.curTabIndex == 1){
        if(this.isRegister){
          data.login_type = 2;
          data.sms_code = this.$encrypt(this.codeSMS);
        }else{
          data.register_type = 2;
          // data.code = this.$encrypt(this.codeSMS);
          data.code = this.codeSMS;
        }
      }
      if(this.isRegister){
        [err, res] = await api.login(data);
      }else{
        [err, res] = await api.register(data);
      }
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
      
      // 存储token
      this.updateUser(res.data);
      this.updateToken(res.data.token);
      this.updateAccount(res.data.account);
      localStorage["user"] = JSON.stringify(res.data);
      localStorage["account"] = res.data.account;
      localStorage["token"] = res.data.token;
      if(this.phone.length > 11 && window.isWeiXin){
        var fromurl = window.location.href.split('#')[0];
        window.location.href =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx47d52b6420c14397&redirect_uri=" +
          encodeURIComponent(fromurl) +
          "&response_type=code&scope=snsapi_userinfo&state=child#wechat_redirect";
        return
      }
      this.$vux.toast.show({
        type: "success",
        text: "登录成功"
      });
      if(this.$route.query.from_){
        console.log(this.$route.query.from_)
        return this.$router.replace({
          path: this.$route.query.from_,
          codeInvite: this.$route.query.codeInvite
        })
      }
      if (this.url === "/") {
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
        let url = process.env.NODE_ENV === 'development'? 'https://api.dev.xiepinhui.com.cn/user/hfiveopenid': 'https://api.xiepinhui.com.cn/user/hfiveopenid';
        axios
          //https://api.dev.xiepinhui.com.cn/old/wxnewlogin
          .get(url, {
            params: {
              code: this.access_code
            }
          })
          .then(async function(res) {
            //子账号获取oppenid
            if(that.state === 'child'){
              try {
                let user = JSON.parse(window.localStorage.getItem('user'));
                user.openid = res.data.data.openid;
                that.updateUser(user);
                localStorage["user"] = JSON.stringify(user);
                that.$vux.toast.show({
                  type: "success",
                  text: "登录成功"
                });
                that.$router.replace('/center')
              } catch (error) {
                this.access_codeShow = true;
              }
              return;
            }
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
            this.access_codeShow = true;
            that.$vux.toast.text("微信登录参数出错");
          });
      } else {
        var fromurl = window.location.href.split('#')[0];
        // var fromurl = window.location.origin + '?url=/user/login';
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
      that.$vux.toast.show({
        type: "success",
        text: "微信登录成功"
      });
      this.lineToPage();
    },
    lineToPage(){
      if(this.$route.query.from_){
        console.log('from_',this.$route.query.from_)
        console.log('login this.$route.query.codeInvite',this.$route.query.codeInvite)
        return this.$router.replace({
          path: this.$route.query.from_,
          codeInvite: this.$route.query.codeInvite
        })
      }
      if (this.url === "/") {
        this.$router.replace("/");
      } else {
        window.location.href = unescape(this.url);
      }
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
    },
    wxLogin(){

    },
    onTabHandle(i){
        this.curTabIndex = i;
    },
    onChangeEye(){
        this.onLook = !this.onLook;
    },
    checkPhone(){
        let reg = /^1[3-9][0-9]{9}$/;
        if(reg.test(this.phone))return true;
        this.$vux.toast.text('请输入正确的手机号', 'top');
        return false;
    },
    async onSendCode(){
        if(this.second < 60)return;
        if(this.$stopClick(1500))return;
        if(!this.checkPhone())return;
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
        let [err, res] = await api.userLogin_sms(data);
        if (err) {
          if(err.code != 4002){
            this.$vux.toast.text(err.msg);
            return;
          }
          this.isRegister = false;
          [err, res] = await api.register_sms(data);
          if(err){
            this.$vux.toast.text(err.msg);
            return;
          }
        }
        this.$vux.toast.text(res.msg, 'top');
        this.timeInterval = setInterval(() => {
            if(this.second <=0){
                this.second = 60;
                clearInterval(this.timeInterval);
                return;
            }
            this.second --;
        }, 1000);
    }
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>


<style lang="less" scoped>
@color : #61D8D0;
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
// @color : #61D8D0;
.page{
    position: fixed;
    width: 100%;
}
.other_login {
  margin-top: 1rem;
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
.elseLogin{
    margin-top: 0.3rem;
    .tab{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        font-size: 20px;
        span{
            display: inline-block;
            width: 50%;
            &.active{
                color: @color;
            }
        }
    }
    .infoBox{
        width: 75%;
        margin: 0 auto;
        .input{
            p{
                position: relative;
                border-bottom: 1px solid #D9DADC;
                margin: 0.3rem 0;
                padding: 0.3rem; 
            }
            input{
                width: 60%;
                border: none;
                margin-left: 0.3rem;
                &::placeholder{
                    color: #D9DADC;
                }
            }
            .me_login_mobile{
                width: 0.35rem;
                height: auto;
            }
            img{
                vertical-align: middle;
            }
            .pass{
                position: absolute;
                right: 0.3rem;
                top: 0.48rem;
            }
            .code{
                input{
                    width: 45%;
                }
            }
            .sendCode{
                position: absolute;
                right: 0.1rem;
                top: 0.2rem;
                width: 1.9rem;
                text-align: center;
                white-space: nowrap;
                color: #fff;
                background-color: @color;
                padding: 0.1rem 0.15rem;
                border-radius: 3px;
            }
        }
        .btn{
            width: 100%;
            border-radius: 5px;
            background-color: @color;
            margin: 0.3rem auto;
        }
        .opacity{
            opacity: 0.6;
        }
        .regist{
            div{
                &:first-child{
                    color: @color;
                }
            }
        }
    }
}
</style>
