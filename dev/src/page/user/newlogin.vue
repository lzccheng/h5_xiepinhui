<style scoped lang="less">
@color : #61D8D0;
.page{
    position: absolute;
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
<template>
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
                            <input :type="onLook? 'text': 'password'" placeholder="请输入密码">
                            <img class="me_login_mobile pass" @click="onChangeEye" v-if="onLook" src="@/assets/images/login/me_login_eye_open@2x.png" alt="">
                            <img class="me_login_mobile pass" @click="onChangeEye" v-else src="@/assets/images/login/me_login_eye@2x.png" alt="">
                        </p>
                        <p class="code" v-if="curTabIndex == 1">
                            <img class="me_login_mobile" src="@/assets/images/login/me_login_code@2x.png" alt="">
                            <input v-model="code" type="text" placeholder="请输入验证码">
                            <span class="sendCode" @click="onSendCode" :class="{ opacity: !phone || second < 60}">{{second == 60?'发送验证码': second + 's'}}</span>
                        </p>
                    </div>
                    <div class="btn" :class="{ opacity: !phone }">
                        <span>登录</span>
                    </div>
                    <div class="flex flex-pack-justify regist">
                        <div>注册</div>
                        <div v-if="curTabIndex == 0">忘记密码?</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            isWX: window.isWeixin,
            curTabIndex: 0,
            onLook: false,
            second: 60,
            phone: '',
            code: ''
        }
    },
    created() {

    },
    mounted() {

    },
    destroyed () {
        if(this.timeInterval)clearInterval(this.timeInterval);
    },
    methods: {
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
        onSendCode(){
            if(this.second < 60)return;
            if(this.$stopClick(1500))return;
            if(!this.checkPhone())return;
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
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
