<template>
  <div class="fbpj-wrap">
    <!-- header -->
    <x-header :left-options="{backText:''}" title="鞋品荟" id="vux-header"></x-header>
    <group style="margin-top:-1.17647059em">
      <x-textarea :max="200" v-model="value" :autosize="true" placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧" @on-focus="onEvent('focus')"
        @on-blur="onEvent('blur')"></x-textarea>
      <cell title="满意度">
        <rater slot="after-title" :min="1" v-model="start" active-color="#ff4c72"></rater>
        <span slot="after-title" style="margin-left:.2rem;">{{statusText}}</span>
      </cell>
    </group>
    <div class="btn" @click="tijiao">发表评论</div>
  </div>
</template>

<script>
import { isScrollBottom } from "@/utils/comm.js";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import {
  Group,
  Cell,
  XButton,
  Badge,
  XTextarea,
  Rater,
  Range,
  XHeader
} from "vux";
export default {
  name: "fbpj",
  props: {},
  components: {
    Group,
    Cell,
    XButton,
    Badge,
    XTextarea,
    Rater,
    Range,
    XHeader,
    loading
  },
  data() {
    return {
      value: "",
      start: 5,
      geval_level: 1
    };
  },
  created() {
  },
  mounted: function() {
    this.$nextTick(function() {
      //   isScrollBottom(this.showdata);
    });
  },
  destroyed() {
    window.onscroll = null;
  },
  methods: {
    async tijiao() {
      if (!this.value) {
        this.$vux.toast.text("请填写您的评语");
        return;
      }
      if (!this.flag) {
        this.flag = true;
        let data = {
          plat: 3,
          token: this.token,
          account: this.account,
          content: this.value,
          order_id: this.$route.query.orderid,
          goods_item_id: this.$route.query.itemid,
          geval_star: this.start,
          geval_level: this.geval_level,
          sn: ""
        };
        const [err, res] = await api.newevaluategoods(data);
        this.flag = false;
        if (err) {
          this.$vux.toast.text(err.msg);
          return;
        }
        this.$vux.toast.text(res.msg);
      } else {
        console.log("函数防抖");
      }
    },
    ...mapActions(["update_storeInfo"])
  },
  computed: {
    statusText() {
      let text = "差评";
      switch (this.start) {
        case 1:
          text = "差评";
          this.geval_level = 3;
          break;
        case 2:
        case 3:
          text = "中评";
          this.geval_level = 2;
          break;
        case 4:
        case 5:
          text = "好评";
          this.geval_level = 1;
          break;
      }
      return text;
    },
    ...mapGetters(["user", "account", "token"])
  }
};
</script>

<style lang="less" scoped>
.btn {
  width: 95%;
  height: 0.86rem;
  line-height: 0.86rem;
  background: #61d8d0;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 0.5rem;
}
</style>