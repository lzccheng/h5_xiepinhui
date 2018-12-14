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
.biaoti img{
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
                <div class="Available-jifen" @click='duihuanOrder("/centerFull/integral/integral_my")'>
                    <span class='iconfont icon-jifen icon0'></span>
                    可用积分：<span class="jifen-num">{{shopInfo.member_points}}</span>
                </div>
                <div class="Available-jifen" @click='duihuanOrder("integral_order")'>
                    <span class='iconfont icon-jifen-order icon1'></span>兑换订单
                </div>
            </div>
            <div class="biaoti">
                <div>
                    <img mode='widthFix' src='http://img.xiepinhui.com.cn/small_app/jifen/remen.png'/>
                </div>
            </div>
            <div class="goodsInfo flex flex-warp flex-pack-justify">
                <div class="goods-li" v-for="(item, index) in shopInfo.list" :key="index" :data-goodsid="item.nine_goods_commonid" @click='openGoods(item.nine_goods_commonid)'>
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
            shopInfo:"",
            // 组件所需的参数
            upLoading: false,
            upLoadingComplete: false,
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '积分商城', //导航栏 中间的标题
            },
            page: 1
        }
    },
    created() {

    },
    mounted() {
        this.showPage();
        this.$nextTick(()=>{
            isScrollBottom(this.showPage)
        })
    },
    destroyed () {
        window.onscroll = null;
    },
    methods: {
        async showPage(){
            if(this.shopInfo){
                if(Number(this.shopInfo.total_count) <= this.shopInfo.list.length){
                    this.upLoadingComplete = true;
                    this.upLoading = false;
                    this.upmore = false;
                    return;
                }
            }
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                page: this.page
            }
            const [err, res] = await api.pointsgoodslist(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                if(this.page == 1){
                    this.shopInfo = res.data;
                }else{
                    if(res.data.list.length){
                        let shopInfo = this.shopInfo;
                        shopInfo.list.concat(res.data.list);
                        this.shopInfo = shopInfo;
                        this.upLoading = false;
                        this.upmore = true;
                    }else{
                        this.upLoadingComplete = true;
                        this.upLoading = false;
                        this.upmore = false;
                    }
                }
                this.page ++;
            }
        },
        openGoods(goodsid){
            this.$router.push({
                path: 'integral_goods_info',
                query: {
                    goods_id: goodsid
                }
            })
        },
        duihuanOrder(path){
            this.$router.push(path);
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
