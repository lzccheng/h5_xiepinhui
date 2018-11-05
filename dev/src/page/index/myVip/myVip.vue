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
.vip-tequan image{
  width: 50%;
  height:35/50rem;
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
    <div>
        <x-header :left-options="{backText:''}" :title="nvabarData.title" id="vux-header"></x-header>
        <div>
          <div class="mask flex flex-align-center" :class="showAmountModal.showMask" @click="hideAmountModal">
            <!-- :style='{height:modalHeigth+"px",top:modalTop+"px"}' -->
            <div class="modal" :class="showAmountModal.showModal" :style='{"height":300+"px","top":400+"px"}'>
              <!-- :style='{height:topimg+"px"}' -->
              <div class="modal-content"  @click.stop="kong" :style='{"height":400+"px"}'>
                <img src="http://img.xiepinhui.com.cn/small_app/vip/huangjin_dengji.png" class="model-huizhang" v-if="interval==0" alt="">
                <img src="http://img.xiepinhui.com.cn/small_app/vip/zuanshi_dengji.png" class="model-huizhang" v-if="interval==1" alt="">
                <span class='close iconfont icon-close-x' @click="hideAmountModal"></span>
                <div class="model-top-juli">
                  <div class="vip-tequan shenqing-jsq">
                    <img v-if="interval==0" src="http://img.xiepinhui.com.cn/small_app/vip/huangjin_biaoti.png" alt="">
                    <img v-if="interval==1" src="http://img.xiepinhui.com.cn/small_app/vip/zuanshi_biaoti.png" alt="">
                  </div>
                  <div class="jsq-jieshao-shengqian" :class="interval==0?'shengqian-huangjin':'shengqian-zuanshi'">开通
                    <span v-if="interval==0">高级</span>
                    <span v-if="interval==1">高级</span>会员卡，平均每年可省
                    <span class="money-color">{{vipInfo.banner[interval].calculation.offer}}</span>
                    元
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin ,XSwitch ,Picker } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
export default {
  components: {
    XHeader
  },
  data(){
    return {
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

    },
    kong(){

    },
    hideAmountModal(){

    }
  },
  computed: {
      ...mapGetters(["user", "account", "token","addressInfo"])
  },
}
</script>




