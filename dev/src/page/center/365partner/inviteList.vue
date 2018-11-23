<template>
  <div class="scroll-wrap">
    <x-header :left-options="{backText:''}" title="365合伙人邀请码" id="vux-header"><a slot="right"></a></x-header>
    <div class="content-index">
      <div class="bg_invite_box" style="position:relative;">
        <!-- box圈 -->
        <div class="about_inviteInfo_box">
          <div class="invite_rule_box" @click="show_reward=true">我的奖励</div>
          <div class="myReward_tip_box" @click='goRecordFun'>邀请规则</div>
        </div>
        <!-- box圈end -->
        <div class="bg_content_box">
          <div class="quan_bg_box">
            <div class="price_div">
              <div class="sign_logo">¥</div>
              <div class="price_num">{{amountInvite || 0}}</div>
            </div>
            <div class="txt_desc_box">
              {{desc_invite}}
            </div>
          </div>
          <div class="invite_num_box">
            <div class="yaoqingma">{{inviteCode||'暂无数据'}}</div>
            <div class="copy_btn tag-read" v-clipboard:copy="inviteCode" v-clipboard:success="copybtn" selectable='true'>复制</div>
          </div>
          <div class="btn_invite_box" @click="inviteFriendFun"></div>
        </div>
        <div class="liucheng_box"></div>
        <div class="bottom_line_box"></div>
        <div class="invite_tab_box">
          <div class="tab_box" id="fix">
            <div class="tabLi" :class="isTabOne ? 'activeTabLi' : ''" @click="choseTab1">我的粉丝</div>
            <div class="tabLi" :class="isTabTwo ? 'activeTabTwoLi' : ''" @click="choseTab2">邀请排行榜</div>
          </div>

          <div class="big_content_container">
            <!-- 我的粉丝 -->
            <div class="content_view_per" v-if="isTabOne">
              <div class="tab_content_box myfan">
                <div class="contentLi">
                  <div class="fansContentLi" v-for="(item,index) in fans_list" :key="index">
                    <img :src="item.member_avatar" class="avatarPic" />
                    <div class="right_part">
                      <div class="userInfo">
                        <div class="userName">{{item.member_name}}</div>
                        <div class="zongxiaofei">总消费:{{item.order_amount}}</div>
                      </div>
                      <div class="tip_when_fun">
                        <div class="binding_box">
                          <div class="timeBind" v-if="item.is_smallshop==0">{{item.add_time}}绑定</div>
                          <div class="timeBind" v-if="item.is_smallshop==1">
                            <div class="style_sign">365</div>985
                          </div>
                          <div class="benefit">收益：{{item.amount}}元</div>
                        </div>
                        <div class="btnInvite" bindtap="now_invitefun" v-if="item.is_smallshop==0">立即推荐</div>
                      </div>
                      <div class="explain_part">
                        <div class="explainTxt" v-if="item.is_smallshop==0" >
                          推荐好友开通365合伙人，我最高可得180元
                        </div>
                        <div class="explainTxt" v-if="item.is_smallshop==1">
                          {{item.add_time}}开通365合伙人
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 邀请排行榜 -->
            <div class="content_view_per" v-if="isTabTwo">
              <div class="tab_content_box myfan" style="margin-bottom:24/100rpx;">
                <div class="contentLi">
                  <div v-for="(item,index) in yaoqing_list" :key="index">
                    <div class="content_item_li">
                      <img v-if="item.rank==1" src="http://img.xiepinhui.com.cn/small_app/inviteModel/rank1.jpg" class="phb-paixu" />
                      <img v-if="item.rank==2" src="http://img.xiepinhui.com.cn/small_app/inviteModel/rank2.jpg" class="phb-paixu" />
                      <img v-if="item.rank==3" src="http://img.xiepinhui.com.cn/small_app/inviteModel/rank3.jpg" class="phb-paixu" />
                      <div class="left_rank_num_box" v-if="item.rank>3">{{item.rank}}</div>
                      <img :src='item.member_avatar' class="pic_avatar" />
                      <div class="name_txt">{{item.member_name}}</div>
                      <div class="txt_lingqu">已邀请<span :style="color=item.rank<=3?'#f00':''">{{item.member_invite_num}}</span>位好友</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bottom_box" v-if="isTabOne&&fanShow_bottom">
            别戳啦没有更多新数据啦~
          </div>
          <div class="bottom_box" v-if="isTabTwo&&Yaoshow_bottom">
            别戳啦没有更多新数据啦~
          </div>
          <div class="bottom_box" v-if="loading_bottom">
            加载中~
          </div>
        </div>
      </div>
      <!-- 分享弹窗 -->
      <div class="shareAlert" :class="showShare?'bounceIn':'bounceOut'" v-show="showShareBool" @click="showShare">
        <div class="img">
          <img src="@/assets/images/share_right.png" alt="">
        </div>
        <div class="text">
            <span>点击右上角进行分享哦~</span>
          </div>
      </div>
      <!-- 我的奖励弹窗 -->
      <div v-show="show_reward">
        <div class="rewardPopUp"  :class="show_reward?'bounceIn':'bounceOut'">
          <div class="rewardContentBox">
            <div class="close_img" @click="show_reward=false"></div>
            <div class="title_reward">我的奖励</div>
            <div class="content_reward">
              <div class="rewardLi" style="float:left;">
                <div class="num_reward">{{total_amount || 0}}<span style="font-size:26/100rem;">元</span></div>
                <div class="txt_reward">累计获得返利</div>
              </div>
              <div class="rewardLi" style='float:right;'>
                <div class="num_reward">{{available_amount || 0}}<span style="font-size:26/100rem;">元</span></div>
                <div class="txt_reward">可提取返利</div>
              </div>
            </div>
            <div style="padding:0/100rem;">
              <div class="btn_invite_reward" @click="showShare">立邀好友 再得{{amountInvite}}元</div>
            </div>
            <router-link to="/balance" tag="div" class="btn_remount_reward">
              <div>我的余额</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 我的奖励弹窗end -->
  </div>
</template>

<script>
import { isScrollBottom, isWeiXin } from "@/utils/comm.js";
import { mapGetters } from "vuex";
import { api } from "@/utils/api.js";
import { share } from "@/utils/wx_sdk.js";
import { XHeader } from "vux";
import loading from "@/components/loading";
import { setTimeout } from 'timers';
import 'animate.css';

// import {wxConfig} from "@/utils/wx_jssdk.js";

export default {
  name: "",
  props: {},
  components: {
    XHeader,
    loading
  },
  data() {
    return {
      show_reward: false, //奖励弹窗
      inviteCode: "",
      menuTop: "",
      page: 0,
      desc_invite: "",
      amountInvite: "",
      total_amount: "",
      isTabOne: true, // 我的粉丝 邀请榜
      fans_list: [],
      fans_list_page: 1,
      isTabTwo: false,
      yaoqing_list: [],
      yaoqing_list_page: 1,
      fanShow_bottom: false,
      Yaoshow_bottom: false,
      loading_bottom: true,
      showShareBool: false,
      available_amount: 0
    };
  },
  created() {
    // this.$router.push("/centerFull/partner/apply");
    // this.$router.push({
    //       path: "apply",
    //       query: {
    //         codeKey: '135erw',
    //         userName: '孟国宝'
    //       }
    //     });
    this.inviteOthersCode = this.$route.query.codeInvite || this.codeInvite || '';
    if(this.inviteOthersCode){
      this.$store.dispatch('update_codeInvite',this.inviteOthersCode)
    }
    if(!this.account){
      this.$router.push({
        path: '/user/login',
        query: {
          from: '/centerFull/partner/inviteList'
        }
      })
    }
    this.getfanred();
    this.getFans_list();
  },
  mounted: function() {
    this.$nextTick(function() {
      isScrollBottom(this.scrollBottomCB);
    });
  },
  destroyed() {
    window.onscroll = null;
  },
  methods: {
    //滚动到底部回调
    scrollBottomCB() {
      if (this.isTabOne) {
        this.getFans_list();
      } else {
        this.getYaoqingList();
      }
    },
    copybtn() {
      this.$vux.toast.text("复制成功", "top");
    },
    async getfanred() {
      let data = {
        plat: 3,
        account: this.account,
        token: this.token
      };
      const [err, res] = await api.fanred(data);
      if (res) {
        this.inviteCode = res.data.member_code;
        this.desc_invite = res.data.desc;
        this.amountInvite = res.data.twomoney;
        this.available_amount = res.data.red_amout; //可提取的返利
        this.total_amount = res.data.total_amout; //总共获取的返利
        let codeInvite = this.inviteOthersCode;
        this.share();
        console.log("codeInvite", codeInvite);
        if (codeInvite) {
          this.bindFans(codeInvite);
        }
      }
    },
    share(){
      let shareConfig = {
        title: '邀请365合伙人，立返现金',
        desc: '现金返个不停~',
        imgUrl: "http://testp.xiepinhui.com.cn/home2.png",
        link: window.location.origin + '?url=' + window.location.pathname + '&codeInvite=' + this.inviteCode
      }
      console.log('shareConfig',shareConfig)
      share(this,{share: shareConfig})
    },
    async bindFans(codeInvite) {
      console.log('bindFans codeInvite',codeInvite)
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        code: codeInvite
      };
      // const [err, res] = await api.inviteweidian(data);
      const [err, res] = await api.receiveweidian(data);
      if(err){
        console.log('codeInvite err',err)
        let codeStatus = err.code;
        var issmallshop = err.data.is_smallshop;
        var store_state = err.data.store_state;
        console.log("store_state", store_state);
        if(codeStatus!=2000){
          console.log('codeStatus != 2000',store_state)
          if(store_state == 3){//审核中
            this.$router.push({
              path: "/centerFull/partner/applyStatic",
              query: {
                status: 1
              }
            });
            return;
          }
          if(store_state == 4){//审核失败
            this.$router.push({
              path: "/centerFull/partner/applyStatic",
              query: {
                status: 0
              }
            });
            return;
          }
          if(store_state == 1){//审核通过
            // this.$vux.toast.text(err.msg)
            return;
          }
          this.$vux.toast.text(res.data.msg);
        }
      }
      let userName = res.data.data.member_name;
      this.$router.push({
        path: "apply",
        query: {
          codeKey: codeInvite,
          userName: userName
        }
      });
      return
      if (res) {
        console.log('jump input_code res')
        let info = res.data;
        console.log("info", info);
        let userName = info.data.member_name;
        this.$router.push({
          path: "apply",
          query: {
            codeKey: this.inviteOthersCode,
            userName: userName
          }
        });
        return
        switch (codeStatus) {
          //绑定码不存在的情况
          case 5006:
          case 5008:
          case 5009:
          case 2000:
            this.$router.push("/centerFull/partner/code");
            break;
          case 5002:
          case 5003:
            //是店主或者子店铺
            //停留在分享页面
            break;
          //审核中
          case 5004:
            this.$router.push({
              path: "/centerFull/partner/applyStatic",
              query: {
                status: 0
              }
            });
            break;
          //审核失败
          case 5010:
            this.$router.push({
              path: "/centerFull/partner/applyStatic",
              query: {
                status: 1
              }
            });
            break;
        }
      }
    },
    //这个是我的粉丝列表请求方法
    async getFans_list() {
      // this.fans_list.push({
      //   member_id: "106",
      //   add_time: "2018-07-13",
      //   is_smallshop: "0",
      //   member_invite_num: "1",
      //   member_mobile: "13938132622",
      //   member_sex: "1",
      //   member_name: "xph_597c2ef07d48f86",
      //   member_avatar:
      //     "http://img.xiepinhui.com.cn/sys/default/user/avatar.jpg",
      //   amount: 0, //总收益
      //   red_amount_365: 0, //开通365粉丝总收益
      //   order_amount: 0, //总消费
      //   vip_amount: 0
      // });
      if (this.fanShow_bottom) {
        return;
      }
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        page: this.fans_list_page
      };
      this.loading_bottom = true;
      this.fans_list_page++;
      const [err, res] = await api.storefan1(data);
      if (err) {
        console.log("err", err);
        return;
      }
      if (res.data && res.data.list.length < 1) {
        this.fanShow_bottom = true;
        this.loading_bottom = false;
        return;
      }
      this.fans_list = this.fans_list.concat(res.data.list);
    },
    async getYaoqingList() {
      // this.yaoqing_list.push({
      //   member_id: "97",
      //   member_avatar:
      //     "http://img.xiepinhui.com.cn/user/3141/avatar/15380184551.jpg?x-oss-process=image/resize,m_mfit,h_200,w_200",
      //   member_name: "本宝宝",
      //   member_invite_num: "16",
      //   member_mobile: "15217336505",
      //   rank: 1
      // });
      if (this.Yaoshow_bottom) {
        return;
      }
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        page: this.yaoqing_list_page
      };
      this.loading_bottom = true;
      this.yaoqing_list_page++;
      const [err, res] = await api.inviterankingweidian(data);
      if (err) {
        console.log("err", err);
        return;
      }
      if (res.data && res.data.list.length < 1) {
        this.Yaoshow_bottom = true;
        this.loading_bottom = false;
        return;
      }
      this.yaoqing_list = this.yaoqing_list.concat(res.data.list);
    },
    myRewardFun() {},
    goRecordFun() {
      this.$router.push("inviteFriendRecord");
    },
    myRewardFun() {},
    inviteFriendFun() {
      this.show_reward = true;
    },
    choseTab1() {
      this.isTabOne = true;
      this.isTabTwo = false;
    },
    choseTab2() {
      this.isTabOne = false;
      this.isTabTwo = true;
      // this.getYaoqingList();
    },
    showShare(){
      if(!isWeiXin()){
        this.$vux.toast.text('可复制邀请码发送给好友哦~');
        return;
      }
      let that = this;
      that.showShareBool = !that.showShareBool;
    },
    close_rewardFun() {}
  },
  computed: {
    ...mapGetters(["user", "account", "token","codeInvite"])
  }
};
</script>

<style lang="less" scoped>
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
    right: 0.2rem;
    top: 0.2rem;
    animation: shareRow 1.8s infinite;
    img{
      width: 1rem;
    }
  }
  .text{
    color: #fff;
    text-align: right;
    padding: 2rem 0.3rem;
  }
}
.scroll-wrap {
  height: 100%;
}

.bg_invite_box {
  background: #fadba4
    url(http://img.xiepinhui.com.cn/small_app/inviteModel/invite_bg1.jpg)
    no-repeat;
  width: 100%;
  height: 1529/100rem;
  background-size: 100%;
  padding-top: 333/100rem;
}

.myfan {
  min-height: 1rem;
}

.bg_content_box {
  width: 750/100rem;
  height: 803/100rem;
  background: url(http://img.xiepinhui.com.cn/small_app/inviteModel/invite_content_bg.png)
    no-repeat;
  background-size: 100%;
  margin: auto;
  padding-top: 105/100rem;
}

.quan_bg_box {
  width: 569/100rem;
  height: 349/100rem;
  background: url(http://img.xiepinhui.com.cn/small_app/inviteModel/quan_bg.jpg)
    no-repeat;
  background-size: 100%;
  margin: auto;
}

.price_div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
}

.price_view {
  text-align: center;
  margin: auto;
  margin-bottom: 15/100rem;
  padding-top: 15/100rem;
  overflow: hidden;
  width: 170px;
}

.sign_logo {
  font-size: 96/100rem;
  color: #fff;
  /* line-height: 96/100rem; */
  /* float: left; */
}

.price_num {
  font-size: 158/100rem;
  color: #fff;
  line-height: 158/100rem;
  /* float: left; */
}

.txt_desc_box {
  font-size: 28/100rem;
  color: #fff;
  text-align: center;
  padding-top: 34/100rem;
}

.invite_num_box {
  width: 570/100rem;
  height: 120/100rem;
  background: url(http://img.xiepinhui.com.cn/small_app/inviteModel/invite_num_bg.png)
    no-repeat;
  background-size: 100%;
  margin: auto;
  margin-top: 30/100rem;
  overflow: hidden;
}

.yaoqingma {
  padding-left: 192/100rem;
  font-size: 42/100rem;
  color: #9c5c14;
  line-height: 120/100rem;
  float: left;
  min-width: 196/100rem;
  height: 60px;
}

.copy_btn {
  font-size: 28/100rem;
  color: #9c5c14;
  width: 102/100rem;
  height: 42/100rem;
  text-align: center;
  border: 1px solid #9c5c14;
  line-height: 42/100rem;
  border-radius: 23/100rem;
  float: left;
  margin-left: 46/100rem;
  margin-top: 38/100rem;
}

.btn_invite_box {
  background: url(http://img.xiepinhui.com.cn/small_app/programOldImgFile/lijiyaoqingwinfanli.gif)
    no-repeat;
  width: 570/100rem;
  height: 110/100rem;
  background-size: 100%;
  margin: auto;
  margin-top: 50/100rem;
}

.liucheng_box {
  width: 680/100rem;
  height: 287/100rem;
  background: url(http://img.xiepinhui.com.cn/small_app/inviteModel/desc_liucheng.png)
    no-repeat;
  background-size: 100%;
  margin: auto;
  margin-top: 0.5rem;
}

.bottom_line_box {
  width: 750/100rem;
  height: 86/100rem;
  background: url(http://img.xiepinhui.com.cn/small_app/inviteModel/bottom_line.jpg)
    no-repeat;
  background-size: 100%;
  margin: auto;
  margin-top: 15/100rem;
}

.invite_tab_box {
  padding-top: 46/100rem;
  background: #fff;
}

.tab_box {
  border: 1px solid #9c5c14;
  width: 690/100rem;
  height: 80/100rem;
  border-radius: 40/100rem;
  margin: auto;
  background: #fff;
}

.tabLi {
  float: left;
  width: 50%;
  text-align: center;
  line-height: 80/100rem;
  font-size: 30/100rem;
  color: #9c5c14;
  border-radius: 40/100rem;
}

.activeTabLi {
  background: #fdc049;
  border-bottom-right-radius: 0/100rem;
  border-top-right-radius: 0/100rem;
}

.activeTabTwoLi {
  background: #fdc049;
  border-bottom-left-radius: 0/100rem;
  border-top-left-radius: 0/100rem;
}

.tab_content_box {
  /* border:10/100rem solid #fada99; */
  /* border-radius: 10/100rem; */
  box-sizing: border-box;
  /* padding-right: 50/100rem;
  padding-left: 24/100rem; */
  padding-top: 22/100rem;
}

.content_view_per {
  width: 690/100rem;

  margin: auto;
  margin-top: 32/100rem;
}

.content_item_li {
  padding-top: 32/100rem;
  padding-bottom: 32/100rem;
  overflow: hidden;
  border-bottom: 1/100rem solid #efefef;
}

.pic_avatar {
  width: 59/100rem;
  height: 59/100rem;
  border-radius: 50%;
  float: left;
}

.name_txt {
  font-size: 27.5/100rem;
  color: #000;
  float: left;
  line-height: 59/100rem;
  margin-left: 20/100rem;
}

.txt_lingqu {
  font-size: 26/100rem;
  color: #9c5c14;
  float: right;
  line-height: 59/100rem;
}

.phb-paixu {
  width: 0.6rem;
  float: left;
  margin-right: 13/100rem;
  margin-top: -0.08rem;
}

.rank_sign {
  position: absolute;
  background: #ff8e01;
  width: 112/100rem;
  line-height: 40/100rem;
  border-radius: 20/100rem;
  color: #fff;
  font-size: 24/100rem;
  text-align: center;
  top: -25/100rem;
  left: 50%;
  margin-left: -56/100rem;
}

.left_rank_num_box {
  width: 54/100rem;
  float: left;
  margin-right: 24/100rem;
  text-align: center;
  font-size: 32/100rem;
}

.about_inviteInfo_box {
  position: absolute;
  top: 56/100rem;
  right: 0/100rem;
  font-size: 28/100rem;
}

.invite_rule_box {
  width: 155/100rem;
  height: 57/100rem;
  line-height: 57/100rem;
  text-align: center;
  color: #fff;
  background: #fe6047;
  border-bottom-left-radius: 28/100rem;
  border-top-left-radius: 28/100rem;
  margin-bottom: 30/100rem;
}

.myReward_tip_box {
  width: 155/100rem;
  height: 57/100rem;
  line-height: 57/100rem;
  text-align: center;
  color: #000;
  background: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 28/100rem;
  border-top-left-radius: 28/100rem;
}

.rewardPopUp {
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0/100rem;
  left: 0/100rem;
}

.rewardContentBox {
  width: 536/100rem;
  height: 509/100rem;
  border-radius: 30/100rem;
  background: #fff;
  top: 347/100rem;
  left: 50%;
  margin-left: -268/100rem;
  position: absolute;
  padding: 40/100rem 45/100rem;
  box-sizing: border-box;
}

.title_reward {
  text-align: center;
  font-size: 30/100rem;
}

.content_reward {
  overflow: hidden;
}

.txt_reward {
  color: #666;
  font-size: 26/100rem;
}

.num_reward {
  font-size: 41/100rem;
}

.btn_invite_reward {
  width: 444/100rem;
  line-height: 80/100rem;
  background: #fe6047;
  color: #fff;
  text-align: center;
  border-radius: 40/100rem;
  font-size: 34/100rem;
  margin-bottom: 42/100rem;
  margin-top: 48/100rem;
}

.btn_remount_reward {
  width: 444/100rem;
  line-height: 80/100rem;
  border: 1px solid #fe6047;
  color: #fe6047;
  font-size: 34/100rem;
  text-align: center;
  border-radius: 40/100rem;
}

.close_img {
  position: absolute;
  right: 24/100rem;
  top: 21/100rem;
  width: 30/100rem;
  height: 30/100rem;
  background: url("~@/assets/images/center/partner/x.png");
  background-size: contain;
}

/* 重新修改的 */
.fansContentLi {
  overflow: hidden;
  padding-top: 32/100rem;
  padding-bottom: 32/100rem;
  border-bottom: 1/100rem solid #efefef;
}

.avatarPic {
  float: left;
  width: 90/100rem;
  height: 90/100rem;
  margin-right: 30/100rem;
  margin-top: 16/100rem;
  border-radius: 50%;
}

.userName {
  font-size: 28/100rem;
  color: #333;
  float: left;
  width: 170/100rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 56/100rem;
}

.zongxiaofei {
  float: left;
  font-size: 24/100rem;
  color: #666;
}

.tip_when_fun {
  overflow: hidden;
}

.binding_box {
  overflow: hidden;
  float: left;
  margin-top: 12/100rem;
}

.timeBind {
  float: left;
  color: #999;
  font-size: 22/100rem;
  margin-right: 56/100rem;
  width: 170/100rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.benefit {
  float: right;
  color: #666;
  font-size: 24/100rem;
}

.style_sign {
  display: inline-block;
  margin-right: 18/100rem;
  width: 60/100rem;
  text-align: center;
  color: #fff;
  background: #000;
  border-top-left-radius: 20/100rem;
  border-top-right-radius: 10/100rem;
}

.btnInvite {
  float: right;
  color: #ecb67b;
  width: 140/100rem;
  line-height: 52/100rem;
  text-align: center;
  border: 1/100rem solid #ecb67b;
  border-radius: 30/100rem;
  font-size: 28/100rem;
}

.explain_part {
  font-size: 22/100rem;
  color: #ecb67b;
}

.bottom_box {
  margin-top: 20/100rem;
  margin-bottom: 20/100rem;
  text-align: center;
  font-size: 24/100rem;
  color: #666;
}

.userInfo {
  overflow: hidden;
}
</style>
