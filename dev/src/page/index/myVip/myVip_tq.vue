<style scoped lang="less">
.tq-nav {
  width: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  line-height: 51/50rem;
  font-size: 12pt;
  white-space: nowrap;
  position: fixed;
  /* top: 0; */
  left: 0;
  z-index: 99;
}

.tab-item {
  position: relative;
  display: inline-block;
  text-align: center;
  z-index: 3;
  width: 25%;
  background:#fff;
  color: #333;
  padding:10px 0;
  line-height: 20/50rem;
}

.nav-img {
  width: 40/50rem;
  height: 40/50rem;
}
.nav-title{
  font-size: 10pt;
}
.huangjin.tab-item.active{
  background: #CBAA56;
  color: #fff;
}
.zuanshi.tab-item.active{
  background: #8F9CC0;
  color: #fff;
}
.list-box{
  margin-top:100/50rem;
}
.tequan-list{
  background: #fff;
  padding:20px 0;
  padding-right: 15/50rem;
}
.list-left-icon{
  width: 20%;
  padding: 0 20/50rem;
  text-align: center;
}
.list-left-icon{
  width: 40/50rem;
  height: 40/50rem;
}
.list-right{
  width: 80%;
}
.tequan-h1{
  font-size: 12pt;
  line-height: 30/50rem;
}
.tequan-h3{
  font-size: 10pt;
}
.vip-btn{
  position: fixed;
  width: 100%;
  line-height: 51/50rem;
  text-align: center;
  bottom: 0;
}
.huang_bg{
  background: #F6D588;
}
.zuanshi_bg{
  background: #D8E4F8;
}
.d_box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
._box{
    position: relative;
}
</style>
<template>
    <div class="idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div class="_box">
            <div class="d_box">
                <div scroll-x class="tq-nav" scroll-with-animation="true">
                    <div :class="[TheType==1?'huangjin':'zuanshi', noActive==index?'active':'']" class="tab-item" v-for="(item, index) in tequanInfo" v-if="item.stauts==1" :key="index" @click='checkNav(index)' :data-index="index">
                        <img class="nav-img" :src="item.icon"/>
                        <div class="nav-title">{{item.title}}</div>
                    </div>
                </div>
                <div class="list-box" v-for="(item, index) in tequanInfo" :key="index" v-if="noActive==index">
                    <div class="tequan-list flex flex-align-center line_xi_after" v-for="(itemList, index) in item.desc" :key="index">
                    <img class="list-left-icon" :src="itemList.icon"/>
                    <div class="list-right">
                        <div class="tequan-h1">{{itemList.title}}</div>
                        <div class="tequan-h3">
                        <div v-for="(desc_item, index) in itemList.desc" :key="index">{{desc_item}}</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="vip-btn" @click='openVip' :class="TheType==1?'huang_bg':'zuanshi_bg'" v-if="member_grade==0">
                    <div v-if="TheType==1">立即开通高级会员
                    <span class="iconfont icon-yuanyou"></span>
                    </div>
                    <div v-if="TheType==2">立即开通钻石会员
                    <span class="iconfont icon-yuanyou"></span>
                    </div>
                </div>
                <div class="vip-btn" :class="TheType==1?'huang_bg':'zuanshi_bg'" v-else-if="member_grade==1">
                    <div v-if="TheType==1">您已成为高级会员</div>
                    <div v-if="TheType==2" @click='openVip'> 立即开通钻石会员
                    <span class="iconfont icon-yuanyou"></span>
                    </div>
                </div>
                <div class="vip-btn" :class="TheType==1?'huang_bg':'zuanshi_bg'" v-else-if="member_grade==2">
                    <div v-if="TheType==1">您已开通更高级别的会员
                    <span class="iconfont icon-yuanyou"></span>
                    </div>
                    <div v-if="TheType==2">您已开通钻石会员
                    <span class="iconfont icon-yuanyou"></span>
                    </div>
                </div>
                <div class="vip-btn" :class="TheType==1?'huang_bg':'zuanshi_bg'" @click='openVip' v-else>
                    <div v-if="TheType==1">立即开通高级会员
                    <span class="iconfont icon-yuanyou"></span>
                    </div>
                    <div v-if="TheType==2">立即开通钻石会员
                    <span class="iconfont icon-yuanyou"></span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            tequanInfo: "",
            noActive: 0,
            scrollLeft: 0,
            windowWidth: "",
            vipltoffer: "",
            viporiginal_price: "",
            vipType: "",
            member_grade: "",
            TheType:"",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '确认订单', //导航栏 中间的标题
            },
        }
    },
    created() {
        this.vipType = this.$route.query.vipType;
        this.noActive = this.$route.query.index;
        this.vipltoffer = this.$route.query.vipltoffer;
        this.viporiginal_price = this.$route.query.viporiginal_price;
        this.member_grade = this.$route.query.member_grade;
        this.TheType = this.$route.query.TheType;
        this.windowWidth = window.innerWidth / 4;
        this.showPage();
    },
    mounted() {
        
    },
    methods: {
        async showPage(){
            let data = {
                type: this.TheType
            }
            const [err, res] = await api.privilege(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                for (var i = 0; i < res.data.length; i++) {
                    for (var n = 0; n < res.data[i].desc.length; n++) {
                        res.data[i].desc[n].desc = res.data[i].desc[n].desc.split("\\n");
                    }
                }
                this.tequanInfo = res.data;
                this.checkCor();
            }
        },
        checkCor(){
            if (this.noActive > 2) {
                this.scrollLeft = (this.noActive - 2) * this.windowWidth;
            } else {
                this.scrollLeft = 0;
            }
        },
        checkNav(index){
            if (index != this.noActive) {
                this.noActive = index;
                this.checkCor();
            }
        },
        openVip(){
            this.$router.push({
                path: 'myVip_pay',
                query: {
                    vipltoffer: this.vipltoffer,
                    vipType: this.vipType,
                    viporiginal_price: this.viporiginal_price,
                    member_grade: this.member_grade
                }
            })
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
