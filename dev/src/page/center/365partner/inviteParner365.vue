<style scoped lang="less">
.page{
  background: #fff;
  height: 100%;
}
.copy_box{
font-size:28/100rem;
color:#9c5c14;
width:102/100rem;
height:42/100rem;
text-align:center;
border:1px solid #9c5c14;
line-height:42/100rem;
border-radius:23/100rem;
margin-left:46/100rem;
margin-top:19/100rem;
float: right;
}
.code_box{
font-size:32/100rem;
color:#9c5c14;
float: left;
}
.invite_code_box{
  background: #fff0d3;
  line-height: 80/100rem;
  overflow: hidden;
  padding-left: 10/100rem;
  padding-right: 10/100rem;
}
.bg_invite_box{
  background:#FFF url(http://img.xiepinhui.com.cn/small_app/programOldImgFile/bg_Partop.png) no-repeat;
  width:100%;
  height: 807/100rem;
  background-size: 100%;
  padding-top: 398/100rem;
  box-sizing: border-box;
}
.invite_tipBoxBG{
  background:url(http://img.xiepinhui.com.cn/small_app/programOldImgFile/inviteRecordBg.png) no-repeat;
  width:700/100rem;
  height: 315/100rem;
  background-size: 100%;
  margin: auto;
  text-align: center;
  font-size: 30/100rem;
  color: #9C5C14;
}
.title_headline_box{
  padding-top: 12/100rem;
}
.txt_desc_reward{
  margin-bottom: 30/100rem;
  line-height: 30/100rem;
}
.inviteBtn_box{
  background:url(http://img.xiepinhui.com.cn/small_app/programOldImgFile/inviteBtn.gif) no-repeat;
  width:570/100rem;
  height: 110/100rem;
  background-size: 100%;
  margin:auto;
  border-bottom: none;
  margin: 1.1rem auto 0;
}
.shareAlert{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.5);
  z-index: 999;
  .img{
    position: absolute;
    right: 0;
    top: 0;
    // animation: shareRow 1.8s infinite;
    img{
      width: 5rem;
    }
  }
  .text{
    color: #fff;
    text-align: right;
    padding: 2rem 0.3rem;
  }
}
@keyframes shareRow{
  0% {
    top: 0.05rem;
    right: 0.05rem;
  }
  50% {
    top: 0.5rem;
    right: 0.5rem;
  }
  100%{
    top: 0.05rem;
    right: 0.05rem;
  }
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div class="invite_code_box">
                <div class="code_box">我的邀请码：<span>{{inviteCode}}</span></div>
                <div class="copy_box" @click="copyFunction" v-clipboard:copy="inviteCode" v-clipboard:success="copybtn" selectable='true'>复制</div>
            </div>
            <div class="bg_invite_box">
                <div class="invite_tipBoxBG">
                    <div class="title_headline_box">邀请升级立奖现金</div>
                    <div class="rewardTXT">
                        <div class="txt_desc_reward" style="margin-top:0.44rem;padding-left:2.1rem;padding-right:0.6rem;">
                            {{desc}}
                        </div>
                        <!-- <div class="txt_desc_reward">
                            高级会员奖励50元
                        </div>
                        <div class="txt_desc_reward">
                            高级会员奖励100元
                        </div> -->
                    </div>
                </div>
                <div class="inviteBtn_box" @click="showShare"></div>
            </div>
        </div>
        <transition name="fade">
            <div class="shareAlert" v-show="showShareBool" @click="showShare">
            <div class="img">
                <img src="@/assets/images/share_right.png" alt="">
            </div>
            <div class="text">
                <!-- <span>点击右上角进行分享哦~</span> -->
                </div>
            </div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { share } from '@/utils/wx_sdk.js';
import { isWeiXin } from "@/utils/comm.js";
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            nvabarData: {
                showCapsule: 1,
                title: '邀请365合伙人',
            },
            // height: app.globalData.height + 40, 
            show_reward:false,
            inviteCode: '',//自己本身的邀请码
            inviteOthersCode: '',
            desc: '',
            showShareBool: false
        }
    },
    created() {
        this.getinviteCode();
    },
    mounted() {

    },
    methods: {
        copyFunction(){
            this.$vux.toast.text('复制成功','top')
        },
        async getinviteCode(){
            let data = {
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.inviteinfo(data);
            if (err) {
                this.$vux.toast.text(err.msg)
                return;
            }
            if(res.code == 2000){
                this.inviteCode = res.data.member_code;
                this.desc = res.data.desc;
                this.goshare();
            }
        },
        goshare(){
            let shareConfig = {
                title: '邀请365合伙人，立返现金',
                desc: '现金返个不停~',
                imgUrl: "http://testp.xiepinhui.com.cn/home2.png",
                link: window.location.origin + '?url=/centerFull/partner/inviteList&codeInvite=' + this.inviteCode
            }
            console.log(shareConfig)
            share(this,{share: shareConfig});
        },
        showShare(){
            if(!isWeiXin()){
                this.$vux.toast.text('可复制邀请码发送给好友哦~');
                return;
            }
            this.showShareBool = !this.showShareBool;
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
