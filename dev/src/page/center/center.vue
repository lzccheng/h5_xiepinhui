<template>
  <div class="center-box">
    <!-- 个人信息 -->
    <div class="header">
      <div class="top">
        <div class="icon i1"></div>
        <div class="icon i2"></div>
      </div>
      <div class="user-box">
        <div class="user-img-wrap">
          <img :src="user.avatar||'http://img.xiepinhui.com.cn/sys/default/user/avatar.jpg?x-oss-process=image/resize,m_fill,h_200,w_200'"
            alt="" class="user-img">
        </div>
        <div class="user-info-box">
          <div class="info-left">
            <div class="user">
              <span class="user-name">{{user?user.nick||'请设置用户名':'请登录'}}</span>
              <span class="user-edit icon"></span>
            </div>
            <div class="start-vip" v-if="redmessageInfo">
              <img src="~@/assets/images/center/vip1.png" v-if="redmessageInfo.member_info.member_grade==1" alt="">
              <img src="~@/assets/images/center/vip2.png" v-if="redmessageInfo.member_info.member_grade==2" alt="">
              <img src="~@/assets/images/center/vip0.png" v-else alt="">
            </div>
          </div>
          <div class="info-right">
            <div class="sign-box">
              <span class="sign-icon icon"></span>
              <span class="sign-text">点击签到</span>
            </div>
            <div class="code"></div>
          </div>
        </div>
      </div>
      <div class="invitation-code" v-if="redmessageInfo">
        <span>我的邀请码: {{redmessageInfo.member_info.member_code}}</span>
        <span v-clipboard:copy="redmessageInfo.member_info.member_code" v-clipboard:success="onCopy" v-clipboard:error="onCopyErr">&nbsp;&nbsp;复制</span>
      </div>
    </div>
    <!-- 浮动栏 -->
    <div class="lab">
      <div class="icon-item" v-for="(item,index) in ['商品收藏','店铺收藏','退款/售后']" :key="index">
        <div class="icon" :class="'icon'+index"></div>
        <div class="item-text">{{item}}</div>
      </div>
    </div>
    <!-- 隐藏广告 -->
    <div class="ad" v-if="false&&redmessageInfo">
      <img :src="redmessageInfo.member_centre_img.image" :height="redmessageInfo.member_centre_img.height" alt="">
    </div>
    <!-- 订单操作栏 -->
    <div class="menu-wrap" v-if="redmessageInfo">
      <div class="menu-row">
        <div class="menu-item" v-for="(it,id) in redmessageInfo.order_status" :key="id" @click="orderDetail(id)"
          :class="{'bge':it.bgColor}">
          <div v-if="it.num>0" class="red-dot">{{it.num}}</div>
          <div class="icon" :style="{backgroundImage:'url(' + it.imageContent + ')'}" v-if="!!it.showImage"></div>
          <div class="text" v-else>{{it.amout|money_fil}}</div>
          <div class="menu-text">{{it.stateTitle}}</div>
        </div>
      </div>
    </div>
    <!-- 会员广告 -->
    <div class="ad" v-if="redmessageInfo">
      <img :src="redmessageInfo.member_centre_img.image" :height="redmessageInfo.member_centre_img.height" alt="">
    </div>
    <!-- 我的服务 -->
    <div class="item-gounp gounp server" v-if="redmessageInfo.list">
      <span class="title">我的服务</span>
      <div class="gounp-wrap">
        <div class="gounp-row">
          <div class="gounp-item" v-for="(item,index) in redmessageInfo.list" :key="index">
            <div class="icon" :style="{backgroundImage:'url(' + item.url_img + ')'}" v-if="!!item.url_img"></div>
            <div class="gounp-text">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 我的店铺 or 365 -->
    <group class="gounp_top" v-if="redmessageInfo">
      <cell :title="item.name" class="_cell" is-link v-for="(item,index) in redmessageInfo.membert_shopInfo" :key="index"
        @click.native="linkTo(item.name)" :data-name="item.name">
        <div slot="icon" class="imgwrap">
          <img style="display:block;margin-right:5px;backgound-size:cover;" :src="item.image">
        </div>
      </cell>
    </group>
    <!-- 我的收益 -->
    <div class="item-gounp gounp earnings" v-if="redmessageInfo" @click="linkEarnings">
      <span class="title">我的收益</span>
      <div class="gounp-wrap">
        <p class="earn-title"><span>总收益:&nbsp;</span><span class="earn-count">{{redmessageInfo.member_info.received||0}}</span></p>
        <div class="earn-box">
          <div class="earn-item"><span>待收益:&nbsp;{{redmessageInfo.member_info.to_receive||0}}</span></div>
          <div class="earn-item"><span>已收益:&nbsp;{{redmessageInfo.member_info.all_bonuses||0}}</span></div>
        </div>
        <div class="btn">我的收益</div>
      </div>
    </div>
    <!-- 我的粉丝 -->
    <div class="item-gounp gounp fans" v-if="redmessageInfo">
      <div class="title">
        <div>我的粉丝</div>
        <div class="user-box">
          <img src="http://img.xiepinhui.com.cn/small_app/mine/vip_center.png" alt="">
          <span class="fans-name">不想取经的猪八戒</span>
        </div>
      </div>
      <div class="gounp-wrap">
        <div class="fans-box">
          <div class="fans-item">
            <span>{{redmessageInfo.member_invite_num||0}}人</span>
            <div class="tips">
              <img width='40' src="~@/assets/images/center/fans_count.png" alt="">
              <div>粉丝人数</div>
            </div>
          </div>
          <div class="fans-item">
            <img width='50' 
              :src="redmessageInfo.is_smallshop ?
              'http://img.xiepinhui.com.cn/small_app/mine/show365sign.png' : 'http://img.xiepinhui.com.cn/small_app/mine/hide365sign.png'" 
              alt=""
            >
          </div>
          <div class="fans-item">
            <span>{{redmessageInfo.rebate_amout_fans||0}}</span>
            <div class="tips">
              <img width='40' src="~@/assets/images/center/fans_shouyi.png" alt="">
              <div>粉丝收益</div>
            </div>
          </div>
        </div>
        <div class="btn" @click="searchMoreFans">查看粉丝</div>
      </div>
    </div>
    <!-- loading -->
    <loading type="type3" v-if="showLoding"></loading>
    <!-- login -->
    <div>
      <x-button @click.native="exitLogin" type="primary" class="exit-btn">{{!user?'登录':'退出登录'}}</x-button>
    </div>

    <!-- 弹窗 -->
    <div style="height:100%;overflow:hidden;position:fixed;top:0px;width:100%;z-index:999;" v-if="isShowModalRedPack">
      <div class="bg_hongbao_box">
        <div class="shade_bg" @click="isShowModalRedPack = false"></div>
        <div class="imgs_collection_box2">
          <img :src="redpackBg" class="receive_red_img">
          <div class="txt_desc_hongbao">
            <div style="width:85%;margin:auto">{{popName||''}}</div>
          </div>
          <div class="btn_redpacket" @click='catchEnvelopes' data-type="0">领取收益</div>
          <img :src="closeimg" class="close_img" @click="isShowModalRedPack = false">
        </div>
      </div>
    </div>

    <div style="height:100%;overflow:hidden;position:fixed;top:0px;width:100%;z-index:999;" v-if="isShowModalRedPack2">
      <div class="bg_hongbao_box">
        <div class="shade_bg" @click="isShowModalRedPack2=false"></div>
        <div class="imgs_collection_box2">
          <img :src="redpackBg" class="receive_red_img">
          <div class="txt_desc_hongbao">
            <div>成功领取了<span>{{redPacketInfo.count ? redPacketInfo.count : 0}}</span>个红包</div>
          </div>
          <div class="btn_redpacket">{{redPacketInfo.amount ? redPacketInfo.amount : 0}}元</div>
          <img :src="closeimg" class="close_img" @click="isShowModalRedPack2=false">
        </div>
      </div>
    </div>

    <div style="height:100%;overflow:hidden;position:fixed;top:0px;width:100%;z-index:999;max-width:750px;" v-if="closeModal365">
        <div class="bg_hongbao_box">
            <div class="shade_bg" @click="closeModal365 = false"></div>
            <div class="imgs_collection_box">
                <img src="http://img.xiepinhui.com.cn/small_app/packet365/bg_packet365.png" class="receive_red_img">
                <div class="content365bg_box">
                    <div class="titleHeader">你有{{fanli365Obj.red_num}}个粉丝开通365合伙人</div>
                    <div class="avatar_bg_row">
                        <div class="avatar_content_part" v-for="(item,index) in fanli365Obj.fanlist" :key="index">
                            <img :src="item.member_avatar" class="avatar_pic">
                            <div class="name_avatar_who">{{item.member_name}}</div>
                        </div>
                    </div>
                    <div class="bg_coupon_box">
                        <div class="left_num_box"><span class="sign_money">¥</span>{{fanli365Obj.red_amount}}</div>
                        <div class="right_txt_tip">
                            <div class="appfanli">APP返利现金</div>
                            <div class="suishiqu">可随时取现</div>
                        </div>
                    </div>
                    <div class="lingqu_box">
                        <div class="lijilingqu" @click="catchEnvelopes2" data-type="1" v-if="!successTipTXT">立即领取</div>
                        <div class="tip_lingquTxt" v-if="successTipTXT">恭喜你已成功领取{{fanli365Obj.red_num}}个合伙人红包</div>
                        <div class="search_amount">查看余额</div>
                    </div>
                </div>
                <img :src="closeimg" class="close_img2" @click="closeModal365 = false">
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge } from "vux";
export default {
  name: "center",
  props: {},
  components: {
    Group,
    Cell,
    XButton,
    Badge,
    loading
  },
  data() {
    return {
      redPacketInfo: "", //领取红包金额
      isShowModalRedPack: false, //收益弹窗
      redpackBg: "", //红包背景
      popName: "",
      closeimg: require("@/assets/images/home/close.png"), //close图标
      isShowModalRedPack2: false, //领取弹窗
      closeModal365: false, //365弹窗
      fanli365Obj: {}, //365数据
      redmessageInfo: "", //个人中心数据
      showLoding: false,
      params: {
        plat: 3
      },
      successTipTXT:false
    };
  },
  created() {
    console.log(this.user)
    console.log("user", this.user.user_type);
    console.log("user", this.user);
    console.log("openid", this.user.openid);
    console.log(this)
    if (this.token) {
      this.newredmessage();
      //this.redpackethtml();
      this.getredpacketinfo();
    }
  },
  methods: {
    searchMoreFans(){
      this.$router.push('/centerFull/partner/inviteFansMy365');
    },
    // 个人中心首页接口
    async newredmessage() {
      let that = this;
      this.showLoding = true;
      let data = {
        account: that.account,
        token: that.token
      };
      data = Object.assign(this.params, data);
      const [err, res] = await api.newredmessage(data);
      if (err) {
        that.showLoding = false;
        that.$vux.toast.text(err.msg);
        return;
      }
      this.showLoding = false;
      this.redmessageInfo = res.data;
      this.updateCenter(JSON.stringify(res.data));
    },
    // 订单列表数量接口
    async newgetorderlist_num_info() {
      let data = {};
      const [err, res] = api.newgetorderlist_num();
    },
    // 订单模块
    orderDetail(index) {
      let title = this.redmessageInfo.order_status[index].stateTitle || "";
      let tabindex = "";
      let clickUrl="";
      if (!title) {
        this.$vux.toast.text("没有权限哦");
        return;
      }
      switch (title) {
        case "代付款":
          tabindex = 2;
          break;
        case "待发货":
          tabindex = 3;
          break;
        case "待收货":
          tabindex = 4;
          break;
        case "待评价":
          tabindex = 5;
          break;
        case "全部订单":
          tabindex = 1;
          break;
        case "余额":
          tabindex = 6;
          break;
        case "荟币":
          tabindex = 7;
          break;
        case "积分":
          tabindex = 8;
          break;
        case "余额明细":
          tabindex = 9;
          break;
        case "我的钱包":
          tabindex = 10;
          clickUrl="/drawIndex"
          break;
      }
      if (tabindex < 6) {
        this.$router.push({
          path: "/centerFull/orderFull/orderlist",
          query: {
            tabindex
          }
        });
      } else {
        
        console.log(clickUrl)
        if(clickUrl!=''){
          this.$router.push({//跳路由
            path: clickUrl,
            query: {
              sub_member_id:''//这里有个子店铺id,因为从主页进去，所以可以不写，为空
            }
          });
          return false;
          // this.$router.push('../../index/index');//跳路径
        }
        this.$vux.toast.show({
          text: `极速开发中`
        });
      }
    },
    //新的红包接口
    async getredpacketinfo(){
        let data = {
        plat: 3,
        account: this.account,
        token: this.token
      };
      const [err, res] = await api.getredpacketinfo(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }else{
        
        if(res.code==2000){
            var commonRedpacket = res.data.commonRedpacket;//普通红包的对象 非365开通的红包
            var thidSixFivePacket = res.data.thidSixFivePacket;//365红包的对象 365开通的红包
            if (commonRedpacket.red_num>0){//普通红包个数大于0的时候
              this.isShowModalRedPack=true;
              this.redpackBg=commonRedpacket.imgUrl;
              this.popName=commonRedpacket.popName;
              // that.setData({
              //   isShowModalRedPack: true,
              //   redpackBg: commonRedpacket.imgUrl,
              //   popName: commonRedpacket.popName
              // });
            }
            if (thidSixFivePacket.red_num>0){//365红包个数大于0的时候
              this.closeModal365=true;
              this.fanli365Obj=thidSixFivePacket;
              // that.setData({
              //   closeModal365: true,
              //   fanli365Obj:thidSixFivePacket

              // });
            }


        }
       
      }
    },
    //返利弹窗
    // async redpackethtml() {
    //   let data = {
    //     plat: 3,
    //     account: this.account,
    //     token: this.token
    //   };
    //   const [err, res] = await api.redpackethtml(data);
    //   // 是否弹窗
    //   await this.redtype();
    //   if (err) {
    //     this.$vux.toast.text(err.msg);
    //     return;
    //   }
    //   console.log("code", res);
    //   if (res.code == "2000") {
    //     let dataObj = res.data;
    //     dataObj.red_amout = parseInt(dataObj.red_amout);
    //     this.fanli365Obj = dataObj;
    //   }
    // },
    //获取弹窗信息
    // async redtype() {
    //   let data = {
    //     plat: 3,
    //     account: this.account,
    //     token: this.token,
    //     type: 1
    //   };
    //   const [err, res] = await api.redtype(data);
    //   if (err) {
    //     this.$vux.toast.text(err.msg);
    //     return;
    //   }
    //   if (res.code == "2000") {
    //     let status_redpack = res.data.status;
    //     this.redpackBg = res.data.relate.imgUrl;
    //     this.popName = res.data.relate.popName;
    //     if (status_redpack == 1) {
    //       //0表示无红包返现，1有红包返现 1弹普通红包，2弹365红包，3全部弹
    //       this.isShowModalRedPack = true;
    //       this.redpackBg = res.data.relate.imgUrl;
    //       this.popName = res.data.relate.popName;
    //     } else if (status_redpack == 2) {
    //       this.closeModal365 = true;
    //     } else if (status_redpack == 3) {
    //       this.isShowModalRedPack = true;
    //       this.closeModal365 = true;
    //     }
    //   }
    // },
    //领取普通红包收益
    async catchEnvelopes(e) {
      let type_is = e.target.dataset.type;
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        type: type_is
      };
      const [err, res] = await api.redpacket(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      console.log(res);
      if (res.code == "2000") {
        console.log(type_is);
        if (type_is == 0) {
          //0的时候表示普通红包
          this.redPacketInfo = res.data;
          this.isShowModalRedPack2 = true;
          this.isShowModalRedPack = false;
        }
        //  else if (type_is == 1) {
        //   //1表示365返利红包
        //   this.redPacketInfo = res.data;
        //   this.isShowModalRedPack2 = true;
        //   this.closeModal365 = false;
        // }
      }
    },
    //领取365红包收益
    async catchEnvelopes2(e) {
      let type_is = e.target.dataset.type;
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        type: type_is
      };
      const [err, res] = await api.redpacket(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      console.log(res);
      if (res.code == "2000") {
        console.log(type_is);
        // if (type_is == 0) {
        //   //0的时候表示普通红包
        //   this.redPacketInfo = res.data;
        //   this.isShowModalRedPack2 = true;
        //   this.isShowModalRedPack = false;
        // } else 
        if (type_is == 1) {
          //1表示365返利红包
          this.redPacketInfo = res.data;
          this.isShowModalRedPack2 = false;
          this.closeModal365 = true;
          this.successTipTXT=true;
        }
      }
    },
    //跳转365or我的店铺
    linkTo(link) {
      console.log(this.user.user_type);
      switch (link) {
        case "我的店铺":
          if (this.user.user_type == 1) {
            this.$vux.toast.text("请先开通店铺", "top");
            return;
          }
          this.$router.push("/centerFull/myshop/index");
          break;
        case "365合伙人":
          //0 普通用户 1 店主非365店 2 365店主
          if (this.user.user_type == 2 || this.user.user_type == 3) {
              
              this.$router.push("/centerFull/partner/inviteList");
          } else {
            let issmallshop = this.redmessageInfo.is_smallshop;
            let store_state = this.redmessageInfo.store_state;
            //判断是否已开通
            if (issmallshop == 0) {
              //没开通
              this.$router.push("/centerFull/partner/code");
              if (store_state == 3) {
                //正在审核中
                this.$router.push({
                  path: "/centerFull/partner/applyStatic",
                  query: {
                    status: 1
                  }
                });
                return;
              } else if (store_state == 4) {
                //审核失败
                this.$router.push({
                  path: "/centerFull/partner/applyStatic",
                  query: {
                    status: 0
                  }
                });
                return;
              } else if (store_state == 0) {
                this.$router.push("/centerFull/partner/code");
                return;
              } else {
                this.$router.push("/centerFull/partner/code");
                return;
              }
            } else {
              //开通了
              this.$router.push("/centerFull/partner/inviteList");
              return;
            }
          }
          break;
      }
    },
    // 跳转收益
    linkEarnings() {
      this.$router.push("/centerFull/partner/redenvelope");
    },
    // 退出登录
    exitLogin() {
      if (!this.user) {
        this.$router.push("/user/login");
      } else {
        this.redmessageInfo = "";
        this.updateUser("");
        this.updateToken("");
        this.updateAccount("");
        this.updateCenter("");
        localStorage.clear();
        this.$vux.toast.text("退出成功");
      }
    },
    // 邀请码拷贝
    onCopy() {
      this.$vux.toast.text("复制成功", "top");
    },
    onCopyErr() {
      console.log("onCopyErr");
    },
    ...mapActions([
      "updateUser",
      "updateCenter",
      "updateToken",
      "updateAccount"
    ])
  },
  filters: {
    money_fil(val) {
      Number(val);
      if (val > 9999) {
        val = val / 10000 + "万";
      }
      return val;
    }
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>

<style lang="less" scoped>
.bge {
  background-color: #f9f9f9;
}

.icon {
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 auto;
  color: #333;
  background: url(http://img.xiepinhui.com.cn/small_app/mine/jifen_shop.png)
    no-repeat center;
  background-size: contain;
}

.title {
  display: flex;
  box-sizing: border-box;
  font-size: 0.26rem;
  width: 100%;
  height: 0.6rem;
  box-sizing: border-box;
  padding: 0.2rem 0 0 0.2rem;
  font-weight: bold;
}

.center-box {
  background: #f5f5f5;
  min-height: 100%;
  box-sizing: border-box;
}

.arrows {
  width: 6px;
  height: 6px;
  margin-left: 0.05rem;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
}

.header {
  width: 100%;
  height: 3.45rem;
  background: url("~@/assets/images/center/bg.png") no-repeat;
  background-size: contain;
  overflow: hidden;

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.2rem;

    .icon {
      display: block;
      width: 0.36rem;
      height: 0.36rem;
      margin: 0;
      color: #333;
      background: url(http://img.xiepinhui.com.cn/small_app/mine/jifen_shop.png)
        no-repeat center;
      background-size: contain;
    }

    .i1 {
      background: url("~@/assets/images/center/Shape@2x.png") no-repeat center;
      background-size: contain;
    }

    .i2 {
      background: url("~@/assets/images/center/setting.png") no-repeat center;
      background-size: contain;
    }
  }

  .user-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 1.45rem;
    box-sizing: border-box;
    padding: 0.21rem 0 0.21rem 0.42rem;

    .user-img-wrap {
      width: 1.07rem;
      height: 1.07rem;
      flex: 0 0 1.07rem;
      border-radius: 50%;
      border: 2px solid #fff;
      overflow: hidden;
      margin-right: 0.3rem;

      .user-img {
        width: 100%;
        height: 100%;
      }
    }

    .user-info-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .info-left {
        text-align: left;
        width: 100%;

        .user {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .user-name {
            color: #fff;
            margin-right: 0.1rem;
          }

          .user-edit {
            background: url("~@/assets/images/center/exit.png") no-repeat center;
            background-size: contain;
          }

          .icon {
            width: 0.28rem;
            height: 0.28rem;
            margin: 0;
          }
        }

        .start-vip {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          white-space: nowrap;
          margin-top: 0.25rem;
          width: 1.27rem;
          height: 0.33rem;
          flex: 0 0 1.27rem;
          font-size: 0.22rem;
          color: #fff;
          box-sizing: border-box;
          padding: 0.012rem 0.12rem;
          border-radius: 0.8rem;
          background: rgba(0, 0, 0, 0.36);
          background: rgba(24, 131, 124, 1);

          .vip-text {
            position: relative;
          }

          .vip-text::after {
            position: absolute;
            top: 0;
            right: -0.06rem;
            height: 6px;
            width: 6px;
            border-top: 1px solid #fff;
            border-right: 1px solid #fff;
            transform: rotate(45deg);
          }

          img {
            width: 1.27rem;
            margin-left: -0.12rem;
          }
        }
      }

      .info-right {
        text-align: right;

        .sign-box {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          white-space: nowrap;
          box-sizing: border-box;
          height: 0.44rem;
          background: rgba(0, 0, 0, 0.36);
          color: #fff;
          font-size: 0.24rem;
          padding: 0.08rem 1rem 0.08rem 0.2rem;
          border-radius: 50px;
          transform: translateX(0.9rem);

          .sign-text {
            margin-left: 0.08rem;
          }

          .sign-icon {
            background: url("~@/assets/images/center/qiandao.png") no-repeat
              center;
            background-size: contain;
          }

          .icon {
            margin: 0;
            width: 0.25rem;
            height: 0.25rem;
          }
        }
      }
    }
  }

  .invitation-code {
    margin-left: 1.79rem;
    color: #fff;
    font-size: 0.2rem;
  }
}

.lab {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 6.36rem;
  height: 1.2rem;
  margin: 0 auto;
  background: rgba(255, 255, 255, 1);
  border-radius: 0rem;
  box-shadow: 0px 3px 5px rgba(172, 163, 163, 0.5);
  border-radius: 0.1rem;
  margin-top: -0.6rem;
  margin-bottom: 0.1rem;

  .icon-item {
    min-width: 0.88rem;
    font-size: 0.22rem;
    text-align: center;

    .icon {
      color: #333;
      width: 0.4rem;
      height: 0.4rem;
      margin-bottom: 0.11rem;
    }

    .icon0 {
      background: url("~@/assets/images/center/top_shangping@2x.png") no-repeat
        center;
      background-size: contain;
    }

    .icon1 {
      background: url("~@/assets/images/center/dianpu.png") no-repeat center;
      background-size: contain;
    }

    .icon2 {
      background: url("~@/assets/images/center/tuikuan.png") no-repeat center;
      background-size: contain;
    }

    .item-text {
      white-space: nowrap;
    }
  }
}

.ad {
  width: 100%;
  height: 2.04rem;

  img {
    width: 100%;
    height: 100%;
  }
}

.menu-wrap {
  background: #fff;

  .menu-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid #eee;

    .menu-item {
      position: relative;
      width: 20%;
      height: 1.35rem;
      text-align: center;
      box-sizing: border-box;
      padding: 0.2rem 0;

      .red-dot {
        position: absolute;
        top: 0.25rem;
        right: 0.4rem;
        font-size: 0.18rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 0.28rem;
        min-width: 0.28rem;
        text-align: center;
        background: #f74c31;
        color: #fff;
        border-radius: 1rem;
        padding: 0.015rem;
      }

      .text {
        font-size: 0.22rem;
        color: #333;
        width: 0.6rem;
        height: 0.6rem;
        text-align: center;
        line-height: 0.6rem;
        margin: 0 auto;
        white-space: nowrap;
      }

      .icon {
        width: 0.6rem;
        height: 0.6rem;
        margin: 0 auto;
        color: #333;
        background: url(http://img.xiepinhui.com.cn/small_app/mine/jifen_shop.png)
          no-repeat center;
        background-size: contain;
      }

      .menu-text {
        font-size: 0.22rem;
      }
    }
  }
}

.gounp {
  font-size: 0.26rem;
  color: #333;
  background: #fff;
  margin-top: 0.21rem;

  .gounp-wrap {
    .gounp-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      border-bottom: 1px solid #eee;

      .gounp-item {
        width: 25%;
        height: 1.35rem;
        text-align: center;
        box-sizing: border-box;
        padding: 0.2rem 0;

        .icon {
          width: 0.6rem;
          height: 0.6rem;
          margin: 0 auto;
          margin-bottom: 0.11rem;
          color: #333;
          background: url(http://img.xiepinhui.com.cn/small_app/mine/jifen_shop.png)
            no-repeat center;
          background-size: contain;
        }

        .gounp-text {
          font-size: 0.22rem;
        }
      }
    }
  }
}

.server {
  .gounp-wrap .gounp-row .gounp-item {
    .icon {
      width: 0.62rem;
      height: 0.62rem;
    }
  }
}

.btn {
  height: 0.41rem;
  width: 1.38rem;
  margin: 0 auto;
  color: #ff456b;
  text-align: center;
  border: 1px solid #ff456b;
  border-radius: 0.3rem;
  box-sizing: border-box;
  font-size: 0.22rem;
  padding: 0 0.2rem;
  line-height: 0.41rem;
  margin-bottom: 0.16rem;
  white-space: nowrap;
  background: #fff;
}

.gounp_top {
  margin-top: 0.21rem;

  .imgwrap {
    width: 0.42rem;
    // height: 0.4rem;
    margin-right: 0.2rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

._cell {
  height: 0.8rem;
  font-size: 0.26rem;
}

.exit-btn {
  margin: 0.5rem auto;
  background: #62d8d0;
  border-radius: 10rem;
  width: 95%;
  display: block;
}

.weui-btn_primary:not(.weui-btn_disabled):active {
  background: #62d8d0;
}

.earnings {
  height: 2.62rem;

  .earn-title {
    font-size: 0.24rem;
    color: #666;
    text-align: center;
    font-weight: bold;
    vertical-align: middle;

    .earn-count {
      color: #ff456b;
      font-size: 0.3rem;
    }
  }

  .earn-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1rem;
  }
}

.fans {
  height: 2.66rem;

  .user-box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 2.36rem;

    img {
      width: 0.38rem;
      height: 0.38rem;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 0.08rem;
    }

    span {
      color: #333;
      font-size: 0.24rem;
      width: 3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .fans-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.4rem;

    .fans-item {
      text-align: center;
      font-size: 0.3rem;
      color: #ff456b;

      .tips {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.24rem;
        color: #666;

        img {
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.08rem;
        }
      }
    }
  }
}
.bg_hongbao_box {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  left: 0px;
  z-index: 99;
  overflow: hidden;
}
.shade_bg {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: absolute;
  width: 100%;
}
.txt_desc_hongbao {
  position: absolute;
  color: #fff;
  bottom: 2.5rem;
  font-size: 0.28rem;
  z-index: 999;
  width: 100%;
  text-align: center;
  padding-left: 40/100rem;
  box-sizing: border-box;
}
.btn_redpacket {
  position: absolute;
  bottom: 150/100rem;
  background: #f9e345;
  color: #f64f3a;
  font-weight: bold;
  width: 314/100rem;
  line-height: 80/100rem;
  z-index: 999;
  border-radius: 10/100rem;
  left: 50%;
  margin-left: -157/100rem;
  font-size: 12pt;
  text-align: center;
}
.close_img {
  width: 65/100rem;
  height: 65/100rem;
  position: absolute;
  bottom: 0.14rem;
  right: 0rem;
  z-index: 999;
  margin-left: -32.5/100rem;
  left: 50%;
}
.close_img2 {
  width: 65/100rem;
  height: 65/100rem;
  position: absolute;
  bottom: -0.76rem;
  right: 0/100rem;
  z-index: 999;
  margin-left: -32.5/100rem;
  left: 50%;
}
/* 792rpx;622rpx; 365粉丝红包的*/
.imgs_collection_box{
  width:622/100rem;
  position: absolute;
  top:200/100rem;
  left:50%;
  margin-left:-311/100rem;
  z-index: 999;
  // height: 792/100rem;
  box-sizing: content-box;
  .receive_red_img {
    background-size: contain;
    width: 100%;
    height: 100%;
  }
}
/* 普通红包的 */
.imgs_collection_box2{
    width:502/100rem;
  position: absolute;
  top:200/100rem;
  left:50%;
  margin-left:-251/100rem;
  z-index: 999;
  height: 790/100rem;
  .receive_red_img {
    background-size: contain;
    width: 100%;
    height: 100%;
  }
}
.content365bg_box {
  width: 100%;
  position: absolute;
  top: 0.22rem;
  padding: 10/100rem 72/100rem 40/100rem 72/100rem;
  box-sizing: border-box;
}
.avatar_pic {
  width: 96/100rem;
  height: 96/100rem;
  border-radius: 50%;
}
.avatar_content_part {
  display: inline-block;
  width: 96/100rem;
  margin-left: 20/100rem;
  line-height: 0/100rem;
}
.name_avatar_who {
  font-size: 24/100rem;
  color: #a85d2e;
  line-height: 24/100rem;
  margin-top: 12/100rem;
  text-align: center;
  overflow: hidden;
}
.dialogue_modal_box {
  border: 1/100rem solid #a85d2e;
  margin-left: 130/100rem;
  line-height: 68/100rem;
  font-size: 24/100rem;
  text-align: center;
  border-radius: 10/100rem;
  position: relative;
  color: #a85d2e;
}
.dialogue_modal_box:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -9/100rem;
  margin-top: -7/100rem;
  background: #fff0df;
  border-style: solid;
  border-width: 2/100rem;
  border-left-color: #a85d2e;
  border-bottom-color: #a85d2e;
  border-right-color: transparent;
  border-top-color: transparent;
  width: 14/100rem;
  height: 14/100rem;
  transform: rotate(45deg) scale(0.8);
}
.bg_coupon_box {
  width: 467/100rem;
  height: 128/100rem;
  background: url("http://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/packet365/bg_content_365.png")
    no-repeat;
  background-size: 100%;
  margin-top: 4/100rem;
  padding-top: 25/100rem;
  box-sizing: content-box;
}
.avatar_bg_row {
  overflow: scroll;
  min-height: 130/100rem;
  display: flex;
  white-space: nowrap;
}
.titleHeader {
  color: #a85d2e;
  font-size: 24/100rem;
  text-align: center;
  line-height: 24/100rem;
  margin-bottom: 10/100rem;
}
.left_num_box {
  float: left;
  font-size: 50/100rem;
  color: #a85d2e;
  width: 210/100rem;
  padding-right: 16/100rem;
  text-align: right;
  border-right: 1/100rem solid #f3d3c2;
  height: 80/100rem;
  box-sizing: border-box;
  line-height: 80/100rem;
}
.sign_money {
  font-size: 30/100rem;
  color: #a85d2e;
}
.num_redpack {
  display: inline-block;
  font-size: 30/100rem;
}
.right_txt_tip {
  float: right;
  width: 245/100rem;
  padding-left: 16/100rem;
  box-sizing: border-box;
}
.suishiqu {
  font-size: 24/100rem;
  color: #a85d2e;
}
.appfanli {
  font-size: 30/100rem;
  color: #a85d2e;
}
.lijilingqu {
  width: 432/100rem;
  line-height: 86/100rem;
  text-align: center;
  font-size: 34/100rem;
  background: #fff0df;
  border-radius: 43/100rem;
  color: #a85d2e;
  margin: auto;
  margin-top: 76/100rem;
}
.search_amount {
  width: 432/100rem;
  line-height: 86/100rem;
  text-align: center;
  font-size: 34/100rem;
  background: #b60b0b;
  border-radius: 43/100rem;
  color: #fff;
  margin: auto;
  margin-top: 32/100rem;
}
.successTipTXT{
  color:#fff;
  font-size:14/50rem;
  margin-top:76/100rem;
  text-align:center;
}
</style>

