<style lang="less" scoped>
page{
  padding-bottom: 55/50rem;
}
.order-status-box{
  background: linear-gradient(to right,rgba(254,107,85,1),rgba(237,63,97,1));
  color: #fff;
  padding: 15/50rem;
  font-size: 14pt;
}
.order-sn{
  font-size: 13/50rem;
  color: #333;
}
.order-time{
  font-size: 12/50rem;
  color: #666;
}
.small-icon{
  font-size: 10pt;
}
.status-icon{
  width: 55/50rem;
  height: 55/50rem;
}
.orderinfo-address-box{
  padding:5/50rem 15/50rem;
  background: #fff;
}
.left-icon{
  width: 10%;
  font-size:16pt;
  color: #888;
}
.address-select-box{
  width: 90%;
}
.address-header{
  padding-bottom: 10/50rem;
  font-size: 11pt;
}
.address-name{
  padding-right: 15/50rem;
}
.order-address-bottom{
  font-size: 10pt;
  color: #888;
}
.weui-cell__bd{
  color: #888;
}
.weui-cells::after{
  display: none;
}
.pindan-box{
  padding: 0/50rem 15/50rem;
  background: #fff;
  margin-top: 5/50rem;
}

.icon-info_pindan{
  font-size: 16pt;
  margin-right: 5/50rem;
  color: #FB4C72;
}
.header-title{
  font-size: 12pt;
  padding-bottom: 5/50rem;
}
.pindan-touxing{
  padding: 10/50rem;
}
.pindan-touxing img{
  width: 50/50rem;
  height: 50/50rem;
  border-radius: 100%;
  margin-right: 10/50rem;
}
.ordershop-title{
  padding:10/50rem 15/50rem;
  background: #fff;
  margin-top: 10/50rem;
  font-size: 11pt;
}
.ordershop-title img{
  width: 20/50rem;
  height: 20/50rem;
  margin-right: 10/50rem;
}
.list-center-goods {
  background: #fff;
  padding-bottom: 5/50rem;
}

.live-order-list-left-img{
  position: relative;
  text-align: center;
  padding-top: 5/50rem;
  padding-left:5/50rem;
}
.cetenr-goodsinfo {
  width:calc(100% - 100/50rem);
  padding:5/50rem;
  position: relative;
  padding-left: 10/50rem;
}

.left-goodsImage {
  width:80/50rem;
  height: 80/50rem !important;
  border-radius: 5/50rem;
}
.cetenr-goodsinfo .goodsname {
  color: #000;
  font-size:14px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.bottom-guige{
 width: 95%;
 line-height: 20/50rem;
}
.cetenr-goodsinfo .goods-spec {
  font-size:9pt;
  color: #666;
}
.right-goodsnum{
  text-align: right;
}
.right-goodsnum .goodsprice {
  font-size: 10pt;
  color: #000;
}

.right-goodsnum .goodsnum {
  font-size:10pt;
  color: #888;
  line-height: 20/50rem;
}


.goods-shouhou-btn{
  border:1/50rem #61D8D0 solid; 
  color: #61D8D0;
  font-size:10pt;
  padding: 2/50rem 5/50rem;
  border-radius: 3/50rem;
}
.goods-shouhou-btn-hui{
  border:1/50rem #333 solid; 
  color: #333;
  font-size:10pt;
  padding: 2/50rem 5/50rem;
  border-radius: 3/50rem;
}
.order-bottom {
  line-height: 35/50rem;
  background: #fff;
}
.text-font {
  font-size:10pt;
  padding-right: 15/50rem;
  color: #888;
}
.order-info{
  background: #fff;
  margin-top:5/50rem;
}
.info-item{
  padding:10/50rem 15/50rem;
  font-size: 10pt;
}
.info-item-other{
  padding:5/50rem 15/50rem;

}
.other-title{
  font-size: 10pt;
}
.item-pindan{
  padding:10/50rem 15/50rem;
  font-size: 10pt;
}
.copy-btn{
  border: 1/50rem #333 solid;
  color: #333;
  border-radius:3/50rem;
  padding: 0/50rem 5/50rem;
}
.kefu-box{
  background: #fff;
  margin:5/50rem 0/50rem;
}
.kefu-box button{
  width: 50%;
  background: #fff;
  border-radius: 0 !important;
  border: 0/50rem !important;
}
.kefu-box .one{
  border-right: 1px #f1f1f1 solid !important;
  margin: 0;
}
.kefu-box span{
  font-size: 12pt;
}
.kefu-box button::after{
  display: none;
}
.kefu-icon{
  color: #42B034;
  font-size:14pt !important;
}
.icon-dianhua{
  font-size: 18pt !important;
}
.kefu-dianhua{
  width: 50%;
  text-align: center;
}
.order-list-info-btn{
  position: fixed;
  width: 100%;
  bottom: 0/50rem;
  background: #fff;
  height:51/50rem;
}
.order-list-info-btn span{
  background: #61D8D0;
  margin-right: 15/50rem;
  padding:2/50rem 10/50rem;
  color:#fff;
  border-radius:3/50rem;
  font-size: 10pt;
}

.moren{
  border: 1/50rem  rgba(51,51,51,1) solid;
  color: rgba(51,51,51,1) !important;
  background: none !important;
}
.moren-hui{
  border: 1/50rem  #333 solid;
  color: #333 !important;
  background: none !important;
}
.icon_map{
  width: 20/50rem;
}
._box{
  background-color: #F8F8F8ee;
}
</style>
<template>
    <div class="_box" :style="{height: winHeight + 'px'}">
        <x-header :left-options="{backText:''}" title="补货订单详情" id="vux-header"></x-header>
        <div v-if="infodata">
            <div class="orderinfo-address-box flex flex-align-center">
                <span class='left-icon iconfont icon-dizhi icon_map'></span>
                <div class="address-select-box">
                    <div class='flex address-header'>
                        <span class="address-name">{{infodata.address_name}}</span>
                        <span class="address-phone">{{infodata.address_phone}}</span>                    
                    </div>
                    <div class='order-address-bottom'>
                        <span>{{infodata.address_info}}</span>
                    </div>
                </div>
            </div>
            <div class="ordershop-title flex  flex-align-center flex-pack-justify">
                <span class="order-sn">单号:{{infodata.refit_sn}}</span>
            </div>
            <div 
            class='list-center-goods flex'
            v-for="(goodslist, index) in infodata.goods_list"
            :key="index">
                <div class="live-order-list-left-img">
                    <img class="left-goodsImage" :src="goodslist.goods_image" alt="">
                </div>
                <div class='cetenr-goodsinfo flex flex-space flex-warp'>
                  <div class="goodsname">{{goodslist.goods_name}}</div>
                  <dir class='bottom-guige flex flex-pack-justify'>
                    <div class="goods-spec">
                      <div>{{goodslist.goods_spec}}</div>
                    </div>
                    <div class="right-goodsnum ">
                      <div class="goodsnum">x {{goodslist.goods_num}}</div>
                    </div>
                  </dir>
                </div>
            </div>
            <div class="order-bottom flex  flex-align-center flex-pack-end  line_xi_after">
              <span class="text-font">共{{infodata.num }}件 实付:
                  <span style='color:#FB4C72'>￥{{infodata.pay_amount}}</span>  
              </span>
            </div>
            <div class="kefu-box flex flex-align-center">
              <div class='one' style="width: 50%;text-align: center;">
                <span class='kefu-icon iconfont icon-xiaoxi'></span>
                <span>联系商家</span>
              </div>
              <div class="kefu-dianhua" @click="calling">
                <span class='kefu-icon iconfont icon-dianhua'></span>
                <span style="position: relative;top: -3px">拨打电话</span>
              </div>
            </div>
            <div class="order-info">
              <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                  <div class="weui-cell__bd">快递方式：
                    <span style='color:#333'>{{infodata.shipping_company | valFilter}}</span>
                  </div>
                </div>
              </div>
              <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                 <div class="weui-cell__bd">运单编号：
                    <span style='color:#333'>{{infodata.shipping_code | valFilter}}</span>
                  </div>
                </div>
              </div> 
              <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                 <div class="weui-cell__bd">订单编号：
                    <span style='color:#333'>{{infodata.refit_sn | valFilter}}</span>
                  </div>
                  <div class="weui-cell__ft copy-btn" v-if="infodata.refit_sn" v-clipboard:copy="infodata.refit_sn" v-clipboard:success="copyTxt" v-clipboard:error="onCopyErr">复制</div>
                </div>
              </div>
              <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell">
                 <div class="weui-cell__bd">下单时间：
                    <span style='color:#333'>{{infodata.add_time | valFilter}}</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata && infodata.pay_status=='1'">
            <span class="moren" @click="receiving(infodata.refit_id,'cancel')">取消订单</span>
            <span @click="gopay(infodata.refit_id)">去支付</span>
        </div>
        <!-- <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before'>
          <span v-if="infodata.is_input==2" class="moren">交易关闭</span>
        </div> -->
        <div class='order-list-info-btn flex flex-pack-end flex-align-center line_xi_before' v-if="infodata && infodata.pay_status=='2' && infodata.is_input=='1'">
          <span @click="receiving(infodata.refit_id,'sure')">确认收货</span>
        </div>
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import { wxPay } from "@/utils/wx_sdk.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
// import { constants } from 'http2';
export default {
    components: {
        loading,
        XHeader
    },
    data(){
        return {
            infodata: null,
            goodsImgwidth: '',
            winHeight: window.innerHeight - 50,
            refit_id: "",
        }
    },
    created(){
        this.refit_id = this.$route.query.refit_id;
        this.sub_member_id = this.$route.query.sub_member_id || 0;
        this.goodsImgwidth = window.innerWidth*0.3 -20;
    },
    mounted(){
        this.showdata();
        
    },
    methods: {
        async showdata(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                refit_id: this.refit_id,
                sub_member_id: this.sub_member_id
            }
            const [err, res] = await api.refitdetail(data);
             if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == '2000'){
                this.infodata = res.data;
            }
        },
        copyTxt(){
          this.$vux.toast.text("复制成功", "top");
        },
        onCopyErr(){
          console.log("onCopyErr");
        },
        async cancelReq(data){
          const [err, res] = await api.delrefit(data);
          if (err) {
            this.$vux.toast.text(err.msg);
            return;
          } 
          if(res.code == '2000'){
            this.$vux.toast.text('取消成功');
            this.$router.push({
              path: '/centerFull/myshop/subreplenishOrder'
            });
          }
        },
        calling(){
          window.location.href = 'tel:4009639299'
        },
        receiving(refit_id,type){
          let that = this;
          let data = {
            plat: 3,
            account: this.account,
            token: this.token,
            refit_id: this.refit_id,
            sub_member_id: this.sub_member_id
          }
          let content = '';
          let title = '';
          let fn = '';
          switch(type){
            case 'sure':
              title = '确认收货';
              content = '确认收到货物？';
              fn = 'receivingReq';
              break;
            case 'cancel':
              title = '取消订单';
              content = '确定取消订单？';
              fn = 'cancelReq';
              break;
          }
          this.$vux.confirm.show({
                title: title,
                content: content,
                onConfirm () {
                    that[fn](data);
                }
            })
          
        },
        async receivingReq(data){
          const [err, res] = await api.confirmrefit(data);
          if (err) {
            this.$vux.toast.text(err.msg);
            return;
          } 
          if(res.code == '2000'){
            this.showdata();
          }
        },
        async gopay(){
          // this.$wechat.config({})
          let that = this;
          let data = {
            plat: 3,
            account: this.account,
            token: this.token,
            refit_id: this.refit_id,
            pay_code: 2,
            sub_member_id: this.sub_member_id?this.sub_member_id: '0',
            openid: this.user.openid
          }
          this.$vux.loading.show({
            text: '支付中...'
          })
          const [err, res] = await api.topay(data);
          if (err) {
              this.$vux.toast.text(err.msg);
              return;
          }
          if(res.code == '2000'){
            var selfData = res;
            let success = res =>{
              that.showdata();
            }
            wxPay(this,{...res.data.pay_param,success})
          }
        }
    },
    filters: {
      valFilter(val){
        return val?val: '暂无'
      }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    },
}
</script>


