<template>
  <div class="center-box" v-show="!$route.query.url">
    <!-- 个人信息 -->
    <div class="header">
      <div class="top">
        <div class="icon i1" @click="scanQRCode"></div>
        <div class="icon i2" @click="token && $router.push('/centerFull/settingWrap/setting')"></div>
      </div>
      <div class="user-box">
        <div class="userImg">
          <div class="user-img-wrap">
            <img :src="user.avatar||'http://img.xiepinhui.com.cn/sys/default/user/avatar.jpg?x-oss-process=image/resize,m_fill,h_200,w_200'"
              alt="" class="user-img">
            <div class="bag">
              <img src="@/assets/images/center/avtar.png" alt="">
            </div>
          </div>
          <img class="iden" @click="linkToService(10)" v-if="nineProfile && (nineProfile.member_info.member_auth_status == 3 || nineProfile.member_info.member_auth_status == 1 || nineProfile.member_info.member_auth_status == 0)" src="@/assets/images/center/noiden.png" alt="">
          <img class="iden" @click="linkToService(10)" v-if="nineProfile && nineProfile.member_info.member_auth_status == 2" src="@/assets/images/center/actiden.png" alt="">
        </div>
        
        <div class="user-info-box">
          <div class="info-left">
            <div class="user">
              <span class="user-name" v-if="user">{{user.nick || user.tel}}</span>
              <span class="user-name" v-if="!user" @click="$router.push('/user/login')">请点击登录</span>
              <span class="user-edit icon"></span>
            </div>
            <div class="identi" v-if="nineProfile">
              <img v-if="user.user_type == 4" src="http://img.xiepinhui.com.cn/small_app/mine/aboutUserInfo/365_userType.png" alt="">
              <img v-if="user.user_type==1"  src="http://img.xiepinhui.com.cn/small_app/mine/aboutUserInfo/ordinary_userType.png" alt="">
              <img v-if="user.user_type==2" src="http://img.xiepinhui.com.cn/small_app/mine/aboutUserInfo/shoper_userType.png" alt="">
              <img v-if="user.user_type==3" src="http://img.xiepinhui.com.cn/small_app/mine/aboutUserInfo/offlineShop_userType.png" alt="">
              <img src="~@/assets/images/center/vip1.png" v-if="nineProfile.member_info.member_grade==1" alt="">
              <img src="~@/assets/images/center/vip2.png" v-if="nineProfile.member_info.member_grade==2" alt="">
              <img src="~@/assets/images/center/vip0.png" @click="$router.push('/index/myvip')" v-if="nineProfile.member_info.member_grade==0" alt="">
            </div>
            <!-- <div class="start-vip" v-if="redmessageInfo">
              <img src="~@/assets/images/center/vip1.png" v-if="redmessageInfo.member_info.member_grade==1" alt="">
              <img src="~@/assets/images/center/vip2.png" v-if="redmessageInfo.member_info.member_grade==2" alt="">
              <img src="~@/assets/images/center/vip0.png" @click="$router.push('/index/myvip')" v-if="redmessageInfo.member_info.member_grade==0" alt="">
            </div> -->
          </div>
          <div class="info-right" v-if="nineProfile">
            <div class="sign-box" @click="token && $router.push('/centerFull/signIn')">
              <span class="sign-icon icon"></span>
              <span class="sign-text">{{nineProfile.member_info.sign?`已签到${nineProfile.member_info.signday}天`:'点击签到'}}</span>
            </div>
            <div class="code"></div>
          </div>
        </div>
      </div>
      <div class="invitation-code" v-if="nineProfile">
        <span>我的邀请码: {{nineProfile.member_info.member_code}}</span>
        <span v-clipboard:copy="nineProfile.member_info.member_code" v-clipboard:success="onCopy" v-clipboard:error="onCopyErr">&nbsp;&nbsp;复制</span>
      </div>
    </div>
    <!-- 浮动栏 -->
    <!-- <div class="lab top_lab">
      <div class="icon-item" @click="linkorderAfter(index)" v-for="(item,index) in ['商品收藏','店铺收藏','退款/售后']" :key="index">
        <div class="icon" :class="'icon'+index"></div>
        <div class="item-text">{{item}}</div>
      </div>
    </div> -->
    <!-- poster1 -->
    <!-- <div class="vip_center" @click='open365Tip' v-if="redmessageInfo">
      <img mode='widthFix' :src='redmessageInfo.about_shop365.image'/>
    </div> -->
    <!-- 我的信息 -->
    
    <div v-if="token && nineProfile" class="myInfo flex">
      <div v-for="(item, i) in nineProfile.account_amount" @click="onTagHandle(item.stateTitle)" class="myInfoItem flex" :key="i">
        <span class="_num" :class="{color1: item.stateTitle === '我的钱包', color2: item.stateTitle === '我的荟豆', color3: item.stateTitle === '我的积分'}">{{item.amout}} <span class="unit">{{unitArr[i]}}</span> </span>
        <span class="_title">{{item.stateTitle}}</span>
      </div>
    </div>
    <!-- 订单操作栏 -->
    <div v-if="token && nineProfile" class="centerBox">
      <div class="_line"></div>
      <div class="menu-wrap">
        <div class="menu-row">
          <div class="menu-item" v-for="(it,id) in nineProfile.main_menu" :key="id" @click="orderDetail(id)"
            :class="{'bge':it.bgColor}">
            <div v-if="it.num>0" class="red-dot">{{it.num}}</div>
            <div class="icon" :style="{backgroundImage:'url(' + it.imageContent + ')'}" v-if="!!it.showImage"></div>
            <div class="text" :class="{amoutColor: it.stateTitle === '余额', amoutColor2: it.stateTitle === '荟豆',amoutColor3: it.stateTitle === '我的积分'}" v-else>{{it.amout | money_fil}}</div>
            <div class="menu-text">{{it.stateTitle}}</div>
          </div>
        </div>
      </div>
      <!-- <div class="_line" v-if="nineProfile.big_menu.length"></div>
      <div class="bigNav flex">
        <div v-for="(item, i) in nineProfile.big_menu" @click="handleBigNav(item.type)" :key="i" class="bigNavItem flex">
          <img :src="item.url_img" alt="">
          <span>{{item.title}}</span>
        </div>
      </div> -->
      <div class="_line"></div>
      <div class="small_store_ad_box">
        <div class="small_store_ad">
          <div class="adtitle flex" @click="handleBigNav(15)">
            <img :src="nineProfile.small_store_ad.privilege_icon" alt="">
            <div class="privilege_title">
              <div class="_title">{{nineProfile.small_store_ad.privilege_title}}</div>
              <div class="privilege_desc">{{nineProfile.small_store_ad.privilege_desc}}</div>
            </div>
            <span class="_icon"><img src="@/assets/images/center/ico_arrow.png" alt=""></span>
          </div>
          <div class="privilege_ad">
            <!-- <img :src="nineProfile.small_store_ad.privilege_ad.image" :width="nineProfile.small_store_ad.privilege_ad.width / 2" alt=""> -->
            <swiper :options="swiperOption">
              <swiper-slide v-for="(item,index) in nineProfile.small_store_ad.banner_ad" :key="index">
                <img :src="item.ad_image.image" @click="goToBanner(item.ad_id)" class="slide-image"/>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
      <!-- <div class="_line"></div>
      <div class="banner">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in nineProfile.banner_ad" :key="index"  :data-index="index" :data-type="item.type" :data-id="item.data">
            <img :src="item.image.image" @click="goToBanner(item.id)" class="slide-image"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div> -->
      
      <!-- 隐藏广告 -->
      <!-- <div class="ad" v-if="nineProfile.member_vcoingoods_img && nineProfile.member_vcoingoods_img.image!=''">
        <img @click.self="$router.push('/HuiBiArea')" :src="nineProfile.member_vcoingoods_img.image" :height="redmessageInfo.member_centre_img.height" alt="">
      </div> -->
        <div class="footer_menu">
          <div class="footer_menuItem" v-for="(item, i) in nineProfile.footer_menu" :key="i">
            <div class="_line"></div>
            <div class="footer_menuItemBox" @click="lineToFooter_menu(item.type)">
              <img class="img" :src="item.url_img" alt="">
              <span>{{item.title}}</span>
              <span class="_icon"><img src="@/assets/images/center/ico_arrow.png" alt=""></span>
            </div>
            
          </div>
        </div>
        <div class="_line"></div>
        <!-- 我的服务 -->
        <div class="item-gounp gounp server">
          <span class="title">工具服务</span>
          <div class="gounp-wrap">
            <div class="gounp-row">
              <div class="gounp-item" v-for="(item,index) in nineProfile.service_menu" :key="index" @click="linkToService(item.type)">
                <div class="icon" :style="{backgroundImage:'url(' + item.url_img + ')'}" v-if="!!item.url_img">
                  <div class="red-dot" v-if="item.num*1 > 0">{{item.num}}</div>
                </div>
                <div class="gounp-text">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="_line"></div>
      </div>
      
      
    <!-- 我的店铺 or 365 -->
    <!-- <group class="gounp_top" v-if="redmessageInfo">
      <cell :title="item.name" class="_cell" style="margin-top: 0" is-link v-for="(item,index) in redmessageInfo.membert_shopInfo" :key="index"
        @click.native="linkTo(item.name)" :data-name="item.name">
        <div slot="icon" class="imgwrap">
          <img style="display:block;margin-right:5px;backgound-size:cover;" :src="item.image">
        </div>
      </cell>
    </group> -->
    <!-- 会员广告 -->
    <!-- <div class="ad" v-if="redmessageInfo">
      <img @click="$router.push('/index/myvip')" :src="redmessageInfo.member_centre_img.image" :height="redmessageInfo.member_centre_img.height" alt="">
    </div> -->
    <!-- 我的收益 -->
    <!-- <div class="item-gounp gounp earnings" v-if="redmessageInfo" @click="linkEarnings">
      <span class="title">我的收益</span>
      <div class="gounp-wrap">
        <p class="earn-title"><span>总收益:&nbsp;</span><span class="earn-count">{{redmessageInfo.member_info.received||0}}</span></p>
        <div class="earn-box">
          <div class="earn-item"><span>待收益:&nbsp;{{redmessageInfo.member_info.to_receive||0}}</span></div>
          <div class="earn-item"><span>已收益:&nbsp;{{redmessageInfo.member_info.all_bonuses||0}}</span></div>
        </div>
        <div class="btn">我的收益</div>
      </div>
    </div> -->
    <!-- 我的粉丝 -->
    <!-- <div class="item-gounp gounp fans" v-if="redmessageInfo">
      <div class="title">
        <div style="margin: 0 auto">我的粉丝</div>
      </div>
      <div class="gounp-wrap"  @click="searchMoreFans">
        <div class="fans-box">
          <div class="fans-item">
            <span>{{redmessageInfo.member_invite_num||0}}人</span>
            <div class="tips">
              <img width='40' src="~@/assets/images/center/fans_count1.png" alt="">
              <div>粉丝人数</div>
            </div>
          </div>
          <div class="fans-item">
            <img width='50' 
              :src="redmessageInfo.is_smallshop == 1 ?
              'http://img.xiepinhui.com.cn/small_app/mine/show365sign.png' : 'http://img.xiepinhui.com.cn/small_app/mine/hide365sign.png'" 
              alt=""
            >
          </div>
          <div class="fans-item">
            <span>{{redmessageInfo.rebate_amout_fans||0}}</span>
            <div class="tips">
              <img width='40' src="~@/assets/images/center/fans_shouyi1.png" alt="">
              <div>粉丝收益</div>
            </div>
          </div>
        </div>
        <div class="btn">查看粉丝</div>
      </div>
    </div> -->
    <!-- loading -->
    <loading type="type3" v-if="showLoding"></loading>
    <div class="logout" v-if="!user">
      <img src="@/assets/images/loginout.png" alt="">
    </div>
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
    <!-- 开通365送365荟豆 -->
    <div class="give365ModalBox" v-if="showGive365Modal">
      <div class="huidouneirong">
          <div class="give365ModalContent">
              <div class="tipGetHowMany" v-if="noReceive365">恭喜你获得365个荟豆！</div>
              <div class="btnReceiveHuiDou" v-if="noReceive365" @click.stop='hasGetHuiDou'>领取荟豆</div>
              <div class="tipGetHowMany" v-if="!noReceive365">成功领取365个荟豆！</div>
              <div class="btnReceiveHuiDou" v-if="!noReceive365" @click.stop="goSearchHowManyHuiDou">去查看</div>
          </div>
          <img src="@/assets/images/close_red.png" class="close_huidou" @click.stop="closeShowGive365"/>
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
                        <div class="search_amount" @click="$router.push('/drawIndex/myWallet')">查看余额</div>
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
import { scanQRCode } from "@/utils/wx_sdk.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge } from "vux";
import "swiper/dist/css/swiper.css";
import "../index/home.less";
export default {
  name: "center",
  props: {},
  components: {
    Group,
    Cell,
    XButton,
    Badge,
    loading,
  },
  data() {
    return {
      unitArr: ['元', '个', '分'],
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      redPacketInfo: "", //领取红包金额
      isShowModalRedPack: false, //收益弹窗
      redpackBg: "", //红包背景
      popName: "",
      closeimg: require("@/assets/images/home/close.png"), //close图标
      isShowModalRedPack2: false, //领取弹窗
      closeModal365: false, //365弹窗
      vcoinPacket: '',
      fanli365Obj: {}, //365数据
      redmessageInfo: "", //个人中心数据
      showLoding: false,
      params: {
        plat: 3
      },
      successTipTXT:false,
      noReceive365: true,
      showGive365Modal: false,
      nineProfile: null
    };
  },
  created() {
    console.log("user", this.user);
    console.log("openid", this.user.openid);
    if(this.$route.query.url){
      let query = {};
      for(let i in this.$route.query){
        if(i == 'url')continue;
        query[i] = this.$route.query[i];
      }
      this.$router.push({
        path: this.$route.query.url,
        query
      })
      return
    }
    if (this.token) {
      // this.newredmessage();
      //this.redpackethtml();
      this.getredpacketinfo();
      this.getNewData();
    }else{
      // console.log(this.$store)
      this.updateUser("");
      this.updateToken("");
      this.updateAccount("");
      this.updateCenter("");
      localStorage.clear();
    }
  },
  mounted () {
      if(this.center){
        this.nineProfile = JSON.parse(this.center);
      }
  },
  methods: {
    onTagHandle(stateTitle){
      let clickUrl;
      switch(stateTitle){
        case "我的荟豆":
          clickUrl="/drawIndex";
          break;
        case "我的积分":
          clickUrl="/centerFull/integral/";
          break;
        case "我的钱包":
          clickUrl="/drawIndex"
          break;
      }
      if(clickUrl){
        this.$router.push({
          path: clickUrl
        })
      }
    },
    goToBanner(ad_id){
      switch (ad_id) {
        case 2:
          return this.$router.push('/HuiBiArea');
          break;
        case 1:
          return this.$router.push('/centerFull/partner/goodList');
          break;
        case 3:
          return this.$router.push("/centerFull/partner/introduce365");
          break;
      }
    },
    lineToFooter_menu(type){
      switch(type){
        case 3:
          return this.$router.push('/centerFull/settingWrap/setting');
          break;
        case 15:
          return this.$router.push('/centerFull/myService/coupon_list');
          break;
        case 17:
          return this.$router.push('/centerFull/partner/inviteFansMy365');;
          break;
        case 16:
          if (this.user.user_type == 1 || this.user.user_type == 4) {
            this.$router.push('/centerFull/myshop/noShop');
            return;
          }
          return this.$router.push("/centerFull/myshop/index");
          break;
      }
    },
    handleBigNav(type){
      let user_type = this.user.user_type;
      switch (type) {
        case 15:
          if (user_type == 2 || user_type == 3 || user_type == 4) {
              if(user_type == 4){
                return this.$router.push("/centerFull/partner/index365");
              }
              return this.$router.push("/centerFull/partner/inviteList");
          } else {
            return this.$router.push("/centerFull/partner/introduce365");
          }
          break;
        case 16:
          if (user_type == 1) {
            this.$router.push('/centerFull/myshop/noShop')
            return;
          }
          return this.$router.push("/centerFull/myshop/index");
          break;
        case 3:
          return this.$router.push("/centerFull/integral/");
          break;
        case 17:
          return this.$router.push('/centerFull/partner/inviteFansMy365');
          break;
      }
    },
    //新个人中心接口（2019.1.18）
    async getNewData(){
      let data = {
        account: this.account,
        token: this.token
      }
      this.showLoding = true;
      const [err, res] = await api.nineProfile(data);
      this.showLoding = false;
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      if(res.code == 2000){
        // res.data.footer_menu = res.data.footer_menu.filter(item =>{
        //   if(item.type != 16){
        //     return item;
        //   }
        // })
        this.nineProfile = res.data;
        this.updateCenter(JSON.stringify(this.nineProfile));
      }
    },
    searchMoreFans(){
      this.$router.push('/centerFull/partner/inviteFansMy365');
    },
    open365Tip(){
      var userType = this.user.user_type;
      var issmallshop = this.redmessageInfo.is_smallshop;
      var states='';//1表示我要开店，2表示邀请好友开店
      if (userType == 2 || userType == 3){
        states=2;
      }else{
        if(issmallshop==0){
          states=1;
        }else{
          states=2;
        }
      }
      window.location.href = 'https://m.xiepinhui.com.cn/html/openStore/index.html?states=' + states;
    },
    async hasGetHuiDou(){
      let data = {
        account: this.account,
        token: this.token,
      }
      const [err, res] = await api.taket_vcoin_packet(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      if(res){
        this.noReceive365 = false;
      }
    },
    goSearchHowManyHuiDou(){
      this.$router.push('/drawIndex/myWallet');
    },
    closeShowGive365(){
      this.showGive365Modal = false;
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
      this.showLoding = false;
      if (err) {
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
    //退款/售后
    linkorderAfter(index){
      let url = '';
      switch (index) {
        case 0:
          url = '/centerFull/orderFull/sc_goods';
          break;
        case 2:
          url = '/centerFull/orderFull/after_list';
          break;
        default:
          this.$vux.toast.text('暂未开放','top');
          return;
          break;
      }
      if(!this.token){
        url = '/user/login';
      }
      this.$router.push({
        path: url
      })
    },
    // 订单模块
    orderDetail(index) {
      let title = this.nineProfile.main_menu[index].stateTitle || "";
      let tabindex = "";
      let clickUrl="";
      if (!title) {
        this.$vux.toast.text("没有权限哦");
        return;
      }
      switch (title) {
        case "待付款":
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
          clickUrl="/drawIndex";
          break;
        case "荟豆":
          tabindex = 7;
          clickUrl="/drawIndex";
          break;
        case "我的积分":
          tabindex = 8;
          clickUrl="/centerFull/integral/";
          break;
        case "我的收益":
          tabindex = 9;
          clickUrl="/centerFull/partner/redenvelope";//"/balance/remain"
          break;
        case "我的钱包":
          tabindex = 10;
          clickUrl="/drawIndex"
          break;
      }
      console.log(title)
      // return
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
            var vcoinPacket = res.data.vcoinPacket;//365开通荟豆
            if (commonRedpacket.red_num>0){//普通红包个数大于0的时候
              this.isShowModalRedPack=true;
              this.redpackBg=commonRedpacket.imgUrl;
              this.popName=commonRedpacket.popName;
            }
            if (thidSixFivePacket.red_num>0){//365红包个数大于0的时候
              this.closeModal365=true;
              this.fanli365Obj=thidSixFivePacket;
            }
            console.log('vcoinPacket',vcoinPacket,res.data.vcoinPacket.imgUrl)
            if(vcoinPacket.red_num > 0){
              this.showGive365Modal = true;
              this.vcoinPacket = vcoinPacket;
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
    //我的服务转跳
    linkToService(type, title){
      let url = '';
      switch(type){
        case 9:
          url = '/index/orderAddress';
          break;
        case 8:
          url = '/centerFull/partner/guize';
          break;
        case 7:
          window.location.href = 'tel://4009639299';
          return;
          break;
        case 11:
          url = '/centerFull/orderFull/sc_goods' //"商品收藏"
          break;
        case 3:
          url = '/centerFull/myService/integral_sc' //"积分商城"
          break;
        case 2:
          url = '/centerFull/integral/integral_my'  //我的积分
          break;
        case 1:
          url = '/centerFull/myService/coupon_list';
          break;
        case 13:
          url = '/centerFull/orderFull/after_list'  //退款/售后
          break;
        case 10:
          if(this.user.user_type == 3){
            return this.$vux.toast.text('暂无权限','top');
          }
          let member_auth_status = this.nineProfile.member_info.member_auth_status;
          if(member_auth_status == 0 || member_auth_status == 1 || member_auth_status == 2){
            return this.$router.push({
              path: '/centerFull/identity/identityStatus',
              query: { 
                status: member_auth_status
              }
            })
          }
          url = '/centerFull/identity';
          break;
      }
      if(!url){
        this.$vux.toast.text('暂未开放','top');
        return;
      };
      console.log(url)
      this.$router.push({
        path: url,
        query: {
          from: 'center'
        }
      })
    },
    scanQRCode(){ 
      let success = res =>{
        console.log(res)
      }
      scanQRCode(this, {success})
    },
    //跳转365or我的店铺
    linkTo(link) {
      console.log(link);
      switch (link) {
        case "我的店铺":
          if (this.user.user_type == 1) {
            this.$router.push('/centerFull/myshop/noShop')
            return;
          }
          this.$router.push("/centerFull/myshop/index");
          break;
        case "365小店":
          
          //0 普通用户 1 店主非365店 2 365店主
          if (this.redmessageInfo.is_smallshop == 1 || this.user.user_type == 2 || this.user.user_type == 3 || this.user.user_type == 4) {
              if(this.redmessageInfo.is_smallshop == 1 || this.user.user_type == 4){
                return this.$router.push("/centerFull/partner/index365");
              }
              return this.$router.push("/centerFull/partner/inviteList");
          } else {
            return this.$router.push("/centerFull/partner/introduce365");

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
    ...mapGetters(["user", "account", "token", "center"])
  }
};
</script>

<style lang="less" scoped>
.logout{
  text-align: center;
  // margin: 0.4rem 0;
  img{
    width: 65%;
    display: inline-block;
  }
}
.myInfo{
  justify-content: space-around;
  text-align: center;
  padding: .3rem 0;
  .myInfoItem{
    flex-direction: column;
    ._num{
      font-size: 18px;
      &.color1{
        color: #FFB15B;
      }
      &.color2{
        color: #61D8D0;
      }
      &.color3{
        color: #F08572;
      }
      .unit{
        font-size: 10px;
      }
    }
    ._title{
      font-size: 12px;
      color: #333;
    }
  }
}
.vip_center{
  width: 100%;
  font-size: 0;
}
.banner{
  height: 2.04rem;
  img{
    width: 7.5rem;
    height: 2.04rem;
  }
}
.vip_center img{
  width: 100%;
}
.give365ModalBox{
  height:100%;
  overflow:hidden;
  position:fixed;
  top:0px;
  width:100%;
  z-index:999;
  background: rgba(0, 0, 0, 0.5);
}
.give365ModalContent{
  width: 514/100rem;
  height: 595/100rem;
  background:url('http://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/packet365/give365ContentBg.png') no-repeat; 
  background-size:100%;
  position: relative;
 
}
.tipGetHowMany{
   position: absolute;
   bottom: 142/100rem;
   text-align: center;
   font-size: 34/100rem;
   color: #F64C3E;
   padding-left: 14/100rem;
   width: 100%;
}
.btnReceiveHuiDou{
  
  background: #FBEC53;
  color: #F64C3E;
  font-size: 36/100rem;
  width: 280/100rem;
  height: 62/100rem;
  line-height: 62/100rem;
  position: absolute;
  bottom: 40/100rem;
  text-align: center;
  left: 50%;
  margin-left: -140/100rem;
  border-radius: 32/100rem;
}
.close_huidou{
  width:65/100rem;
height:65/100rem;
position:absolute;
bottom: 0/100rem;
left:50%;
margin-left:-32.5/100rem;
}
.huidouneirong{
  width: 514/100rem;
  height: 739/100rem;
  position: absolute;
  left: 50%;
   margin-left:-257/100rem;
   top:50%;
   margin-top:-369.5/100rem;
    text-align: center;
}
._line{
  height: 0.2rem;
  background-color: #f8f8f8;
}
.marTop{
  margin-top: 0;
}
.bge {
  background-color: #FCFCFC;

}
.bigNav{
  .bigNavItem{
    width: 33.333%;
    text-align: center;
    flex-direction: column;
    color: #333333;
    font-size: 14px;
    padding: .2rem 0;
    img{
      width: .8rem;
      height: .8rem;
      display: inline-block;
      margin: 0 auto;
    }
    span{
      margin-top: .1rem;
      display: inline-block;
    }
  }
}
.footer_menu{
  img{
    vertical-align: middle;
  }
  .footer_menuItem{
    .img{
      width: .2*2rem;
      height: .2*2rem;
      margin-right: .1rem;
    }
  }
  .footer_menuItemBox{
    color: #333;
    padding: .2rem;
    line-height: .5rem;
    background-color: #fff;
    border-radius: 5px;
  }
  ._icon{
    float: right;
    img{
      width: .15*1.2rem;
      height: .3*1.2rem;
    }
  }
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
  height: 0.4rem;
  box-sizing: border-box;
  padding: 0 0 0 0.2rem;
  // font-weight: bold;
}
.small_store_ad_box{
  padding: .35rem 0.25rem 0.25rem;
  background-color: #fff;
  border-radius: 5px;
  .small_store_ad{
    .adtitle{
      color: #666;
      img{
        width: 1rem;
        height: 1rem;
      }
    }
    ._title{
      font-size: 14px;
    }
    .privilege_desc{
      font-size: 14px;
      white-space: nowrap;
    }
    .privilege_title{
      margin-left: .2rem;
    }
    .privilege_ad{
      margin-top: .25rem;
      text-align: center;
      img{
        width: 100%;
        display: inline-block;
      }
    }
    ._icon{
      img{
        width: .15*1.2rem;
        height: .25*1.2rem;
        position: relative;
        top: 50%;
        left: 0.3rem;
        transform: translateY(-50%);
      }
    }
  }
}
.center-box {
  // background: #f5f5f5;
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
  height: 3rem;
  background: url("~@/assets/images/center/bg.png") no-repeat;
  background-size: 100% 100%;
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
      width: 0.26rem;
      height: 0.26rem;
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
    .userImg{
      position: relative;
      .iden{
        position: absolute;
        left: 0;
        bottom: -0.25rem;
        width: 97/100rem;
      }
    }
    .user-img-wrap {
      width: 1.07rem;
      height: 1.07rem;
      flex: 0 0 1.07rem;
      margin-right: 0.3rem;
      position: relative;
      .user-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .bag{
        position: absolute;
        left: -0.15rem;
        top: -0.33/2rem;
        width: 1.34rem;
        height: 1.40rem;
        img{
          width: 100%;
          height: 100%;
        }
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
          align-items: center;
          white-space: wrap;
          margin-top: 0.15rem;
          width: 1.27rem;
          height: 0.33rem;
          flex: 0 0 1.27rem;
          font-size: 0.22rem;
          color: #fff;
          box-sizing: border-box;
          // padding: 0.012rem 0.12rem;
          border-radius: 0.8rem;
          // background: rgba(0, 0, 0, 0.36);
          // background: rgba(24, 131, 124, 1);
          .vip-text {
            position: relative;
          }

          // .vip-text::after {
          //   position: absolute;
          //   top: 0;
          //   right: -0.06rem;
          //   height: 6px;
          //   width: 6px;
          //   border-top: 1px solid #fff;
          //   border-right: 1px solid #fff;
          //   transform: rotate(45deg);
          // }

          img {
            width: 1.27rem;
            margin-left: 0.12rem;
            &:first-child{
              margin-left: 0;
            }
          }
        }
        .identi{
          display: flex;
          margin-top: 0.1rem;
          flex-wrap: wrap;
          img{
            width: 1.27rem;
            height: 0.38rem;
            margin-left: 0.1rem;
            margin-bottom: 0.1rem;
            &:first-child{
              margin-left: 0;
            }
          }
        }
      }

      .info-right {
        text-align: right;

        .sign-box {
          position: relative;
          top: -0.3rem;
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
            width: 0.4rem;
            height: 0.4rem;
          }
        }
      }
    }
  }

  .invitation-code {
    margin-top: 0.1rem;
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
.top_lab{
  margin-bottom: 20/100rem;
}
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
      padding: 0.28rem 0 0.1rem;
      border-bottom: 2px solid #F9F9F9;
      
      

      .text {
        font-size: 0.22rem;
        color: #333;
        width: 0.45rem;
        height: 0.45rem;
        text-align: center;
        line-height: 0.6rem;
        margin: 0 auto;
        white-space: nowrap;
      }
      .amoutColor{
        color: #FFB15B;
      }
      .amoutColor2{
        color: #61D8D0;
      }
      .amoutColor3{
        color: #F08572;
      }
      .icon {
        width: 0.45rem;
        height: 0.45rem;
        margin: 0 auto;
        color: #333;
        background: url(http://img.xiepinhui.com.cn/small_app/mine/jifen_shop.png)
          no-repeat center;
        background-size: contain;
      }

      .menu-text {
        font-size: 0.22rem;
        color: #666;
      }
    }
  }
}

.gounp {
  font-size: 0.26rem;
  color: #333;
  background: #fff;

  .gounp-wrap {
    .gounp-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      // border-bottom: 1px solid #eee;

      .gounp-item {
        width: 25%;
        height: 1.35rem;
        text-align: center;
        box-sizing: border-box;
        padding: 0.1rem 0 0.2rem;
        position: relative;
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
  padding: .15rem 0;
  border-radius: 5px;
  .gounp-wrap .gounp-row .gounp-item {
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      position: relative;
      .red-dot{
        right: -.1rem;
        top: -.1rem;
      }
    }
  }
}

.btn {
  height: 0.41rem;
  width: 1.38rem;
  margin: 0 auto;
  color: #62d8d0;
  text-align: center;
  border: 1px solid #62d8d0;
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
  // margin-top: 0.21rem;

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
.centerBox{
  background-color: #f8f8f8;
  padding: 0 .2rem;
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
      color: #62d8d0;

      .tips {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.24rem;
        color: #666;

        img {
          width: 0.3rem;
          height: 0.3rem;
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
/* 792/100rem;622/100rem; 365粉丝红包的*/
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
/* 荟豆红包的 */
.imgs_collection_box3{
  width:600/100rem;
  position: absolute;
  top:200/100rem;
  left:50%;
  margin-left:-3rem;
  z-index: 999;
  span{}
  .receive_red_img {
    background-size: contain;
    width: 100%;
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

