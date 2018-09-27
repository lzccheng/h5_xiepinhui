<style lang="less" scoped>
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
.wrap {
  background: #f5f5f5;
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
          height: 0.4rem;
          flex: 0 0 1.27rem;
          font-size: 0.22rem;
          color: #fff;
          box-sizing: border-box;
          padding: 0.012rem 0.12rem;
          border-radius: 0.8rem;
          background: rgba(0, 0, 0, 0.36);
          background: rgba(24, 131, 124, 1);
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
    width: 100%;
    border-bottom: 1px solid #eee;
    .menu-item {
      width: 20%;
      height: 1.35rem;
      text-align: center;
      box-sizing: border-box;
      padding: 0.2rem 0;
      .text {
        font-size: 0.22rem;
        color: #333;
        width: 0.6rem;
        height: 0.6rem;
        text-align: center;
        line-height: 0.6rem;
        margin: 0 auto;
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
      .icon00 {
        background: url("~@/assets/images/center/daifukuan.png") no-repeat
          center;
        background-size: contain;
      }
      .icon01 {
        background: url("~@/assets/images/center/fahuo.png") no-repeat center;
        background-size: contain;
      }
      .icon02 {
        background: url("~@/assets/images/center/daishouhuo.png") no-repeat
          center;
        background-size: contain;
      }
      .icon03 {
        background: url("~@/assets/images/center/daipinjia.png") no-repeat
          center;
        background-size: contain;
      }
      .icon04 {
        background: url("~@/assets/images/center/dingdan.png") no-repeat center;
        background-size: contain;
      }
      .icon13 {
        background: url("~@/assets/images/center/mingxi.png") no-repeat center;
        background-size: contain;
      }
      .icon14 {
        background: url("~@/assets/images/center/qianbao.png") no-repeat center;
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
      width: 0.42rem;
      height: 0.42rem;
    }
    .icon00 {
      background: url("~@/assets/images/center/jifen.png") no-repeat center;
      background-size: contain;
    }
    .icon01 {
      background: url("~@/assets/images/center/jifen2.png") no-repeat center;
      background-size: contain;
    }
    .icon02 {
      background: url("~@/assets/images/center/shangcheng.png") no-repeat center;
      background-size: contain;
    }
    .icon03 {
      background: url("~@/assets/images/center/kefu.png") no-repeat center;
      background-size: contain;
    }
    .icon10 {
      background: url("~@/assets/images/center/zixun.png") no-repeat center;
      background-size: contain;
    }
    .icon11 {
      background: url("~@/assets/images/center/center.png") no-repeat center;
      background-size: contain;
    }
    .icon12 {
      background: url("~@/assets/images/center/dizhi.png") no-repeat center;
      background-size: contain;
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
</style>

<template>
  <div class="wrap">
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
            <div class="start-vip">
              <span class="vip-text">开通VIP</span>
              <span class="arrows"></span>
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
      <div class="invitation-code">
        <span>我的邀请码: AAJUN</span>
        <span>&nbsp;&nbsp;复制</span>
      </div>
    </div>
    <div class="lab">
      <div class="icon-item" v-for="(item,index) in ['商品收藏','店铺收藏','退款/售后']" :key="index">
        <div class="icon" :class="'icon'+index"></div>
        <div class="item-text">{{item}}</div>
      </div>
    </div>
    <div class="ad">
      <img src="http://img.xiepinhui.com.cn/small_app/mine/vip_center.png" alt="">
    </div>
    <div class="menu-wrap" v-if="redmessageInfo">
      <div class="menu-row" v-for="(item,index) in Math.ceil((redmessageInfo.order_status.length)/5)" :key="index">
        <div class="menu-item" v-for="(it,id) in redmessageInfo.order_status" v-if="id>=(index*5)&&id<(index+1)*5" :key="id">
          <div class="icon" :style="{backgroundImage:'url(' + it.imageContent + ')'}" v-if="!!it.imageContent"></div>
          <div class="text" v-else>{{it.amout}}</div>
          <div class="menu-text">{{it.stateTitle}}</div>
        </div>
      </div>
    </div>
    <div class="ad">
      <img :src="redmessageInfo.member_centre_img.image" :height="redmessageInfo.member_centre_img.height" alt="">
    </div>
    <div class="item-gounp gounp server">
      <span class="title">我的服务</span>
      <div class="gounp-wrap">
        <div class="gounp-row">
          <div class="gounp-item" v-for="(item,index) in ['优惠券','我的积分','积分商城','在线商城']" :key="index">
            <div class="icon" :class="'icon0'+index"></div>
            <div class="gounp-text">{{item}}</div>
          </div>
        </div>
        <div class="gounp-row">
          <div class="gounp-item" v-for="(item,index) in ['服务咨询','帮助中心','地址管理']" :key="index">
            <div class="icon" :class="'icon1'+index"></div>
            <div class="gounp-text">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
    <group class="gounp_top">
      <cell :title="item.name" class="_cell" is-link v-for="(item,index) in redmessageInfo.membert_shopInfo" :key="index">
        <div slot="icon" class="imgwrap">
          <img  style="display:block;margin-right:5px;backgound-size:cover;" :src="item.image">
        </div>
      </cell>
    </group>
    <div class="item-gounp gounp earnings">
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
    <div class="item-gounp gounp fans">
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
            <span>{{redmessageInfo.rebate_amout_fans||0}}</span>
            <div class="tips">
              <img width='40' src="~@/assets/images/center/fans_shouyi.png" alt="">
              <div>粉丝收益</div>
            </div>
          </div>
        </div>
        <div class="btn">查看更多</div>
      </div>
    </div>
    <x-button @click.native="exitLogin" type="primary" class="exit-btn">{{!user?'登录':'退出登录'}}</x-button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import { Group, Cell, XButton } from "vux";
export default {
  name: "center",
  props: {},
  components: {
    Group,
    Cell,
    XButton
  },
  data() {
    return {
      redmessageInfo: "", //个人中心数据
      params: {
        plat: 3
      }
    };
  },
  created() {
    if(this.token){
      this.newredmessage();
    }
  },
  methods: {
    ...mapActions(["updateUser"]),
    // 个人中心首页接口
    async newredmessage() {
      let that = this;
      let data = {
        account: that.account,
        token: that.token
      };
      data = Object.assign(this.params, data);
      const [err, res] = await api.newredmessage(data);
      console.log(err,res)
      if (err) {
        console.log('err',err)
        that.$vux.toast.text(err.msg);
        return;
      }
      this.redmessageInfo = res.data;
    },
    // 订单列表数量接口
    async newgetorderlist_num_info() {
      let data = {};
      const [err, res] = api.newgetorderlist_num();
    },
    // 退出登录
    exitLogin() {
      if (!this.user) {
        this.$router.push("/user/login");
      } else {
        localStorage.user = "";
        this.updateUser("");
        localStorage["account"] = "";
        localStorage["token"] = "";
        this.$vux.toast.text("退出成功");
      }
    }
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
