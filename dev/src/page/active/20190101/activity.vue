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
        .newYear{
            position: absolute;
            left: 0.8rem;
            top: 0;
            img{
                width: 0.98rem;
            }
        }
        .rules{
            position: absolute;
            top: 0.2rem;
            right: 0.3rem;
            span{
                color: #fff;
                border: 1px solid #fff;
                border-radius: 0.5rem;
                line-height: 0.3rem;
                padding: 0 0.2rem;
            }
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
        .repeat{
            position: absolute;
            bottom: 0;
            right: 0;
            img{
                width: 1.67rem;
            }
        }
    }
    .button{
        text-align: center;
        margin-top: 0.5rem;
        .img{
            display: inline-block;
            width: 5.90rem;
            // transition: scale 1s;
        }
    }
    .cards{
        margin-top: 0.2rem;
        text-align: center;
        justify-content: center;
        flex-wrap: wrap;
        background-size: 100% 100%;
        padding: 0.45rem 0.15rem 0.5rem;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/bgKuang.png');
        .img{
            position: absolute;
            left: 0;
            top: 0;
            margin: 0 0.03rem;
            width: 2.1rem;
            height: 3.37rem;
            
            &.back{
                &:nth-child(odd){
                    transform: translateZ(1px);
                }
                &:nth-child(even){
                    transform: translateZ(-1px) rotateY(180deg);

                }
            }
        }
        .active{
            transform: rotateY(180deg);
        }
        .active2{
            transform: rotateY(90deg);
        }
        .act{
            transition: all 0.8s;
            display: inline-block;
            position: relative;
            margin: 0.1rem 0; 
            width: 2.25rem;
            height: 3.37rem;
            text-align: center;
            transform-style: preserve-3d;
            // transform: rotateY(180deg);
            // background-image: url('@/assets/images/active/20181227/back.png');
        }
    }
    .get{
        color: #fff;
        text-align: center;
        margin: 0.1rem 0; 
        display: flex;
        justify-content: center;
        margin: 0.2rem 0;
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
            height: 8rem;
            overflow-y: scroll;
            .item{
                font-size: 14px;
                // padding: 0.2rem 0;
                line-height: 1rem;
                .left{
                    width: 50%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    .radius{
                        width: 0.7rem;
                        height: 0.7rem;
                        display: inline-block;
                        border-radius: 100%;
                        // background-color: #fff;
                        margin-right: 0.1rem;
                        position: relative;
                        top: 2px;
                        img{
                            width: 100%;
                            height: 100%;
                            border-radius: 100%;
                            vertical-align: middle;
                        }
                    }
                }
                .cen{
                    width: 25%;
                    text-align: center;
                }
                .right{
                    width: 25%;
                    text-align: left;
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
                        width: 0.44rem;
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

.test{
    ul{
        width: 200px;
        height: 200px;
        border: 1px solid #000;
        box-sizing: border-box;
        margin: 100px auto;
        position: relative;
        /*修改基本样式*/
        transform: rotateY(75deg) rotateX(45deg);
        /*旋转看看效果*/
        transform-style: preserve-3d;
        /*将父元素设置为3d空间*/
    }
    ul li{
        list-style: none;
        width: 200px;
        height: 200px;
        font-size: 60px;
        text-align: center;
        line-height: 200px;
        position: absolute;
        left: 0;
        top: 0;
        /*修改基本样式*/
    }
    ul li:nth-child(1){
        background-color: red;
        transform: translateX(-100px) rotateY(90deg);
        /*将第一个l向左移动100像素，然后绕y轴旋转90度，形成左边的面*/
    }
    ul li:nth-child(2){
        background-color: green;
        transform: translateX(100px) rotateY(90deg);
        /*将第一个2向右移动100像素，然后绕y轴旋转90度*，形成右边的面*/
    }
    ul li:nth-child(3){
        background-color: blue;
        transform: translateY(-100px) rotateX(90deg);
        /*将第一个3向上移动100像素，然后绕x轴旋转90度，形成上面的面*/
    }
    ul li:nth-child(4){
        background-color: yellow;
        transform: translateY(100px) rotateX(90deg);
        /*将第一个4向下移动100像素，然后绕x轴旋转90度*/
    }
    ul li:nth-child(5){
        background-color: purple;
        transform: translateZ(-100px);
        /*将第一个5向后移动100像素，形成后面的面*/
    }
    ul li:nth-child(6){
        background-color: pink;
        transform: translateZ(100px);
        /*将第一个l向前移动100像素，形成前面的面*/
    }
}

</style>
<template>
    <div class="page" :style="{minHeight: pageH + 'px'}">
        <!-- <x-header :left-options="{backText:''}" title='title' id='vux-header'></x-header> -->
        <div class="content">
            <div class="top">
                <img class="img" src="@/assets/images/active/20181227/topbg.png" alt="">
                <div class="newYear">
                    <img src="@/assets/images/active/20181227/new_year.png" alt="">
                </div>
                <div class="rules"> 
                    <span @click="lineToRules">活动规则</span>
                </div>
                <div class="info">
                    <img class="infoimg" src="@/assets/images/active/20181227/shangpin.png" alt="">
                    <div class="text">
                        [男鞋]2017冬季新款平底鞋运动 休闲2017冬季新款平底鞋运动2017冬季新款平底鞋运动
                    </div>
                    <div class="text" style="font-size: 16px;font-weight: bold">
                        ￥322.00
                    </div>
                </div>
                <div class="repeat">
                    <img src="@/assets/images/active/20181227/repeat.png" alt="">
                </div>
            </div>
            <div class="get">
                <img src="@/assets/images/active/20181227/left_line.png" alt=""> 
                <span>你还有2次抽奖机会</span>
                <img class="right" src="@/assets/images/active/20181227/left_line.png" alt="">
            </div>
            
            <div class="cards flex">
                <div v-for="(item, i) in imgArr" class="act" :class="item.turn?'active': ''" :key="i" @click="turnBack(i)">
                    <img class="img back" src="@/assets/images/active/20181227/back.png" alt="">
                    <img class="img back" :src="item.src" alt="">
                </div>
                
                <!-- <img class="img" src="@/assets/images/active/20181227/back.png" alt=""> -->
                <!-- <img class="img" src="@/assets/images/active/20181227/back.png" alt=""> -->
            </div>
            <div class="button">
                <img class="img" @click="$router.push('/index')" src="@/assets/images/active/20181227/btn.gif" alt="">
            </div>
            <div class="button" style="margin-top: 0.1rem;">
                <img class="img" src="https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/shareYandan.png" alt="">
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
                        <div class="left">
                            <span class="radius">
                                <img :src="item.img" alt="">
                            </span>
                            <span>{{item.text}}</span>
                        </div>
                        <div class="cen">抽中了</div>
                        <div class="right">
                            <div v-if="item.type == 1">
                                <img class="money" src="@/assets/images/active/20181227/money.png" alt="">
                                <span>+{{item.num}}</span>
                            </div>
                            <div v-if="item.type == 2">
                                <img class="miandan" src="@/assets/images/active/20181227/miandan.png" alt="">
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

        <!-- <div class="test">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div> -->
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
                {img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545993037030&di=b23fc58108629078582c481fd0267d10&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fbmiddle%2F6b9321ffgw1er1q92coqpj20ay0aydg2.jpg', text: 'jdsfasdfasdfeasdfasdf', type: 1, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: 'jdsfasdfasdfeasdfasdf', type: 1, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: 'abdfsf', type: 2, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: '第三方阿斯蒂芬', type: 3, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: '安慰她 一样', type: 1, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: ' 阿道夫', type: 2, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: '我沙发', type: 2, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: '阿斯蒂芬', type: 3, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: '秩序电饭锅', type: 1, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: '高哈尔', type: 1, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: 'jdsfasdfasdfeasdfasdf', type: 1, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: 'jdsfasdfasdfeasdfasdf', type: 1, num: 300 },
                {img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3050062956,3206782346&fm=26&gp=0.jpg', text: 'jdsfasdfasdfeasdfasdf', type: 1, num: 300 },
                
            ],
            imgArr: [
                {src: 'https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/huidou_j.png', turn: false, imgT: false},
                {src: 'https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/red_j.png', turn: false, imgT: false},
                {src: 'https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/miandan.png', trun: false, imgT: false},
                // {src: 'http://pic21.photophoto.cn/20111114/0034034868007888_b.jpg', img: 'http://pic1.win4000.com/pic/b/18/c1601227067.jpg', trun: false, imgT: false},
                // {src: 'http://pic21.photophoto.cn/20111114/0034034868007888_b.jpg', img: 'http://pic1.win4000.com/pic/b/18/c1601227067.jpg', trun: false, imgT: false},
                // {src: 'http://pic21.photophoto.cn/20111114/0034034868007888_b.jpg', img: 'http://pic1.win4000.com/pic/b/18/c1601227067.jpg', trun: false, imgT: false},
                // {src: '@/assets/images/active/20181227/back.png', img: 'http://pic1.win4000.com/pic/b/18/c1601227067.jpg'},
            ],
            currentIndex: 3
        }
    },
    created() {
        this.pageH = window.innerHeight;
        this.getData();
    },
    mounted() {
        
    },
    methods: {
        turnBack(i){
            let that = this;
            this.currentIndex = i;
            let item = this.imgArr[i];
            item.turn = true;
            this.imgArr.splice(i,1,item);
            setTimeout(() => {
                for (let i = 0; i < that.imgArr.length; i++) {
                    if(!that.imgArr[i].turn)that.imgArr[i].turn = true;
                }
            }, 800);
            console.log(i)
        },
        async getData(){
            let data = {
                account: this.account,
                inter_sence: 2
            }
            const [err, res] = await api.new_year_share(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                console.log(res)
            }
        },
        lineToRules(){
            window.location.href = 'https://m.xiepinhui.com.cn/html/active/20190101/'
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
