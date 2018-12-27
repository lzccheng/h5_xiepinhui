<style scoped lang="less">
.page{
    background-color: #ff4264;
    background: linear-gradient(180deg, #ff4263, #ff4938)
}
.content{
    padding-bottom: 1rem;
    margin: 0;
    .top{
        position: relative;
        .img{
            width: 7.5rem;
            height: 6.29rem;
        }
        .info{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            text-align: center;
            margin-top: 1.12rem;
            .infoimg{
                display: inline-block;
                width: 3.12rem;
                height: 3.12rem;
                border: 0.1rem solid #fff;
                border-radius: 100%;
            }
            .text{
                width: 4rem;
                margin: 0.1rem auto;
                color: #fff;
                font-size: 14px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; 	//行数
                overflow: hidden;
            }
        }
    }
    .button{
        text-align: center;
        .img{
            display: inline-block;
            width: 5.90rem;
            transition: scale 1s;
        }
    }
    .cards{
        margin-top: 0.2rem;
        text-align: center;
        .img{
            display: inline-block;
            width: 2.37rem;
            height: 3.37rem;
        }
    }
    .get{
        color: #fff;
        text-align: center;
        margin: 0.1rem 0; 
        img{
            vertical-align: middle;
        }
        .right{
            transform: rotate(180deg);
            -ms-transform:rotate(180deg); 	/* IE 9 */
            -moz-transform:rotate(180deg); 	/* Firefox */
            -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
            -o-transform:rotate(180deg); 
            position: relative;
            top: -2px;
        }
    }
    .recode{
        position: relative;
        background: #ff754e;
        width: 6.95rem;
        margin: 0.8rem auto;
        border-radius: 5px;
        padding: 0.3rem;
        color: #fff;
        .img{
            width: 3.36rem;
            position: absolute;
            left: 50%;
            top: -0.35rem;
            margin-left: -1.68rem;
        }
        .tab{
            height: 0.65rem;
            border-bottom: 1px solid #fff;
            span{
                &:first-child{
                    float: left;
                }
                float: right;
            }
        }
        .list{
            .item{
                font-size: 14px;
                padding: 0.2rem 0;
                .left{
                    width: 50%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    .radius{
                        width: 0.3rem;
                        height: 0.3rem;
                        display: inline-block;
                        border-radius: 100%;
                        background-color: #fff;
                        margin-right: 0.1rem;
                        position: relative;
                        top: 2px;
                    }
                }
                .cen{
                    width: 20%;
                    text-align: center;
                }
                .right{
                    width: 30%;
                    text-align: right;
                    img{
                        display: inline-block;
                        vertical-align: middle;
                    }
                    .huidou{
                        width: 0.35rem;
                        height: 0.35rem;
                    }
                    .money{
                        width: 0.41rem;
                        height: 0.45rem;
                    }
                    .miandan{
                        width: 0.72rem;
                        height: 0.33rem;
                    }
                }
            }
        }
    }
}
@keyframes scale {
    0% {
        transform: scale(1)
    }
    500% {
        transform: scale(1.5)
    }
    0% {
        transform: scale(1)
    }
}
@-webkit-keyframes scale {
    0% {
        transform: scale(1)
    }
    500% {
        transform: scale(1.5)
    }
    0% {
        transform: scale(1)
    }
}
.turnback{
    transform: rotateY(180deg);
}
</style>
<template>
    <div class="page" :style="{minHeight: pageH + 'px'}">
        <!-- <x-header :left-options="{backText:''}" title='title' id='vux-header'></x-header> -->
        <div class="content">
            <div class="top">
                <img class="img" src="@/assets/images/active/20181227/topbg.png" alt="">
                <div class="info">
                    <img class="infoimg" src="@/assets/images/active/20181227/shangpin.png" alt="">
                    <div class="text">
                        [男鞋]2017冬季新款平底鞋运动 休闲2017冬季新款平底鞋运动2017冬季新款平底鞋运动
                    </div>
                    <div class="text" style="font-size: 16px;font-weight: bold">
                        ￥322.00
                    </div>
                </div>
            </div>
            <div class="button">
                <img class="img" src="@/assets/images/active/20181227/btn.gif" alt="">
            </div>
            <div class="cards">
                <img class="img" @click="turnBack" src="@/assets/images/active/20181227/back.png" alt="">
                <img class="img" src="@/assets/images/active/20181227/back.png" alt="">
                <img class="img" src="@/assets/images/active/20181227/back.png" alt="">
            </div>
            <div class="get">
                <img src="@/assets/images/active/20181227/left_line.png" alt=""> 
                <span>已有11人领取</span>
                <img class="right" src="@/assets/images/active/20181227/left_line.png" alt="">
            </div>
            <div class="recode">
                <img class="img" src="@/assets/images/active/20181227/record.png" alt="">
                <div class="tab">
                    <span>用户昵称</span>
                    <span>获得奖励</span>
                </div>
                <div class="list">
                    <div class="item flex" v-for="(item, index) in list" :key="index">
                        <div class="left"><span class="radius"></span><span>{{item.text}}</span></div>
                        <div class="cen">抽中了</div>
                        <div class="right">
                            <div v-if="item.type == 1">
                                <img class="money" src="@/assets/images/active/20181227/money.png" alt="">
                                <span>+{{item.num}}</span>
                            </div>
                            <div v-if="item.type == 2">
                                <img class="miandan" src="@/assets/images/active/20181227/miandan30.png" alt="">
                                <span>+{{item.num}}张</span>
                            </div>
                            <div v-if="item.type == 3">
                                <img class="huidou" src="@/assets/images/active/20181227/huidou.png" alt="">
                                <span>+{{item.num}}个</span>
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
            pageH: 60,
            list: [
                { text: 'jdsfasdfasdfeasdfasdf', type: 1, num: 300 },
                { text: 'sdfe9846541', type: 2, num: 33 },
                { text: '的水电费水电费e', type: 3, num: 66 },
                { text: '发的发放大东方', type: 1, num: 99 },
            ]
        }
    },
    created() {
        this.pageH = window.innerHeight;
    },
    mounted() {
        sessionStorage['aaa'] = 'zhceng'
        console.log(sessionStorage)
        sessionStorage.clear()
        console.log(sessionStorage)
    },
    methods: {
        turnBack(i){
            console.log(e.target)
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
