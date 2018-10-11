<style lang="less" scoped>
.sy-wrap {
  background: #f8f8f8;
}
.tips {
  color: #f00;
  font-size: 0.24rem;
  margin: 0.2rem 0 0.2rem 0.2rem;
}

.on {
  color: rgba(251, 76, 114, 1);
  border-bottom: 5rpx solid rgba(251, 76, 114, 1);
}

.swiper-box {
  display: block;
  width: 100%;
  padding-top: 90rpx;
}

.jinggao {
  color: red;
  padding: 5px 15px;
  font-size: 9pt;
}

.red-list {
  padding: 5px 15px;
  background: #fff;
}

.list-bottom {
  padding-top: 3px;
}

.list-bottom image {
  width: 50px;
  height: auto;
}

.avatar-box {
  text-align: center;
  padding: 10px 0px;
}

.avatarImg {
  width: 75px;
  height: 75px;
  margin: auto;
}

.bottom-after {
  border-bottom: 1rpx #f1f1f1 solid;
}

.swiper-box {
  z-index: 1;
  margin-top: 0.92rem;
  height: 100%;
}

.out,
.in {
  min-height: 86vh;
  background: #f8f8f8;
}

.switchbar {
  z-index: 3;
  position: fixed;
  top: 0.92rem;
  width: 100%;
  height: 0.92rem;
  background: #f8f8f8;
}

.dsimg {
  display: inline-block;
  width: 1.3rem;
  height: 0.4rem;
  background: url("~@/assets/images/dsRed.png") 100% 100% no-repeat;
  background-size: contain;
}

.lqimg {
  display: inline-block;
  width: 1.3rem;
  height: 0.4rem;
  background: url("~@/assets/images/ylRed.png") 100% 100% no-repeat;
  background-size: contain;
}

.loading {
  margin-top: 0.5rem;
  text-align: center;
  width: 100%;
  font-size: 0.2rem;
  color: #888;
  line-height: 0.44rem;
}

.line_xi_after {
  border-bottom: 1px solid #eee;
}

.flex-pack-justify {
  display: flex;
  justify-content: space-between;
}
</style>


<template>
  <div class="sy-wrap">
    <x-header :left-options="{backText:''}" title="我的收益" id="vux-header"></x-header>
    <div class="switchbar">
      <tab v-model="index" default-color="#999" class="switchbar" :scroll-threshold="2" active-color="#fb4c72"
        bar-active-color="#fb4c72">
        <tab-item @on-item-click="outEarnings">待收益</tab-item>
        <tab-item @on-item-click="inEarnings">已收益</tab-item>
      </tab>
    </div>

    <div class="swiper-box">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <div class="out" v-if="index==0" ref="out" @scroll.native="outscroll">
            <p class="tips">注:推广小伙伴只有确认收货后才能够领取返利红包</p>
            <div class="red-list line_xi_after" v-for="(item,index) in onelistInfo" v-if="onelistInfo" :key="index">
              <div class="flex flex-pack-justify">
                <span>{{item.nick}}</span>
                <span>{{item.red_amount}}</span>
              </div>
              <div class="list-bottom flex flex-pack-justify">
                <span class="time">{{item.rebate_addtime}}</span>
                <div class="dsimg"></div>
              </div>
            </div>
          </div>
          <div class="loading" v-if="oneupLoading">加载中...</div>
          <div class="loading complete" v-if="oneupLoadingComplete">已加载全部数据</div>
        </swiper-slide>
        <swiper-slide>
          <div class="in" v-if="index==1">
            <div class='avatar-box'>
              <img class="avatarImg" :src="user.avatar" />
              <div>共收到红包
                <span>{{total_amout}}元</span>
              </div>
            </div>
            <div class="red-list line_xi_after" v-if="twolistInfo" v-for="(item,index) in twolistInfo" :key="index">
              <div class="flex flex-pack-justify">
                <span>{{item.nick}}</span>
                <span>{{item.red_amount}}</span>
              </div>
              <div class="list-bottom flex flex-pack-justify">
                <span class="time">{{item.rebate_addtime}}</span>
                <div class="lqimg"></div>
              </div>
            </div>
          </div>
          <div class="loading" v-if="twoupLoading">加载中...</div>
          <div class="loading complete" v-if="twoupLoadingComplete">已加载全部数据</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { isScrollBottom } from "@/utils/comm.js";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import { List } from "vant";
import { Tab, TabItem, XHeader } from "vux";
export default {
  name: "center",
  props: {},
  components: {
    Tab,
    TabItem,
    XHeader,
    swiper,
    swiperSlide,
    List
  },
  data() {
    return {
      index: 0, //tab
      page1: 1,
      onelistInfo: [],
      oneupLoading: true,
      oneupLoadingComplete: false,
      page2: 1,
      twolistInfo: [],
      twoupLoading: true,
      twoupLoadingComplete: false,
      total_amout: 0, //总收益
      swiperOption: {
        initialSlide: 0, //设定初始化时slide的索引
        direction: "horizontal", //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
        loop: false, //无限滚动
        speed: 300, //滑动速度
        autoplay: 100, //自动切换的时间间隔
        on: {
          slideChangeTransitionEnd: () => {
            this.index = this.$refs.mySwiper.swiper.activeIndex;
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          }
        }
      }
    };
  },
  created() {
    this.getReceivelist();
    this.getRebatelist();
  },
  mounted: function() {
    this.$nextTick(function() {
      isScrollBottom(this.scrollBottomCB);
    });
  },
  destroyed() {
    window.onscroll = null;
  },
  methods: {
    //滚动到底部回调
    scrollBottomCB() {
      if (this.index == 0) {
        this.getReceivelist();
      } else {
        this.getRebatelist();
      }
    },
    //待收益
    async getReceivelist() {
      if (this.oneupLoadingComplete) {
        return;
      }
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        page: this.page1
      };
      const [err, res] = await api.receivelist(data);
      if (res) {
        if (res.data.list.length) {
          this.onelistInfo = this.onelistInfo.concat(res.data.list);
          this.page1++;
        } else {
          if (res.data.page_size == res.data.total_count) {
            this.oneupLoading = false;
            this.oneupLoadingComplete = true;
          }
        }
      }
      this.onelistInfo.push({
        member_id: "11", //ID
        red_amount: "100.00", //金额
        red_addtime: "1533279633",
        nick: "Thnaos_Liu", //下单用户
        rebate_addtime: "2018-08-03" //时间
      });
    },
    //已收益
    async getRebatelist() {
      if (this.twoupLoadingComplete) {
        return;
      }
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        page: this.page2
      };
      const [err, res] = await api.rebatelist(data);
      if (res) {
        this.total_amout = res.data.total_amout;
        if (res.data.list.length) {
          this.twolistInfo = this.twolistInfo.concat(res.data.list);
          this.page1++;
        } else {
          if (res.data.page_size == res.data.total_count) {
            this.twoupLoading = false;
            this.twoupLoadingComplete = true;
          }
        }
      }
      this.twolistInfo.push({
        member_id: "11",
        red_amount: "100.00", //金额
        red_addtime: "2018-08-03", //时间
        nick: "Thnaos_Liu" //粉丝
      });
    },
    outEarnings() {
      this.$refs.mySwiper.swiper.slideTo(0);
    },
    inEarnings() {
      this.$refs.mySwiper.swiper.slideTo(1);
    }
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
