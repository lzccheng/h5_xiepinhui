<style lang="less" scoped>
    .add-card {
    height: 80/100rem;
    line-height: 80/100rem;
    text-align: center;
    font-size: 28/100rem;
    color: #61D8D0;
}
.card-list {
    width: 90%;
    height: 200/100rem;
    background: linear-gradient(90deg,rgba(255,121,150,1),rgba(251,76,114,1));
    border-radius: 10/100rem;
    margin: 20/100rem auto;
    padding: 20/100rem 2.5%;
    color: #fff;
}

.card-info {
    display: flex;
    height: 120/100rem;
    font-size: 34/100rem;
    line-height: 120/100rem;
    position: relative;
}
.card-info .info-img {
    width: 70/100rem;
    height: 70/100rem;
    line-height: 70/100rem;
    background: #fff;
    padding: 10/100rem;
    border-radius: 45/100rem;
    margin-top: 15/100rem;
    margin-right: 20/100rem;
}
.card-info .info-img img {
    width: 100%;
}
.card-info span {
    width: 60%;
    display: block;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 34/100rem;
}

.card-num {
    font-size: 50/100rem;
    text-align: right;
}

.unbind-btn {
    width: 143/100rem;
    height: 48/100rem;
    line-height: 48/100rem;
    text-align: center;
    background: rgba(250,107,138,1);
    border-radius: 10/100rem;
    font-size: 28/100rem;
    position: absolute;
    top: 36/100rem;
    right: 0;
}

.password-popup {
    width: 505/100rem;
    background: #fff;
    border-radius: 20/100rem;
    text-align: center;
}

.close-btn {
    width: 29/100rem;
    height: 29/100rem;
    padding: 20/100rem;
    position: absolute;
    top: 0;
    right: 0;
}
.password-popup .title {
    font-size: 30/100rem;
    margin-top: 60/100rem;
}



.input-list {
    width: 446/100rem;
    height: 76/100rem;
    background: rgba(255,255,255,1);
    border: 1px #ccc solid;
    margin: 37/100rem auto;
    position: relative;
}
.input-list input {
    width: 100%;
    height: 76/100rem;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    font-size: 0.2rem;
    box-sizing: border-box;
    background: #61D8D0;
}
.input-val {
    display: flex;
    width: 100%;
    height: 100%;

}
.val-item {
    width: 16.6%;
    height: 100%;
    border-right: 1px #ccc solid;
}
.val-item:last-child {
    border: none;
}

.val-item-bg {
    background: url("https://img.xiepinhui.com.cn/mobile/wallet/ico_dot.png") no-repeat center;
    background-size: 17% auto;
}


.set-pwd {
    width: 542/100rem;
    background: #fff;
    border-radius: 20/100rem;
    text-align: center;
}
.set-pwd .title {
    font-size: 40/100rem;
    margin: 20/100rem 0;
    color:rgba(0,0,0,1);
}
.set-pwd .desc {
    width: 80%;
    font-size: 30/100rem;
    margin: 20/100rem auto;
}

.set-pwd-list {
    display: flex;
    border-top: 1px #f2f2f2 solid;
    height: 80/100rem;
    line-height: 80/100rem;
    font-size: 34/100rem;
    color: #61D8D0;
    margin-top: 40/100rem;
    text-align: center;
}
.set-pwd-list div {
    width: 50%;
}
.set-pwd-list .close {
    color:rgba(102,102,102,1);
    border-right: 1px #f2f2f2 solid;
}

.remind-text {
    margin-top: 50/100rem;
    font-size: 28/100rem;
    color: rgba(153,153,153,1);
    text-align: center;
}

</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="银行卡管理" id="vux-header"></x-header>
    <!-- 主体内容 -->
    <div style="padding-top:0.92rem;">
    <div class="cell add-card" @click="shadowToggle">+添加银行卡</div>

    <div v-if="bankList.length > 0">
      <div class="card-list" v-for="(item,index) in bankList" :key="index">
        <div class="card-info">
          <div class="info-img">
            <img :src="item.icon"/>
          </div>
          <span>{{item.bank_name}}</span>
          <div class="unbind-btn" :data-id="item.card_id" @click="showConfirm">解除绑定</div>
        </div>
        <div class="card-num">{{item.card_number}}</div>
      </div>
    </div>

    <div class="shadow" v-if="isAdd">
      <div class="password-popup center">
        <img src="https://img.xiepinhui.com.cn/mobile/wallet/ico_close.png" class="close-btn" @click="shadowToggle"/>
        <div class="title">请输入交易密码，以验证身份</div>
        <div class="title" style="margin-top: 11/100rem;">6位数字密码</div>
        <div class="input-list">

          <div class="inputBox">
            <input type="number" maxlength="6" v-model="password" v-on:input ="bindPwd"/>
          </div>

          <div class="input-val" bindtap="bindFocus">
            <div :class="password.length > 0 ? 'val-item val-item-bg' : 'val-item'"></div>
            <div :class="password.length > 1 ? 'val-item val-item-bg' : 'val-item'"></div>
            <div :class="password.length > 2 ? 'val-item val-item-bg' : 'val-item'"></div>
            <div :class="password.length > 3 ? 'val-item val-item-bg' : 'val-item'"></div>
            <div :class="password.length > 4 ? 'val-item val-item-bg' : 'val-item'"></div>
            <div :class="password.length > 5 ? 'val-item val-item-bg' : 'val-item'"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow" v-if="isShadow">
      <div class="set-pwd center">
        <div class="title">提示</div>
        <div class="desc">您还没有设置交易密码，是否 前往设置？</div>
        <div class="set-pwd-list">
          <div class="close" @click="shadowToggle">取消</div>
          <div :data-url="isPwd == 0 ? '../../password/moblieCode/moblieCode' : '../../password/password'" @click="linkToPage">前往设置</div>
        </div>
      </div>
    </div>
    <div class="shadow" v-if="isConfirm">
      <div class="set-pwd center">
        <div class="title">提示</div>
        <div class="desc">确定解除绑定改银行卡？</div>
        <div class="set-pwd-list">
          <div class="close" @click="showConfirm">取消</div>
          <div @click="delCard">确定</div>
        </div>
      </div>
    </div>
    <div class="remind-text" v-if="bankList.length < 1">暂无信息</div>

    <div v-if="totalPage > 1">
      <div class="loading" :hidden="!upmore">上拉加载更多</div>
      <div class="loading" :hidden="!upLoading">加载中...</div>
      <div class="loading complete" :hidden="!upLoadingComplete">已加载全部数据</div>
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
    loading
  },
  data() {
    return {
      password: '',
      isFocus: false,
      isAdd: false,
      isShadow: false,
      isConfirm: false,
      is_paypwd: true,
      delId: null,
      bankList: [],
      totalPage: 0,
      page: 1,
      upLoading: false,
      upLoadingComplete: false,
      upmore: true,
    };
  },
  created() {
    this.getBankList();
  },
  mounted() {
    this.$nextTick(function() {
        isScrollBottom(this.scrollBottomCB);
    });
  },
  methods: {
    showConfirm(e){
      const isTrue = this.isConfirm ? false :true
      this.isConfirm=isTrue;
      if(isTrue){
        this.delId=e.target.dataset.id;
      }else{
        this.delId=null;
      }
    },
    shadowToggle(){
      
      if(this.is_paypwd) {
        const isTrue = this.isAdd ? false :true;
        this.isAdd=isTrue;
        this.password='';
      } else {
        const isTrue = this.isShadow ? false :true;
        this.isShadow=isTrue;
      }

    },
    bindPwd(e){
      var password=this.password;
      if(password && password.length>6){
        this.password=password.slice(0,6);
      }else{
        console.log(this.password)
        console.log(this.password.length)
        var length_password=this.password.length;
        if(length_password==6){
          this.checkPay();
        }
      }

    },
    async checkPay(){
      let data={
        plat: 3,
        token:this.token,
        account:this.account,
        pwd: this.$encrypt(this.password)
      };
      const [err, res] = await api.checkPayPwd(data);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
          this.shadowToggle();
          this.$router.push('/bindNewCard');
          //this.linkToPage('../addCard/addCard')  //跳到去绑定卡的页面
        }else{
          this.$vux.toast.text(res.msg);
        }
        
        
      }

    },
    linkToPage(){

    },
    async delCard(){
      let data={
        plat: 3,
        token:this.token,
        account:this.account,
        card_id: this.delId
      };
      const [err, res] = await api.delBindingBank(data);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
           this.$vux.toast.text('解除绑定成功');
           this.delId=null;
           this.isConfirm=false;
           this.page=1;
           this.getBankList();
        }
      }
    },
    async getBankList(){
      let data={
        plat: 3,
        token:this.token,
        account:this.account,
        page:this.page
      };
      this.page++;
      const [err, res] = await api.userBankList(data);
      if(err){
        this.$vux.toast.text(err.msg);
        return;
      }

      this.bankList = this.bankList.concat(res.data.list);
      this.is_paypwd=res.data.is_paypwd;
      this.totalPage=res.data.page_size;
      
    },
    //滚动到底部回调
    scrollBottomCB() {
      this.getBankList();
    }
  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
