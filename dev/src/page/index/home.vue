<style lang="less" scoped>
.index-box {
  background: #f5f5f5;
  min-height: 100%;
  box-sizing: border-box;
}
.swiper-wrapper{
  display: flex;
}
.swiper-slide {
  text-align: center;
  font-size: 38/100rem;
  font-weight: 700;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination-bullet {
    background-color: red;
}
.slide-image{
  width:100%;
}
.page__bd {
  margin-bottom: 5px;
}

.weui-grid__label {
  font-size: 14px;
}
.weui-grid {
  padding: 5px;
  width: 20%;
  background: transparent !important;
  text-align: center;
  float: left;
}
.weui-grid__icon {
  width:130/100rem;
  height:130/100rem;
}
.active-img-box img {
width:100%;
margin:auto;

}
.weui-grids{
  overflow: hidden;
}
.news-silder {
  width: 100%;
  margin-top: 10/50rem;
  margin-bottom: 10/50rem;
}
.gonggao-img {
  width: 35/50rem;
  height: 35/50rem;
  margin: 5/50rem 10/50rem;
  padding-right: 5px;
  border-right: 1px red solid;
}
.silder-news-rigth {
  padding: 2.5px;
  margin-right: 10/50rem;
}

.silder-news-rigth img {
  width: 40/50rem;
  height: 40/50rem;
  border-radius: 5/50rem;
}
.swiper_container {
  height: 44/50rem;
  width: 90%;
  padding-right: 5px;
}
.swiper_item {
  height: 44/50rem;
  line-height: 21/50rem;
  font-size: 12/50rem;
}
.swiper-shadow {
  width: 100%;
  height: 44px/50rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
}
.active-to-box {
  position: relative;
}
.news-text{
  font-size: 14px;
  font-weight: lighter;
}
.left img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.bankuai-goods-img-seckill {
  width:65% !important;
  height:60% !important;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  bottom: 5%;
}
.biaoqian-miaosha {
  right: 10/50rem;
  width: 45/50rem !important;
  height: 45/50rem;
  position: absolute;
  top: 70/50rem;
  background: url(http://img.xiepinhui.com.cn/small_app/home/home_miaosha_bg.png) no-repeat;
  border-radius: 100%;
  background-size: 100%;
  text-align: center;
  color: #fff;
  z-index:2;
  animation: fanzhuan 3s linear infinite ;
}

@-webkit-keyframes fanzhuan {
  0% {
    transform: rotateY(0deg);
    margin-top: -5px;
  }

  20% {
    transform: rotateY(180deg);
    margin-top: 0px;
  }

  40% {
    transform: rotateY(360deg);
    margin-top: -5px;
  }

  60% {
    transform: rotateY(360deg);
    margin-top: 0px;
  }

  80% {
    transform: rotateY(360deg);
    margin-top: -5px;
  }

  100% {
    transform: rotateY(360deg);
    margin-top: 0px;
  }
}
.like {
  margin-bottom: 5px;
  padding: 5px;
}

.like .left {
  width: 49.3%;
  vertical-align: middle;
  position: relative;
}

.bg-left-img, .right-bg-img {
  border-radius: 5px;
  max-height:300/50rem;
}
.right-bg-img{
  max-height: 150/50rem;
}
.right img {
  width: 100%;
  vertical-align: middle;
}
.bankuai-goods-img-right {
  width: 35% !important;
  position: absolute;
  right: 8/50rem;
  bottom: 10/50rem;
}
.right-item {
  position: relative;
}
.biaoqian-miaosha-top {
  font-size: 14px;
  margin-top: 18/50rem;
  line-height: 15/50rem;
}
.biaoqian-miaosha-bottom {
  font-size: 12px;
  line-height: 15/50rem;
}
.title-one {
  font-size: 12px;
  font-weight: bold;
}
.title-two {
  font-size: 12px;
}
.like .miaosha-box {
  position: absolute;
  z-index: 2;
  left: 15/50rem;
  top:3px;
  color: #fff;
}
.title-time {
  text-align: center;
  font-size: 12px;
  color: #333;
  margin-top:5px;
}
.small-fuhao-miaosha{
  font-size: 12px;
}
.countdown__item{
  display:flex;
flex-flow:row nowrap;
align-items:center;

}
.hourTime,.minuteTime,.secondTime{
  width:20px;
  font-size:12px;
  color:#ffffff;
  background:#000;
  text-align:center;
  border-radius:4px;
  padding:2px 0;
}
.gapDot{
  font-size:12px;
  color:#000;
  padding:0 3px;
}
.model-header-img {
  width: 100%;
  font-size: 0;
}
.model-header-img img {
  width: 100%;
  vertical-align: middle;
}
.scroll-box {
  padding: 5px;
  background: #fff;
  position: relative;
}
.recommend_scroll_x_box {
margin:auto;
white-space:nowrap;
display:flex;
overflow:scroll;
background:#fff;
}
.recommend_hot_box {
width:180/100rem;
margin-right:12/100rem;
display:inline-block;
text-align:center;
}
.recommend_hot_image {
  width: 180/100rem;
  height: 180/100rem;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
.xiaosanjiao::before {
  content: '';
  position: absolute;
  border: 10/50rem solid transparent;
  border-bottom-color: #fff;
  text-align: center;
  top: -20/50rem;
  left: 48.5%;
  z-index: 5;
}
.goods-duan-name {
  color: #2a2a2a;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.goods-duan-price {
  font-size: 10pt;
  color: #fb4c72;
}
.more-box {
  position: absolute;
  width: 180/100rem;
  height: 180/100rem;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  line-height: 180/100rem;
  margin-left: -190/100rem;
  color: #fff;
  font-size: 12px;
  right: 0px;
}
</style>

<template>
    <div class="index-box">
        <!-- <router-link to="/index/goodsInfoPindan?goodsId=991" tag="button">goodsInfoPindan</router-link> -->
      <div class="index-box" style="background:#fff;">
          <!-- 首页内容开始 -->

        
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide  v-for="(item,index) in newHomelist.banner_data" :key="index" bindtap='link' :data-index="index" :data-type="item.type" :data-id="item.data">
              <img  :src="item.image" class="slide-image"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        
        <div class="page__bd">
          <div class="weui-grids">
            <div class="weui-grid" hover-class="weui-grid_active" v-for="(itemActive,index) in newHomelist.center_module" :key="index" bindtap='nacigator' :data-status="itemActive.status" :data-type="itemActive.type" :data-value="itemActive.value" :data-index="index">
              <img class="weui-grid__icon" :src="itemActive.img"/>
              <div class="weui-grid__label">{{itemActive.title}}</div>
            </div>
          </div>
        </div>

        <div class="active-to-box ">
          <div class="news-silder flex flex-align-center">
            <div class="swiper-shadow"></div>
            <img class="gonggao-img" src='http://img.xiepinhui.com.cn/small_app/programOldImgFile/gonggao.png'/>
            <swiper :options="swiperOption2" class="swiper_container">
              
                <swiper-slide v-for="(item,index) in newHomelist.advertising" :key="index">
                  <div class="swiper_item">
                    <div class="news-text" v-if="nesListName.type=='0'">
                      恭喜！{{item.nick}}刚刚和{{item.member_nick}}拼单了{{item.unit_price}}元{{item.goods_name}}
                    </div>
                    <div class="news-text" wx:else>
                      恭喜！{{item.member_nick}}刚刚{{item.unit_price}}元购买了{{item.goods_name}}
                    </div>
                  </div>
                  <div class="silder-news-rigth">
                    <img :src='item.goods_image'/>
                  </div>
                </swiper-slide>
                <!-- <div class="swiper-pagination2" slot="pagination"></div> -->
            
            </swiper>
          </div>
          <div class="active-img-box" @click='link' :data-type="nseckilltypes.temporary.type" :data-id="nseckilltypes.temporary.data" v-if="nseckilltypes.temporary.is_show && nseckilltypes.temporary!=''">
            <img :src="nseckilltypes.temporary.img"/>
          </div>
      </div>


      <div class="like flex flex-pack-justify">
        <div class="left" catchtap='openSpike' :data-type='nseckilltypes.seckill.type' :id="nseckilltypes.seckill.value">
          <img class="bg-left-img" :src="nseckilltypes.seckill.img" bindload="imgsrc" style='height:leftHeigthpx'/>
          <div class="biaoqian-miaosha" v-if="isShowdonghua">
            <div class="biaoqian-miaosha-top">
              <span class="small-fuhao-miaosha">￥</span>{{nseckilltypes.seckill.s_goods_price}}
            </div>
          </div>
          <img mode='widthFix' class="bankuai-goods-img-seckill" :src='nseckilltypes.seckill.goods_image'/>
          <div class="miaosha-box">
            <div class="title-one" style='color:#FF585F'>{{nseckilltypes.seckill.s_type_name}}</div>
            
            <div class="title-time flex flex-align-center">
              <span class="hourTime">01</span><span class="gapDot">:</span><span class="minuteTime">12</span><span class="gapDot">:</span><span class="secondTime">43</span>
            </div>
            <img mode='widthFix' class="seckill-left-img" :src="nseckilltypes.seckill.title_img"/>
          </div>
        </div>
        <div class="right">
          <div class="right-item" v-for="(rightList,index) in nseckilltypes.activity" :key="index" bindtap="openActive" :id="rightList.s_id">
            <img class="right-bg-img" :src='rightList.img' style='height:rightHeightpx'/>
            <img mode='widthFix' class="bankuai-goods-img-right" :src='rightList.goods_image'/>
          </div>
        </div>
      </div>

      <div v-for="(allitem,index) in nseckilltypes.homegoods" :key="index">
        <div class="model-header-img">
          <img mode='widthFix' :src="allitem.s_small_map"/>
          <img mode='widthFix' :src='allitem.img' bindtap="openActive_tj" :id="allitem.s_id"/>
        </div>
        <div class='scroll-box '>
          <div class="recommend_scroll_x_box flex xiaosanjiao" scroll-x="true">
            <div class="recommend_hot_box" v-for="(item_list,index) in allitem.goods" :key="index" bindtap='openGoods' :id="item_list.n_goods_id">
              <img :src="item_list.goods_image" class="recommend_hot_image"/>
              <div class="goods-duan-name">{{item_list.goods_name}}</div>
              <div class="goods-duan-price">￥{{item_list.purchase_price}}</div>
            </div>
            <div class="recommend_hot_box more-box" bindtap="openActive_tj" :id="allitem.s_id">更多</div>
          </div>
        </div>
      </div>
  

  

<!-- 
        <div style="background: #fff;">
          <div class="silder-box">
            <swiper class="silder" indicator-dots="{{indicatorDots}}" autoplay="true" circular="true" style='height: 270/100rem'>
              <swiper-item v-for="(item,index) in newHomelist.banner_data" :key="index" bindtap='link' :data-index="index" :data-type="item.type" :data-id="item.data">
                <img mode="scaleToFill" :src="item.image" class="slide-image"/>
              </swiper-item>
            </swiper>
          </div>
          <div class="page__bd">
            <div class="weui-grids">
              <button class="weui-grid" plain hover-class="weui-grid_active" v-for="(item,index) in newHomelist.center_module" :key="index" bindtap='nacigator' :data-status="item.status" :data-type="item.type" :data-value="item.value" :data-index="index">
                <img class="weui-grid__icon" :src="item.img"/>
                <div class="weui-grid__label">{{item.title}}</div>
              </button>
            </div>
          </div>

          <div class="active-to-box ">
            <div class="news-silder flex flex-align-center">
              <div class="swiper-shadow"></div>
              <img class="gonggao-img" src='http://img.xiepinhui.com.cn/small_app/programOldImgFile/gonggao.png'/>
              <swiper class="swiper_container" vertical="true" autoplay="true" circular="true" interval="2000">
                <div v-for="(item,index) in newHomelist.advertising" :key="index">
                  <swiper-item class="flex">
                    <div class="swiper_item">
                      <div class="news-text" wx:if="{{nesListName.type=='0'}}">
                        恭喜！{{item.nick}}刚刚和{{item.member_nick}}拼单了{{item.unit_price}}元{{item.goods_name}}
                      </div>
                      <div class="news-text" wx:else>
                        恭喜！{{item.member_nick}}刚刚{{item.unit_price}}元购买了{{item.goods_name}}
                      </div>
                    </div>
                    <div class="silder-news-rigth">
                      <img :src='item.goods_image'/>
                    </div>
                  </swiper-item>
                </div>
              </swiper>
            </div>

            
            <div class="active-img-box" bindtap='link' :data-type="nseckilltypes.temporary.type" :data-id="nseckilltypes.temporary.data" v-if="nseckilltypes.temporary.is_show && nseckilltypes.temporary!=''">
              <img mode='widthFix' :src="nseckilltypes.temporary.img"/>
            </div>
          </div>

          <div class="like flex flex-pack-justify">
            <div class="left" catchtap='openSpike' :data-type='nseckilltypes.seckill.type' :id="nseckilltypes.seckill.value">
              <img class="bg-left-img" :src="nseckilltypes.seckill.img" bindload="imgsrc" style='height:{{leftHeigth}}px'/>
              <div class="biaoqian-miaosha" v-if="isShowdonghua">
                <div class="biaoqian-miaosha-top">
                  <span class="small-fuhao-miaosha">￥</span>{{nseckilltypes.seckill.s_goods_price}}
                </div>
              </div>
              <img mode='widthFix' class="bankuai-goods-img-seckill" :src='nseckilltypes.seckill.goods_image'/>
              <div class="miaosha-box">
                <div class="title-one" style='color:{{nseckilltypes.seckill.color}}'>{{nseckilltypes.seckill.s_type_name}}</div>
                
                <div class="title-time flex flex-align-center">
                  <wxc-countdown countdown="{{countdown}}" num-style="{{numStyle}}" symbol-style="{{symbolStyle}}" format="hh:mm:ss"></wxc-countdown>
                </div>
                <img mode='widthFix' class="seckill-left-img" :src="nseckilltypes.seckill.title_img"/>
              </div>
            </div>
            <div class="right">
              <div class="right-item" v-for="(rightList,index) in nseckilltypes.activity" :key="index" bindtap="openActive" :id="rightList.s_id">
                
                <img class="right-bg-img" :src='rightList.img' style='height:{{rightHeight}}px'/>
                <img mode='widthFix' class="bankuai-goods-img-right" :src='rightList.goods_image'/>
              </div>
            </div>
          </div>

          <div class="huodongbankuai" v-if="nseckilltypes.sample.is_show &&sample.temporary!=''" bindtap='link' :data-type="nseckilltypes.sample.type" :data-id="nseckilltypes.sample.data">
            <img mode="widthFix" :src="nseckilltypes.sample.img"/>
          </div>

          <div v-for="(allitem,index) in nseckilltypes.homegoods" :key="index">
            <div class="model-header-img">
              <img mode='widthFix' :src="allitem.s_small_map"/>
              <img mode='widthFix' :src='allitem.img' bindtap="openActive_tj" :id="allitem.s_id"/>
            </div>
            <div class='scroll-box '>
              <div class="recommend_scroll_x_box flex xiaosanjiao" scroll-x="true">
                <div class="recommend_hot_box" v-for="(item_list,index) in allitem.goods" :key="index" bindtap='openGoods' :id="item_list.n_goods_id">
                  <img :src="item_list.goods_image" class="recommend_hot_image"/>
                  <div class="goods-duan-name">{{item_list.goods_name}}</div>
                  <div class="goods-duan-price">￥{{item_list.purchase_price}}</div>
                </div>
                <div class="recommend_hot_box more-box" bindtap="openActive_tj" :id="allitem.s_id">更多</div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div scroll-x="true" class="tab-h" scroll-left="{{scrollLeft}}">
            <div class="tab-item {{currentTab==0?'active':''}}" data-current="0" bindtap="swichNav">精选单品</div>
            <div class="tab-item {{currentTab==1?'active':''}}" data-current="1" bindtap="swichNav">男鞋</div>
            <div class="tab-item {{currentTab==2?'active':''}}" data-current="2" bindtap="swichNav">女鞋</div>
            <div class="tab-item {{currentTab==3?'active':''}}" data-current="3" bindtap="swichNav">童鞋</div>
          </div>
          <div>
            <div class="row-goodsInfo" v-if="currentTab==0">
              <div class="row-goodsli" v-for="(item,index) in goodsInfo" :id="item.n_goods_id" :key="index" bindtap='openGoods'>
                
                <img mode="widthFix" :src="item.goods_image" lazy-load="true"/>
                <div class="row-goods-name">{{item.goods_name}}</div>
                <div class='flex row-bottom 	flex-align-center'>
                  <span class="row-price">￥{{item.group_price}}</span>
                  <span class="row-xiaoliang">销量:{{item.goods_salenum}}</span>
                  <form bindsubmit='formSubmit' report-submit>
                    <button plain class="row-btn" form-type="submit">立即抢
                      <span class="iconfont icon-youbian"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="goodsInfo flex flex-warp flex-pack-justify  " wx:else>
              <div class="goods-li goods-lie-list" v-for="(item,index) in goodsInfo" :key="index" :id="item.n_goods_id" bindtap='openGoods'>
                
                <div class="lie-left-img">
                  <img mode="widthFix" style="height:{{imgheight}}px" :src="item.goods_image" lazy-load="true"/>
                </div>
                <text class="goods-name">{{item.goods_name}}</text>
                <div class="all-list-biaoqian">
                  <img mode='widthFix' :src='item.member_price_img'/>
                  <span class="goods-label" v-if="item.goods_label!=''">{{item.goods_label}}</span>
                </div>
                <div class="flex flex-pack-justify bottom-goods-price">
                  <span class="goods-price">￥{{item.group_price}}</span>
                  <span class='row-huo'><span class="bottom-goods-xiaoling">销量：{{item.goods_salenum}}</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="weui-loadmore" :hidden="!upLoading">
          <div class="weui-loading"></div>
          <div class="weui-loadmore__tips">正在加载</div>
        </div>
        <div class="loading complete" :hidden="!upLoadingComplete">暂无更多数据</div>
        <div class="gotop iconfont icon-huidaodingbu" v-if="scrollTop.goTop_show" catchtap="goTopFun"></div>

-->
        <!-- 首页内容结束 -->



      </div>
    </div>
</template>

<script>
// import bottom from "@/components/bottom";
// 轮播插件
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { api } from "@/utils/api.js";
import CountDown from 'vue2-countdown'

export default {
  name: "index",
  props: {},
  components: {
    swiper,
    swiperSlide,
    CountDown
  },
  data() {
    return {
      //滑动相关
       swiperOption: {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperOption2: {
          direction: 'vertical',
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          // pagination: {
          //   el: '.swiper-pagination2',
          //   clickable: true
          // }
        },
      //滑动相关end
      newHomelist:{},
      nseckilltypes:{
        temporary:{
          is_show:''
        },
        seckill:{

        }
      },
      nesListName:{
        type:1//我自己定义的
      },
      isShowdonghua:false,
      startTime:0,
      endTime:0,

    };
  },
  created() {
    this.getHome();
    this.getActivityList();
  },
  methods:{
    countDownS_cb: function (x) {
      console.log(x)
    },
    countDownE_cb: function (x) {
      console.log(x)
    },
    async getHome(){
      let data={
        params: {
          plat: 3,
          activity: 1
        }
      };
      const [err, res] = await api.getHomeList(data);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
          //console.log('aaa',res.data)
          this.newHomelist=res.data;
        }
      }
    },
    async getActivityList(){
      let data={
        params: {
          plat: 3
        }
      };
      const [err, res] = await api.getActivityList(data);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if (res.code != "2000") {
          return;
        }
        if(res.code==2000){

          let data =  res.data;
          data.seckill.s_goods_price = parseFloat(data.seckill.s_goods_price).toFixed(0);
          if (data.is_timing) {
            this.getLimitData();
          }
          let totalSecond = data.seckill.end_time - data.seckill.now_time;

          this.startTime=data.seckill.now_time*1000;
          this.endTime=data.seckill.end_time*1000;

          console.log('timetime')
          console.log(this.startTime)
          this.nseckilltypes=res.data;
          this.countdown=totalSecond;
          this.isShowdonghua=true;
        }
      }
    },
    async getLimitData(){
          let data={
            params: {
              plat: 3
            }
          };
          const [err, res] = await api.getLimitData(data);
          if(err){
            this.$vux.toast.text(err.msg);
            return;
          }else{
            if(res.code!="2000"){
              return;
            }else{
              res.data.seckill.s_goods_price = parseFloat(res.data.seckill.s_goods_price).toFixed(0)
              this.nseckilltypes.seckill = res.data.seckill;
              this.nseckilltypes.activity = res.data.activity;
              // this.nseckilltypes=this.nseckilltypes;
              // this.setData({
              //   nseckilltypes: this.data.nseckilltypes,
              // });
              this.nseckilltypes=this.nseckilltypes

              var timer = setTimeout( ()=>{
                this.getLimitData();
              }, 3000);
            }


          }

        // Api.getLimitData({
        //   plat: app.data.plat,
        // }).then((res) => {
        //   if (res.data.code != "2000") {
        //     return
        //   }
        //   res.data.data.seckill.s_goods_price = parseFloat(res.data.data.seckill.s_goods_price).toFixed(0)
        //   this.data.nseckilltypes.seckill = res.data.data.seckill;
        //   this.data.nseckilltypes.activity = res.data.data.activity;
        //   this.setData({
        //     nseckilltypes: this.data.nseckilltypes,
        //   })

        //   timer = setTimeout( ()=>{
        //     this.getLimitData()
        //   }, 3000)
        // })
      


    },
    link(){

    },
    

  },
};
</script>