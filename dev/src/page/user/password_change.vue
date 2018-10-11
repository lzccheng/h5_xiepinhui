<template>
  <div class="wrap">
    <div class="box">
      <input type="text" v-model="orign_val" placeholder="原密码">
      <input type="text" v-model="new_val1" placeholder="新密码">
      <input type="text" v-model="new_val2" placeholder="确认密码">
      <button href="javascript:void(0);" @click="checkInfo" class="forgetBtn">保存</button>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/api.js";
import { XButton } from "vux";
import { mapGetters } from "vuex";

export default {
  name: "login",
  props: {},
  components: {
    XButton
  },
  data() {
    return {
      orign_val: "",
      new_val1: "",
      new_val2: ""
    };
  },
  created() {},
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    // 校验信息
    async checkInfo() {
      let that = this;
      if (!this.orign_val) {
        this.$vux.toast.text("请输入原密码");
        return;
      }
      if (!this.new_val1 || !this.new_val2) {
        this.$vux.toast.text("请输入新密码");
        return;
      }
      if (this.new_val1 !== this.new_val2) {
        this.$vux.toast.text("两次密码输入不一致");
        return;
      }
      let data = {
        tel: this.user.tel || '',
        plat: 3,
        old_pwd: this.$encrypt(this.orign_val.toString()),
        pwd: this.$encrypt(this.new_val1.toString()),
        review_pwd: this.$encrypt(this.new_val2.toString())
      }
      this.$vux.loading.show({
        text: "Loading"
      });
      const [err, res] = await api.updatepwd(data);
      if(err){
        this.$vux.toast.text(err.msg)
        return;
      }
      this.$vux.toast.text(res.msg);
      // setTimeout(() => {
      //   that.$router.go(-1)
      // }, 500);
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  box-sizing: border-box;
  padding: 0.67rem 0.3rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  input {
    width: 100%;
    height: 1rem;
    background: rgba(248, 248, 248, 1);
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: 0.01rem solid rgba(230, 230, 230, 1);
    padding-left: 0.3rem;
    font-size: 0.32rem;
    margin-bottom: 0.35rem;
    outline: none;
  }
}
.forgetBtn {
  width: 5.1rem;
  line-height: 0.92rem;
  background: #404042;
  display: block;
  color: #fff;
  text-align: center;
  font-size: 0.34rem;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 0.8rem;
  height: 0.92rem;
  background: #61D8D0;
  border-radius: 0.54rem;
  border: none;
}
</style>
