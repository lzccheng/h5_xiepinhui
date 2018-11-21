<style scoped lang="less">
.item-header{
  width: 100%;
}
.item-header img{
  width: 100%;
}
.goods-item-list {
  width: 100%;
}

.info-right {
  width: 50%;
  padding: 10/50rem 15/50rem;
  padding-left: 0;
  position: relative;
}

.left-img {
  width: 50%;
  position: relative;
  padding: 10/50rem;
  img{
      width: 100%;
  }
}
.goods-name {
  font-size: 10pt;
  line-height: 30/50rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.zhuanxiang {
  background: linear-gradient(to right, rgba(225, 147, 250, 1), rgba(223, 50, 98, 1));
  padding: 2px 10/50rem;
  color: #fff;
  margin-right: 5/50rem;
  border-radius: 3/50rem;
}

.goods-item--price {
  margin-top: 5/50rem;
  text-align: left;
  color: #333;
}
.price-fuhao{
  font-size:9pt;
}
.price-num {
  font-size:16pt;
}

.goods-price-hui {
  font-size:10pt !important;
  color: #888;
  text-decoration: line-through;
}

.price-baopin {
  color: rgba(251, 76, 114, 1);
  background: rgba(255, 219, 227, 1);
  border-radius: 4/50rem;
  padding: 0 5/50rem;
  font-size:10pt;
  margin-left: 5/50rem;
}
.coupon-img{
  width:90%;
  position: absolute;
  bottom:5/50rem;
}
.coupon-img img {
  width: 100%;
  bottom: 0;
}

</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div class="content">
                <div v-for="(item, index) in goodsData" :key="index">
                    <div class="item-header">
                        <img :src="item.img_url"/>
                    </div>
                    <div class="goods-item-list flex"  v-for="(itemlist, idx) in item.goods_data" :key="idx" @click='openGoods(itemlist.n_goods_id)' :data-goodsid="itemlist.n_goods_id">
                        <div class="left-img">
                            <img :src="itemlist.goods_image"/>
                        </div>
                        <div class="info-right" :style="{width:imgwidth+'px',height:imgwidth+'px'}">
                            <div class="goods-name"><span class="zhuanxiang">好货专享</span>{{itemlist.goods_name}}</div>
                            <div class="goods-item--price flex flex-align-center" >
                                <span class="price-fuhao">￥</span>
                                <span class="price-num">{{itemlist.group_price}}</span>
                                <span class="price-baopin">爆品价</span>
                            </div>
                            <div class="coupon-img" >
                                <img  src="@/assets/images/coupon/haohuo_coupon.png"/>
                            </div>
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
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            goodsData:"",
            imgwidth:"",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '鞋品荟', //导航栏 中间的标题
            },
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        this.imgwidth = window.innerWidth / 2;
    },
    methods: {
        async getData(){
            let data = {
                params: {
                    plat: 3
                }
            }
            const [err, res] = await api.instock(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.goodsData = res.data.data;
            }
        },
        openGoods(goodsid){
            this.$router.push({
                path: '/index/goodsInfoPindan',
                query: {
                    goodsId: goodsid
                }
            })
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
