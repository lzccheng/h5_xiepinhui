<style lang="less" scoped>
.scroll-wrap {
  height: 100%;
}
.top {
  width: 100%;
  height: 2.97rem;
  background: url("~@/assets/images/center/partner/bg2.png") no-repeat;
  background-size: contain;
  overflow: hidden;
}
.title {
  font-size: 0.3rem;
  font-weight: 500;
  display: inline-block;
  margin-top: 0.4rem;
  margin-bottom: 0.3rem;
}
.box {
  box-sizing: border-box;
  padding: 0 0.19rem;
  .price {
    width: 100%;
    height: 1.1rem;
    background: url("~@/assets/images/center/partner/tc.png") no-repeat;
    background-size: contain;
  }
  .invite-name {
    display: inline-block;
    margin-top: 0.24rem;
    color: #999;
    font-size: 0.24rem;
  }
  .input-box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.8rem;
    margin-bottom: 0.21rem;
    .title {
      font-size: 0.28rem;
      color: #333;
      margin-right: 0.31rem;
    }
    input {
      display: block;
      flex: 1;
      height: 100%;
      border: 1px solid #ccc;
      border-radius: 0.1rem;
      padding-left: 0.3rem;
    }
  }
  .mt {
    margin-top: 0.4rem;
  }
  .imgbox {
    position: relative;
    height: 4.14rem;
    border-radius: 0.1rem;
    box-shadow: #61d8d0 0 1px 0.1rem 0;
    input {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .pay-box {
    .pay {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 1rem;
      box-sizing: border-box;
      padding: 0.24rem 0;
      .left {
        display: flex;
        align-items: center;
        .icon {
          width: 0.56rem;
          height: 0.56rem;
          margin-right: 0.21rem;
        }
        .icon.wx {
          background: url("~@/assets/images/center/partner/wxpay.png") no-repeat;
          background-size: contain;
        }
        .icon.zfb {
          background: url("~@/assets/images/center/partner/zfb.png") no-repeat;
          background-size: contain;
        }
      }
      .right {
        width: 0.5rem;
        height: 0.5rem;
        border: 1px solid #bbb;
        border-radius: 50%;
      }
      .right.active {
        border: none;
        background: url("~@/assets/images/center/partner/xz.png") no-repeat;
        background-size: contain;
      }
    }
  }
  .tips-box {
    display: flex;
    align-items: center;
    height: 1rem;
    padding-bottom: 0.2rem;
    .icon {
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.1rem;
      border: 1px solid #61d8d0;
      border-radius: 2px;
    }
    .icon.active {
      border: none;
      background: url("~@/assets/images/center/partner/yes.png") no-repeat;
      background-size: contain;
    }
    .text{
      color: #999;
      font-size: 0.24rem;
      span{
        color: #61d8d0;
      }
    }
  }
}
</style>

<template>
  <div class="scroll-wrap">
    <x-header :left-options="{backText:''}" title="365合伙人邀请码" id="vux-header"><a slot="right"></a></x-header>
    <div class="top"></div>
    <div class="box">
      <span class="title">365合伙人</span>
      <div class="price"></div>
      <span class="invite-name">你的邀请人：贼啦啦可爱</span>
      <!-- 填写资料 -->
      <div class="zlbox">
        <span class="title">填写资料</span>
        <div class="input-box">
          <div class="title">真实姓名</div>
          <input type="text" placeholder="请填写姓名">
        </div>
        <div class="input-box">
          <div class="title">手机号码</div>
          <input type="number" maxlength="11" placeholder="请填写手机号码">
        </div>
        <div class="input-box">
          <div class="title">店铺名称</div>
          <input type="text" placeholder="请填写店铺名称">
        </div>
      </div>
      <!-- 证件 -->
      <div class="scbox">
        <span class="title">上传证件</span>
        <div class="imgbox">
          <input type="file" accept="image/*" @change="upimg($event,'img1')" id="">
        </div>
        <div class="imgbox mt">
          <input type="file" accept="image/*" @change="upimg($event,'img2')" id="">
        </div>
      </div>
      <!-- 支付方式 -->
      <span class="title">支付方式</span>
      <div class="pay-box">
        <div class="pay">
          <div class="left">
            <div class="icon wx"></div>
            <div class="text">微信支付</div>
          </div>
          <div class="right"></div>
        </div>
        <div class="pay">
          <div class="left">
            <div class="icon zfb"></div>
            <div class="text">支付宝支付</div>
          </div>
          <div class="right active"></div>
        </div>
      </div>
      <!-- tips -->
      <div class="tips-box">
        <div class="icon active"></div>
        <div class="text">
          同意<span>《鞋品荟365合伙人申请协议》</span>
        </div>
      </div>
    </div>
    <!-- 支付 -->

  </div>
</template>

<script>
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
    this.code = this.$route.query.invite || "";
  },
  mounted() {},
  methods: {
    upimg(e, name) {
      console.log(e.target.files[0], name);
    },
    step(jump) {
      if (jump) {
        this.$router.push("next");
      } else {
      }
    }
  },
  computed: {}
};
</script>

<style lang="less" scoped>
</style>
