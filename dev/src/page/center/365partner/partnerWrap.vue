<template>
    <div class="partner-wrap">
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style>
.partner-wrap {
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 0.92rem;
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
  top: 8px;
  left: 7px;
}
#vux-header {
  z-index: 3;
  width: 100%;
  height: 0.92rem;
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
</style>