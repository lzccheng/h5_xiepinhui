<style scoped lang="less">
@color: #61d8d0;
@color2: #F35A7E;
.goodsList{
    .goodsItem{
        background-color: #fff;
        padding: 0.1rem 0;
        img{
            width: 1*2rem;
            height: 1*2rem;
            flex-basis: 1*2rem;
        }
        .detail{
            width: calc(100% - 1*2rem);
            margin-left: 0.25rem;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            .name{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; 	//行数
                overflow: hidden;
                color: #666666;
                font-size: 14px;
            }
            .text{
                color: #999999;
            }
            .price{
                color: #666;
                font-size: 18px;
                margin-left: -.1rem;
            }
            .throuh{
                font-size: 12px;
                text-decoration: line-through;
            }
            .buy{
                display: inline-block;
                float: right;
                background: linear-gradient(90deg, #9AEEEA, #61D8D0);
                color: #fff;
                font-size: 14px;
                border-radius: 0.5rem;
                text-align: center;
                width: 0.67*2rem;
                @btnheight: 0.55rem;
                height: @btnheight;
                line-height: @btnheight;
            }
            .priceBox{
                width: 100%;
                white-space: nowrap;
            }
            .text{
                display: inline-block;
                font-size: 12px;
            }
            .goods_salenum{
                color: #999;
                font-size: 12px;
            }
        }
        .tipTop{
            position: relative;
            span{
                position: absolute;
                left: 0;
                top: 0;
                white-space: nowrap;
                font-size: 12px;
                color: #fff;
                background-color: @color2;
                padding: 0 .1rem 0 .05rem;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                line-height: 1.4;
            }
        }
    }
}
.gooditem{
    margin: .2rem 0;
    padding: .1rem;
    border-radius: 5px;
}
.upload{
    text-align: center;
    color: #999;
}
.marR{
    margin-right: .2rem;
}
</style>
<template>
        <div class="goodsList">
            <div class="goodsItem flex" :class="pearentClass? pearentClass : ''" v-for="(item, i) in goodsList" :key="i">
                <div class="tipTop">
                    <img :src="item.goods_image" alt="">
                    <span>365小店7折专享</span>
                </div>
                <div class="detail flex">
                    <div class="name">{{item.goods_name}}</div>
                    <div class="goods_salenum">销量：{{item.goods_salenum*1 + item.fictitious_salenum*1}}</div>
                    <div class="priceBox">
                        <span>
                            <span class="text">￥</span>
                            <span class="price">{{item.s_goods_price}}</span>
                            <span class="throuh text">￥{{item.goods_marketprice}}</span>
                        </span>
                        <span class="buy" @click="gotoDetail(item.n_goods_id)" :class="{marR: pearentClass}">立即抢</span>
                    </div>
                </div>
            </div>
            <div v-if="upload" class="upload">上拉加载更多</div>
            <div v-if="loading" class="upload">加载中...</div>
            <div v-if="complete" class="upload">到底了~</div>
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
    props: ['pearentClass'],
    data() {
        return {
            goodsList: [],
            page: 1,
            total_count: 0,
            upload: true,
            loading: false,
            complete: false
        }
    },
    created() {
        if(!this.pearentClass){
            this.upload = false;
        }
        this.getGoodList();
    },
    mounted() {
        this.$nextTick(()=>{
            this.pearentClass && isScrollBottom(this.upLoad);
        })
    },
    destroyed () {
        window.onscroll = null;
    },
    methods: {
        upLoad(){
            if(this.total_count && (this.goodsList.length >= this.total_count*1)){
                this.upload = false;
                this.loading = false;
                this.complete = true;
                return;
            }
            this.getGoodList();
        },
        gotoDetail(goodsId){
            this.$router.push({
                path: '/index/goodsInfoPindan',
                query: {
                    goodsId
                }
            })
        },
        datachange(total_count){
            this.$emit('datachange', total_count);
        },
        start_time(){
            let dd = new Date();
            let start_time = dd.getFullYear()+'/'+(dd.getMonth()+1)+'/'+dd.getDay()+' '+dd.getHours()+':'+dd.getMinutes()+':'+dd.getSeconds();
            return start_time;
        },
        async getGoodList(){
            let data = {
                s_id: 48,
                page: this.page,
                num: 10,
                account: this.account,
                start_time: this.start_time()
            }
            if(this.pearentClass){
                this.upload = false;
                this.loading = true;
            }
            const [err, res] = await api.seckillGoodslist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                this.upload = false;
                this.loading = false;
                return;
            }
            if(res.code == 2000){
                if(this.page == 1){
                    this.total_count = res.data.total_count;
                    this.datachange(this.total_count);
                }
                this.goodsList = this.goodsList.concat(res.data.list);
                this.page ++;
                if(!this.pearentClass)return;
                this.upload = true;
                this.loading = false;
            }
        },
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
