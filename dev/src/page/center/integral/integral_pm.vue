<style scoped lang="less">
.page,
.page__bd{
    height: 100%;
}
.page{
    background-color: #f8f8f8;
}
.page__bd{
    padding-bottom: 0;
}
.weui-navbar{
  position: fixed;
  width: 100%;
  top:auto;
}
.weui-tab__content{
    padding-top:10px;
    text-align: center;
}
.weui-navbar{
  background: #fff;
  border-bottom: 0 !important;
}
.weui-navbar__item.weui-bar__item_on {
  color: #61D8D0 !important;
}
.tabItem{
    width: 33.3%;
}
.weui-navbar__slider{
  background: #61D8D0 !important;
  height: 1px;
}
.weui-tab__content{
  padding-top:60px;
}
.myself-No{
  background: #fff;
  padding:15px;
  position: relative;
}
.paiming-num{
  width:25px;
  font-size: 14pt;
  text-align: center;
}
.paiming-touxiang{
  width:40px;
  height:40px;
  border-radius: 100px;
  margin: 0 10px;
}
.paiming-name{
  width:50%;
  font-size: 12pt;
  text-align: left;
  color: #333;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.paiming-jifen{
  position: absolute;
  right: 15px;
  color: #61D8D0;
  font-size: 16pt;
  top: 20px;
}
.paiming-No1{
  width:25px;
  max-height: 30px;
}
.paiming-list{
  padding-top: 10px;
}
.rank-hui{
  color: #333 !important;
}
.small-title{
  font-size: 10pt;
}
</style>
<template>
    <div class="idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div class="page">
                <div class="page__bd">
                <div class="weui-tab">
                    <div class="weui-navbar">
                        <div v-for="(item, index) in tabs" :key="index" class="tabItem">
                            <div :id="index" class="weui-navbar__item" :class="activeIndex == index ? 'weui-bar__item_on' : ''" @click="tabClick(index+1, index)" :data-type="index+1">
                                <div class="weui-navbar__title">{{item}}</div>
                            </div>
                        </div>
                        <div class="weui-navbar__slider" :style="{left: sliderLeft + 'px', transform: 'translateX('+sliderOffset+'px', '-webkit-transform': 'translateX('+sliderOffset+'px)'}"></div>
                    </div>
                    <div class="weui-tab__content">
                    <div class="myself-No flex flex-align-center" v-if="!!paimingInfo">
                        <span class="paiming-num">{{paimingInfo.member_info.rank}}</span>
                        <!-- <image class="paiming-No1" src='http://img.xiepinhui.com.cn/small_app/jifen/No1.png'></image> -->
                        <img class="paiming-touxiang" :src='paimingInfo.member_info.member_avatar'/>
                        <span class="paiming-name">{{paimingInfo.member_info.member_name}}</span>
                        <span class="paiming-jifen">{{paimingInfo.member_info.member_points}}<span class="small-title">积分</span></span>
                    </div>
                    <div class="paiming-list">
                        <div class="myself-No flex flex-align-center line_xi_after" :key="index" v-for="(item, index) in paiminList">
                        <span class="paiming-num" v-if="item.rank>3">{{item.rank}}</span>
                        <img mode='widthFix' class="paiming-No1" v-else :src='item.icon'/>
                        <img class="paiming-touxiang" :src='item.member_avatar'/>
                        <span class="paiming-name">{{item.member_name}}</span>
                        <span class="paiming-jifen" :class="item.rank>3?'rank-hui':''">{{item.member_points}}<span class="small-title">积分</span></span>
                        </div>
                    </div>
                    <div class="loading" v-if="upmore">上拉加载更多</div>
                    <div class="loading" v-if="upLoading">加载中...</div>
                    <div class="loading complete" v-if="upLoadingComplete">已加载全部数据</div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { isScrollBottom } from '@/utils/comm.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            tabs: ["今日排行榜", "本周排行榜", "本月排行榜"],
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            paimingInfo:"",
            type:1,
            page:1,
            upLoading: false,
            upLoadingComplete: false,
            paiminList:"",
            nvabarData: {
                showCapsule: 1,
                title: '积分排名',
            },
            upmore: false
        }
    },
    created() {
        this.showPage();
    },
    mounted() {
        this.getLeft();
        this.$nextTick(()=>{
            isScrollBottom(this.showPage)
        })
    },
    methods: {
        async showPage(){
            if(this.upLoadingComplete)return;
            let data = {
                account: this.account,
                token: this.token,
                page: this.page,
                type: this.type
            }
            this.upLoading = true;
            this.upmore = false;
            const [err, res] = await api.pointsRanking(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                console.log(9999)
                if(this.page == 1){
                    this.paimingInfo = res.data;
                    this.paiminList = res.data.info;
                    console.log(5555)
                }
                if(this.paiminList.length < 10 || this.paiminList.length >= res.data.info.length + this.paiminList.length){
                    this.upmore = false;
                    this.upLoading = false;
                    this.upLoadingComplete = true;
                    return;
                }
                this.paiminList = this.paiminList.concat(res.data.info);
                this.upLoading = false;
                this.upmore = true;
                this.page ++;
            }
        },
        getLeft(){
            let sliderWidth = 96;
            this.sliderLeft = (window.innerWidth / this.tabs.length - sliderWidth) / 2;
            this.sliderOffset = window.innerWidth / this.tabs.length * this.activeIndex;
        },
        tabClick(type, i){
            if(this.activeIndex == i)return;
            this.activeIndex = i;
            this.page = 1;
            this.type = type;
            this.upLoading = false;
            this.upmore = true;
            this.upLoadingComplete = false;
            // this.paimingInfo = "";
            window.scrollTo(0,0);
            this.getLeft();
            this.showPage();
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
