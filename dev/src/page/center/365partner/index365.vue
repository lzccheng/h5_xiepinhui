<style scoped lang="less">
@color: #61d8d0;
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
        margin-top: -2rem;
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
                padding: 0.08rem 0.3rem;
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
                padding: 0.5rem 0.4rem 0.1rem;
            }
            .angle{
                position: absolute;
                left: 1rem;
                top: -0.33rem;
                border-bottom: 10px solid #44483F;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid transparent;
                z-index: 99;
            }
        }
        .taskBox{
            margin-top: 0.9rem;
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
                            color: #F35A7E;
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
                }
                .btn365{
                    width: 1.28*2rem;
                    height: 0.27*2rem;
                    color: #fff;
                    background-color: @color;
                    border-radius: 0.5rem;
                    text-align: center; 
                    margin: 0 auto;
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
                    width: 25%;
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
                        margin-left: 0.2rem;
                        flex-direction: column;
                        justify-content: space-between;
                        position: relative;
                        .name{
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2; 	//行数
                            overflow: hidden;
                            color: #666666;
                        }
                        .text{
                            color: #999999;
                        }
                        .price{
                            color: #F35A7E;
                            font-size: 20px;
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
                    <div class="manage">管理续费</div>
                </div>
                <div class="headNum flex">
                    <div class="headNumItem flex" v-for="(item, i) in info.header.statistics" :key="i">
                        <span class="title">{{item.title}}</span>
                        <span class="total"><span>{{item.total}}</span>个</span>
                        <span class="btn_name">{{item.btn_name}}</span>
                    </div>
                    
                </div>
                <div class="newsBox">
                    <div class="news">
                        <span></span>
                        <span>消息：365小店特权兑换，福利免费领</span>
                    </div>
                    <div class="angle"></div>
                </div>
                <div class="taskBox">
                    <div class="taskTop flex">
                        <span><span class="title">今日限时任务</span>(三选一)</span>
                        <span v-if="false">更多</span>
                    </div>
                    <div class="taskList">
                        <div class="taskItem flex" v-for="(item, i) in info.daily_task.list" :key="i">
                            <div  class="img"><img :src="item.task_icon" alt=""></div>
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
                <div class="shop365">
                    <div class="top365">
                        <span>365小店专享福利</span>
                    </div>
                    <div class="list365">
                        <div class="listItem365" v-for="(item, i) in info.welfare.list" :key="i">
                            <div class="text flex">
                                <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547458194397&di=7aabbffef78f62873d3cdd5878e6540b&imgtype=0&src=http%3A%2F%2Fs15.sinaimg.cn%2Fmiddle%2F6906431ag743adc03370e%26690" alt=""> -->
                                <img :src="item.icon" alt="">
                                <div class="title">
                                    <div>{{item.title}}</div>
                                    <div>无门槛</div>
                                </div>
                            </div>
                            <div class="btn365">{{item.btn_name}}</div>
                        </div>
                    </div>
                </div>
                <div class="privilege">
                    <div class="privilegeTop flex">
                        <span>365小店特权</span>
                        <span>详情<span class="row iconfont icon-right-jiantou"></span></span>
                    </div>
                    <div class="privilegeList">
                        <div class="privilegeItem" v-for="(item, i) in info.privilege.list" :key="i">
                            <div><img :src="item.icon" alt=""></div>
                            <div class="text">{{item.title}}</div>
                        </div>
                    </div>
                </div>
                <div class="goods">
                    <div class="goodsTitle flex">
                        <span>专享商品</span>
                        <span>更多<span class="row iconfont icon-right-jiantou"></span></span>
                    </div>
                    <div class="goodsList">
                        <div class="goodsItem flex" v-for="(item, i) in goodsList" :key="i">
                            <img :src="item.goods_image" alt="">
                            <div class="detail flex">
                                <div class="name">{{item.goods_name}}</div>
                                <div class="priceBox">
                                    <span class="text">￥</span>
                                    <span class="price">{{item.group_price}}</span>
                                    <span class="throuh text">￥{{item.goods_marketprice}}</span>
                                    <span class="buy">立即抢</span>
                                </div>
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
            info: null,
            goodsList: [
                {
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547458194397&di=6049701e25c72c31e3955a4e26fdbfd6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1303%2F11%2Fc15%2F18826255_18826255_1363010310000.jpg',
                    name: 'sjfkalsfjlasjflasjdf',
                    price: 2000,
                    oldprice: 3000,
                },
                {
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547458194397&di=6049701e25c72c31e3955a4e26fdbfd6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1303%2F11%2Fc15%2F18826255_18826255_1363010310000.jpg',
                    name: 'sjfkalsfjlasjflasjdf',
                    price: 2000,
                    oldprice: 3000,
                },
                {
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547458194397&di=6049701e25c72c31e3955a4e26fdbfd6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1303%2F11%2Fc15%2F18826255_18826255_1363010310000.jpg',
                    name: 'sjfkalsfjlasjflasjdf',
                    price: 2000,
                    oldprice: 3000,
                },
                {
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547458194397&di=6049701e25c72c31e3955a4e26fdbfd6&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1303%2F11%2Fc15%2F18826255_18826255_1363010310000.jpg',
                    name: 'sjfkalsfjlasjflasjdf',
                    price: 2000,
                    oldprice: 3000,
                },
            ],
            page: 1
        }
    },
    created() {
        this.getData();
        this.getGoodList();
    },
    mounted() {
        console.log(this.user)
    },
    methods: {
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
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
