<style scoped lang="less">
.page{
}
.active-banner img{
  width: 100%;
}

.daojishi{
  padding: 0px 15px;
  text-align: center;
  padding-bottom: 8px;
}
.daojishi image{
  width: 70%;
}
.voteText{
  background: #61D8D0;
  margin-right:10px;
  padding:1px 5px;
  color: #fff;
  font-size:9pt;
  border-radius: 2px;
}
.widthItem{
    width: 97%;
    margin: 0 auto;
}
.marTop{
    margin-top: 0.1rem;
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div class="marTop">
            <div class="active-banner widthItem">
                <img mode="widthFix" :src='topimg'/>
                </div>
                <div v-if="totalSecond>0">
                <div class="daojishi" v-if="istime==''">
                    <img mode='widthFix' src='https://m.xiepinhui.com.cn/img/nine/daojishi.png'/>
                    <div class='flex countDownTimediv flex-pack-center'>
                    <div class="voteText countDownTimeText">{{timeList[0].countDownDay}}天</div>
                    <div class="voteText countDownTimeText">{{timeList[0].countDownHour}}时</div>
                    <div class="voteText countDownTimeText">{{timeList[0].countDownMinute}}分</div>
                    <div class="voteText countDownTimeText">{{timeList[0].countDownSecond}}秒</div>
                    </div>
                </div>
                </div>
                <div class="goodsInfo flex flex-warp flex-pack-justify widthItem">
                <div class="goods-li" v-for="(item, index) in goodslist" :key="index" :id="item.n_goods_id" @click='openGoods(item.n_goods_id)' data-price=''>
                    <!--widthFix  -->
                    <img mode="widthFix" :src="item.goods_image" lazy-load="true"/>
                    <span class="goods-name">{{item.goods_name}}</span>
                    <span class="goods-xiaoliang">销量：{{item.goods_salenum}}</span>
                    <span class="goods-price">
                    <div  v-if='infoType==1'>￥{{item.purchase_price}}</div>
                    <div v-else>￥{{item.purchase_price}}</div>
                    <!-- <text class="goods-old-price">市场价：{{item.goods_marketprice}}</text> -->
                    </span>
                </div>
            </div>
            <div class="loading" v-if="upLoading">加载中...</div>
            <div class="loading complete" v-if="upLoadingComplete">已加载全部</div>
            <!-- <div class="gotop iconfont icon-huidaodingbu" v-if="scrollTop.goTop_show" catchtap="goTopFun"></div> -->
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
            topimg:"",
            maxtime: "",
            // isv-ifLoading: true,
            // isv-ifToast: true,
            dataList: {},
            goodslist:[],
            countDownDay: 0,
            countDownHour: 0,
            countDownMinute: 0,
            countDownSecond: 0,  
            activeType:"",
            upLoading: false,
            upLoadingComplete: false,
            page:1,
            timeList:{},
            istime:"",
            totalSecond:"",
            infoType:0,
            isShipng:0,
            nvabarData: {
                showCapsule: 1,
                title: '鞋品荟',
            },
            total_count: ''
        }
    },
    created() {
        this.isShipng = this.$route.query.isShipng || '';
        this.istime = this.$route.query.istime;
        this.activeType = this.$route.query.type;
        this.infoType = this.$route.query.infoType;
        this.getData();
    },
    mounted() {
        this.$nextTick(()=>{
            isScrollBottom(this.getData);
        })
    },
    beforeDestroy(){
        window.onscroll = null;
    },
    methods: {
        async getData(){
            let that = this;
            if(this.total_count && this.goodslist.length >= Number(this.total_count)){
                this.upLoadingComplete = true;
                return;
            }
            let data = {
                type: that.activeType,
                page: this.page
            }
            this.upLoading = true;
            const [err, res] = await api.activity(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.upLoading = false;
                if(this.page > 1){
                    this.goodslist = this.goodslist.concat(res.data.list);
                    this.page = this.page + 1;
                    return;
                }
                this.nvabarData.title = res.data.saleTitle;
                var endsStr = res.data.activitiesEndsStr.replace(/-/g, '/');
                var nowTimeStr = res.data.nowTimeStr.replace(/-/g, '/'); 
                var totalSecond = Date.parse(endsStr) / 1000 - Date.parse(nowTimeStr) / 1000;
                this.dataList = res.data;
                this.goodslist = this.goodslist.concat(res.data.list);
                this.topimg = res.data.headerImage.image;
                this.totalSecond = totalSecond;
                this.page = this.page + 1;
                this.total_count = res.data.total_count;
                // var list={};
                // if (totalSecond>0){
                //     clearInterval(app.data.interval)
                //     app.daojishi(totalSecond, that, 0, list, app);
                // }
            }
        },
        openGoods(goodsid){
            if (this.infoType==1){
                this.$router.push({
                    path: '/index/goodsInfoPindan',
                    query: {
                        goodsId: goodsid,
                        // s_id: this.activeType
                    }
                })
            }else{
                // this.$router.push({
                //     path: '/index/active_goodsInfo',
                //     query: {
                //         goodsId: goodsid,
                //         s_id: this.activeType
                //     }
                // })
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
