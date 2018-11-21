<style lang="less" scoped>
.img {
width: 259/100rem;
display: block;
margin: 82/100rem auto;
}
.title {
  font-size: 34/100rem;
  color: #333;
  margin-top: 20/100rem;
  text-align: center;
}

.date {
  font-size: 24/100rem;
  color: #999;
  margin-top: 27/100rem;
  text-align: center;
}
.arrive {
  font-size: 26/100rem;
  color: #999;
  margin-top: 20/100rem;
  text-align: center;
}

.btn {
  width: 500/100rem;
  text-align: center;
}
      
</style>

<template>
  <div class="shopindex idnexWrapBox">
    <x-header :left-options="{backText:''}" title="余额提现" id="vux-header"></x-header>
    <!-- 主体内容 -->
    <div>
        <img src="https://img.xiepinhui.com.cn/mobile/wallet/ico_submitted.png" class="img" />
        <div class="title">提现申请已提交，等待财务审核</div>
        <div class="date">{{time}}</div>
        <div class="arrive">预计到账时间：一周到俩周以内</div>
        <div class="btn" @click="goSuccess">完成</div>
    </div>
    <!-- 主体内容end -->
    

    
    
  </div>
</template>

<script>
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
      time:''
    };
  },
  created() {
    var myDate =new Date();
    var year=myDate.getFullYear();
    var month=myDate.getMonth()+1;
    var date=myDate.getDate();
    this.time=year+'-'+month+'-'+date;
  },
  mounted() {
    this.$nextTick(function() {});
  },
  methods: {
    goSuccess(){
      this.$router.push('/center');
    }
  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>
