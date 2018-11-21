<style scoped lang="less">
page, .page, .page__bd {
  height: 100%;
}

.weui-tab__panel {
  padding-top: 0 !important;
}

.navbar {
  width: 100%;
  position: fixed !important;
  background: #fff !important;
  z-index: 10 !important;
  /* top: 0 !important; */
}

.weui-navbar__slider {
  position: absolute;
  content: " ";
  left: 15/50rem;
  top: 46/50rem;
  width:3.9em;
  height: 2/50rem;
  background-color: #61D8D0;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}

.weui-navbar__item.weui-bar__item_on {
  color: #61D8D0 !important;
}

.page__bd {
  padding-bottom: 0;
}

.weui-tab__content {
  padding: 0 10/50rem;
  padding-top: 51/50rem;
}

.coupon-name {
  width: 90%;
  font-size: 10pt;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.list-item {
  position: relative;
  width: 100%;
  background: #fff2eb;
  margin-bottom: 5/50rem;
  background: url(https://m.xiepinhui.com.cn/img/nine/coupon/coupon_bg.png) no-repeat;
  background-size: 100% 100%;
}
.time{
  margin-top: 5/50rem;
}
.coupon-type{
  font-size: 11pt;
}
.coupon-right {
  width: 100%;
  border-left: 20/50rem #fb4c72 solid;
  border-radius: 12/50rem 0 0 12/50rem;
  padding:15/50rem 0/50rem;
  box-sizing: border-box;
}

.coupon-rigth-One {
  padding-left: 5/50rem;
  width:71%;
  font-size: 10pt;
  border-right:3/50rem #f1f1f1 dashed;
  box-sizing: border-box;
}

.coupon-jiaobiao {
  position: absolute;
  z-index: 1;
  width: 50/50rem;
  height: 50/50rem;
  left: -1/50rem;
}
.huise{
  border-left: 20/50rem rgba(201,201,201,1) solid !important;
  color:rgba(153,153,153,1) !important;
}
.huise .coupon-price{
  color:rgba(153,153,153,1) !important;
}
.coupon-price {
  font-size: 10pt;
  color: #fb4c72;
}

.price-bold {
  font-size:18pt;
  font-weight: bold;
  padding: 0/50rem 3/50rem;
}

.coupon-right-img {
  width:29%;
  text-align: center;
}
.coupon-right-text{
  width: 30%;
  text-align: center;
}
.coupon-right-btn{
  width: 80%;
  text-align: center;
  color: #fb4c72;
  font-size: 10pt;
  border: 1/50rem #fb4c72 solid;
  border-radius: 100/50rem;
  margin: auto;
}
.coupon-right-lable{
  font-size: 9pt;
  text-align: center;
  padding-top: 5/50rem;
  color: #888
}
.shuoming-lable{
  width:20%;
}
.shuoming-text{
  width: 80%;
}
.coupon-shuoming{
  padding: 5/50rem 15/50rem;
  border-top: 1/50rem #f1f1f1 dashed;
  margin-top:3/50rem;
  font-size: 9pt;
  color: #888;
}
.right-img {
  width: 50/50rem;
  height: 50/50rem;
}

.eva-null {
  width: 100%;
  text-align: center;
  font-size: 10pt;
  color: #888;
  padding-top: 44/50rem;
}

.eva-null img {
  width: 20%;
}

.null-img {
  width: 30% !important;
}
.tabItem{
  width: 25%;
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div class="navbar flex flex-pack-justify" ref="tab">
                <div v-for="(item, index) in tabs" :key="index" class="tabItem">
                  <div id="index" class="weui-navbar__item" :class="activeIndex == index ? 'weui-bar__item_on' : ''"  @click="tabClick($event,index)">
                      <div class="weui-navbar__title">{{item}}</div>
                  </div>
                </div>
                <div class="weui-navbar__slider" ref="tabLine" :style="{left: sliderLeft+'px', 'transform': 'translateX('+sliderOffset+'px)', '-webkit-transform': 'translateX('+sliderOffset+'px)'}"></div>
            </div>
            <div class="weui-tab__content">
                <div v-for="(item, index) in cou_list" :key="index" class="list-item">
                  <div v-if="item.be_overdue==1||item.is_use==1">
                      <img class="coupon-jiaobiao" v-if="item.c_type==1" src="@/assets/images/coupon/haohuo_jiaobiao_hui.png"/>
                      <img class="coupon-jiaobiao" v-else-if="item.c_type==2" src="@/assets/images/coupon/manjia_jiaobiao_hui.png"/>
                  </div>
                  <div v-else>
                      <img class="coupon-jiaobiao" v-if="item.c_type==1" src="@/assets/images/coupon/haohuo_jiaobiao.png"/>
                      <img class="coupon-jiaobiao" v-else-if="item.c_type==2" src="@/assets/images/coupon/manjian_jiaobiao.png"/>
                  </div>
                  <div :class="item.be_overdue==1||item.is_use==1?'huise':''" class="coupon-right flex flex-pack-justify flex-align-center">
                      <div class="coupon-rigth-One">
                      <div class="coupon-price">
                          <span class="price-fuhao">￥</span>
                          <span class="price-bold">{{item.amount}}</span>
                          <span v-if="item.c_type==2">满{{item.min_money}}元可用{{item.amount}}元</span>
                      </div>
                      <!-- <div class="coupon-name">{{item.desc}}</div> -->
                      <div class="coupon-type" v-if="item.c_type==1">有好货专用</div>
                      <div class="coupon-type" v-else-if="item.c_type==2">全场通用</div>
                      <div class="time">{{item.start_time}} 至 {{item.end_time}}</div>
                      </div>
                      <div class="coupon-right-img" v-if="item.be_overdue=='1'">
                      <img class="right-img" src="@/assets/images/coupon/coupon_right_guoqi.png"/>
                      </div>
                      <div class="coupon-right-img" v-else-if="item.is_use=='1'">
                      <img class="right-img" src="@/assets/images/coupon/coupon_right_shiyong.png"/>
                      </div>
                      <div class="coupon-right-text" v-else>
                      <div class="coupon-right-btn" @click='goUse(item.c_type)' :data-type="item.c_type">立即使用</div>
                      <div class="coupon-right-lable" @click='showShuoming(index)' :data-index="index">使用说明
                          <span class='iconfont' :class='nowShuoming===index?"icon-chaoshang":"icon-chaoxia"'></span>
                      </div>
                      </div>
                  </div>
                  <div class="coupon-shuoming" v-if="nowShuoming===index">
                      <div class='flex' v-for="(item, _index) in item.coupon_desc" :key="_index">
                        <div class="shuoming-text">{{item}}</div>
                      </div>
                  </div>
                </div>
                <div class="eva-null" v-if="isnull">
                    <img mode='widthFix' src='@/assets/images/null/zw_my.png'/>
                    <div>当前暂无优惠券</div>
                </div>
                <div class="loading" v-if="upLoading">加载中...</div>
                <div class="loading complete" v-if="upLoadingComplete">已加载全部</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
          tabs: ["全部", "未使用", "已使用", "已过期"],
          activeIndex: 0,
          sliderOffset: 0,
          sliderLeft: 0,
          cou_list: "",
          page: 2,
          upLoading: false,
          upLoadingComplete: false,
          isnull: false,
          nowShuoming: -1,
          // 组件所需的参数
          nvabarData: {
            showCapsule: 1, //是否显示左上角图标
            title: '优惠券', //导航栏 中间的标题
          },
        }
    },
    created() {
      
    },
    mounted() {
      this.$nextTick(()=>{
        this.sliderLeft = (this.$refs.tab.clientWidth / this.tabs.length - this.$refs.tabLine.clientWidth) / 2
      })
      this.getListcoupon();
    },
    methods: {
      async getListcoupon(){
        let data = {
          plat: 3,
          token: this.token,
          account: this.account,
          page: 1,
          num: 10,
          type: this.activeIndex
        }
        const [err, res] = await api.usercouponlist(data);
        if (err) {
          that.$vux.toast.text(err.msg);
          return;
        }
        if(res.code == 2000){
          if (res.data.page_size == 0) {
            this.isnull = true;
            this.cou_list = "";
          } else {
            for (var i = 0; i < res.data.list.length; i++) {
              res.data.list[i].coupon_desc = res.data.list[i].coupon_desc.split("\\n");
            }
            this.cou_list = res.data.list;
            this.isnull = false;
          }
        }
      },
      tabClick(e, index){
        this.sliderOffset = e.currentTarget.offsetLeft;
        this.activeIndex = index;
        this.page = 2;
        this.upLoadingComplete = false;
        this.upLoading = false;
        this.getListcoupon();
      },
      showShuoming(index){
        if(window.isClick)return;
        window.isClick = true;
        if (this.nowShuoming == index) {
          this.nowShuoming = -1;
        } else {
          this.nowShuoming = index;
        }
        setTimeout(() => {
          window.isClick = false;
        }, 100);
      },
      goUse(coupon_type){
        if (coupon_type == 1) {
          this.$router.push('haohuo');
        } else if (coupon_type == 2) {
          this.$router.push('allgoods');
        }
      }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
