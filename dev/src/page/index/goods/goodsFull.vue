<template>
    <div class="goods-wrap">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "goods",
  props: {},
  components: {},
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped>
.goods-wrap {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding-top: 0.92rem;
}
</style>
<style>
#vux-header {
  z-index: 3;
  width: 100%;
  height: 0.92rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background-color: #61d8d0;
  height: 0.92rem;
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
</style>
