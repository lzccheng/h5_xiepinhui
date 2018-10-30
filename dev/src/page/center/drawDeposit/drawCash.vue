<style lang="less" scoped>
    .img-step {
    width: 100%;
}

.select-type {
    height: 130/100rem;
    line-height: 130/100rem;
    font-size: 34/100rem;
    display: flex;
}
.img-type {
    max-width: 52/100rem;
    height: 46/100rem;
    margin-top: 42/100rem;
    margin-right: 20/100rem;
}

.withdraw-title {
    font-size: 30/100rem;
    color: rgba(102,102,102,1);
    line-height: 42/100rem;
}
.withdraw-input {
    height: 70/100rem;
    font-size: 50/100rem;
    color: rgba(51,51,51,1);
    padding: 20/100rem 0;
    border-bottom: 1px #f2f2f2 solid;
    display: flex;
    box-sizing: content-box;
}
.withdraw-input span {
    line-height: 70/100rem;
}
.withdraw-input input{
    height: 100%;
    width: 80%;
    border: none;
}
.withdraw-remind {
    font-size: 26/100rem;
    color:rgba(153,153,153,1);
    padding: 20/100rem 0;
}

.withdraw-remind span {
    color: #61D8D0;
}

.remind-error {
    color: #FB4C72;
}

.withdraw-rule {
    width: 95%;
    margin-left: 2.5%;
    margin-bottom: 79/100rem;
}
.withdraw-rule .title {
    font-size: 28/100rem;
    color: rgba(102,102,102,1);
}
.withdraw-rule .desc {
    margin-top: 20/100rem;
    font-size: 24/100rem;
    color: rgba(153,153,153,1);
    line-height: 48/100rem;
}
.withdraw-rule .desc span {
    display: block;
}


.popup {
    width: 100%;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #333;
}

.popup-head {
    width: 100%;
    height: 100/100rem;
    position: relative;
    font-size: 34/100rem;
    border-bottom: 1px #f2f2f2 solid;
    line-height: 100/100rem;
    text-align: center;
}
.popup-head img {
    width: 26/100rem;
    height: 26/100rem;
    padding: 38/100rem 20/100rem;
    position: absolute;
    left: 0;
    top: 0;
}

.popup-list {
    height: 573/100rem;
    overflow-y: scroll;
}
.popup-list-item {
    width: 95%;
    height: 120/100rem;
    font-size: 34/100rem;
    line-height: 120/100rem;
    border-bottom: 1px #f2f2f2 solid;
    display: flex;
    margin-left: 2.5%;
    position: relative;
}
.popup-list-item-btn {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.popup-list-item img {
    max-width: 52/100rem;
    height: 46/100rem;
    margin-top: 38/100rem;
    margin-right: 20/100rem;
}
.bank-manage {
    width: 100%;
    height: 100/100rem;
    line-height: 100/100rem;
    text-align: center;
    border-top: 1px #f2f2f2 solid;
    font-size: 34/100rem;
    color: #61D8D0;
    margin-top: 10/100rem;
    background: #fff;
    position: relative;
    z-index: 99;
}
</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="提现" id="vux-header"></x-header>
    <!-- 主体内容 -->
    <div>
    <div class="main">
      <img src="https://img.xiepinhui.com.cn/mobile/step.png" class="img-step"/>
      <div class="cell select-type" @click="showBankList">
        <img :src="methodType.icon" class="img-type"/>
        <span>{{methodType.title}}</span>
        <div class="arrow-left"></div>
      </div>
      <div class="cell">
        <div class="withdraw-title">提现金额（免收服务费）</div>
        <div class="withdraw-input">
          <span>￥</span>
          <input type="number" v-model="money" @click="getMoney" />
        </div>
        <div class="withdraw-remind" v-if="isError < 0">
          可提现金额{{initialization.rebate_amout}}元，
          <span @click="widthdrawAll">全部提现</span>
        </div>
        <div class="withdraw-remind remind-error" v-if="isError > -1">
          {{withdrawRemind[isError]}}
        </div>
      </div>
      <div class="cell" style="padding: 0" v-if="methodType.type == 1">
        <div class="cell-input">
          <span>微信账号</span>
          <input type="text" placeholder="请输入微信号" v-model="account_number" @click="bindNum" />
        </div>
        <div class="cell-input">
          <span>提现姓名</span>
          <input type="text" placeholder="请输入提现姓名" v-model="account_name" @click="bindName" />
        </div>
      </div>
      <div class="cell" style="padding: 0" v-if="methodType.type == 2">
        <div class="cell-input">
          <span>支付宝账号</span>
          <input type="text" placeholder=" 请输入支付宝账号" v-model="account_number" @click="bindNum" />
        </div>
        <div class="cell-input">
          <span>提现姓名</span>
          <input type="text" placeholder="请输入提现姓名" v-model="account_name" @click="bindName" />
        </div>
      </div>
      <div class="cell" style="padding: 0" v-if="methodType.type == 3">
        <div class="cell-input cell-input-code">
          <span>短信验证码</span>
          <input type="text" v-model="ver_code" placeholder="填写验证码" maxlength="6" @click="bindCode" style="width:auto;"/>
          <div class="cell-input-btn" @click="getCode">{{num >= 60 ? '获取验证码' : num+'s'}}</div>
        </div>
      </div>
      <div :class="Number(money) >= 100 ? 'btn' : 'btn btn-disabled'" @click="sureWithdraw">
        确认提现
      </div>
      <div class="withdraw-rule">
        <div class="title">提现规则</div>
        <div class="desc">
          <span>1.单笔提现1万元以上提现次数不限制,单笔1万元以下每月只能提现一次，最低为100元;</span>
          <span>2.余额提现成功后,到账时间为财务审核后2~3个工作日</span>
          <span>3.有任何问题或未及时到账,即可联系客服400-963-9299</span>
        </div>
      </div>
    </div>
    <div class="shadow" v-if="isSelect">
      <div class="popup">
        <div class="popup-head">
          <img src="https://img.xiepinhui.com.cn/mobile/wallet/ico_close.png" @click="showBankList"/>
          选择提现方式
        </div>
        <div class="popup-list">
          <div class="popup-list-item" v-for="(item,index) in methodList" :key="index">
            <div class="popup-list-item-btn" :data-index="index" @click="selectType"></div>
            <img :src="item.icon"/>
            <span>{{item.title}}</span>
          </div>
        </div>
        <div class="bank-manage" @click="linkToBankCard">
          银行卡管理
        </div>
      </div>
    </div>
  </div>
    <!-- 主体内容end -->
    

    
    
  </div>
</template>

<script>
import { isScrollBottom } from "@/utils/comm.js";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
export default {
  name: "subStoreList",
  props: {},
  components: {
    Group,
    Cell,
    XButton,
    Badge,
    XHeader,
    loading,
  },
  data() {
    return {
      initialization: {},
    money: '',
    methodType: {
      type: 1
    },
    methodList: [],

    isSend: false,
    isSelect: false,
    isError: -1,
    withdrawRemind: [
      '输入金额超过余额',
      '最低提现金额不能少于100元'
    ],

    account_number: '',
    account_name: '',
    ver_code: '',
    tel: '',
    num: 60,
    };
  },
  created() {
    
    this.tel=this.user.tel;
  },
  mounted(){
     this.$nextTick(function() {
       this.getUserWithdraw();
    });
  },
  methods: {
    countDown () {
      console.log(888)
      console.log(this.num)
      let c = this.num
      c--
      if ( c < 1) {
        this.num=60;
        return
      }
      this.num=c;
      setTimeout(()=>{
        this.countDown();
      },1000)
    },
    async getCode () {
      this.countDown();
      console.log(this.tel)
      var tel_user = this.Trim(this.tel);
      var that=this;

      var param={
        tel:tel_user,
        plat:3,
        type:3,//类型1设置支付密码验证码，2找回支付密码验证码，3提现验证码
        time:new Date().getTime(),
        version:'1.0.1',
        device_name:'MAX123'
      };
      
      param=JSON.stringify(param);
      param=this.$encrypt(param);
      
      param={
        param:param
      };
      const [err, res] = await api.sendTradePassword(param);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        console.log('发送验证码中')
      }
    },
    //去掉字符串前后所有空格：
    Trim(str) {
      str=String(str);//注意这里是字符串才有replace函数
      return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    showBankList(){
      const isTrue = this.isSelect ? false : true;
      this.isSelect=isTrue;
      if (isTrue && this.methodList.length < 1) {
        this.withdrawMethod();
      }
    },
    async withdrawMethod(){
      let data={
        plat: 3,
        token:this.token,
        account:this.account
      };
      const [err, res] = await api.withdrawMethod(data);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
          console.log(res)
          this.methodList=res.data.list;
        }
      }
    },
    widthdrawAll(){
      this.money=this.initialization.rebate_amout;
      console.log(this.money)
    },
    getMoney(){

    },
    bindNum(){

    },
    bindName(){

    },
    bindCode(){

    },
    async sureWithdraw(){
      if(this.methodType.type != 3 && this.account_number.length < 1 && this.account_name.length < 1) {
        this.$vux.toast.text('请输入账号或提现姓名');
        return false;
      } else if( this.methodType.type == 3 && this.ver_code.length < 1 ) {
        this.$vux.toast.text('请输入手机验证码');
        return false;
      }

      var sub_member_id='';
      sub_member_id=this.$route.query.sub_member_id;

      let data={
        plat: 3,
        token:this.token,
        account:this.account,
        amount: this.money,
        payment_code: this.methodType.type,
        account_number: this.account_number,
        account_name: this.account_name,
        card_id: this.methodType.card_id,
        ver_code: this.ver_code,
        tel: this.tel,
        sub_member_id: sub_member_id
      };
      
      const [err, res] = await api.withdrawCash(data);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
          this.$router.push('/drawSuccess');
        }
      }

    },
    selectType(e){
      
      const index = e.target.dataset.index;
      console.log(index)
      const data = this.methodList[index];
      this.methodType=data;
      this.showBankList();
    },
    async getUserWithdraw(){//1微信2支付宝3银行卡
      var sub_member_id='';
      sub_member_id=this.$route.query.sub_member_id;

      let data = {
        plat: 3,
        token:this.token,
        account:this.account,
        sub_member_id:sub_member_id
      };
      const [err, res] = await api.getUserWithdraw(data);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
          console.log('res：',res);
          this.initialization=res.data;
          this.methodType.type=res.data.type;
          this.methodType.icon=res.data.icon;
          this.methodType.title=res.data.title;
          //this.account_number=res.data.account_number;
          //this.account_name=res.data.account_name;
        }
      }

    },
   linkToBankCard(){
      this.showBankList();
      this.$router.push('./addCard');
   }
    
    
  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  },
  
};
</script>
