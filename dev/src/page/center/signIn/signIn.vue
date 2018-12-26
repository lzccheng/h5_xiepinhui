<style scoped lang="less">
.signin-header-top {
  padding: 0px 10px;
  text-align: center;
}
.signin-bg{
  padding: 40px 0;
  padding-bottom: 10px;
  background:linear-gradient(90deg,rgba(255,181,136,1),rgba(237,63,97,1));
  border-radius: 0 0 20px 20px;
}
.all-jifen{
  position: absolute;
  background: rgba(25,0,3,.49);
  border-radius: 0 50px 50px 0;
  left: 10px;
  padding: 2px 15px;
  color:#F9AB10;
  font-size: 12pt;
}
.jifen-icon{
  position: relative;
  left: -2px;
  top: 1px;
  padding-right:5px;
  font-size: 14pt;
}
.guize{
  position: absolute;
  right:20px;
  color: #fff;
  font-size: 11pt;
}
.wenhao-icon{
  font-size: 14pt;
  position: relative;
  top: 1px;
  padding-right: 5px;
}
.qiandao-title{
  font-size: 12pt;
  text-align: center;
  color: #fff;
  line-height:25px;
  padding-top:30px;
}
.leiqian{
  background: rgba(25,0,3,.4);
  color: #fff;
  border-radius: 100px;
  padding: 2px 10px;
  font-size: 11pt;
}
.signin-header-top .signin-day-title {
  text-align: center;
  color: #333;
  font-size: 12pt;
  padding-top: 10px;
}

.action-box {
  width: 100%;
  position: fixed;
  z-index: 3;
  max-width: 640px;
}

.action-center {
  width: 100%;
  background: #fff;
  padding-bottom: 10px;
}

.action-bottom {
  text-align: center;
  width: 100%;
  color: #888;
}
.action-btoom-btn img{
 width: 120px;
 max-height: 50px;
}

.qiandao-cg-title {
  padding: 0px 15px;
  padding-top: 5px;
  text-align: left;
}
.yilingqu{
  width: 100%;
  padding: 20px 0;
  text-align: center;
  img{
      width: 80%;
  }
}
.lingqu {
  width: 100%;
  text-align: center;
  font-size: 0;
  background: #fff;
  padding: 20px 0px;
}

.lingqu form {
  padding: 10px 0px;
  width: 100%;
  margin: auto;
  vertical-align: middle;
}
.lingqu button {
  background: #fff;
}
.lingqu button::after{
  display: none;
}
.lingqu-title {
  padding: 10px 15px;
  font-size: 12pt;
}

.qd-date-box {
  width: 100%;
}

.chenggong {
  width: 100%;
  text-align: center;
  background: -moz-linear-gradient(top, #fffaed 10%, #fff 100%) !important;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(10%, #fffaed), color-stop(100%, #fff)) !important;
  background: -webkit-linear-gradient(top, #fffaed 10%, #fff 100%) !important;
  background: -o-linear-gradient(top, #fffaed 10%, #fff 100%) !important;
  background: -ms-linear-gradient(top, #fffaed 10%, #fff 100%) !important;
  background: linear-gradient(to bottom, #fffaed 10%, #fff 100%) !important;
}

.chenggong img {
  width: 60%;
}

.chenggong .lable {
  font-size: 12pt;
  margin-bottom: 10px;
}

.cg-title {
  font-size: 12pt;
  text-align: center;
  padding: 10px 0px;
}

.xiangqing {
  border: 1px red solid;
  border-radius: 10px;
  padding: 0px 15px;
  font-size: 12pt;
  color: red;
}

.num-cu {
  font-size: 16pt;
  color: #F9AB10 !important;
}

.cainixihuan {
  width: 100%;
  padding: 10px 0px;
}

.line {
  width: 20%;
}

.xihuan-lable {
  font-size: 12pt;
  padding: 0px 10px;
}

.xihuan-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.qd-lable {
  position: absolute;
  right:10px;
  top:50px;
  background: none;
  color: #fff; 
  font-size:9pt;
  padding:0px 5px;
  text-align: center;
  border-radius:20px 0 0 20px;
  line-height:25px !important;
  z-index: 9;
}
.qd-lable-guize{
  position: absolute;
  left: 15px;
  top:40px;
  background:rgba(0, 0, 0, .5);
  color: #fff;
  font-size:9pt;
  padding:0px 10px;
  text-align: center;
  border-radius:20px;
  line-height:25px !important;
}
.qd-lable-guize::after{
  display: none;
}

.scroll-box {
  padding:10px;
  position: relative;
}

.recommend_scroll_x_box {
  margin: auto;
  white-space: nowrap;
  display: flex;
  overflow: scroll;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

.recommend_hot_box {
  width:100/100rem;
  margin-right: 15/100rem;
  display: inline-block;
  text-align: center;
  background: #FFF6DC;
  border-radius: 5px;
  padding: 5px;
  position: relative;
}

.recommend_hot_image {
  width:90/100rem;
  height:110/100rem;
}
.jifen-scroll-num{
  font-size: 9pt;
  line-height: 10px;
  color: #CF8415;
  position: relative;
  top: -4px;
}
.is-double{
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 65/100rem;
  font-size:9pt;
  color: #848484;
}
.bottom-form{
    img{
        width: 80%;
    }
}
.alertBox{
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    z-index: 9;
    .contenBox{
        position: absolute;
        top: 1rem;
        left: 50%;
        width: 85%;
        height: 8rem;
        margin: 0 auto;
        margin-left: -42.5%;
        border-radius: 10px;
        padding: 0.3rem 0.2rem 0.2rem;
        background-color: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        iframe{
            width: 100%;
            height: 100%;
            display: inline-block;
            border: none;
            border-radius: 10px;
        }
        .img{
            position: absolute;
            width: 100%;
            left: 50%;
            bottom: -1rem;
            text-align: center;
            padding-top: -0.3rem;
            img{
                width: 0.6rem;
                height: auto;
                display: inline-block;
            }
        }
    }
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div>
                <div class="action-box">
                    <div class="action-center" v-if="isShow">
                    <div class="yilingqu" v-if="isQian">
                        <img mode='widthFix' src="http://img.xiepinhui.com.cn/small_app/qiandao/yiqiandao_bg.png"/>
                    </div>
                    <div class="lingqu" v-else>
                        <form bindsubmit='formSubmit' report-submit class="bottom-form">
                            <button form-type="submit">
                                <img mode='widthFix' src="http://img.xiepinhui.com.cn/small_app/qiandao/qd_bg.gif" @click='lingqu'/>
                            </button>
                        </form>
                    </div>
                    </div>
                    <div class="action-bottom">
                    <div class="action-btoom-btn">
                        <img mode='widthFix' v-if="isDwon" @click="showAction" src="http://img.xiepinhui.com.cn/small_app/qiandao/zhankai.png"/>
                        <img mode='widthFix' v-else @click="showAction" src="http://img.xiepinhui.com.cn/small_app/qiandao/shouqi.png"/>
                    </div>
                    </div>
                </div>
                <div class="signin-header-top">
                    <div class="signin-bg">
                    <button size='mini' class="qd-lable" @click.stop='openRuleqd'>
                        <span class="iconfont icon-wenhao wenhao-icon"></span>
                        <span>规则</span>
                    </button>
                    <span class="all-jifen" @click='goJifen'>
                    <span class="iconfont icon-jifen jifen-icon"></span>
                    <span>{{pic}}</span>
                    </span>
                    <div class="qiandao-title">每日签到</div>
                    <div class="signin-day-title">
                        <span class="leiqian">已累计签到<span class="num-cu">{{sign_in_num}}</span>天</span>
                    </div>
                    <div class='scroll-box'>
                        <div class="recommend_scroll_x_box flex xiaosanjiao" scroll-x="true">
                        <div class="recommend_hot_box" v-for="(item_list, index) in singinInfo" :id="item_list.n_goods_id" :key="index">
                            <img v-if="item_list.is_sign" src="http://img.xiepinhui.com.cn/small_app/qiandao/yq_img.png" class="recommend_hot_image"/>
                            <img v-else src="http://img.xiepinhui.com.cn/small_app/qiandao/no_img.png" class="recommend_hot_image"/>
                            <span v-if="item_list.is_double" class="is-double">x2</span>
                            <div class="jifen-scroll-num">{{item_list.point}}积分</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="cainixihuan flex flex-pack-justify flex-align-center flex-pack-center">
                    <div class="line aj-line_xi"></div>
                    <div class="xihuan-lable flex flex-align-center">
                    <img class="xihuan-icon" src="@/assets/images/signin/cainixihuan-qd.png"/>
                    猜你喜欢
                    </div>
                    <div class="line aj-line_xi"></div>
                </div>
                <div class="goodsInfo flex flex-warp flex-pack-justify">
                    <div class="goods-li" v-for="(item, index) in list" :key="index" :id="item.n_goods_id" @click='openGoods(item.n_goods_id)'>
                    <!--widthFix  -->
                    <img mode="widthFix" :src="item.goods_image" lazy-load="true"/>
                    <span class="goods-name">{{item.goods_name}}</span>
                    <span class="goods-xiaoliang">销量：{{item.goods_salenum}}</span>
                    <span class="goods-price">￥{{item.purchase_price}}<span class="goods-old-price">市场价:{{item.goods_marketprice}}</span></span>
                    </div>
                </div>
                <div class="weui-loadmore" v-if="upLoading">
                    <div class="weui-loading"></div>
                    <div class="weui-loadmore__tips">正在加载</div>
                </div>
                <div class="loading complete" v-if="upLoadingComplete">暂无更多数据</div>
            </div>
            <transition name="fade">
                <div class="alertBox" v-if="ruleBoxShow" @click.self="ruleBox">
                    <div class="contenBox">
                        <iframe src="https://m.xiepinhui.com.cn/smallweb/guize.html?type=qiandao" frameborder="0"></iframe>
                        <!-- <div class="img">
                            <img @click.stop="ruleBox" src="@/assets/images/close_red.png" alt="">
                        </div> -->
                    </div>
                </div>
            </transition>
            
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
            avatar: "",
            isDwon: false,
            isQian: false,
            isShow: false,
            page: 1,
            sign_in_num: 0,
            money: "",
            list: "",
            pic: "",
            upLoading: false,
            upLoadingComplete: false,
            singinInfo:"",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '鞋品荟', //导航栏 中间的标题
            },
            ruleBoxShow: false
        }
    },
    created() {
        this.showSignin();
        this.showGoods();
    },
    mounted() {
        this.$nextTick(()=>{
            isScrollBottom(this.showGoods);
        })
    },
    destroyed () {
        window.onscroll = null;
    },
    methods: {
        async showSignin(){
            let data = {
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.pointSignlog(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.isShow = res.data.is_sign? false: true;
                this.isQian = res.data.is_sign;
                this.sign_in_num = res.data.sign_total;
                this.pic = res.data.member_points;
                this.singinInfo = res.data.list;
            }
        },
        async showGoods(){
            if(this.upLoadingComplete)return;
            let data = {
                page: this.page
            }
            this.upLoading = true;
            const [err, res] = await api.ninehomepage(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                this.upLoading = false;
                return;
            }
            if(res.code == 2000){
                if (res.data.list.length) {
                    this.list == ""? this.list = res.data.list : this.list = this.list.concat(res.data.list);
                    this.page ++;
                } else {
                    this.upLoading = false;
                    this.upLoadingComplete = true;
                }
            }
        },
        showAction(){
            if(this.$stopClick(500))return;
            this.isDwon = !this.isDwon;
            this.isShow = !this.isShow;
        },
        async lingqu(){
            let data = {
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.pointssign(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
               this.$vux.toast.text("签到成功",'top');
               this.isQian = true;
               this.showSignin();
            }
        },
        goJifen(){
            this.$router.push('/centerFull/integral/integral_my');
        },
        openGoods(goodsid){
            this.$router.push({
                path: '/index/goodsInfoPindan',
                query: {
                    goodsId: goodsid
                }
            })
        },
        openRuleqd(){
            this.ruleBoxShow = true;
        },
        ruleBox(){
            this.ruleBoxShow = false;
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
