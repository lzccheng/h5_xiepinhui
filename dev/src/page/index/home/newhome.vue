<style scoped lang="less">
.content{
    .search{
        background-color: #f8f8f8;
        .scan{
            flex-direction: column;
            color: #999;
            width: 0.9rem;
            text-align: center;
            padding: 0.1rem 0;
            img{
                width: 0.32rem;
                margin: 0 auto;
                display: inline-block;
            }
            span{
                font-size: 12px;
                line-height: 0.3rem;
            }
        }
        .searchbar{
            width: 4.9rem;
            .sear{
                align-items: center;
                background-color: #fff;
                border-radius: 0.5rem;
                padding: 0.1rem 0.2rem;
                width: 95%;
                margin: 0.05rem auto;
                img{
                    width: 0.32rem;
                    height: 0.32rem;
                    display: inline-block;
                    vertical-align: middle;
                }
                input{
                    border: none;
                    width: 100%;
                    margin-left: 0.15rem;
                    &::placeholder{
                        color: #999;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .tabbox{
        background-color: #f8f8f8;
        position: relative;
        height: 1.2rem;
        .tebItem{
            width: 100%;
            position:absolute;
            top: 0.2rem;
            left: 0;
            overflow: hidden;
            z-index: 9;
            background: #f8f8f8;
            div{
                width: 1.5rem;
                text-align: center;
                color: #666;
                font-size: 16px;
                line-height: 0.8rem;
            }
            .active{
                color: #61D8D0;
            }
            .con{
                width:100%;
            }
        }
        .tabfixed{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
        }
        .tabline{
            width: 0.8rem !important;
            height: 0.07rem;
            background-color: #61D8D0;
            position: absolute;
            left: 0;
            bottom: 0;
            border-radius: 5px;
            transition: all 0.5s;
        }
    }
    .shopSwiper{
        .swiperImage{
            width: 100%;
            height: 5.62rem;
        }
    }
    .iconCard{
        flex-wrap: wrap;
        .iconItem{
            flex-direction: column;
            width: 25%;
            text-align: center;
            color: #333;
            img{
                width: 1.2rem;
                margin: 0 auto;
                display: inline-block;
            }
            span{
                font-size: 15px;
            }
        }
    }
    .ad{
        margin-top: 0.15rem;
        img{
            width: 100%;
        }
    }
    .goods{
        .text{
            padding: 0.1rem;
            color: #333;
            span{
                font-size: 15px;
            }
            .title{
                font-size: 18px;
                font-weight: bold;
            }
        }
        .goodsItem{
            .topimg{
                padding: 0 0.1rem;
                position: relative;
                img{
                    width: 100%;
                }
                .angle{
                    position: absolute;
                    bottom: 3px; 
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-bottom: 10px solid #fff;
                    border-top: 10px solid transparent;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    margin-left: -5px;
                }
            }
            .goodslistbox{
                position: relative;
                height: 3rem;
                overflow-x: scroll;
                .goodslength{
                    position: relative;
                    .last{
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 1.875rem;
                        line-height: 1.875rem;
                        background: rgba(0,0,0,0.5);
                        text-align: center;
                        color: #fff;
                        border-radius: 3px;
                    }
                }
            }
            .goodslist{
                width: 1.875rem;
                padding: 0.05rem;
                display: inline-block;
                font-size: 14px;
                line-height: 1.2;
                img{
                    width: 100%;
                    border-radius: 3px;
                }
                .name{
                    display: inline-block;
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #666;
                }
                .price{
                    color: #61D8D0;
                }
            }
        }
    }
    .article{   
        position: relative;
        img{
            width: 100%;
        }
        .text{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            color: #333;
            padding: 0.17rem;
            .title{
                font-size: 18px;
                font-weight: bold;
                letter-spacing: 3px;
            }
            .tt{
                font-size: 14px;
            }
        }
    }
    .nice{
        .niceTop1{
            img{
                width:100%;
                height: auto;
                border: none;
                display: inline-block;
                position: relative;
                bottom: -0.15rem;
            }
        }
        .img_2{
            img{
                width: 50%;
                height: 50%;
            }
        }
        .img_4{
            .img{
                position: relative;
                width: 25%;
                height: 2.83rem;
            }
            img{
                width: 100%;
                height: 100%;
            }
            .text_{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                color: #fff;
                text-align: center;
                p{
                    &:nth-child(1){
                        font-size: 16px;
                    }
                    &:nth-child(2){
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .guess{
        .g_title{
            padding: 0.12rem 0.05rem;
            font-size: 18px;
            font-weight: bold;
        }
        .guessList{
            margin: 0.05rem 0;
            flex-wrap: wrap;
            .guessListItem{
                width: 50%;
                flex-direction: column;
                img{
                    width: 98%;
                    display: inline-block;
                }
                &:nth-child(2n){
                    img{
                        position: relative;
                        right: -2%;
                    }
                }
                .g_name{
                    font-size: 14px;
                    color: #666;
                    padding: 0.05rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2; 	//行数
                    overflow: hidden;
                }
                .price{
                    position: relative;
                    span{
                        &:nth-child(1){
                            color: #61D8D0;
                            font-size: 15px;
                            padding-left: 0.05rem;
                        }
                        &:nth-child(2){
                            color: #999;
                            font-size: 12px;
                            position: absolute;
                            right: 0.05rem;
                            bottom: 0.05rem;
                        }
                    }
                    
                }
            }
        }
    }
    .lineColor{
        height: 0.2rem;
        background-color: #f8f8f8;
    }
}
</style>
<template>
    <div class="page">
        <!-- <x-header :left-options="{backText:''}" title='title' id='vux-header'></x-header> -->
        <div class="content">
            <!-- 搜索栏 -->
            <div class="search flex">
                <div class="scan flex">
                    <img src="@/assets/images/home/scan.png" alt="">
                    <span>扫一扫</span>
                </div>
                <div class="searchbar">
                    <div class="sear flex">
                        <img src="@/assets/images/home/search.png" alt="">
                        <input type="text" placeholder="搜索相关商品">
                    </div>
                </div>
                <div class="scan flex">
                    <img src="@/assets/images/home/card.png" alt="">
                    <span>购物车</span>
                </div>
                <div class="scan flex">
                    <img src="@/assets/images/home/sort.png" alt="">
                    <span>分类</span>
                </div>
            </div>
            <!-- 导航栏 -->
            <div class="tabbox" ref="tabbox">
                <div class="tebItem" :class="tabIsFixed? 'tabfixed': ''">
                    <div :style="{width: tabItem.length * 1.5 + 'rem'}" class="flex">
                        <div v-for="(item, i) in tabItem" :key="i" @click="onTab(i, $event)" :class="{'active': currentTab == i}">
                            {{item.name}}
                        </div>
                        <div class="tabline" :style="{left: tablineLeft}"></div>
                    </div>
                </div>
            </div>
            <div>
                <!-- 轮播图 -->
                <div class="shopSwiper">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item, i) in swiperHead" :key="i">
                            <img class="swiperImage" :src="item.img" alt="">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <!-- 菜单栏 -->
                <div class="iconCard flex">
                    <div v-for="(item, i) in iconCard" :key="i" class="iconItem flex">
                        <img :src="item.img" alt="">
                        <span>{{item.title}}</span>
                    </div>
                </div>
                <!-- 广告栏 -->
                <div class="ad">
                    <img src="@/assets/images/home/ad.png" alt="">
                </div>
                <!-- 商品 -->
                <div class="lineColor"></div>
                <div class="goods">
                    <my-title></my-title>
                    <div v-for="(item, i) in homegoods" :key="i" class="goodsItem">
                        <div class="topimg">
                            <img :src="item.img" alt="">
                            <div class="angle"></div>
                        </div>
                        <div class="goodslistbox">
                            <div class="goodslength" :style="{width: (item.goods.length + 1) * 25 + '%'}">
                                <div class="goodslist" v-for="(item_, i_) in item.goods" :key="i_">
                                    <img :src="item_.goods_image" alt="">
                                    <span class="name">{{item_.goods_name}}</span>
                                    <span class="price">￥{{item_.purchase_price}}</span>
                                </div>
                                <div class="last">
                                    查看更多
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <!-- 推文 -->
                <div class="article">
                    <img src="@/assets/images/home/tuiwen.png" alt="">
                    <div class="text">
                        <div class="title">走进鞋品荟</div>
                        <div class="tt">探索美好<span class="iconfont icon-right-jiantou" style="font-size: 12px;"></span></div>
                    </div>
                </div>
                <!-- 精品 -->
                <div class="nice">
                    <my-title title="精品推广&nbsp;&nbsp;&nbsp;&nbsp;品质推荐" text="经典尖货一站购"></my-title>
                    <div class="niceTop1">
                        <img src="@/assets/images/home/niceTop.png" alt="">
                    </div>
                    <div class="img_2 flex">
                        <img src="@/assets/images/home/img_21.png" alt="">
                        <img src="@/assets/images/home/img_22.png" alt="">
                    </div>
                    <div class="img_2 flex">
                        <img src="@/assets/images/home/img_23.png" alt="">
                        <img src="@/assets/images/home/img_24.png" alt="">
                    </div>
                    <div class="img_4 flex">
                        <div class="img">
                            <div class="text_">
                                <p>精品推广</p>
                                <p>精品推广精品推</p>
                            </div>
                            <img src="@/assets/images/home/img_41.png" alt="">
                        </div>
                        <div class="img">
                            <div class="text_">
                                <p>精品推广</p>
                                <p>精品推广精品推</p>
                            </div>
                            <img src="@/assets/images/home/img_42.png" alt="">
                        </div>
                        <div class="img">
                            <div class="text_">
                                <p>精品推广</p>
                                <p>精品推广精品推</p>
                            </div>
                            <img src="@/assets/images/home/img_41.png" alt="">
                        </div>
                        <div class="img">
                            <div class="text_">
                                <p>精品推广</p>
                                <p>精品推广精品推</p>
                            </div>
                            <img src="@/assets/images/home/img_42.png" alt="">
                        </div>
                    </div>
                </div>
                <!-- 猜你喜欢 -->
                <div class="guess">
                    <div class="lineColor"></div>
                    <div class="g_title">猜你喜欢</div>
                    <div class="guessList flex">
                        <div v-for="(item, i) in guessList" :key="i" class="guessListItem flex">
                            <img :src="item.goods_image" alt="">
                            <p class="g_name">{{item.goods_name}}</p>
                            <p class="price flex">
                                <span>￥{{item.goods_marketprice}}</span>
                                <span>销量：{{item.goods_salenum}}</span>
                            </p>
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
import myTitle from './title';
import BScroll from 'better-scroll';
import 'swiper/dist/css/swiper.css'
import '@/assets/less/swiperColor.less'
export default {
    components: {
        XHeader,
        myTitle
    },
    data() {
        return {
            tabItem: [
                {name: '新商场'},
                {name: '奢侈品味'},
                {name: '经典推荐'},
                {name: '潮流尖货'},
                {name: '风格搭配'},
                {name: '风格搭配'},
                {name: '风格搭配'},
                {name: '风格搭配'},
                {name: '风格搭配'},
                {name: '风格搭配'},
                {name: '风格搭配'},
                {name: '风格搭配'},
            ],
            currentTab: 0,
            tabIsFixed: false,
            tablineLeft: 0,
            swiperOption: {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperHead: [
                {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546858275743&di=a8bdea7c01d957572f00eab1c4e92f6f&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1310%2F17%2Fc4%2F27630182_1382016085471.jpeg'},
                {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546858275743&di=a8bdea7c01d957572f00eab1c4e92f6f&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1310%2F17%2Fc4%2F27630182_1382016085471.jpeg'},
                {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546858275743&di=a8bdea7c01d957572f00eab1c4e92f6f&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1310%2F17%2Fc4%2F27630182_1382016085471.jpeg'},
                {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546858275743&di=a8bdea7c01d957572f00eab1c4e92f6f&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1310%2F17%2Fc4%2F27630182_1382016085471.jpeg'},
            ],
            iconCard: [],
            homegoods: [],
            guessList: []
        }
    },
    created() {

    },
    mounted() {
        this.init();
        this.$nextTick(()=>{
            this.BS = new BScroll('.tebItem', {
                scrollX: true
            });
            window.onscroll = this.winScroll;
        })
    },
    destroyed () {
        window.onscroll = null;
    },
    methods: {
        init(){
            this.tablineLeft = window.innerWidth / 5 / 2 - 20 + 'px';
            this.getData();
            this.getList();
            this.getguess();
        },
        winScroll(e){
            let scTop = document.body.scrollTop || document.documentElement.scrollTop;
            let offsetTop = this.$refs.tabbox.offsetTop;
            this.tabIsFixed = scTop >  offsetTop + 8? true: false;
        },
        onTab(i, e){
            this.currentTab = i;
            this.tablineLeft = e.target.offsetLeft + e.target.clientWidth / 2 - 20 + 'px';
            let s = window.innerWidth - e.clientX;
            let d = window.innerWidth / 5;
            if(s - d < 0){
                if(!(i >= this.tabItem.length - 1)){
                    this.BS.scrollBy(-d, 0, 500);
                };
            }
            if(s > d * 4 && i != 0){
                this.BS.scrollBy(d, 0, 500);
            }
        },
        async getData(){
            let data = {
                params: {
                    plat: 3,
                    activity: 1
                }
            };
            this.$vux.loading.show({
                text: '加载中...'
            })
            const [err, res] = await api.getHomeList(data);
            this.$vux.loading.hide();
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.iconCard = res.data.center_module;
            }
        },
        async getList(){
            let data = {
                params: {
                    plat: 3
                }
            };
            const [err, res] = await api.getActivityList(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                console.log(20000000, res)
                this.homegoods = res.data.homegoods;
            }
        },
        async getguess(){
            let data = {
                plat: 3,
                num: 24,
                sex: 0,
                type_price: '0.00'
            }
            const [err, res] = await api.commendgoods(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                console.log('guessList',res)
                this.guessList = res.data;
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
