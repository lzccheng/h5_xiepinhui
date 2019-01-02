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
            top: 0.15rem;
            right: 0.3rem;
            span{
                font-size: 12px;
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
        overflow: hidden;
        background-image: url('https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/bgKuang2.png');
        .img{
            position: absolute;
            left: 0;
            top: 0;
            margin: 0 0.03rem;
            width: 2.1rem;
            height: 3.37rem;
            
            &.back{
                &:nth-child(even){
                     transform: translateZ(-1px);
                }
                &:nth-child(odd){
                    transform: translateZ(1px) rotateY(180deg);
                }
            }
        }
        
        .light{
            position: absolute;
            left: -1.67rem;
            top: -1.5rem;
            width: 5.4rem;
            height: 6.15rem;
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
            .span{
                transform: rotateY(180deg);
            }
        }
    }
    .get{
        color: #fff;
        text-align: center;
        margin: 0.1rem 0; 
        display: flex;
        justify-content: center;
        margin: 0.2rem 0;
        overflow: hidden;
        img{
            height: 0.2rem;
            vertical-align: middle;
            position: relative;
            top: 9px;
        }
        span{
            white-space: nowrap;
            padding: 0 0.2rem;
        }
        // .right{
        //     transform: rotate(180deg);
        //     -ms-transform:rotate(180deg); 	/* IE 9 */
        //     -moz-transform:rotate(180deg); 	/* Firefox */
        //     -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
        //     -o-transform:rotate(180deg); 
        //     position: relative;
        //     top: -2px;
        // }
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
        .bottom{
            text-align: center;
            padding: 0.2rem;
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
.alert{
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    img{
        position: absolute;
        right: 0;
        top: 0;
        width: 5rem;
    }
}
</style>
<template>
    <div class="page" :style="{minHeight: pageH + 'px'}" v-if='pageData'>
        <!-- <x-header :left-options="{backText:''}" title='title' id='vux-header'></x-header> -->
        <div class="content">
            <div class="top">
                <img class="img" :src="pageData.header_bgimage.image" :style="{ width: pageData.header_bgimage.with / 100 + 'rem' }"  alt="">
                <!-- <div class="newYear">
                    <img src="@/assets/images/active/20181227/new_year.png" alt="">
                </div> -->
                <div class="rules"> 
                    <span @click="lineToRules">活动规则</span>
                </div>
                <div class="info" v-if="pageData.order_info">
                    <img class="infoimg" :src="pageData.order_info.goods_image" alt="">
                    <div class="text">
                        {{pageData.order_info.goods_name}}
                    </div>
                    <div class="text" style="font-size: 16px;font-weight: bold">
                        ￥{{pageData.order_info.order_amount}}
                    </div>
                </div>
                <div class="repeat">
                    <img @click="onReload" src="@/assets/images/active/20181227/repeat.png" alt="">
                </div>
            </div>
            <div class="get">
                <img src="https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/xianLeft.jpg" alt=""> 
                <span>你还有{{pageData.lottery_times}}次抽奖机会</span>
                <img class="right" src="https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/xianRight.jpg
" alt="">
            </div>
            
            <div class="cards flex">
                <div v-for="(item, i) in imgArr" class="act" :class="item.turn?'active': ''" :key="i" @click="turnBack(i, item.options_id)">
                    <div>
                        <img class="img back" :src="item.image" alt="">
                    </div>
                    <div>
                        <img class="img back" :src="activeAward[i].image" alt="">
                        <span style="transform: rotateY(180deg);color: orange;position: absolute;bottom: 0.2rem;left: 0;width: 100%;text-align: center;" v-if="activeAward[i].options_type != 1">
                            <span v-if="activeAward[i].options_type == 2" style="color: #555">荟豆{{activeAward[i].award_value}}个</span>
                            <span v-if="activeAward[i].options_type == 3">现金￥{{activeAward[i].award_value}}</span>
                            <span v-if="activeAward[i].options_type == 4" style="color: #fff;position: relative;bottom: 0.5rem">{{activeAward[i].award_value.split(',')[0]}}<br/>减{{activeAward[i].award_value.split(',')[1]}}</span>
                        </span>
                    </div>
                    <img class="img back light" v-if="activeAward[i].award_status == 1"  src="https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/shine.png" alt="">
                </div>
                
                <!-- <img class="img" src="@/assets/images/active/20181227/back.png" alt=""> -->
                <!-- <img class="img" src="@/assets/images/active/20181227/back.png" alt=""> -->
            </div>
            <div class="button">
                <img class="img" @click="$router.push('/index')" :style="{ width: pageData.ad_image.width / 100 + 'rem' }" :src="pageData.ad_image.image" alt="">
            </div>
            <div class="button" style="margin-top: 0.1rem;">
                <img @click="onShareShow" class="img" src="https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/shareYandan.png" alt="">
            </div>
            <div class="get">
                <img src="https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/xianLeft.jpg" alt=""> 
                <span>已有{{record.total_count}}人领取</span>
                <img class="right" src="https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/small_app/mine/yandan/xianRight.jpg
" alt="">
            </div>
            <div class="recode">
                <img class="img" src="@/assets/images/active/20181227/record.png" alt="">
                <div class="tab">
                    <span>用户昵称</span>
                    <span>获得奖励</span>
                </div>
                <div class="list" id="wrapper" ref="wrapper">
                    <div>
                        <div class="item flex" v-for="(item, index) in recordList" :key="index">
                            <div class="left">
                                <span class="radius">
                                    <img :src="item.member_avator" alt="">
                                </span>
                                <span>{{item.member_nick}}</span>
                            </div>
                            <div class="cen">抽中了</div>
                            <div class="right">
                                <!-- 充值余额 -->
                                <div v-if="item.lottery_record.options_type == 3">
                                    <img class="money" :src="item.lottery_record.icon" alt="">
                                    <span>+{{item.lottery_record.award_value}}</span>
                                </div>
                                <!-- 免单券 -->
                                <div v-if="item.lottery_record.options_type == 1">
                                    <img class="miandan" :src="item.lottery_record.icon" alt="">
                                    <span>+{{item.lottery_record.award_value}}张</span>
                                </div>
                                <!-- 荟豆 -->
                                <div v-if="item.lottery_record.options_type == 2">
                                    <img class="huidou" :src="item.lottery_record.icon" alt="">
                                    <span>+{{item.lottery_record.award_value}}个</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="upload" class="bottom">
                            <span>加载中...</span>
                        </div>
                        <div v-if="complete" class="bottom">
                            <span>到底了~~</span>
                        </div>
                        <div v-if="!recordList.length" class="bottom">
                            <span>暂无数据</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="alert" v-show="shareShow" @click.self="onShareShow">
                <img src="@/assets/images/share_right.png" alt="">
            </div>
        </transition>
        
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
import { share } from '@/utils/wx_sdk.js';
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
            order_id: '',
            from: 2,
            currentIndex: 3,
            pageData: '',
            record: '',
            recordList: [],
            page: 1,
            activeAward: [],
            complete: false,
            upload: false,
            shareShow: false
        }
    },
    created() {
        this.pageH = window.innerHeight;
        this.order_id = this.$route.query.order_id || '';
        this.from = this.$route.query.from || 2;
        this.page = 1;
        this.getNew_year_share();
        this.new_year_share_record();
        // this.new_year_share_lottery();
        
    },
    mounted() {

    },
    methods: {
        onShareShow(){
            if(this.$stopClick(500))return;
            this.shareShow = !this.shareShow;
        },
        async turnBack(i, cardId){
            if(this.imgArr[i].turn)return;
            this.new_year_share_lottery(i);
        },
        cardsTurn(i){
            let that = this;
            this.currentIndex = i;
            let item = this.imgArr[i];
            item.turn = true;
            this.imgArr.splice(i,1,item);
            setTimeout(() => {
                for (let i = 0; i < that.imgArr.length; i++) {
                    if(!that.imgArr[i].turn){
                        let item = that.imgArr[i];
                        item.turn = true;
                        that.imgArr.splice(i,1,item);
                    }
                }
            }, 800);
        },
        //获取活动页面信息
        async getNew_year_share(){
            let data = {
                account: this.account,
                token: this.token,
                inter_sence: this.from,
                order_id: this.order_id
            }
            this.$vux.loading.show({
                text: '加载中...'
            })
            const [err, res] = await api.new_year_share(data);
            this.$vux.loading.hide();
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.pageData = res.data;
                this.imgArr = res.data.lottery_options.filter(item =>{
                    item.turn = false;
                    return item;
                });
                this.activeAward = res.data.lottery_options;
            }
        },
        //获取翻牌记录
        async new_year_share_record(){
            let that = this;
            if(this.page != 1 && this.recordList.length >= this.record.total_count){
                this.complete = true;
                this.upload = false;
                return;
            }
            if(this.page != 1 && this.recordList.length > 9){
                this.upload = true;
                this.complete = false;
            }
            let data = {
                account: this.account,
                 token: this.token,
                page: this.page
            }
            if(this.page != 1){
                this.$vux.loading.show({
                    text: '加载中...'
                })
            }
            const [err, res] = await api.new_year_share_record(data);
            setTimeout(() => {
                that.$vux.loading.hide();
            }, 1000);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                if(this.page == 1){
                    this.recordList = [];
                    this.record = res.data;
                }
                this.recordList = this.recordList.concat(res.data.list);
                this.page ++;
            }
        },
        //抽奖
        async new_year_share_lottery(i){
            let that = this;
            if(!this.user){
                return this.$vux.confirm.show({
                    title: '提示',
                    content: '你还没登录哦~~',
                    confirmText: '前往登录',
                    onCancel () {
                    },
                    onConfirm () {
                        console.log(that.$route)
                        that.$router.push({
                            path: '/user/login',
                            query: {
                                url: that.$route.fullPath
                            }
                        })
                    }
                })
            }
            if(!this.pageData.lottery_id){
                return this.$vux.toast.text('你没有抽奖机会了哦', 'top');
            }
            let data = {
                account: this.account,
                lottrey_id: this.pageData.lottery_id,
                token: this.token,
                lottrey_index: i
            }
            const [err, res] = await api.new_year_share_lottery(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.activeAward = res.data.lottery_options.filter(item =>{
                    item.image = item.award_image;
                    return item;
                });
                this.cardsTurn(i);
            }
        },
        async onReload(){
            this.$vux.loading.show({
                text: '重置中...'
            })
            this.order_id = '';
            await this.getNew_year_share();
            await this.new_year_share_record();
            this.$vux.loading.hide();
            this.$vux.toast.text('重置完成', 'top');
        },
        lineToRules(){
            window.location.href = 'https://m.xiepinhui.com.cn/html/active/20190101/'
        },
        weixinShare(){
            let shareConfig = {
                title: '元旦假日，抽奖买买',
                desc: '活动玩不停，元旦赠豪礼，快来和我一起参与抽奖，赢取大礼吧！',
                imgUrl: 'https://xiepinhui.oss-cn-shenzhen.aliyuncs.com/activity/share/new_year_top.png',
                link: window.location.href
            }
            //activeWrap
            if(this.user){
                // if(this.user.user_type == 1 && )
            }
            share(this, {share: shareConfig});
        },
        onscroll(){
            let parentDom = this.$refs.wrapper;
            let parentHeight = parentDom.clientHeight;
            let scrollTop = parentDom.scrollTop;
            let innerHeight = parentDom.firstChild.clientHeight;
            if(parentHeight + scrollTop >= innerHeight){
                console.log('到底了~~')
                this.new_year_share_record();
            }
        }
    },
    watch: {
        pageData(){
            this.weixinShare();
            if(this.isOnScroll)return;
            this.$nextTick(()=>{
                this.isOnScroll = true;
                document.querySelector('#wrapper').onscroll = this.onscroll;
            })
        },
        record(){
            
        }  
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
