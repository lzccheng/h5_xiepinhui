<style scoped lang="less">
.page{
  padding-bottom: 51px;
}
.wrap {
  padding:25px 0;
  width: 100%;
  background: url(http://img.xiepinhui.com.cn/small_app/jifen/my_jifen_top_bg.png) no-repeat;
  background-size: 100%;
}

.cir {
  display: inline-div;
  margin-top: 20/100rem;
}

.top {
  text-align: center;
}

.cc {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: -80px;
  color: #fff;
}

.jifen-num {
  font-size: 18pt;
  font-weight: bold;
  padding-left: 2px;
}

.jifen-lable {
  font-size: 10pt;
  padding-left: 2px;
}

.header-banner img {
  width: 100%;
}

.lable-h6 {
  background: #ffa3a3;
  color: #fff;
  font-size: 12pt;
  padding:7px 10px;
}

.zong-num {
  color: #ffeb00;
  padding-right: 10px;
}

.paiming-num {
  color: #ffeb00;
  padding-left: 10px;
}

.icon-youbian {
  color: #fff;
  position: absolute;
  right: 10px;
}

.page__bd {
  background: #fff;
}

.weui-grid__icon {
  width: 50px;
  height: 50px;
}

.jifen-list-renwu{
  background: #fff;
  margin-top: 10px;
}
.renwu-grid-img{
  width:15%;
  padding:15px 10px;
}
.renwu-grid-img img{
  width: 100%;
}
.renwu-grid-center{
  width: 85%;
  padding: 15px 0;
}
.renwu-grid-center-title{
  font-size: 12pt;
  line-height:30px;
  color: #333;
  position: relative;
}
.renwu-grid-center-btn{
  position: absolute;
  right:10px;
  top: 0px;
  padding: 2px 10px;
  line-height:20px;
  font-size: 11pt;
  border-radius: 50px;
  color: #fff;
  background:linear-gradient(90deg,rgba(253,199,131,1),rgba(251,76,114,1));
}
.success{
  background: #FCB66E !important;
}
.renwu-grid-center-text{
    color: #888;
    font-size: 10pt;
}
.bottom-btn{
 background:#61D8D0;
 position: fixed;
 width: 100%;
 line-height:51px;
 font-size: 12pt;
 text-align: center;
 color: #fff;
 bottom: 0;
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div v-if="pageInfo">
            <div class="wrap">
                <div class="top">
                <canvas class="cir" style="width:100px; height:100px;" canvas-id="canvasArc"> </canvas>
                <div class="cc">
                    <div class="jifen-num">{{pageInfo.member_info.day_points}}</div>
                    <div class="jifen-lable">今日积分</div>
                </div>
                </div>
            </div>
            <div class="lable-h6" @click='jifenPaihang'>
                我的总积分
                <span class="zong-num">{{pageInfo.member_info.total_points}}</span>当前排名
                <span class="paiming-num">{{pageInfo.member_info.rank}}</span>
                <span class="iconfont icon-youbian"></span>
            </div>
            <div class="page__bd">
                <div class="weui-grids">
                <div class="weui-grid" hover-class="weui-grid_active" @click='jifenLink(item.id)' :data-typeId="item.id" :key="index" v-for="(item, index) in pageInfo.icon_list">
                    <img class="weui-grid__icon" :src="item.icon" />
                    <div class="weui-grid__label">{{item.title}}</div>
                </div>
                </div>
            </div>
            <div class="jifen-list-renwu">
                <div class="renwu-grid flex line_xi_after" :key="index" v-for="(item, index) in pageInfo.rule_list">
                <div class="renwu-grid-img">
                    <img mode='widthFix' :src="item.icon"/>
                </div>
                <div class="renwu-grid-center">
                    <div class="renwu-grid-center-title">{{item.title}}
                    <div v-if="index==0">
                        <span class="renwu-grid-center-btn" v-if='!item.complete' bindtap='gosignIn'>去签到</span>
                        <span class="renwu-grid-center-btn success" v-else>签到成功</span>
                    </div>
                    <span class="renwu-grid-center-btn" bindtap='wanshan' v-if='!item.complete&&index==1'>去完善</span>
                    </div>
                    <div class="renwu-grid-center-text">{{item.desc}}</div>
                </div>
                </div>
            </div>
            <div class="bottom-btn" @click='goShop'>进入积分商城</div>
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
            pageInfo:"",
            arcNum:0,
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '我的积分', //导航栏 中间的标题
            },
        }
    },
    created() {
        this.showPage();
    },
    mounted() {

    },
    methods: {
        async showPage(){
            let data = {
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.pointsHome(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.pageInfo = res.data;
                if (res.data.member_info.day_points!=0){
                    this.arcNum = parseFloat(res.data.member_info.day_points / res.data.member_info.base_points * 2 + 0.48).toFixed(2)
                }
                this.huizhi()
            }
        },
        huizhi(){

        },
        goShop(){
            if(this.$stopClick(1000))return;
            this.$router.push('/centerFull/myService/integral_sc');
        },
        jifenLink(typelink){
            let url;
            let query = {};
            if(typelink == 1){
                url = 'integral_mx';
            }else if(typelink == 2){
                url = '/centerFull/myService/integral_order';
            }else if(typelink == 3){
                url = '/centerFull/myshop/noShop';
                query.title = '积分规则';
                query.url = 'https://m.xiepinhui.com.cn/smallweb/guize.html?type=jifen';
            }
            this.$router.push({
                path: url,
                query
            })
        },
        jifenPaihang(){
            this.$router.push('integral_pm');
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
