<style scoped lang="less">
.weui-search-bar{
  background: #fff !important;
  border: 0;
}
.search-box-fiexd{
//   position: fixed;
//   width: 100%;
  /* top: 0; */
//   z-index: 10;
}
.weui-search-bar__label,
.weui-search-bar__box{
  background:#F7F7F7 !important;
  border-radius: 30/50rem;
}
.weui-search-bar__form{
  border: 0 !important;
}

.pailie-icon{
  font-size: 16pt;
  color: #666;
}
.top-box-center{
  background: #fff;
//   position: fixed;
  width: 100%;
  z-index: 3;
//   margin-top: 44/50rem;
//   top:44/50rem;
  padding-top: 5/50rem;
  padding-bottom: 5/50rem;
}
.top-box-center .picker{
  width:25%;
  text-align: center;
  color: #333;
  font-size:12pt;
  padding-top: 2/50rem;
  padding-bottom: 2/50rem;
  position: relative;
}
.top-box-center .picker:last-child{
  border-right: 0/50rem;
}
.icon-up{
  position: absolute;
  top:-2/50rem;
  color: #999;
}
.icon-down{
  position: absolute;
  top:3/50rem;
}
.icon-xia{
  position: relative;
  margin-top: -5/50rem;
  color: #999;
}
.icon-shaixuanUp{
  color: #999;
}
.icon-active{
  color: #61D8D0 !important
}
.goodsInfo{
  margin-top:85/50rem;
  background: #fff;
}
.goods-li{
  width: 50% !important;
}
.all-right-xiaoliang{
  font-size: 10pt;
  color: #999;
  padding-right: 10/50rem;
}
.all-list-biaoqian{
  padding-left: 10/50rem;
}
.goods-price{
  padding-left: 10/50rem;
}
.goods-name {
  font-size: 10pt;
  padding:0 10/50rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:1;
}
.pTop{
  top: 44/50rem;
  border-top: 1px solid #eee;
}

.shaixuan-view{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 99;
  background: rgba(0, 0, 0, .6)
}
.view-back{
  padding: 0 15/50rem;
  font-size: 12pt;
}
.shaixuan-view-center{
  position: absolute;
  width: 80%;
  right: 0;
  height: 100%;
  background: #fff;
}
.view-center-title{
  padding: 0 15/50rem;
  line-height: 44/50rem;
  font-size: 11pt;
}
.view-center-input-box{
  padding: 5px 15/50rem;
}
.input-item{
  border: 1px #E6E6E6 solid;
  border-radius: 3/50rem;
  padding: 0 15/50rem;
  font-size: 10pt;
  height:35/50rem;
  line-height:35/50rem;
  color:#61D8D0;
}
.hengxian{
  width: 20%;
  height: 1/50rem;
}
.hengxian{
  width:15%;
  height: 1/50rem;
  background: #D8D8D8;
  margin: 0 10/50rem;
}
.list-item-fenlei{
  width: 30%;
  text-align: center;
  background:#F5F5F5;
  margin-bottom: 10/50rem;
  padding:10px 0;
  border-radius: 3/50rem;
  color: #888;
  font-size: 10pt;
}
.list-active-item{
  background: #61D8D0;
  color: #fff;
}
.shaixuan-view-bottom{
  position:absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  line-height: 51/50rem;
}
.view-bottom-btn{
  width: 50%;
  text-align: center;
}
.other-bottom-btn{
  background:#61D8D0;
  color: #fff;
}
.view-input-place{
  text-align: center;
  font-size: 10pt;
}

/* 列状商品列表 */
.lie-list{
  width: 100%;
  background: #fff;
}
.lie-left-img{
  width: 40%;
  padding:5px 10/50rem;
}
.lie-left-img img{
  width: 100% !important;
  border-radius: 5/50rem;
}
.lie-right-box{
  width: 60%;
  padding: 5px 0;
}

.kuai-list-box{
  padding:10/50rem;
}
.goods-li:nth-child(odd) .kuai-list-box{
  padding-right:5/50rem;
}
.goods-li:nth-child(even) .kuai-list-box{
  padding-left:5/50rem;
}
.kuai-list-box img{
  border-radius: 5/50rem;
}
.lie-right-goodsname{
  width: 100% !important;
  color: #333;
  font-size: 11pt;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:2;
}
.fenlei-picker{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
  z-index: 9
}
.fenlei-picker-center{
  background: #fff;
}
.picker-item{
  font-size: 10pt;
  line-height: 44/50rem;
  padding: 0 15/50rem;
}
.weui-search-bar__input{
    border: none;
    width: 100%;
    background:#F7F7F7 !important;
}
.fixedBox{
    position: fixed;
    // top: 55/50rem;
    width: 100%;
}
.paddingTop{
    padding-top: 1/50rem;
}
.shaixuan-div{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
  z-index: 2;
  .shaixuan-div-center{
    background-color: #fff;
    width: 80%;
    height: 100%;
    margin-left: 20%;
    padding: 10/50rem;
    .div-center-title{
      padding: 12/50rem 0;
    }
    .div-center-input-box{
      width: 100%;
      input{
        width: 40%;
      }
      .hengxian{
        width: 15%;
      }
    }
    .shaixuan-div-bottom{
      border-bottom: 1px solid #eee;
    }
    .div-bottom-btn{
      width: 50%;
      text-align: center;
      padding: 10/50rem;
    }
  }
}
.item_align{
  align-items: center; 
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' ref="vux_header" id='vux-header'></x-header>
        <div>
            <div class="fenlei-picker" v-if='isFenlei' :class="isFenlei?'bounceIn': ''" @click.self="bindFenlei">
                <div class="fenlei-picker-center ">
                    <div class="picker-item line_xi_after flex flex-pack-justify" :class="statusTitle==item?'icon-active':''" @click='bindSexChange(index)' :data-index='index' v-for="(item, index) in statusList" :key="index">{{item}}
                        <span v-if="statusTitle==item" class=' iconfont icon-xduihao icon-active'></span>
                        <span v-if="status==index" class=' iconfont icon-xduihao icon-active'></span>
                    </div>
                </div>
            </div>
            <div class="fixedBox">
                <div class="page__bd search-box-fiexd">
                    <div class="weui-search-bar">
                    <div class="weui-search-bar__form">
                        <div class="weui-search-bar__box flex item_align">
                          <span class="weui-icon-search" @click.stop="Gosearch"></span>
                          <input type="text" class="weui-search-bar__input" bindconfirm="Gosearch" ref="search" placeholder="搜索" v-model="keyword" @blur="showInput" confirm-type="search" @focus="hideInput" bindinput="inputTyping" />
                          <!-- <div class="weui-icon-clear" v-if="inputVal.length > 0" bindtap="clearInput">
                              <span type="clear" size="14"></span>
                          </div> -->
                        </div>
                        <label class="weui-search-bar__label" v-if="inputShowed" @click="hideInput">
                          <span class="weui-icon-search" type="search" size="14"></span>
                          <div class="weui-search-bar__text">搜索</div>
                        </label>
                    </div>
                    <div class="weui-search-bar__cancel-btn" @click.stop="pailie">
                        <span v-if="isLi" class='pailie-icon iconfont icon-pailiekuai'></span>
                        <span v-else class='pailie-icon iconfont icon-pailielie'></span>
                    </div>
                    </div>
                </div>
                <div class=" top-box-center flex flex-pack-justify flex-align-center line_xi_after">
                    <div class="picker" :class="statusTitle!='分类'?'icon-active':''" @click="bindFenlei">{{statusTitle}}
                        <span :class="[isFenlei?'icon-shaixuanUp':' icon-xia', statusTitle!='分类'?'icon-active':'']" class="iconfont"></span>
                    </div>
                    <div class="picker" :class="price_px!=0?'icon-active':''" @click="bindPriceChange">{{priceTitle}}
                        <span class='shaixuan-icon iconfont icon-shaixuanUp icon-up' :class='price_px==3?"icon-active":""'></span>
                        <span class='shaixuan-icon  iconfont icon-xia icon-down' :class='price_px==4?"icon-active":""'></span>
                    </div>
                    <div class="picker" :class="xl==1?'icon-active':''" @click="bindxlChange">{{xlTitle}}
                    <!-- <icon class='iconfont icon-xia'></icon> -->
                    </div>
                    <div class="picker" @click='openShaixuan'>{{shaixuanTitle}}
                    </div>
                </div>
            </div>
            <div v-if="goodsInfo!=''" class="paddingTop">
                <div class="goodsInfo flex flex-warp flex-pack-justify" v-show="!isLi">
                  <div class="goods-li " v-for="(item, index) in goodsInfo" :key="index" :id="item.n_goods_id" @click='openGoods(item.n_goods_id)'>
                      <!--widthFix  -->
                      <div class="kuai-list-box">
                          <img mode="" :src="item.goods_image" lazy-load="true"/>
                      </div>
                      <div class="goods-name">{{item.goods_name}}</div>
                      <div class="all-list-biaoqian">
                        <img mode='widthFix' src='http://img.xiepinhui.com.cn/small_app/home/goods_list_biaoqian.png'/>
                        <span class="goods-label" v-if="item.goods_label!=''">{{item.goods_label}}</span>
                      </div>
                      <div class="flex  flex-pack-justify flex-align-center">
                      <div class="goods-price">
                          <span class="list-small-fuhao">￥</span>{{item.purchase_price}}</div>
                      <div class="all-right-xiaoliang">销量：{{item.goods_salenum}}</div>
                      </div>
                  </div>
                </div>
                <div class="goodsInfo" v-show="isLi">
                  <div class="lie-list flex" v-for="(item, index) in goodsInfo" :key="index" :id="item.n_goods_id" @click='openGoods(item.n_goods_id)'>
                    <div class="lie-left-img">
                      <img mode="widthFix" :src="item.goods_image" lazy-load="true"/>
                    </div>
                    <div class="lie-right-box flex flex-warp flex-pack-end ">
                    <div class="lie-right-goodsname">{{item.goods_name}}</div>
                    <div class="flex flex-warp flex-align-end" style='width:100%;'>
                        <div class="all-list-biaoqian" style='width:100%'>
                            <img mode='widthFix' :src='item.member_price_img'/>
                            <span class="goods-label" v-if="item.goods_label!=''">{{item.goods_label}}</span>
                        </div>
                        <div class="flex  flex-pack-justify flex-align-center" style='width:100%'>
                            <span class="goods-price"><span class="list-small-fuhao">￥</span>{{item.group_price}}</span>
                            <span class="all-right-xiaoliang">销量：{{item.goods_salenum}}</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div class="loading" v-show="upLoading">加载中...</div>
                <div class="loading complete" v-show="upLoadingComplete">已加载全部</div>
            </div>

            <div class="null-bg flex flex-pack-center pTop goodsInfo" v-else>
                <div>
                  <!-- <img class="null-other-img" src='../img/zwsp.png'/> -->
                  <div class="null-title">暂无该类型商品~</div>
                </div>
            </div>
            <div class="shaixuan-div" v-show="isView" :class="isView?'bounceIn': ''" @click.self='openShaixuan'>
                <div class="shaixuan-div-center" :style="{paddingTop:height+'px'}">
                  <div class="div-center-title">价格区间</div>
                  <div class="div-center-input-box flex flex-align-center">
                      <input type='number' @input="starPrice" placeholder-class='div-input-place' placeholder="最低价" class="input-item"/>
                      <span class="hengxian"></span>
                      <input type='number' @input="endPrice" placeholder-class='div-input-place' placeholder="最高价" class="input-item"/>
                  </div>
                  <div class="div-center-title">分类</div>
                  <div class="div-center-input-box flex flex-align-center flex-pack-justify flex-warp">
                      <span @click.stop='checkShaixuanFenlei(index, item)' :id="index" :data-text="item" class="list-item-fenlei" :class="n_statusTitle==item?'list-active-item':''" v-for="(item, index) in statusList" :key="index" v-if="index!=0">{{item}}</span>
                  </div>
                  <div class="shaixuan-div-bottom flex line_xi_before">
                      <div class="div-bottom-btn" @click='clearInput'>重置</div>
                      <div class="div-bottom-btn other-bottom-btn" @click='Gosearch'>确定</div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { isScrollBottom } from '@/utils/comm.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
import 'animate.css';
export default {
    components: {
        XHeader
    },
    data() {
        return {
          price: 0,
          page: 2,
          xl: 0,
          price_px: 0,
          status: 0,
          goodsInfo: 1,
          priceTitle: "价格",
          statusTitle: "分类",
          xlTitle: "销量",
          shaixuanTitle: "筛选",
          priceList: ['默认', '从高到低', '从低到高'],
          statusList: ['全部', '男鞋', ' 女鞋', '童鞋'],
          xlList: ['默认', '从高到低', ' 从低到高'],
          customItem: "全部",
          upLoading: true,
          upLoadingComplete: false,
          selecttype: 0,
          inputShowed: true,
          keyword: "",
          imgheight: "",
          satrtprice: "",
          endprice: "",
          isView: false,
          isLi: false,
          isFenlei: false,
          n_statusTitle: "",
          n_status: 0,
          nvabarData: {
            showCapsule: 1,
            title: '全部商品',
          },
          height: 0, 
        }
    },
    created() {
        this.imgheight = window.innerWidth / 2;
        this.showList();
    },
    mounted() {
      this.$nextTick(()=>{
        this.height = this.$refs.vux_header.$el.clientHeight;
        isScrollBottom(this.onReachBottom)
      })
    },
    methods: {
        async showList(){
            let that = this;
            let data = {
                plat: 3,
                page: 1,
                type_price: that.price,
                class_id: that.status,
                sales: that.xl,
                type: 0,
                kw: that.keyword,
                satrtprice: that.satrtprice,
                endprice: that.endprice
            }
            const [err, res] = await api.homelist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            } 
            if(res.code == 2000){
                this.goodsInfo = res.data.list;
                this.defimg = true;
            }
        },
        async onReachBottom(){
          if(this.upLoadingComplete)return;
          this.upLoading = true;
          let that = this;
          let data = {
            plat: 2,
            page: that.page,
            type_price: that.price,
            class_id: that.status,
            sales: that.xl,
            type: 0,
            kw: that.keyword,
            satrtprice: that.satrtprice,
            endprice: that.endprice
          }
          const [err, res] = await api.homelist(data);
          if (err) {
              this.$vux.toast.text(err.msg);
              return;
          } 
          if(res.code == 2000){
            if (res.data.list != "") {
              var thisres = res;
              that.goodsInfo = that.goodsInfo.concat(thisres.data.list);
              that.upLoading = false;
              that.page = that.page + 1;
            } else {
              that.upLoadingComplete = true;//把“没有数据”设为true，显示  
              that.upLoading = false;//把"加载中"的变量设为false，隐藏  
            }
          }
        },
        bindSexChange(index){
          var status;
          var title = this.statusList[index];
          if (index == "1") {
            status = 1833;
          } else if (index == "2") {
            status = 1846;
          } else if (index == "3") {
            status = 1859;
          }
          else {
            status = 0;
            title = "分类"
          }
          this.statusTitle = title;
          this.status = status;
          this.page = 2;
          this.isFenlei = false;
          this.upLoadingComplete = false; //把“没有数据”设为true，显示
          this.upLoading = false;
          this.showList();
        },
        bindFenlei(){
          this.isFenlei = !this.isFenlei;
        },
        bindPriceChange(){
          var that = this;
          var price;
          if (that.price_px == 0) {
            that.price_px = 3;
            price = 3;
          } else if (that.price_px == 3) {
            that.price_px = 4;
            price = 4;
          } else if (that.price_px == 4) {
            that.price_px = 3;
            price = 3;
          }
          this.price_px = that.price_px;
          this.page = 2;
          this.xl = price;
          this.selecttype = 0;
          this.upLoadingComplete =  false;  //把“没有数据”设为true，显示  
          this.upLoading = false;
          this.showList();
        },
        bindxlChange(){
          this.page = 2;
          this.xl = 1;
          this.upLoadingComplete = false;
          this.upLoading = false;  //把“没有数据”设为true，显示  
          this.showList(this);
        },
        openShaixuan(){
          this.isView = !this.isView;  
        },
        openGoods(goodsid){
          this.$router.push({
            path: '/index/goodsInfoPindan',
            query: {
              goodsId: goodsid
            }
          })
        },
        checkShaixuanFenlei(index, title){
          var status;
          if (index == 1) {
            status = 1833;
          } else if (index == 2) {
            status = 1846;
          } else if (index == 3) {
            status = 1859;
          }
          this.n_statusTitle = title;
          this.n_status = status;
        },
        clearInput(){
          this.keyword = "";
          this.page = 2;
          this.xl = 0;
          this.price_px = 0;
          this.statusTitle = "分类";
          this.n_statusTitle = "分类";
          this.status = 0;
          this.satrtprice = "";
          this.endprice = "";
          this.upLoadingComplete = false;
          this.showList()
        },
        starPrice(e){
          this.starPrice = e.target.value;
        },
        endPrice(e){
          this.endPrice = e.target.value;
        },
        Gosearch(){
          this.page = 2;
          this.upLoadingComplete = false;
          if(this.n_statusTitle)this.statusTitle = this.n_statusTitle;
          this.status = this.n_status;
          this.isView = false;
          this.showList();
        },
        showInput(){
          this.inputShowed = true;
        },
        pailie(){
          this.isLi = !this.isLi;
        },
        hideInput(){
          this.inputShowed = false;
          this.$refs.search.focus();
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
