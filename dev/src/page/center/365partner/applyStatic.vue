<template>
  <div class="scroll-wrap">
    <x-header :left-options="{backText:''}" title="365合伙人" id="vux-header"><a slot="right"></a></x-header>
    <div class="middlePart">
        <div class="hehuoBox">
            <img src="http://img.xiepinhui.com.cn/small_app/mine/hehuo_fail.png" v-if="status==0">
            <img src="http://img.xiepinhui.com.cn/small_app/mine/hehuo_pay_success.png" v-if="status==1">
        </div>
        <div class="hehuoTxt">
            <div class="txt_one" v-if="status==1">升级365合伙人已支付成功</div>
            <div class="txt_one" v-if="status==0">升级365合伙人审核失败</div>
            <div class="txt_gray_tip" v-if="status==1">请耐心等待俩个工作日</div>
            <div class="txt_gray_tip" v-if="status==0">请重新提交申请</div>
        </div>
        <div class="btn_submit" v-if="status==1" @click="$router.push('/')">完成</div>
        <div class="btn_submit" v-if="status==0" @click="$router.push('/centerFull/partner/code')">重新申请</div>
    </div>
    
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
      status: 0
    };
  },
  created() {
    this.status = this.$route.query.status || 0;
    console.log(this.status)
  },
  mounted() {},
  methods: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>

<style lang="less" scoped>
.scroll-wrap {
  height: 100%;
}
.middlePart {
  margin-top: 2.13rem;
  text-align: center;
  .hehuoBox {
    text-align: center;
    img {
      width: 50%;
    }
  }
}
.hehuoTxt {
  margin-top: 114/100rem;
  color: #333;
  font-size: 34/100rem;
}
.txt_gray_tip {
  color: #999;
  font-size: 28/100rem;
  margin-top: 40/100rem;
}
.btn_submit {
  width: 690/100rem;
  line-height: 90/100rem;
  text-align: center;
  color: #fff;
  font-size: 34/100rem;
  background: #61d8d0;
  margin: auto;
  margin-top: 240/100rem;
  border-radius: 120/100rem;
}
</style>