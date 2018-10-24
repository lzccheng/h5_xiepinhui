<template>
  <div>
    <x-header :left-options="{backText:''}" title="邀请规则" id="vux-header"><a slot="right"></a></x-header>
    <div class="inwrap">
      <div class="ruleBox">
        <div class="contentRuleBox">
          <div class="btn_rule">邀请规则</div>
          <div class="rule_itemBox" v-for="(itemName,idx) in ruleArr" :key="idx">
            <div class="rule_item">
              <div class="order_num">{{idx+1}}</div>
              <div class="txt_content">{{itemName.content}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { XHeader } from "vux";
import { api } from "@/utils/api.js";

export default {
  components: {
    XHeader
  },
  created() {
    this.getGuize();
  },
  data() {
    return {
      ruleArr: []
    };
  },
  methods: {
    async getGuize() {
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        type:3
      };
      const [err, res] = await api.guize(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      this.ruleArr = res.data.list;
      console.log("res.data.data.list", res.data.list);
    }
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>

<style lang="less" scoped>
.inwrap {
  height: 100%;
  box-sizing: border-box;
}
.ruleBox {
  min-height: 100vh;
  border: 30/100rem solid #fadba4;
  box-sizing: border-box;
  background: #fadba4;
}
.contentRuleBox {
  padding-top: 60/100rem;
  background: #fff9f1;
  padding-left: 30/100rem;
  padding-right: 30/100rem;
  min-height: 87vh;
  box-sizing: border-box;
  border-radius: 30/100rem;
}
.btn_rule {
  width: 352/100rem;
  line-height: 80/100rem;
  border-radius: 8/100rem;
  color: #fff;
  margin: auto;

  margin-bottom: 50/100rem;
  font-size: 34/100rem;
  text-align: center;
  background: -webkit-linear-gradient(left, #fe974c, #ff4627);

  background: -o-linear-gradient(right, #fe974c, #ff4627);
  background: -moz-linear-gradient(right, #fe974c, #ff4627);
  background: linear-gradient(to right, #fe974c, #ff4627);
}
.rule_item {
  margin-bottom: 36/100rem;
}
.order_num {
  width: 46/100rem;
  height: 46/100rem;
  border-radius: 50%;
  color: #9c5c14;
  text-align: center;
  line-height: 46/100rem;
  background: #fdc049;
  float: left;
  margin-right: 20/100rem;
  font-size: 0.32rem;
}
.txt_content {
  color: #b1a99a;
  font-size: 26/100rem;
  line-height: 45/100rem;
}
.view {
  position: absolute;
  height: 120px;
  width: 120px;
  background: green;
  color: white;
  text-align: center;
  line-height: 120px;
}
</style>
