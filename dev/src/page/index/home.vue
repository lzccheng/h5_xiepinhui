<template>
    <div class="index-box">
        <!-- 首页内容开始 -->

      
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide  v-for="(item,index) in newHomelist.banner_data" :key="index" bindtap='link' :data-index="index" :data-type="item.type" :data-id="item.data">
            <img  :src="item.image" class="slide-image"/>
        </swiper-slide>
        <!-- <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  


<!-- 
        <div style="background: #fff;">
          <div class="silder-box">
            <swiper class="silder" indicator-dots="{{indicatorDots}}" autoplay="true" circular="true" style='height: 270rpx'>
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
</template>

<script>
// import bottom from "@/components/bottom";
// 轮播插件
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { api } from "@/utils/api.js";

export default {
  name: "index",
  props: {},
  components: {
    swiper,
    swiperSlide
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
      //滑动相关end
      newHomelist:{}



    };
  },
  created() {
    this.getHome();
  },
  methods:{
    async getHome(){

      let data={
        params: {
          plat: 3,
          activity: 1
        }
        
      };
      const [err, res] = await api.getHomeList(data);
      console.log(api.getHomeList);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
          this.newHomelist=res.data;
        }
      }

    //   Api.getHomeList({
    //   plat: app.data.plat,
    //   activity: 1
    // }).then((res) => {
    //   if (res.data.code != "2000") {
    //     return
    //   }

    //   const indicatorDots = res.data.data.banner_data.length > 1 ? true : false
    //   this.setData({
    //     newHomelist: res.data.data,
    //     indicatorDots: indicatorDots
    //   })
    // })


    }
  },
};
</script>

<style scoped>
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
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-bullet {
        background-color: red;
      }




</style>