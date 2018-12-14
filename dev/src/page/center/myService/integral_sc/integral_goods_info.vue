<style scoped lang="less">
.page{
  padding-bottom:51/50rem;
}
.goods-silder {
  height: 375/50rem;
}

.goods-silder img {
  width: 100%;
  height: 100%;
}
.goods-info{
  padding: 10px 15/50rem;
  background: #fff;
}
.goods-name-jifen{
  font-size: 12pt;
  color: #333
}
.info-price{
  padding-top: 5/50rem;
}
.duihuan-jifen{
  font-size: 12pt;
  color: #61D8D0;
}
.jifen-xiaoliang{
  color: #888;
  font-size: 10pt;
}
.xiangqing-title{
  padding: 10px 15/50rem;
  font-size: 12pt;
  background: #fff;
  margin-top: 10/50rem;
}
.xingqing-img{
  width: 100%;
  font-size: 0;
  background: #fff;
}
.xingqing-img img{
  width: 100%;
}
.bottom-btn{
 background:#61D8D0;
 position: fixed;
 width: 100%;
 line-height:51/50rem;
 font-size: 12pt;
 text-align: center;
 color: #fff;
 bottom: 0;
}
.jifen-space{
  font-size: 12pt;
  color: #61D8D0;
  padding-top: 5/50rem;
}
.action-right{
    padding-left: 0.2rem;
}
.action-right-lable{
  line-height: 25/50rem;
}
.catalog_items {
  font-size: 12pt !important;
}
.action-btn{
    position: absolute;
}
.action-btn .btn{
  background:#61D8D0  !important;
  margin: 0.1rem auto;
}
.action-content{
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #fff;
}
.action-header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.action-border{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    z-index: 99;
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div>
                <div class="silder-box">
                    <swiper class="goods-silder" :options="swiperOption" bindchange="listenSwiper" indicator-dots="true" indicator-color="#958C8A" indicator-active-color="#fff">
                        <swiper-slide v-for="(item, index) in goodsInfo.goods_image_arr" :key="index">
                            <img :src="item" class="slide-image" bindtap="showImg" :data-href='item' />
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                    </div>
                    <div class="goods-info">
                    <div class="goods-name-jifen">{{goodsInfo.goods_name}}</div>
                    <div class="info-price flex flex-align-center flex-pack-justify">
                        <span class="duihuan-jifen">兑换需{{goodsInfo.exchange_points}}积分</span>
                        <span class="jifen-xiaoliang">销量：{{goodsInfo.goods_salenum}}件</span>
                    </div>
                    </div>
                    <div class="xiangqing-title">商品详情</div>
                    <div class="xingqing-img">
                    <img mode='widthFix' :src='item' v-for="(item, index) in goodsInfo.goods_body" :key="index"/>
                    </div>
                    
                    <div class="bottom-btn" @click="actionSheetTap">立即兑换</div>
                </div>
        </div>
        <transition name="fade">
            <div class="action-border" v-if="!actionSheetHidden" @click.self="actionSheetbindchange(0)">
                <div class="action-content">
                    <div class="action-header flex">
                        <img class="moren-img" :src="goodsInfo.goods_image_arr[0]"/>
                        <div class='action-right'>
                        <span class="action-right-lable jifen-space">{{goodsInfo.exchange_points}}积分</span>
                        <span class="action-right-lable" >库存：{{nowSelectspec.goods_storage}}件  销量：{{goodsInfo.goods_salenum}}件</span>
                        <span class="action-right-lable">{{nowSelectspec.spec}}</span>
                        </div>
                        <div class="close-icon iconfont icon-guanbi" @click.self='actionSheetbindchange(0)'></div>
                    </div>
                    <div scroll-y style="height: 6rem;margin-top:100px;padding-bottom:44px; overflow: scroll;" bindscrolltoupper="upper" bindscrolltolower="lower">
                        <div class="info_choose " v-for="(specBox, Idx) in spec_info.goods_specname" :key="Idx">
                            <div v-if="Idx==0">
                                <div class="catalog_name">{{specBox.sp_name}}</div>
                                <div class="catalog_items flex flex-warp ">
                                <div v-for="(specName, index) in specBox.values" :key="index">
                                    <div :class="specIndex[Idx] === index?'select-active':'select'" :data-num="index" :data-fatherIndex='Idx' @click="clickNum(index, Idx, specBox.sp_name+':'+specName)" :data-value="specBox.sp_name+':'+specName"> {{specName}}
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div v-else-if="Idx==1">
                                <div class="catalog_name">{{specBox.sp_name}}</div>
                                <div class="catalog_items flex flex-warp ">
                                <div v-for="(specName, index) in specBox.values" :key="index">
                                    <div :class="specIndex[Idx] === index?'select-active':'select'" v-if="nowList[index].goods_storage!=0" :data-num="index" :data-fatherIndex='Idx' @click="clickNum(index, Idx, specBox.sp_name+':'+specName)" :data-value="specBox.sp_name+':'+specName"> {{specName}}
                                    </div>
                                    <div class="select-hui" v-else> {{specName}}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="action-btn">
                            <div class="btn" @click="goBuy">确认</div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
import "swiper/dist/css/swiper.css";
import "./swiper.less";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    components: {
        XHeader,
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            goods_id:"",
            goodsInfo:"",
            actionSheetHidden: true,
            goods_specname: "",
            all_spec_goodid: "",
            nowSelectspec: "",
            specIndex: "",
            num: 1,
            select: "",
            nowList: "",
            nowClick: "",
            yiselect: "",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '商品详情', //导航栏 中间的标题
            },
        }
    },
    created() {
        this.goods_id = this.$route.query.goods_id;
        this.showPage();
        this.getSpec();
    },
    mounted() {

    },
    methods: {
        async showPage(){
            let data = {
                goods_id: this.goods_id,
                account: this.account,
                token: this.token,
            }
            const [err, res] = await api.pointsGoodsdetail(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.goodsInfo = res.data;
            }
        },
        clickNum(num, fatherindex, value){
            if(window.isClick)return;
            window.isClick = true;
            setTimeout(() => {
                window.isClick = false;
            }, 200);
            var that = this;
            var ss = this.nowSelectspec.spec.split(",");
            var spec = this.specIndex;
            var yiselect = that.select;
            if (spec[fatherindex] === num) {
                spec[fatherindex] = "";
                yiselect[fatherindex] = "";
            } else {
                spec[fatherindex] = num;
                yiselect[fatherindex] = value;
            }
            // 当前选择的规格类型
            this.specIndex = this.specIndex;
            this.nowClick = fatherindex;
            this.yiselect = yiselect;
            //选中的规格组合，拆分成数组然后修改选中的值
            ss[fatherindex] = value;
            var str = "";
            for (var n = 0; n < ss.length; n++) {
                if (n == 0) {
                    str = ss[n];
                }
                else {
                    str = str + "," + ss[n]
                }
            }
            // 匹配相对应的规格组合
            for (var i = 0; i < that.spec_info.all_spec_goodid.length; i++) {
                if (str == that.spec_info.all_spec_goodid[i].spec) {
                    this.nowSelectspec = that.spec_info.all_spec_goodid[i];
                }
            }
            this.spaceStorage();
        },
        goBuy(){
            if (this.yiselect[0] == "" || this.yiselect[1] == "" || this.nowSelectspec.goods_storage == 0) {
                return this.$vux.toast.text('请选择商品规格');
            }
            else {
                this.actionSheetbindchange();
                let data = {
                    goodspec: this.nowSelectspec,
                    goodsimg: this.goodsInfo.goods_image_arr[0],
                    goodsname: this.goodsInfo.goods_name,
                    goodsprice: this.goodsInfo.exchange_points,
                    goods_id: this.goods_id
                }
                window.localStorage.setItem('goodsInfo', JSON.stringify(data));
                this.$router.push('integral_pay');
            }
        },
        async getSpec(){
            let data = {
                n_goods_id: this.goods_id
            }
            const [err, res] = await api.goodsspec(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                var param = {};
                var select = {};
                var yiselect = {};
                for (var i = 0; i < res.data.goods_specname.length; i++) {
                    if (res.data.goods_specname[i].sp_name == "颜色") {
                    if (res.data.goods_specname[i].values.length == 1) {
                        var string = i;
                        param[string] = 0;
                        select[string] = res.data.goods_specname[i].sp_name + ":" + res.data.goods_specname[i].values[0];
                        yiselect[string] = 0;
                    } else {
                        var string = i;
                        param[string] = "";
                        select[string] = ""
                        yiselect[string] = ""
                    }
                    } else {
                    var string = i;
                    param[string] = "";
                    select[string] = "",
                        yiselect[string] = ""
                    }
                }
                this.spec_info = res.data;
                this.specIndex = param;
                this.select = select;
                this.nowSelectspec = res.data.all_spec_goodid[0];
                this.yiselect = yiselect;
                this.spaceStorage();
            }
        },
        actionSheetbindchange(type){
            if(type == 0){
                this.actionSheetHidden = true;
            }else{
                this.actionSheetHidden = !this.actionSheetHidden;
            }
        },
        spaceStorage(){
            var nowSpaceTitle = "";
            var nowList = [];
            if (this.specIndex[0] != "") {

            }
            for (var i in this.select) {
            if (i == 0) {
                nowSpaceTitle = this.select[i];
            }
            }
            for (var d = 0; d < this.spec_info.all_spec_goodid.length; d++) {
            var text = this.spec_info.all_spec_goodid[d].spec;
            if (text.indexOf(nowSpaceTitle) == 0) {
                nowList.push(this.spec_info.all_spec_goodid[d])
            }
            }
            this.nowList = nowList;
        },
        actionSheetTap(){
            this.actionSheetHidden = !this.actionSheetHidden;
            this.btnType = '';
            this.group_id = '';
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
