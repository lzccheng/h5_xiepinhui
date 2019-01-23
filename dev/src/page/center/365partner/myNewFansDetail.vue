<style scoped lang="less">
/* 导航的样式 */
.nav-wrap {
  position: fixed;
  width: 100%;
  top: 0;
  background: #61d8d0;
  color: #fff;
  z-index: 9999999;
}
/* 标题要居中 */
.nav-title {
  position: absolute;
  text-align: center;
  max-width: 400/100rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-size: 36/100rem;
  color: #fff;
  font-weight: 600;
}
.null_bg{
  width:40%;
  display: block;
  margin:auto;
  margin-top: 0.5rem;
}
.nav-capsule {
  display: flex;
  align-items: center;
  margin-left: 30/100rem;
  width: 140/100rem;
  justify-content: space-between;
  height: 100%;
}

.navbar-v-line {
  width: 1px;
  height: 32/100rem;
  background-color: #e5e5e5;
}

.back-pre, .back-home {
  width: 32/100rem;
   height: 36/100rem;
  margin-top: 4/100rem;
 
}
.nav-capsule .back-home {
  width: 36/100rem;
  height: 40/100rem;
  margin-top: 3/100rem;
}
.bg_fans_orderBox{
  text-align: center;
  background: #61d8d0;
  height: 360/100rem;
  color:#fff;
  font-size: 14pt;
  padding-top: 13/100rem;
}
.bg_fans_orderBox .picAvatar{
  width: 180/100rem;
  height: 180/100rem;
  border-radius: 50%;
  display: block;
  margin: auto;
  border:8/100rem solid #fff;
  margin-bottom:20/100rem;
  background-size: cover;
  background-position: center;
}
.bg_fans_orderBox>span{
  display: block;
  font-size: 12pt;
}
.gap_box{
  height: 12/100rem;
  background: #efefef;
}
.jifen-order{
  border-bottom: 1px solid #efefef;
}
.jifen-order-header{
  padding: 28/100rem 20/100rem;
  overflow: hidden;
  color: #333;
}
.left_sign{
  font-size: 30/100rem;
  float: left;
}
.right_status{
  font-size: 24/100rem;
  float: right;
}
.danhao-order-header{
  overflow: hidden;
  font-size: 24/100rem;
  color: #666;
  padding: 14/100rem 20/100rem;
}
.left_danhao{
  
  float: left;
}
.right_time{
  float: right;
}
.goodsPic{
  width: 140/100rem;
  height: 140/100rem;
  border-radius: 10/100rem;
  background-size: cover;
  background-position: center;
}
.jifen-order-center{
  padding: 16/100rem 20/100rem;
  overflow: hidden;
}
.left-img{
  float: left;
}
.left-img img{
  display: block;
}
.right-goodsinfo{
  /* float: left; */
  padding-left:20/100rem;
  overflow: hidden;
}
.info-top{
  font-size: 28/100rem;
  color: #333;
}
.info-middle{
  float: right;
  color: #999;
  font-size: 24/100rem;
}
.info-bottom{
  overflow: hidden;
  width: 100%;
}
.bottom-space{
  float: left;
  font-size: 24/100rem;
  color: #999;
}
.bottom-price{
  float: right;
  font-size: 34/100rem;
  color: #333;
}
.txt_tip_box{
  color:#333;
  font-size: 28/100rem;
  text-align: right;
  padding: 16/100rem 20/100rem;
}
.bottom_box{
  margin-top:20/100rem;
  margin-bottom: 20/100rem;
  text-align:center;
font-size:24/100rem;
color:#666;
}
.tabBox{
    border-bottom: 1px solid #eee;
    color: #555;
    .tabItem{
        position: relative;
        width: 50%;
        text-align: center;
        padding: 0.2rem 0;
        span{
            
        }
        &.active{
            color: #61d8d0;
            &::after{
                content: '';
                position: absolute;
                left: 50%;
                bottom: 0;
                width: 2rem;
                height: 2px;
                background-color: #61d8d0;
                margin-left: -1rem;
            }
        }
        
    }
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <!-- <div class='nav-title' style='padding-top:4px;padding-bottom:10px'>粉丝订单详情</div> -->
            <!-- <div style='display: flex; justify-content: space-around;flex-direction: column'>
                <div class='nav-capsule'>
                <div bindtap='_navback' style="display:inline-block">
                    <img src='@/assets/images/leftArrow2.png' mode='widthFix' class='back-pre' style="width:40px;margin-top:15px"/>
                </div>
                <div bindtap='_backhome'>
                </div>
                </div>
            </div> -->
            <div v-if="user_info">
                <div class="bg_fans_orderBox">
                    <div :style="{backgroundImage:'url('+user_info.member_avatar+')'}" class="picAvatar"></div>
                    <span style="font-size:14px;">{{user_info.member_name}}</span>
                    <span style="font-size:14px;">总消费：<span style="font-size:20px;">{{user_info.order_amount}}</span></span>
                </div>
                <div class="gap_box"></div>
                <div class="tabBox flex">
                    <div v-for="(item, i) in tabArr" @click="tabHandle(i)" :class="currentTab == i?'active': ''" :key="i" class="tabItem">
                        <span>{{item.name}}</span>
                    </div>
                </div>
                <div v-if="listObj.length<=0">
                    <null-data>
                        暂无数据
                    </null-data>
                </div>
                <!-- <img  src="@/assets/images/null/null_fan.png" mode="widthFix" class="null_bg"/> -->
                <div v-else class="orderDetailBox">
                    <div class="jifen-order" v-for="(item, index) in listObj" :key="index">
                        <div class="jifen-order-header">
                            <div class="left_sign">
                            <img src="@/assets/images/dianpu.png" mode="widthFix" style="width:36/100rem;"/>
                            {{item.shop_title}}
                            </div>
                            <!-- <text class="right_status">交易关闭</text> -->
                        </div>
                        <div class="danhao-order-header">
                            <div class="left_danhao">
                            单号：{{item.red_order_sn}}
                            </div>
                            <span class="right_time">{{item.red_addtime}}</span>
                        </div>
                        <div class="jifen-order-center" v-for="(itemOrder, index) in item.order_goods" :key="index">
                            <div class="left-img goodsPic" :style="{backgroundImage:'url('+itemOrder.goods_image+')'}">
                            </div>
                            <div class="right-goodsinfo">
                            <div class="info-top">
                                <span class="top-goods-name">{{itemOrder.goods_name}}</span>
                            </div>
                            <div class="info-middle">
                                <span class="middle-goods-num">x{{itemOrder.goods_num}}</span>
                            </div>
                            <div class="info-bottom">
                                <span class="bottom-space">{{itemOrder.goods_spec}}</span>
                                <span class="bottom-price">￥{{itemOrder.goods_price}}</span>
                            </div>
                            </div>
                        </div>
                        <div class="txt_tip_box">
                            共{{item.order_total_num}}件商品 合计：￥{{item.red_order_amount}}元
                        </div>
                        </div>
                </div>
                <div class="bottom_box" v-if="show_bottom && listObj.length!=0">
                    已经到达底部~
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
import nullData from '@/components/nullData.vue';
export default {
    components: {
        XHeader,
        nullData
    },
    data() {
        return {
            nvabarData: {
                showCapsule: 1,
                title: '粉丝订单详情',
            },
            tabArr: [
                {name: '未返奖励金订单'},
                {name: '已返奖励金订单'},
            ],
            // height: app.globalData.height + 40,
            window_height: '',
            page:0,
            listObj:[],
            total_count:'',
            user_info: '',
            show_bottom: false,
            currentTab: 0,
            dataObj: {

            }
        }
    },
    created() {
        this.fanid = this.$route.query.fanid;
        this.fansOrderList();
    },
    mounted() {
        this.$nextTick(()=>{
            isScrollBottom(this.onBottom)
        })
    },
    destroyed () {
        window.onscroll = null;
    },
    methods: {
        async fansOrderList(){
            let record_status = Number(this.currentTab) + 1;
            if(!this.dataObj[record_status]){
                this.dataObj[record_status] = {};
                this.dataObj[record_status].list = [];
                this.dataObj[record_status].page = 1;
                this.dataObj[record_status].total_count = '';
            }else{
                if(this.dataObj[record_status].list.length >= Number(this.dataObj[record_status].total_count)){
                    this.listObj = this.dataObj[record_status].list;
                    this.show_bottom = true;
                    return;
                }
            }
            this.show_bottom = false;
            let that = this;
            let data = {
                account: this.account,
                token: this.token,
                fan_member_id: this.fanid,
                page: this.dataObj[record_status].page,
                record_status
            }
            this.$vux.loading.show({
                text: '加载中...'
            })
            const [err, res_data] = await api.fanorder1(data);
            this.$vux.loading.hide();
            if (err) {
                this.$vux.toast.text(err.msg)
                return;
            }
            if(res_data.code == 2000){
                var resList = res_data.data.list;//返回的列表对象
                var total_count = res_data.data.total_count;//返回的总条数
                var listObj = that.listObj;//data里的列表数组
                var user_info = res_data.data.user_info;
                var shop_title = res_data.data.shop_title;
                var page = that.page;//页数
                this.dataObj[record_status].list = this.dataObj[record_status].list.concat(resList);
                this.dataObj[record_status].total_count = total_count;
                this.dataObj[record_status].page ++;
                this.listObj = this.dataObj[record_status].list;
                this.total_count = this.dataObj[record_status].total_count;
                this.user_info = user_info;
                this.shop_title = shop_title;
            }
        },
        tabHandle(i){
            this.currentTab = i;
            this.fansOrderList();
        },
        onBottom(){
            this.fansOrderList();
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
