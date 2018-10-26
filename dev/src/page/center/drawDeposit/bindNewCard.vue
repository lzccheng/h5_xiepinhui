<style lang="less" scoped>
    .addCard {
    height: 100%;
}
.add-remind {
    font-size: 26/100rem;
    color: #999;
    padding: 20/100rem 20/100rem 0;
}

.cell-input span {
    display: block;
    width: 25%;
}
.cell-input img {
    width: 36/100rem;
    margin-top: 32/100rem;
}

.bank-list {
    min-height: 100%;
    background: #fff;
}

.search-main {
    width: 710/100rem;
    height: 70/100rem;
    position: relative;
    padding: 20/100rem;
}
.search-main img {
    width: 40/100rem;
    position: absolute;
    top: 35/100rem;
    left: 40/100rem;
    z-index: 2;
}
.search-main input {
    width: 630/100rem;
    height: 70/100rem;
    border: none;
    padding-left: 80/100rem;
    background: rgba(246,246,246,1);
    border-radius: 36/100rem;
    font-size: 28/100rem;
    color: rgba(153,153,153,1);
}
.bank-list-item {
    width: 95%;
    height: 100/100rem;
    font-size: 34/100rem;
    line-height: 100/100rem;
    border-bottom: 1px #f2f2f2 solid;
    display: flex;
    padding: 0 2.5%;
    position: relative;
}
.bank-list-item img {
    max-width: 52/100rem;
    height: 46/100rem;
    margin-top: 28/100rem;
    margin-right: 20/100rem;
}
.bank-list-item .arrow-left{
    right: 2.5%;
}
.arrow-left {
    right: 0;
}

.owner-desc {
    width: 542/100rem;
    background: #fff;
    border-radius: 20/100rem;
    text-align: center;
}
.owner-desc .title {
    font-size: 40/100rem;
    margin: 20/100rem 0;
}
.owner-desc .desc {
    width: 80%;
    font-size: 30/100rem;
    margin: 20/100rem auto;
}
.owner-desc .close {
    border-top: 1px #f2f2f2 solid;
    height: 80/100rem;
    line-height: 80/100rem;
    font-size: 34/100rem;
    color: #61D8D0;
    margin-top: 40/100rem;
}
.cell .cell-input input{
    background: none;
}
.shadow-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 111;
}
</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="绑定银行卡" id="vux-header"></x-header>
    <!-- 主体内容 -->
    <div class="addCard">

    <div v-if="!isSelect">
        <div class="add-remind">请绑定持卡人本人的银行卡</div>
        <div class="cell" v-if="!isInfo">
            <div class="cell-input">
                <span>姓名</span>
                <input type="text" placeholder=" 请输入姓名" v-model="name"  v-on:input="bindName"/>
            </div>
            <div class="cell-input">
                <span>身份证号</span>
                <input type="number" maxlength="18" placeholder="请输入身份证号" v-model="idCard" v-on:input="bindIdCard" />
            </div>
        </div>
        <div class="cell" v-if="isInfo">
            <div class="cell-input">
                <span>持卡人</span>
                <input type="text" v-model="name" disabled />
                <img src="https://img.xiepinhui.com.cn/mobile/wallet/ico_remind.png"  @click="shadowToggle"/>
            </div>
        </div>
        <div class="cell">
            <div class="cell-input">
                <span>银行卡号</span>
                <input type="number" maxlength="19" placeholder="请输入银行卡号" v-model="cardNum" v-on:input="bindNum" />
            </div>
            <div class="cell-input">
                <span>发卡银行</span>
                <input type="text" disabled v-model="selected.bank_name"/>
                <div class="arrow-left"></div>
                <div class="shadow-btn" @click="selectToggle"></div>
            </div>
        </div>
        <div :class="name.length>0 && idCard.length>0 && cardNum.length>0 && selected.bank_name ? 'btn ' :'btn btn-disabled'" @click="addCard">确定</div>
    </div>

    <div v-else>
        <div class="bank-list">
           <!-- <div class="search-main">
                <image src="../../../../img/search-icon.png" mode="widthFix"></image>
                <input type="span" placeholder="搜索"/>
            </div>-->
            <div>
                <div class="bank-list-item" v-for="(item,index) in bankList" :key="index">
                    <img :src="item.bank_icon" mode="aspectFit"/>
                    <span>{{item.bank_name}}</span>
                    <div class="arrow-left"></div>
                    <div class="shadow-btn" :data-index="index" @click="selectBank"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="shadow" v-if="isShadow">
        <div class="owner-desc center">
            <div class="title">持卡人说明</div>
            <div class="desc">为了保证账户资金安全，只能绑定认 证用户本人的银行卡</div>
            <div class="close" @click="shadowToggle">知道了</div>
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
    loading
  },
  data() {
    return {
    isSelect: false,
    isShadow: false,
    isInfo: false,
    tmp: '',
    name: '',
    idCard: '',
    cardNum: '',
    bankList: [],
    selected: {},
    };
  },
  created() {
    
  },
  mounted() {
    this.$nextTick(function() {
       
    });
  },
  methods: {
      bindName(){

      },
      bindIdCard(){

      },
      shadowToggle(){

      },
      bindNum(){

      },
      selectToggle(){
        const isTrue = this.isSelect ? false :true;
        this.isSelect=isTrue;
        if(this.bankList.length < 1){
          this.getBankList();
        }
        
      },
      async getBankList () {
        let data={
          plat:4
        }
        //getBankList
        const [err, res] = await api.getBankList(data);
        if(err){
          this.$vux.toast.text(err.msg);
          return;
        }else{
          if(res.code==2000){
            this.bankList=res.data.list;
            
          }
        }

        
      },
      async addCard(){
            if(this.name.length>0 && this.idCard.length>0 && this.cardNum.length>0 && this.selected.bank_name){
                console.log('addCard')
                
                const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                const regBank = /^([1-9]{1})(\d{15}|\d{18})$/
                if (!this.isInfo && !reg.test(this.idCard)){
                    this.$vux.toast.text('身份证输入不合法');
                    return
                } else if (!regBank.test( this.cardNum)) {
                    this.$vux.toast.text('银行卡号输入不合法');
                    return
                }
                let data={
                    plat: 3,
                    token:this.token,
                    account:this.account,
                    bank_id: this.selected.bank_id,
                    card_user_name: this.name,
                    card_number: this.cardNum,
                    idcard: this.idCard
                };
                const [err, res] = await api.BindingNewBank(data);
                if(err){
                    this.$vux.toast.text(err.msg);
                    return;
                }else{
                    
                    if(res.code==2000){
                        console.log(res)
                        this.$vux.toast.text('银行卡添加成功！');
                        this.$router.push('/addCard');
                    }
                }


            }
        
      },
      selectBank(e){
        const index = e.target.dataset.index;
        this.selected=this.bankList[index];
        console.log(this.selected);
        console.log(this.selected.bank_name)
        this.selectToggle();
      }
  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
