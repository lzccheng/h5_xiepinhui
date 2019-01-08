<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title"></router-view>
    <lg-preview></lg-preview>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
    }
  },
  created(){
    
  },
  mounted(){
     document.querySelector('#pageLoading').style.display = 'none';
  },
  watch: {
    $route(to,from){
      if(to.path === '/center' || to.path === '/index'){
        this.$store.dispatch('update_bottomShow',true)
      }else{
        this.$store.dispatch('update_bottomShow',false)
      }
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import '~@/assets/base.less';
@import '~@/assets/less/animate.less';
.weui-cells{
  margin-top: 0 !important;
}
.tab-slider {
  position: relative;
  width: 100%;
}
#app {
  width: 7.5rem;
}
.tab-slider__content {
  position: absolute;
  height: 100%;
  width: 100%;
}
.tab-slider__content.slide-left-enter,
.tab-slider__content.slide-right-leave-to {
  transform: translateX(100%);
}
.tab-slider__content.slide-left-enter-active,
.tab-slider__content.slide-left-leave-active {
  transition: transform 0.2s linear;
}
.tab-slider__content.slide-left-leave-to,
.tab-slider__content.slide-right-enter {
  transform: translateX(-100%);
}
.tab-slider__content.slide-right-enter-active,
.tab-slider__content.slide-right-leave-active {
  transition: transform 0.2s linear;
}
.tab-slider__out-of-screen {
  position: absolute;
  width: 100%;
  height: 100%;
}
.tab-slider__out-of-screen > :first-child {
  height: 100%;
}
.tab-slider__out-of-screen.tab-slider__out-of-screen--left {
  left: -100%;
}
.tab-slider__out-of-screen.tab-slider__out-of-screen--right {
  right: -100%;
}
#vux-header .vux-header-left .left-arrow:before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border: 1px solid #fff;
  border-width: 1px 0 0 1px;
  -webkit-transform: rotate(315deg);
  transform: rotate(315deg);
  top: 8/100rem;
  left: 7/100rem;
}
#vux-header {
  z-index: 3;
  width: 100%;
  height: 0.92rem;
  line-height: 0.92rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #61d8d0;
  color: #fff;
}
#vux-header .vux-header-left a,
.vux-header .vux-header-left button,
.vux-header .vux-header-right a,
.vux-header .vux-header-right button {
  color: #fff !important;
}
.idnexWrapBox{
  position: relative;
  padding-top: 0.92rem;
}
.weui-dialog__btn_primary{
  color: #61d8d0;
}

</style>
