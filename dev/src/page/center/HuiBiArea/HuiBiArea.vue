<style scoped lang="less">
.page{
  background: #fff;
}
.statusBtnCon{
  overflow:hidden;
  margin-right:20/100rem;
  margin-top:20/100rem;
}
.rightOrderBtn{
  color: #666;
  font-size: 18/100rem;
  width: 124/100rem;
  height: 44/100rem;
  line-height: 44/100rem;
  text-align: center;
  border:1px solid #ccc;
  float: right;
  border-radius: 50/100rem;
}
.goodsInfo{
  padding: 0px 20/100rem;
  box-sizing: border-box;
  margin-top:20/100rem;
}
.goods-li{
//   width: 50% !important;
  background: #fbfbfb;
}
.kuai-list-box{
  position: relative;
  border-radius: 5px;
}
// .goods-li:nth-child(odd) .kuai-list-box{
//   padding-right:5px;
// }
// .goods-li:nth-child(even) .kuai-list-box{
//   padding-left:5px;
// }
.goodsInfo .goods-li{
  margin-bottom:5px;
  background: #fbfbfb;
}
.kuai-list-box img{
  border-radius: 5px;
  max-height: 109/50rem
}
.bottom_box{
  margin-top:20/100rem;
  margin-bottom: 20/100rem;
  text-align:center;
font-size:24/100rem;
color:#666;
}
.goods-name {
  font-size: 24/100rem;
  color: #333;
  padding:0 12/100rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:1;
}
.all-list-biaoqian,.all-right-xiaoliang{
  /* padding-left: 12/100rem; */
}
.goods-price{
  padding-left: 10px;
}
.all-right-xiaoliang{
  font-size: 24/100rem;
  color: #999;
  padding-right: 10px;
}
.riIcon{
  display: inline-block;
  margin-left: 6/100rem;
}
.iconH{
  width:24/100rem !important;
  background: none !important;
  max-height:auto !important;
}
.priceNum{
  color: #61D8D0;
  font-size: 28/100rem;
}
.signMoney{
  font-size: 24/100rem;
}
.stateGoodsIs{
  background:rgba(0,0,0,0.5);
  position: absolute;
  color: #fff;
  font-size: 24/100rem;
  width:120/100rem;
  height: 120/100rem;
  border-radius: 50%;
  left:50%;
  margin-left:-60/100rem;
  top:50%;
  margin-top:-60/100rem;
  text-align: center;
  line-height: 120/100rem;
}
._alert{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0,0.5);
    ._alertBox{
        width: 80%;
        display: inline-block;
        border: none;
        background: #fff;
        margin-left: 50%;
        margin-top: 70/50rem;
        border-radius: 8px;
        transform: translateX(-50%);
        iframe{
            width: 100%;
        }
    }
    .a_close{
        text-align: center;
        margin-top: 10/50rem;
        img{
            width: 25/50rem;
            height: 25/50rem;
            border: 1px solid #eee;
            border-radius: 100%;
        }
    }
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" ref="header" :title='nvabarData.title' id='vux-header'></x-header>
        <transition name="fade">
            <div v-show="showHuiBiBool" class="_alert" @click.self="goHuiBi">
                <div class="_alertBox">
                    <iframe :style="{height: alertHeight + 'px'}" src="http://m.xiepinhui.com.cn/smallweb/huibirule.html" frameborder="0"></iframe>
                </div>
                <div class="a_close" @click="goHuiBi"><img src="@/assets/images/close_gray.png" alt=""></div>
            </div>
        </transition>
        
        <div>
            <div class="statusBtnCon"><div class="rightOrderBtn" @click="goHuiBi">荟币规则</div></div>
            <div class="goodsInfo flex flex-warp flex-pack-justify" v-if="listObj.length>0">
                <!-- <div wx:if="{{listObj.length>0}}"> -->
                    <div class="goods-li" :data-id="item.n_goods_id" @click='goGoodsDetail(item.n_goods_id)' v-for="(item, index) in listObj" :key="index">
                        <div class="kuai-list-box" :style="{backgroundImage: 'url(' + item.goods_image + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: width_ + 'px', height: width_ + 'px'}">
                            <div class="stateGoodsIs" v-if="item.storage_total==0">已售罄</div>
                            <div class="stateGoodsIs" v-if="item.goods_state==0">已下架</div>
                            <div class="imgBg" >

                            </div>
                            <!-- <img mode="widthFix" :src="item.goods_image" lazy-load="true"/> -->
                        </div>
                        <div class="goods-name">{{item.goods_name}}</div>
                    
                        <div class="flex  flex-pack-justify flex-align-center">
                            <div class="all-list-biaoqian">
                                <div class="priceNum">
                                    <span class="signMoney">￥:</span>{{item.vcoin_pay_price}}+{{item.vcoin_price}}
                                    <img src="@/assets/images/huidou.png" class="iconH" mode="widthFix"/>
                                </div>
                            </div>
                            <div class="all-right-xiaoliang">销量:{{item.goods_salenum}}</div>
                        </div>
                    </div>
                <!-- </div> -->
            </div>
            <div class="bottom_box" v-if="show_none">暂时没有数据~</div>
            <div class="bottom_box" v-if="show_bottom">已经到达底部~</div>
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
            nvabarData: {
                showCapsule: 1,
                title: '荟币专区',
            },
            // height: app.globalData.height + 40,
            listObj: [],
            page: 0,
            show_bottom: false,
            show_none: false,
            showHuiBiBool: false,
            alertHeight: 0,
            width_: 0
        }
    },
    created() {
        this.width_ = (window.innerWidth - 26) / 2;
        this.goodsList();
    },
    mounted() {
        this.$nextTick(()=>{
            this.alertHeight = (window.innerHeight - this.$refs.header.$el.clientHeight)  * 0.8;
            isScrollBottom(this.onReachBottom);
        })
    },
    methods: {
        async goodsList(){
            this.$vux.loading.show({
                text: '加载中...'
            })
            var that=this;
            var page = that.page;//页数
            page++;
            let data = {
                page: page
            }
            const [err, res_data] = await api.vcoin_goods_list(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res_data.code == 2000){
                console.log(res_data)
                var resList = res_data.data.list;//返回的列表对象
                var total_count = res_data.data.total_count;//返回的总条数
                var listObj = that.listObj;//data里的列表数组
                var page = that.page;//页数
                var show_none=false;
                page++;
                var newListObj = listObj.concat(resList);
                var tt;
                for (tt in newListObj){
                    newListObj[tt]['vcoin_price'] = parseInt(newListObj[tt]['vcoin_price']);
                }
                that.listObj = newListObj;
                that.page = page;
                that.total_count = total_count;
                that.show_none = show_none;
            }
        },
        onReachBottom(){
            var that = this;
            var total_count = that.total_count;
            var listObjLen = that.listObj.length;
            var isTabOne = that.isTabOne;
            if (total_count > listObjLen) {
                that.goodsList();
            } else {
                that.show_bottom = true;
            }
        },
        goHuiBi(){
            this.showHuiBiBool = !this.showHuiBiBool;
        },
        goGoodsDetail(dataId){
            this.$router.push({
                path: '/index/goodsInfoPindan',
                query: {
                    goodsId: dataId,
                    s_id: '-1'
                }
            })
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
