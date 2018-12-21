<style lang="less" scoped>
page {
  background: #fff;
  padding-bottom: 51/50rem;
}

.swiper {
  height: 270/50rem;
}

.vip-scroll-item {
  background: url(http://img.xiepinhui.com.cn/small_app/vip/vip_banner_bg.png) no-repeat;
  background-size: 100%;
  height: 5.5rem;
}

.silder-banner-bg {
  width: 92%;
  height: 180/50rem;
  background: linear-gradient(90deg, rgba(246, 213, 136, 1), rgba(253, 240, 201, 1));
  margin: auto;
  position: relative;
  top: 60/50rem;
  border-radius: 10/50rem;
  color: #5f481c;
  font-size: 12pt;
  text-align: center;
}

.zuanshi-bg {
  width: 92%;
  height: 180/50rem;
  background: linear-gradient(90deg, rgba(213, 228, 255, 1), rgba(241, 245, 255, 1));
  margin: auto;
  position: relative;
  top: 60/50rem;
  border-radius: 10/50rem;
  color: #7b86b1;
  font-size: 12pt;
  text-align: center;
}

.huizhang {
  position: absolute;
  z-index: 99;
  width: 95/50rem;
  height:85/50rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 25/50rem;
}

.block-box {
  position: absolute;
  top: 60/50rem;
  width: 100%;
  text-align: center;
}

.banner-wenzi {
  line-height: 30/50rem;
}

.xs-youhui {
  width: 100%;
  padding-top: 13/50rem;
}

.youhuo-biaoqian {
  background: #323232;
  color: #fff;
  padding: 5/50rem 15/50rem;
  border-radius: 50/50rem;
}

.big-text {
  font-size: 14pt;
}

.small-text {
  font-size: 11pt;
  text-decoration: line-through;
  padding-left: 10/50rem;
}

.huangjin .jsq-title {
  background: #fbe8b6;
  padding: 10/50rem 15/50rem;
  position: relative;
}

.zuanshi .jsq-title {
  background: #eff4ff;
  padding: 10/50rem 15/50rem;
  position: relative;
}

.jsq-title .icon-left-qian {
  width: 30/50rem;
  height: 25/50rem;
}

.right-jsq {
  position: absolute;
  right: 10/50rem;
}

.lable-title {
  font-size: 12pt;
  padding-left: 10/50rem;
}

.huangjin  .right-jsq {
  color: #d9a643;
}

.zuanshi .right-jsq {
  color: #a1abcc;
}

.right-jsq .jsq-icon {
  width: 15/50rem;
  height: 18/50rem;
}

.icon-youbian {
  font-size: 16pt;
  position: relative;
  top: -1/50rem;
}

.huang {
  color: #d9a643 !important;
}

.zuan {
  color: #a1abcc !important;
}

.vip-tequan{
  width: 100%;
  font-size: 0;
  text-align: center;
  padding: 15/50rem 0;
}
.vip-tequan img{
  width: 50%;
  height:20/50rem;
  margin: auto;
}
.weui-grid{
  width: 25%;
}
.weui-grid__icon{
  width: 50/50rem;
  height: 50/50rem;
}
.xieyishu{
  padding: 10/50rem 15/50rem;
  background: #fff;
  font-size: 11pt;
  color: #333;
}
.xieyishu .iconfont{
  font-size: 14pt;
  position: relative;
  top: 1/50rem;
}
.xieyishu .icon-xuanzhong{
  color: #FB4C72;
}
.vip-btn{
  position: fixed;
  width: 100%;
  line-height: 51/50rem;
  text-align: center;
  bottom: 0;
}
.huang_bg{
  background: #F6D588;
}
.zuanshi_bg{
  background: #D8E4F8;
}


.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
}

.showMask, .showModal {
  display: block;
}

.hideMask, .hideModal {
  display: none;
}

/* 弹窗 */

.modal {
  width:90%;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 20%;
}

.modal-content {
  width: 100%;
  background: #fff;
  height:390/50rem;
  border-radius: 10/50rem;
}
.model-huizhang{
  position: absolute;
  z-index: 99;
  width: 80/50rem;
  height: 80/50rem;
  left: 0;
  right: 0;
  margin: auto;
  top:-30/50rem;
  overflow: hidden;
}
.close{
  position: absolute;
  right: 15/50rem;
  top:15/50rem;
}
.model-top-juli{
 position: relative;
  top:50/50rem;
}
.jsq-jieshao-shengqian{
  font-size: 12pt;
  width:70%;
  margin: auto;
  text-align: center;
  padding: 5/50rem 30/50rem;
  border-radius: 5/50rem;
}
.shengqian-huangjin{
  background:#FBE8B6;
  color: #5F481C;
}
.shengqian-zuanshi{
  background:#F1F6FF;
  color: #818BB5;
}

.jiesheng-list{
  width: 90%;
  margin: auto;
  padding: 10/50rem 0;
}
.jiesheng-list .list-icon{
  width:20/50rem;
  height:20/50rem;
  position: relative;
  top:3/50rem;
}
.item-lable{
  font-size: 12pt;
  padding-left: 3/50rem;
}
.item-desc{
  font-size:9pt;
  color: #888;
  padding-left: 10/50rem;
}
.item-price{
  font-size: 12pt;
  position: absolute;
  right: 10/50rem;
  margin-top: 3/50rem;
 
}
.model-btn{
  width:80%;
  text-align: center;
  border-radius: 100/50rem;
  margin: auto;
  margin-top: 20/50rem;
  padding: 5/50rem 0;
}
.shengqian-hjbtn{
  background:#FBE8B6;
}
.shengqian-zsbtn{
  background:#D8E4F8;
}
.up-icon{
  width:15/50rem;
  height:15/50rem;
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  margin: auto;
  margin-top:-20/50rem; 
}

</style>
<template>
    <div class="idnexWrapBox">
        <x-header :left-options="{backText:''}" :title="nvabarData.title" id="vux-header"></x-header>
        <div v-if="vipInfo">
          <div class="mask flex  flex-align-center" :class="showAmountModal.showMask" @click.self='hideAmountModal'>
            <div class="modal" :class="showAmountModal.showModal">
              <div class="modal-content" catchtap='kong'>
                <img class="model-huizhang" v-if="interval==0" src='http://img.xiepinhui.com.cn/small_app/vip/huangjin_dengji.png'/>
                <img class="model-huizhang" v-if="interval==1" src='http://img.xiepinhui.com.cn/small_app/vip/zuanshi_dengji.png'/>
                <span class='close iconfont icon-close-x' @click='hideAmountModal'></span>
                <div class="model-top-juli">
                  <div class="vip-tequan shenqing-jsq">
                    <img mode='widthFix' v-if="interval==0" src="http://img.xiepinhui.com.cn/small_app/vip/huangjin_biaoti.png"/>
                    <img mode='widthFix' v-if="interval==1" src="http://img.xiepinhui.com.cn/small_app/vip/zuanshi_biaoti.png"/>
                  </div>
                  <div class="jsq-jieshao-shengqian" :class="interval==0?'shengqian-huangjin':'shengqian-zuanshi'">开通
                    <span v-if="interval==0">高级</span>
                    <span v-if="interval==1">钻石</span>会员卡，平均每年可省
                    <span class="money-color">{{vipInfo.banner[interval].calculation.offer}}</span>元</div>
                  <div scroll-y style="height:150px; overflow: scroll">
                    <div class="jiesheng-list line_xi_after " :key="i" v-for="(item, i) in vipInfo.banner[interval].calculation.details">
                      <img class="list-icon" :src='item.icon'/>
                      <span class="item-lable">{{item.title}}</span>
                      <span class="item-desc">{{item.desc}}</span>
                      <span class="item-price">{{item.price}}</span>
                    </div>
                  </div>
                  <img v-if="interval==1" class="up-icon" src="http://img.xiepinhui.com.cn/small_app/vip/up_zuanshi.png"/>
                  <div class="model-btn" :class="interval==0?'shengqian-hjbtn':'shengqian-zsbtn'" @click='kaitong'>立即开通</div>
                </div>
              </div>
            </div>
          </div>

          <swiper :options="swiperOption" ref="swiper">
            <swiper-slide class="vip-scroll-item" v-for="(item, index) in vipInfo.banner" :key="index">
              <img class="huizhang" v-if="index==0" src='http://img.xiepinhui.com.cn/small_app/vip/huangjin_dengji.png'/>
              <img class="huizhang" v-if="index==1" src='http://img.xiepinhui.com.cn/small_app/vip/zuanshi_dengji.png'/>
              <div :class="index==0?'silder-banner-bg':'zuanshi-bg'">
                <div class="block-box">
                  <div class="banner-wenzi">成为会员，享超低价格</div>
                  <div class="banner-wenzi">众多特权，每年平均可省
                    <span>{{item.head.offer}}</span>元</div>
                  <div class="xs-youhui ">
                    <span class="youhuo-biaoqian ">
                        <span>限时优惠 <span class="big-text">¥{{item.head.ltoffer}}</span> </span>
                    <span class="small-text">原价¥{{item.head.original_price}}</span>
                    </span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="vip-info-box" :class="index==0?'huangjin':'zuanshi'" v-for="(item, index) in vipInfo.banner" :key="index" v-if="index==interval">
            <div class="jsq-title flex flex-align-center" @click='showAmountModalFn'>
              <img class="icon-left-qian" v-if="index==0" src="http://img.xiepinhui.com.cn/small_app/vip/hj_qian.png"/>
              <img class="icon-left-qian" v-if="index==1" src="http://img.xiepinhui.com.cn/small_app/vip/zuanshi_qian.png"/>
              <div class="lable-title flex">
                <span v-if="index==0">高级</span>
                <span v-if="index==1">钻石</span>会员每年可省
                <span class="money-color">{{item.head.offer}}</span>元</div>
              <div class="right-jsq">
                <img class="jsq-icon" v-if="index==0" src='http://img.xiepinhui.com.cn/small_app/vip/hj_jsq.png'/>
                <img class="jsq-icon" v-if="index==1" src='http://img.xiepinhui.com.cn/small_app/vip/zaunshi_jsq.png'/>
                <span class="iconfont icon-youbian" :class="index==0?'huang':'zuan'"></span>
              </div>
            </div>
            <div class="vip-tequan">
              <img mode='widthFix' v-if="index==0" src="http://img.xiepinhui.com.cn/small_app/vip/huangjin_biaoti.png"/>
              <img mode='widthFix' v-if="index==1" src="http://img.xiepinhui.com.cn/small_app/vip/zuanshi_biaoti.png"/>
            </div>
            <div class="page__bd">
              <div class="weui-grids">
                <div class="weui-grid" hover-class="weui-grid_active" @click='openTq(itemtequan.stauts, index)' :data-index="index" v-for="(itemtequan, index) in item.privilege" :key="index" :data-stauts="itemtequan.stauts">
                  <img class="weui-grid__icon" :src="itemtequan.icon" />
                  <div class="weui-grid__label">{{itemtequan.title}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="xieyishu line_xi_before" @click='selectXieyi'>
            <span class="iconfont" :class="isSelect?'icon-xuanzhong':'icon-noxuanzhong'"></span> 已阅读并同意<span catchtap='xieyi' style='color:#fb4c72;' @click.stop="lineToXieyi">《鞋品荟会员卡用户协议》</span>
          </div>
          <div v-if="vipInfo.stauts==0">
            <div class="vip-btn" :class="interval==0?'huang_bg':'zuanshi_bg'" @click='openVip'>
              <div v-if="interval==0">立即开通高级会员
                <span class="iconfont icon-yuanyou"></span>
              </div>
              <div v-if="interval==1">立即开通钻石会员
                <span class="iconfont icon-yuanyou"></span>
              </div>
            </div>
          </div>
          <div v-else-if="vipInfo.stauts==1">
            <div class="vip-btn" @click='openVip' :class="interval==0?'huang_bg':'zuanshi_bg'"
             v-if="vipInfo.member_info.member_grade==0">
              <div v-if="interval==0">立即开通高级会员
                <span class="iconfont icon-yuanyou"></span>
              </div>
              <div v-if="interval==1">立即开通钻石会员
                <span class="iconfont icon-yuanyou"></span>
              </div>
            </div>
            <div class="vip-btn" :class="interval==0?'huang_bg':'zuanshi_bg'" v-else-if="vipInfo.member_info.member_grade==1">
              <div v-if="interval==0">您已开通高级会员</div>
              <div v-if="interval==1" @click='openVip'>立即开通钻石会员
                <span class="iconfont icon-yuanyou"></span>
              </div>
            </div>
            <div class="vip-btn" :class="interval==0?'huang_bg':'zuanshi_bg'" @click='openVip' v-else-if="vipInfo.member_info.member_grade==2">
              <div v-if="interval==0">您已开通更高级的会员</div>
              <div v-if="interval==1">您已开通钻石会员</div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin ,XSwitch ,Picker } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import 'swiper/dist/css/swiper.css';
import './swiper.less';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  components: {
    XHeader,
    swiper,
    swiperSlide
  },
  data(){
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        on: {
          transitionStart:() => {
            // console.log(this.$refs.swiper.swiper.activeIndex)
            this.intervalChange();
          }
        }
      },
      vipInfo: "",
      interval: 0,
      isSelect: false,
      showAmountModal: {
        showModal: 'hideModal',
        showMask: 'hideMask',
      },
      // 组件所需的参数
      nvabarData: {
        showCapsule: 1, //是否显示左上角图标
        title: '鞋品荟', //导航栏 中间的标题
      },
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    async init(){
      let data = {
        plat: 3,
        account: this.account,
        token: this.token
      }
      const [err, res] = await api.memberhome(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      if(res.code == 2000){
        this.vipInfo = res.data;
      }
    },
    hideAmountModal(){
      this.showAmountModal = {
        showModal: 'hideModal',
        showMask: 'hideMask',
      }
    },
    kong(){

    },
    showAmountModalFn(){
      this.showAmountModal.showModal = 'showModal';
      this.showAmountModal.showMask = 'showMask';
    },
    intervalChange(){
      window.scrollTo(0,0);
      this.$nextTick(()=>{
        this.interval = this.$refs.swiper.swiper.activeIndex;
      })
    },
    selectXieyi(){
      this.isSelect = !this.isSelect;
    },
    lineToXieyi(){
      this.$router.push({
          path: '/centerFull/myshop/noShop',
          query: {
              title: '会员卡协议',
              url: 'https://m.xiepinhui.com.cn/smallweb/xieyi.html'
          }
      })
    },
    openVip(){
      let that = this;
      if (that.interval==0){
        if (that.vipInfo.member_info.member_grade==1){
          this.$vux.toast.text('您已开通高级会员');
          return false;
        } else if (that.vipInfo.member_info.member_grade == 2) {
          this.$vux.toast.text('您已开通钻石会员');
          return false;
        }
      }else{
        if (that.vipInfo.member_info.member_grade == 2){
          this.$vux.toast.text('您已开通钻石会员');
          return false;
        }
      }
      if (!that.isSelect) {
        this.$vux.toast.text('请您阅读并同意《鞋品荟会员卡用户协议》');
      } else {
        var index = that.interval;
        this.$router.push({
          path: 'myVip_pay',
          query: {
            vipltoffer: that.vipInfo.banner[index].head.ltoffer,
            vipType: that.interval,
            viporiginal_price: that.vipInfo.banner[index].head.original_price,
            member_grade: that.vipInfo.member_info.member_grade
          }
        })
      }
    },
    openTq(stauts, index){
      var that=this;
      var vipType;
      if (stauts == 1) {
        if (this.interval == 0) {
          vipType = 1;
        } else if (this.interval == 1) {
          vipType = 2;
        }
        var Inx = that.interval;
        this.$router.push({
          path: 'myVip_tq',
          query: {
            vipltoffer: that.vipInfo.banner[Inx].head.ltoffer,
            vipType: that.interval,
            viporiginal_price: that.vipInfo.banner[Inx].head.original_price,
            member_grade: that.vipInfo.member_info.member_grade,
            index,
            TheType: vipType
          }
        })
      }
    },
    kaitong(){
      this.hideAmountModal();
      this.openVip();
    }
  },
  computed: {
      ...mapGetters(["user", "account", "token","addressInfo"])
  },
}
</script>




