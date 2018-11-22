<template>
  <div class="scroll-wrap">
    <x-header :left-options="{backText:''}" title="365合伙人邀请码" id="vux-header"><a slot="right"></a></x-header>
    <div class="top"></div>
    <div class="input-wrap">
      <input type="text" v-model="code" placeholder="请输入邀请码">
      <button @click="step(false)">下一步</button>
    </div>
    <div class="rule">
      <span>填写规则:</span>
      <ul>
        <li>
          1、填写好友的邀请码后，你开通365合伙人后您将是他鞋品荟的合伙人
        </li>
        <li>
          2、如有任何问题，请联系客服 <a href="tel:4009639299">4009639299</a>
        </li>
      </ul>
    </div>
    <div class="tis" @click="step(true)">跳过此步骤</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { api } from "@/utils/api.js";
import { XHeader } from "vux";
export default {
  name: "",
  props: {},
  components: {
    XHeader
  },
  data() {
    return {
      code: ""
    };
  },
  created() {
    this.code = this.$route.query.codeInvite || "";
  },
  mounted() {},
  methods: {
    async step(jump) {
      console.log("jump", jump);
      if (jump) {
        this.$router.push("apply");
      } else {
        if (!this.code) {
          this.$vux.toast.text("邀请码不能为空");
          return;
        }
        let data = {
          plat: 3,
          account: this.account,
          token: this.token,
          code: this.code
        };
        const [err, res] = await api.receiveweidian(data);
        if (err) {
          this.$vux.toast.text(err.msg);
          return;
        }
        let info = res.data;
        console.log("info", info);
        let userName = info.data.member_name;
        this.$router.push({
          path: "apply",
          query: {
            codeKey: this.code,
            userName: userName
          }
        });
      }
    }
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>

<style lang="less" scoped>
.scroll-wrap {
  height: 100%;
}
.top {
  width: 100%;
  height: 2.71rem;
  background: url("~@/assets/images/center/partner/bg.png") no-repeat;
  background-size: contain;
  overflow: hidden;
}
.input-wrap {
  box-sizing: border-box;
  padding: 0.49rem 0.3rem;
  input {
    width: 100%;
    height: 0.99rem;
    background: #eee;
    box-sizing: border-box;
    border-radius: 0.6rem;
    padding: 0.35rem 0.39rem;
    border: none;
    font-size: 0.3rem;
    outline: none;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.6rem;
    width: 100%;
    height: 0.99rem;
    background: #eee;
    background: linear-gradient(-80deg, #61d8d0, #81f2ea);
    box-sizing: border-box;
    border-radius: 0.6rem;
    padding: 0.35rem 0.39rem;
    border: none;
    font-size: 0.34rem;
    color: #fff;
    outline: none;
  }
}
.rule {
  box-sizing: border-box;
  padding: 0.68rem 0.93rem 0 0.3rem;
  font-size: 0.26rem;
  color: #808080;
  span {
    line-height: 0.6rem;
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 0.1rem;
    a {
      color: #61d8d0;
    }
  }
}
.tis {
  color: #ccc;
  margin-top: 1.62rem;
  margin-bottom: 1.62rem;
  text-align: center;
}
</style>
