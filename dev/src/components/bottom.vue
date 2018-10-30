<template>
  <div>
    <tabbar class="bottom" style="position: fixed" v-model="index">
      <tabbar-item link="/index">
        <img slot="icon-active" src="../assets/bottom/home2.png">
        <img slot="icon" src="../assets/bottom/home1.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/center">
        <img slot="icon-active" src="../assets/bottom/mine2.png">
        <img slot="icon" src="../assets/bottom/mine1.png">
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    setTabbarItem(path) {
      if (path.indexOf("index") !== -1) {
        this.index = 0;
      } else if (path.indexOf("center") !== -1) {
        this.index = 1;
      } else {
        this.index = 1;
      }
    },
    _watchRouter(to) {
      let path = to.path;
      this.setTabbarItem(path,to);
    }
  },
  created() {
    let { path } = this.$router.history.current;
    this.setTabbarItem(path);
  },
  watch: {
    $route(to, from) {
      this._watchRouter(to);
    }
  }
};
</script>

<style lang="less">
.weui-tabbar {
  max-width: 750px;
  margin: 0 auto;
}
.bottom{
  height: 1.03rem;
  align-items: center;
}
</style>
