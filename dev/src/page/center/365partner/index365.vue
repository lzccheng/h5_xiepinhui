<style scoped lang="less">
@color: #61d8d0;
@color2: #F35A7E;
.page{
    min-height: 100%;
}
.content{
    position: relative;
    background-color: #f8f8f8;
    padding-bottom: 0.5rem;
    @top: 0.2rem;
    margin-bottom: 0;
    .top{
        height: 3.25rem;
        background-image: url('../../../assets/images/new365/topBg.png');
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;
        > img{
            width: 100%;
        }
    }
    .info{
        width: 100%;
        padding: 0 0.25rem;
        margin-top: -2.5rem;
        .head{
            color: #fff;
            position: relative;
            > img{
                width: 1.3rem;
                height: 1.3rem;
                border-radius: 100%;
            }
            .headInfo{
                position: relative;
                padding-left: 0.2rem;
                .name{
                    font-size: 18px;
                }
                .date{
                    margin-top: 0.1rem;
                    font-size: 12px;
                }
            }
            .manage{
                position: absolute;
                right: 0.25rem;
                top: 0.2rem;
                border: 1px solid #fff;
                padding: 0.06rem 0.3rem;
                border-radius: 0.6rem;
            }
        }
        .headNum{
            background-color: #fff;
            border-radius: 8px;
            margin-top: @top;
            padding: 0.1rem 0;
            z-index: 1;
            position: relative;
            .headNumItem{
                width: 33.3333%;
                flex-direction: column;
                text-align: center;
                padding: 0.1rem 0 0.25rem;
                background-color: #fff;
                border-radius: 8px;
                .title{
                    font-size: 14px;
                }
                .total{
                    color: @color;
                    font-size: 14px;
                    padding: 0.05rem 0;
                    span{
                        font-size: 18px;
                        font-weight: 600;
                        padding-right: 0.1rem;
                    }
                }
                .btn_name{
                    color: #fff;
                    background-color: @color;
                    border-radius: 0.5rem;
                    width: 80%;
                    @height: 0.55rem;
                    line-height: @height;
                    height: @height;
                    margin: 0 auto;
                    font-size: 14px;
                }
            }
        }
        .newsBox{
            position: relative;
            .news{
                position: absolute;
                left: 0;
                bottom: -0.6rem;
                width: 99.999999%;
                z-index: 0;
                background: linear-gradient(90deg, #373D3A, #747152);
                border-radius: 8px;
                font-size: 14px;
                color: #fff;
                padding: 1rem 0.1rem .08rem;
                vertical-align: middle;
                line-height: .28rem;
                img{
                    width: 0.12*2rem;
                    vertical-align: middle;
                }
                .imgText{
                    position: absolute;
                    left: .15rem;
                    bottom: 0.15rem;
                }
            }
            .newBoxMsg{
                white-space: nowrap;
                // margin-left: 1.2rem;
                img{
                    margin: 0 .1rem;
                    vertical-align: middle;
                }
                &:nth-child(2){
                    display: inline-block;
                    height: .5rem;
                    width: 6.5rem;
                    overflow: hidden;
                    position: relative;
                    top: .18rem;
                }
            }
            
            .angle{
                position: absolute;
                left: 1rem;
                top: -0.33rem;
                border-bottom: 10px solid #44483F;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid transparent;
                z-index: 2;
            }
        }
        .taskBox{
            background-color: #fff;
            border-radius: 8px;
            padding: 0.2rem;
            .taskTop{
                justify-content: space-between;
                font-size: 12px;
                .title{
                    font-weight: bold;
                    font-size: 16px;
                }
            }
            .taskList{
                .taskItem{
                    padding: 0.2rem 0;
                    img{
                        width: 0.8rem;
                        height: 0.8rem;
                        border-radius: 5px;
                    }
                }
                .img{
                    flex-basis: 0.8rem;
                }
                .taskName{
                    padding-left: 0.15rem;
                    flex-direction: column;
                    flex-basis: 70%;
                    span{
                        &:first-child{
                            font-weight: bold;
                        }
                        &:last-child{
                            font-size: 12px;
                            color: #999999;
                        }
                    }
                }
                .taskBtn{
                    flex-direction: column;
                    span{
                        text-align: center;
                        display: inline-block;
                        &:first-child{
                            font-size: 12px;
                            color: @color2;
                        }
                        &:last-child{
                            background-color: @color;
                            width: 1.34rem;
                            @height: 0.5rem;
                            height: @height;
                            line-height: @height;
                            color: #fff;
                            border-radius: 0.5rem;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        .shop365{
            background-color: #fff;
            padding: 0.2rem;
            margin-top: @top;
            border-radius: 8px;
            .top365{
                font-size: 16px;
                font-weight: bold;
            }
            .list365{
                white-space: nowrap;
                overflow: auto;
                padding: 0.2rem 0;
                .listItem365{
                    width: 1.53*2rem;
                    height: .89*2rem;
                    display: inline-block;
                    background-color: #F2FFFE;
                    border-radius: 8px;
                    margin: 0 .07rem;
                    border: solid 1px #8BE3DD;
                    &.had{
                        border: solid 1px #E0E0E0;
                        background-color: #F6F6F6;
                    }
                }
                .btn365{
                    width: 1.28*2rem;
                    line-height: 0.27*2rem;
                    color: #fff;
                    background-color: @color;
                    border-radius: 0.5rem;
                    text-align: center; 
                    margin: 0 auto;
                    font-size: 14px;
                    &.opacity{
                        background-color: #CDCDCD;
                    }
                }
                img{
                    width: 0.7rem;
                    height: 0.7rem;
                    margin-right: 0.15rem;
                }
                .title{
                    div {
                        &:first-child{
                            width: 1.9rem; 
                            font-size: 12px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        &:last-child{
                            font-size: 12px;
                            color: #666666;
                        }
                    }
                }
                .text{
                    padding: 0.15rem;
                    >div{
                        &:first-child{
                            text-align: left;
                            @heig: .8rem;
                            width: @heig;
                            line-height: @heig;
                        }
                    }
                    .ico{
                        font-size: 12px;
                        position: relative;
                        left: .15rem;
                        top: -.1rem;
                    }
                    .value{
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
            }
        }
        .privilege{
            padding: 0.2rem;
            background-color: #fff;
            margin-top: 0.2rem;
            border-radius: 8px;
            .privilegeTop{
                justify-content: space-between;
                span{
                    &:first-child{
                        font-weight: bold;
                    }
                    &:last-child{
                        color: #999999;
                        font-size: 12px;
                    }
                }
                .row{
                    font-size: 10px;
                    margin-left: 0.1rem;
                }
            }
            .privilegeList{
                white-space: nowrap;
                overflow: auto;
                .privilegeItem{
                    text-align: center;
                    width: 20%;
                    display: inline-block;
                    padding: 0.2rem 0;
                    img{
                        width: 0.8rem;
                        height: 0.8rem;
                    }
                    .text{
                        color: #999999;
                        font-size: 12px;
                    }
                }
            }
        }
        .goods{
            margin-top: .2rem;
            border-radius: 8px;
            background-color: #fff;
            padding: .2rem;
            .goodsTitle{
                padding-bottom: 0.1rem;
                span{
                    &:first-child{
                        font-weight: bold;
                    }
                    &:last-child{
                        font-size: 12px;
                        color: #999999;
                    }
                }
                justify-content: space-between;
            }
            .goodsList{
                .goodsItem{
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
                            font-size: 16px;
                        }
                        .text{
                            color: #999999;
                        }
                        .price{
                            color: #666;
                            font-size: 20px;
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
        }
    }
}

</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" title='365小店' id='vux-header'></x-header>
        <div class="content" v-if="info">
            <div class="top">
                <!-- <img src="@/assets/images/new365/topBg.png" alt=""> -->
            </div>
            <div class="info">
                <div class="head flex">
                    <img :src="user.avatar" alt="">
                    <div class="headInfo">
                        <div class="name">{{user.nick || user.tel}}</div>
                        <div  class="date">{{info.header.validity_date}}到期</div>
                    </div>
                    <div class="manage" @click="handleManage">分享赚钱</div>
                </div>
                <div class="headNum flex">
                    <div class="headNumItem flex" @click="gotoPage(item.statistic_id)" v-for="(item, i) in info.header.statistics" :key="i">
                        <span class="title">{{item.title}}</span>
                        <span class="total"><span>{{item.total}}</span>{{item.unit}}</span>
                        <span class="btn_name">{{item.btn_name}}</span>
                    </div>
                </div>
                <div class="newsBox">
                    <div class="news">
                        <span class="imgText">
                            <!-- <img src="@/assets/images/new365/news.png" alt=""><span>消息:</span> -->
                        </span>
                        <div class="newBoxMsg">
                            <div>
                                <swiper :options="swiperOptions" class="">
                                    <swiper-slide class="" v-for="(item, i) in info.header.radio_message" :key="i">
                                        <div><img src="@/assets/images/new365/news.png" alt="">消息：{{item.msg}}</div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                    <div class="angle"></div>
                </div>
                <div style="height: .9rem"></div>
                <div class="taskBox" v-if="false">
                    <div class="taskTop flex">
                        <span><span class="title">今日限时任务</span>(三选一)</span>
                        <span v-if="false">更多</span>
                    </div>
                    <div class="taskList">
                        <div class="taskItem flex" v-for="(item, i) in info.daily_task.list" :key="i">
                            <div  class="img"><img :src="returnPath(item.task_icon)" alt=""></div>
                            <!-- <div"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547458194397&di=7aabbffef78f62873d3cdd5878e6540b&imgtype=0&src=http%3A%2F%2Fs15.sinaimg.cn%2Fmiddle%2F6906431ag743adc03370e%26690" alt=""></div> -->
                            <div class="taskName flex">
                                <span>{{item.task_name}}</span>
                                <span>{{item.task_desc}}</span>
                            </div>
                            <div class="taskBtn flex">
                                <span>{{item.task_award_tips}}</span>
                                <span>{{item.task_takename}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="privilege">
                    <div class="privilegeTop flex">
                        <span>365小店特权</span>
                        <span @click="$router.push('privilege')">详情<span class="row iconfont icon-right-jiantou"></span></span>
                    </div>
                    <div class="privilegeList">
                        <div class="privilegeItem" @click="gotoPrivilege(item.privilege_id)" v-for="(item, i) in info.privilege.list" :key="i">
                            <div><img :src="item.icon" alt=""></div>
                            <div class="text">{{item.title}}</div>
                        </div>
                    </div>
                </div>
                <div class="shop365">
                    <div class="top365">
                        <span>365小店专享福利</span>
                    </div>
                    <div class="list365">
                        <div class="listItem365" :class="{had: item.status != 1}" v-for="(item, i) in info.welfare.list" :key="i">
                            <div class="text flex">
                                <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547458194397&di=7aabbffef78f62873d3cdd5878e6540b&imgtype=0&src=http%3A%2F%2Fs15.sinaimg.cn%2Fmiddle%2F6906431ag743adc03370e%26690" alt=""> -->
                                <!-- <img :src="item.icon" alt=""> -->
                                <div>
                                    <span class="ico">￥</span>
                                    <span class="value">{{item.value}}</span>
                                </div>
                                <div class="title">
                                    <div>{{item.title}}</div>
                                    <div>无门槛</div>
                                </div>
                            </div>
                            <div class="btn365" @click="handleGet(item.welfare_id, item.status)" :class="{opacity: item.status != 1}">{{item.status == 1? item.btn_name : '已领完'}}</div>
                        </div>
                    </div>
                </div>
                <div class="goods" v-if="goodListShow">
                    <div class="goodsTitle flex">
                        <span>专享商品</span>
                        <span @click="$router.push('goodList')">更多<span class="row iconfont icon-right-jiantou"></span></span>
                    </div>
                    <!-- <div class="goodsList">
                        <div class="goodsItem flex" v-for="(item, i) in goodsList" :key="i">
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
                                    <span class="buy" @click="gotoDetail(item.n_goods_id)">立即抢</span>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <goods-list @datachange="goodListChange"></goods-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
import 'swiper/dist/css/swiper.css';
import GoodsList from '@/components/goodsList365';
export default {
    components: {
        XHeader,
        GoodsList
    },
    data() {
        return {
            swiperOptions: {
                autoplay: true,
                direction: 'vertical'
            },
            info: null,
            goodsList: [],
            page: 1,
            goodListShow: true
        }
    },
    created() {
        this.getData();
        // this.getGoodList();
    },
    mounted() {
    },
    methods: {
        goodListChange(total_count){
            if(total_count*1 == 0){
                this.goodListShow = false;
            }
        },
        gotoDetail(goodsId){
            this.$router.push({
                path: '/index/goodsInfoPindan',
                query: {
                    goodsId
                }
            })
        },
        handleManage(){
            this.$router.push('inviteList')
            // this.$vux.toast.text('开发中', 'top');
        },
        gotoPrivilege(id){
            this.$router.push({
                path: 'privilege',
                query: {
                    index: id
                }
            })
        },
        async handleGet(welfare_id, status){
            if(status == 2){
                return this.$vux.toast.text('您已经领完', 'top');
            }
            let data = {
                account: this.account,
                token: this.token,
                welfare_id
            }
            const [err, res] = await api.welfare_take(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.$vux.toast.text('领取成功');
            }
        },
        gotoPage(id){   
            let url;
            switch (id) {
                case '1':
                    url = '/myBlack';
                    break;
                case '3':
                    // url = 'inviteList';
                    url = '/centerFull/partner/inviteFansMy365';
                    break;
                case '2':
                    // url = 'exchange';
                    break;
            }
            if(url){
                return this.$router.push({
                    path: url
                })
            }
            this.$vux.toast.text('开发中', 'top');
        },
        async getData(){
            let data = {
                account: this.account,
                token: this.token
            }
            this.$vux.loading.show({
                text: '加载中...'
            })
            const [err, res] = await api.smallstoreIndex(data);
            this.$vux.loading.hide();
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.info = res.data;
            }
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
            const [err, res] = await api.seckillGoodslist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                console.log(res)
                this.goodsList = res.data.list;
            }
        },
        returnPath(path){
            return path.replace(/\\/g, '');
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token']),
    }
}
</script>
