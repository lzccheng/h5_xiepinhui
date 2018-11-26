<style scoped lang="less">
.jifen-shop-header{
  padding: 10px 0;
  background: #fff;
}
.Available-jifen{
  width: 50%;
  text-align: center;
  font-size: 12pt;
}
.Available-jifen:first-of-type{
  border-right: 1px #E6E6E6 solid;
}
.iconfont{
  position: relative;
  font-size:18pt;
  padding-right:3/50rem;
  top:3/50rem;
}
.icon0{
  color: #FB4C72;
}
.icon1{
  color: #59A4FF;
}
.jifen-num{
  color: #FB4C72;
}
.biaoti{
  margin-top: 15/50rem;
  width: 100%;
  font-size: 0
}
.biaoti image{
  width: 100%;
  max-height: 100/50rem;
}
.goods-price{
  padding-left:5/50rem;
  line-height: 30/50rem;
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div v-if="shopInfo">
            <div class="jifen-shop-header flex flex-align-center">
            <div class="Available-jifen">
                <span class='iconfont icon-jifen icon0'></span>
                可用积分：<span class="jifen-num">{{shopInfo.member_points}}</span>
            </div>
            <div class="Available-jifen" bindtap='duihuanOrder'>
                <span class='iconfont icon-jifen-order icon1'></span>兑换订单
            </div>
            <div class="biaoti">
            <img mode='widthFix' src='http://img.xiepinhui.com.cn/small_app/jifen/remen.png'/>
            </div>
            <div class="goodsInfo flex flex-warp flex-pack-justify">
            <div class="goods-li" v-for="(item, index) in shopInfo.list" :key="index" :data-goodsid="item.nine_goods_commonid" bindtap='openGoods'>
                <!--widthFix  -->
                <img mode="widthFix" :src="item.goods_image" lazy-load="true"/>
                <span class="goods-name">{{item.goods_name}}</span>
                <span class="goods-price">{{item.exchange_points}}积分</span>
            </div>
            </div>
            <div class="weui-loadmore" v-if="upLoading">
            <div class="weui-loading"></div>
            <div class="weui-loadmore__tips">正在加载...</div>
            </div>
            <div class="loading complete" v-if="upLoadingComplete">已经到底了~</div>
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
            shopInfo:"",
            // 组件所需的参数
            upLoading: false,
            upLoadingComplete: false,
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '积分商城', //导航栏 中间的标题
            },
        }
    },
    created() {

    },
    mounted() {
        this.showPage();
    },
    methods: {
        async showPage(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                page: 1
            }
            const [err, res] = await api.pointsgoodslist(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.shopInfo = res.data;
                console.log(this.shopInfo)
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
