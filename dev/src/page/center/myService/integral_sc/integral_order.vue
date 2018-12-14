<style scoped lang="less">

</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div v-if="isshow==2" class="null-bg">
                <img mode='widthFix' src='@/assets/images/null/zanwudingdan.png' class="null-img"/>
                <div class="null-title">当前暂无兑换订单</div>
            </div>
            <div v-else>
                <div class="jifen-order" v-for="(item, index) in pageInfo.list" :key="index">
                <div class="jifen-order-header flex flex-pack-justify flex-align-center">
                    <span class="flex">
                <span class='iconfont icon-jifen-order'></span>
                    <span><span class="small-num">{{item.point_ordersn}}</span></span>
                    </span>
                    <span class="header-time">{{item.point_addtime}}</span>
                </div>
                <div class="jifen-order-center flex ">
                    <div class="left-img">
                    <img mode='widthFix' :src='item.goods_data.point_goodsimage'/>
                    </div>
                    <div class="right-goodsinfo">
                    <div class="info-top flex flex-pack-justify">
                        <span class="top-goods-name">{{item.goods_data.point_goodsname}}</span>
                        <span class="top-goods-num">x1</span>
                    </div>
                    <div class="info-bottom flex flex-pack-justify">
                        <span class="bottom-space">{{item.goods_data.point_goodsspec}}</span>
                        <span class="bottom-price">{{item.point_allpoint}}积分</span>
                    </div>
                    </div>
                </div>
                <div class="jifen-order-bottom  flex flex-pack-end">
                    <span class="bottom-small-btn" v-if="item.point_orderstate==30||item.point_orderstate==40||item.point_orderstate==50" bindtap='goShip' :data-ship="item.point_shippingcode" :data-orderid='item.point_orderid'>查看物流</span>
                    <button class="bottom-small-btn" open-type="contact">联系客服</button>
                    <span class="bottom-small-btn btn-zi" bindtap='gobay' :data-orderid='item.point_orderid' v-if="item.point_orderstate==20">支付邮费</span>
                </div>
                </div>
                <div class="loading" v-if="upLoading">加载中...</div>
                <div class="loading complete" v-if="upLoadingComplete">已加载全部数据</div>
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
            pageInfo: "",
            isshow: 1,
            upLoading: false,
            upLoadingComplete: false,
            isshow: 1,
            page: 2,
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '兑换订单', //导航栏 中间的标题
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
                token: this.token,
                page: 1
            }
            const [err, res] = await api.pointsOrderlist(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                 var isshow;
                if (res.data.list == "") {
                    isshow = 2;
                }
                this.pageInfo = res.data;
                this.isshow = isshow;
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
