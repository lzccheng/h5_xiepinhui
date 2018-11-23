<template>
  <div class="scroll-wrap">
    <x-header :left-options="{backText:''}" title="填写资料" id="vux-header"><a @click="ruleShow" slot="right">活动规则</a></x-header>
    <div class="top"></div>
    <div class="box">
      <span class="title">365合伙人</span>
      <div class="price"></div>
      <span class="invite-name" v-if="userName">你的邀请人：{{userName||''}}</span>
      <!-- 填写资料 -->
      <div class="zlbox">
        <span class="title">填写资料</span>
        <div class="input-box">
          <div class="title">真实姓名</div>
          <input type="text" v-model="name" placeholder="请填写姓名">
        </div>
        <div class="input-box">
          <div class="title">手机号码</div>
          <input type="number" v-model="phone" maxlength="11" placeholder="请填写手机号码">
        </div>
        <div class="input-box">
          <div class="title">店铺名称</div>
          <input type="text" v-model="store" placeholder="请填写店铺名称">
        </div>
      </div>
      <!-- 证件 -->
      <div class="scbox">
        <span class="title">上传证件</span>
        <div class="imgbox">
          <img src="~@/assets/images/center/partner/sf1.png" v-if="!img1" :alt="img1">
          <img :src="img1" v-else :alt="img1">
          <input type="file" accept="image/*" @change="upimg($event,'img1')" id="">
        </div>
        <div class="imgbox mt">
          <img src="~@/assets/images/center/partner/sf2.png" v-if="!img2" :alt="img2">
          <img :src="img2" v-else :alt="img2">
          <input type="file" accept="image/*" @change="upimg($event,'img2')" id="">
        </div>
      </div>
      <!-- 支付方式 -->
      <span class="title">支付方式</span>
      <div class="pay-box">
        <div class="pay" @click="selectPayFun(1)" v-if="iswx">
          <div class="left">
            <div class="icon wx"></div>
            <div class="text">微信支付</div>
          </div>
          <div class="right" :class="{'active':payFun===1}"></div>
        </div>
        <div class="pay" @click="selectPayFun(2)">
          <div class="left">
            <div class="icon zfb"></div>
            <div class="text">支付宝支付</div>
          </div>
          <div class="right" :class="{'active':payFun===2}"></div>
        </div>
      </div>
      <!-- tips -->
      <div class="tips-box" @click="selectTips">
        <div class="icon" :class="{'active':tips}"></div>
        <div class="text">
          同意<span>《鞋品荟365合伙人申请协议》</span>
        </div>
      </div>
    </div>
    <!-- 支付 -->
    <div class="car-box">
      <div class="left">
        合计:&nbsp;&nbsp;&nbsp;￥{{count}}
      </div>
      <div class="right" @click="pay">
        立即申请
      </div>
    </div>
    <!-- rule -->
    <div class="rule-box" v-if="showRule">
      <div class="mask" @click="hiddenMask"></div>
      <div class="rule">
        <div class="rule-top">
          <span>365规则</span>
          <i class="close" @click="hiddenMask"></i>
        </div>
        <div class="rule-center">
          <ul>
            <li v-for="(item,index) in ruleContent" :key="index">{{item.content}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import { isWeiXin } from "@/utils/comm.js";
import { api } from "@/utils/api.js";
import { wxPay } from "@/utils/wx_sdk.js";
import { XHeader } from "vux";

export default {
  name: "",
  props: {},
  components: {
    XHeader
  },
  data() {
    return {
      codeKey: "",
      userName: "",
      name: "",
      phone: "",
      store: "",
      img1: "",
      img2: "",
      img1_sn: "",
      img2_sn: "",
      payFun: 1,
      tips: false,
      count: "365.00",
      showRule: false,
      ruleContent: "",

      client: "", //alioss
      fileSize: 500000,
      iswx: isWeiXin()
    };
  },
  created() {
    this.codeKey = this.$route.query.codeKey || "";
    this.userName = this.$route.query.userName || "";
    if (isWeiXin()) {
      this.payFun = 1;
    } else {
      this.payFun = 2;
    }
    this.getGuize();
  },
  mounted() {},
  methods: {
    // 立即申请
    async pay() {
      // 校验信息
      if(!this._check())return;
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        shop_name: this.store,
        real_name: this.name,
        mobile: this.phone,
        sn_up: this.img1_sn,
        sn_down: this.img2_sn,
        openid: this.user.openid,
        pay_code: 1, // 1微信 2支付宝 3银联
        type: 3,
        member_code: this.codeKey
      };
      const [err, res] = await api.addsmallshop(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      if(res.code == 2000){
        let success = res => {
          this.$router.replace({
            path: '/centerFull/partner/applyStatic',
            query: {
              status: 1
            }
          })
        }
        let fail = err => {
          this.$vux.toast.text('支付失败');
        }
        wxPay(this, {...res.data.pay_param,success,fail})
      }
      console.log("pay", res);
      // todo pay
    },
    // 校验数据
    _check() {
      if (!this.name) {
        this.$vux.toast.text("请填写姓名");
        return;
      }
      let reg = /^1[0-9]{10}$/;
      if (!reg.test(this.phone)) {
        this.$vux.toast.text("请输入正确的手机号");
        return;
      }
      if (!this.store) {
        this.$vux.toast.text("请填写正确店铺名称");
        return;
      }
      if (!this.img1 || !this.img2) {
        this.$vux.toast.text("请上传证件");
        return;
      }
      if (!this.tips) {
        this.$vux.toast.text("请勾选协议");
        return;
      }
      return true;
      // this.$router.push("applyStatic");
    },
    // 选择图片
    upimg(e, name) {
      let that = this;
      let file = e.target.files[0];
      let data = {
        plat: 3,
        token: this.token,
        account: this.account,
        type: 17,
        num: 1
      };
      if (name === "img1") {
        this._ossImg(data, file, name);
        this.img1 = window.URL.createObjectURL(file);
      } else {
        this._ossImg(data, file, name);
        this.img2 = window.URL.createObjectURL(file);
      }
    },
    // 上传图片到阿里云
    async _ossImg(data, file, name) {
      let that = this;
      const [err, res] = await api.getpaths(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      if (res.code == "2000") {
        let config = {
          secure: true,
          // region: window.location.origin,
          accessKeyId: res.data.AccessKeyId,
          accessKeySecret: res.data.AccessKeySecret,
          bucket: res.data.bucket,
          region: 'oss-cn-shenzhen',
          // stsToken: res.data.SecurityToken
        }
        console.log(res)
        console.log(config)
        this.client = new OSS.Wrapper(config);
        // const result = await this.client.list();
        // console.log('result.objects',result.objects)
        this.client
          .multipartUpload(res.data.files, file)
          .then(function(result) {
            if (name === "img1") {
              that.img1_sn = res.data.sn;
            } else {
              that.img2_sn = res.data.sn;
            }
            console.log("result", result);
          })
          .catch(function(err) {
            console.log("err", err);
            console.log("err.name : " + err.name);
            console.log("err.message : " + err.message);
          });
      }
    },
    async getGuize() {
      let data = {
        plat: 3,
        account: this.account,
        token: this.token,
        type: 1
      };
      const [err, res] = await api.guize(data);
      if (err) {
        this.ruleContent = "看到我啦";
        return;
      }
      this.ruleContent = res.data.list;
    },
    // 支付方式
    selectPayFun(type) {
      switch (type) {
        case 1:
          this.payFun = 1;
          break;
        case 2:
          this.payFun = 2;
          break;
      }
    },
    // tips
    selectTips() {
      this.tips = !this.tips;
    },
    // 规则
    ruleShow() {
      this.showRule = true;
    },
    hiddenMask() {
      this.showRule = false;
    }
    // 上传图片到阿里云
    // async upload_File(filePath, al_info) {
    //   console.log(filePath, al_info);
    //   console.log("params", {
    //     name: al_info.name,
    //     key: al_info.file_name,
    //     policy: al_info.policy,
    //     OSSAccessKeyId: al_info.accessid,
    //     success_action_status: "200",
    //     Signature: al_info.signature,
    //     file: filePath
    //   });
    //   var that = this;
    //   axios
    //     .post(al_info.host, {
    //       name: al_info.name,
    //       key: al_info.file_name,
    //       policy: al_info.policy,
    //       OSSAccessKeyId: al_info.accessid,
    //       success_action_status: "200",
    //       Signature: al_info.signature,
    //       file: filePath
    //     })
    //     .then(res => {
    //       console.log("ali", res);
    //     })
    //     .catch(err => {
    //       console.log("ali", err);
    //     });
    // },
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
<style lang="less" scoped>
.scroll-wrap {
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 0.98rem;
  overflow: hidden;
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
#vux-header {
  z-index: 2;
}
.box {
  z-index: 1;
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
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
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
    .text {
      color: #999;
      font-size: 0.24rem;
      span {
        color: #61d8d0;
      }
    }
  }
}
.car-box {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.98rem;
  display: flex;
  align-items: center;
  background: #fff;
  .left {
    flex: 0 0 5.26rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.3rem;
    width: 5.26rem;
    color: #fb4c72;
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.34rem;
    height: 100%;
    background: #61d8d0;
    color: #fff;
  }
}
.rule-box {
  .mask {
    z-index: 99;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .rule {
    z-index: 100;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -40%;
    margin-top: -60%;
    width: 80%;
    min-height: 38%;
    max-height: 68%;
    background: #fff;
    border-radius: 0.2rem;
    overflow: hidden;
    .rule-top {
      position: relative;
      display: flex;
      width: 100%;
      height: 0.89rem;
      align-items: center;
      justify-content: center;
      color: #333;
      font-size: 0.36rem;
      text-align: center;
      .close {
        position: absolute;
        right: 0.31rem;
        top: 0.31rem;
        width: 0.26rem;
        height: 0.26rem;
        background: url("~@/assets/images/center/partner/x.png") no-repeat;
        background-size: contain;
      }
    }
    .rule-center {
      width: 100%;
      height: 100%;
      list-style: none;
      box-sizing: border-box;
      overflow: hidden;
      padding: 0 0.3rem 0.8rem 0.3rem;
      ul {
        width: 100%;
        max-height: 6.5rem;
        height: 100%;
        overflow: auto;
        list-style: none;
        li {
          font-size: 0.24rem;
          color: #333;
          box-sizing: border-box;
          padding: 0.2rem 0;
          border-top: 1px solid #eee;
        }
      }
    }
  }
}
</style>

