<style lang="less" scoped>
page{
  padding-bottom: 55/50rem;
}
.order-status-box{
  background: linear-gradient(to right,rgba(254,107,85,1),rgba(237,63,97,1));
  color: #fff;
  padding: 15/50rem;
  font-size: 14*2+2rem;
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
  font-size: 10*2+2rem;
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
  font-size:16*2+2rem;
  color: #888;
}
.address-select-box{
  width: 90%;
}
.address-header{
  padding-bottom: 10/50rem;
  font-size: 11*2+2rem;
}
.address-name{
  padding-right: 15/50rem;
}
.order-address-bottom{
  font-size: 10*2+2rem;
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
  font-size: 16*2+2rem;
  margin-right: 5/50rem;
  color: #FB4C72;
}
.header-title{
  font-size: 12*2+2rem;
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
  font-size: 11*2+2rem;
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
  font-size:10*2+2rem;
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
  font-size:9*2+2rem;
  color: #666;
}
.right-goodsnum{
  text-align: right;
}
.right-goodsnum .goodsprice {
  font-size: 10*2+2rem;
  color: #000;
}

.right-goodsnum .goodsnum {
  font-size:10*2+2rem;
  color: #888;
  line-height: 20/50rem;
}


.goods-shouhou-btn{
  border:1/50rem #61D8D0 solid; 
  color: #61D8D0;
  font-size:10*2+2rem;
  padding: 2/50rem 5/50rem;
  border-radius: 3/50rem;
}
.goods-shouhou-btn-hui{
  border:1/50rem #333 solid; 
  color: #333;
  font-size:10*2+2rem;
  padding: 2/50rem 5/50rem;
  border-radius: 3/50rem;
}
.order-bottom {
  line-height: 35/50rem;
  background: #fff;
}
.text-font {
  font-size:10*2+2rem;
  padding-right: 15/50rem;
  color: #888;
}
.order-info{
  background: #fff;
  margin-top:5/50rem;
}
.info-item{
  padding:10/50rem 15/50rem;
  font-size: 10*2+2rem;
}
.info-item-other{
  padding:5/50rem 15/50rem;

}
.other-title{
  font-size: 10*2+2rem;
}
.item-pindan{
  padding:10/50rem 15/50rem;
  font-size: 10*2+2rem;
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
  border-right: 1/50rem #f1f1f1 solid !important;
  margin: 0;
}
.kefu-box span{
  font-size: 12*2+2rem;
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
  font-size: 10*2+2rem;
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

</style>
<template>
    <div>
        <x-header :left-options="{backText:''}" title="补货订单详情" id="vux-header"></x-header>
        <div v-if="infodata">
            <div class="orderinfo-address-box flex flex-align-center">
                <!-- <span class='left-icon iconfont icon-dizhi'></span> -->
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
            </div>
        </div>
        
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
    components: {
        loading,
        XHeader
    },
    data(){
        return {
            infodata: null,
            goodsImgwidth: ''
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
                console.log(this.infodata)
            }
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    },
}
</script>


