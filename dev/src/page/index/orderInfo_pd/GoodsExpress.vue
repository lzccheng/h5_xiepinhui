<style scoped lang="less">
.sureBtn{
  width:100%;
  text-align: center;
  line-height: 98/100rem;
  background: #61d8d0;
  color: #fff;
  font-size: 34/100rem;
  position: fixed;
  bottom: 0/100rem;
}
.sendWaysBox{
  border-top:1/100rem solid #efefef;
  padding-top:33/100rem;
}
.bigContentPart{
  padding:0/100rem 20/100rem;
}
.titleWay{
  font-size: 28/100rem;
  color: #333;
}
.expressWays{
  overflow: hidden;
}
.itemWay{
  float: left;
  margin-left:44/100rem;
  margin-top:33/100rem;
  padding:14/100rem 20/100rem;
  font-size: 28/100rem;
  color: #333;
  border: 1px solid #efefef;
  border-radius: 50/100rem;
  line-height: 28/100rem;
  &.active{
    border: 1px solid #333;
  }
}
.triangleIcon{
  display: inline-block;
}
.goodsPic{
  display: block;
  width: 160/100rem;
  border-radius: 10/100rem;
}
/* 弹窗 */
page{
  height:100%;
}
.choiceAddressModal{
  width:100%;
  height: 100%;
  position:fixed;
top:0/100rem;
}
.bg_shadeBox{
  background:rgba(0, 0, 0, 0.7);
  width:100%;
  height: 100%;
}
.contentModal{
  position: absolute;
  width: 100%;
  bottom:-800/100rem;
  background: #fff;
  overflow-y:scroll;
  transition: all .5s;
  &.contentModalShow{
    bottom: 0;
  }
  &.contentModalHide{
    bottom:-800/100rem;
  }
}
.title_headerPart{
  font-size:34/100rem;
color:#333;
padding:34/100rem 20/100rem;

}
.closeIcon{
  float:right;
font-size:24/100rem;
letter-spacing:-24/100rem;
}
.contentListBox{
  padding:0/100rem 20/100rem;
}
.itemContent{
  padding-bottom: 20/100rem;
}
.addressicon{
  font-size:58/100rem;
color:#61d8d0;
margin-right:42/100rem;
}
.choicePart .xipinhuiIcon{
  font-size: 50/100rem;
}
.noAddress{
  color: #ccc;
}
.choiceAddress{
  color: #fb4c72;
}
.titleItem{
  color: #333;
  font-size: 30/100rem;
}
.concereAddress{
  font-size: 26/100rem;
  color: #666;
}
.radio .wx-radio-input.wx-radio-input-checked::before{
   border: none;
   background: #fb4c72;
}
.zitidizhiBox{
  font-size: 28/100rem;
  color: #333;
  padding: 85/100rem 20/100rem;
}
.leftPart{
  float: left;
}
.adressCon{
  height: 100%;
  margin-bottom: 30/100rem;
}
.picker{
  font-size: 28/100rem;
  text-align: center;
  margin-bottom: 30/100rem;
}
.bottom_box{
  margin-top:20/100rem;
  margin-bottom: 20/100rem;
  text-align:center;
font-size:24/100rem;
color:#666;
height: 300px;
line-height: 300px;
}
.van-icon{
    bottom: 0;
}
.finish{
    color: #999;
    text-align: center;
    padding: 0 .3rem .3rem;
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" title='配送方式' id='vux-header'></x-header>
        <div>
            <div class="bigContentPart">
                <div class="shopImgsBox">
                    <img :src="goodsInfo.goodsimg" mode="widthFix" class="goodsPic"/>
                </div>
                <div class="sendWaysBox">
                    <div class="titleWay">可选配送方式</div>
                    <div class="expressWays">
                        <div class="itemWay" @click='choiceWay(1)' data-way="1" :class="{active: isOne}">快递送货</div>
                        <div class="itemWay" @click='choiceWay(2)' id="select" data-way="2" :class="{active: isTwo}">体验店自提<div class="xipinhuiIcon xipinhui-trangle triangleIcon"></div></div>
                    </div>
                </div>
            </div>

            <div class="zitidizhiBox">
                
                <div class="adressCon">
                    <div class="leftPart every">自提地址：</div>
                    <div class="rightPart">{{concreteAddress}}</div>
                </div>
                <div class="adressCon" style="clear:both">
                    <div class="leftPart">营业时间：</div>
                    <div class="rightPart">{{concreteTime}}</div>
                </div>
                <div class="adressCon" style="clear:both">
                    <div class="leftPart">贵宾专线：</div>
                    <div class="rightPart">{{concretePhone}}</div>
                </div>
            </div>
            <div class="sureBtn" @click="sureWay">确定</div>
        </div>
         <!-- 弹窗 -->
        <div class="choiceAddressModal" v-show="closeIfModal" >
            <div class="bg_shadeBox" @click.self="closeModal"></div>
            <div class="contentModal" :class="contentModalShow? 'contentModalShow': 'contentModalHide'">
                <div class="title_headerPart">体验店自提 <div class="xipinhuiIcon xipinhui-close closeIcon" @click="closeModal"></div> </div>
                <div class="contentListBox">
                    <div style="height:300px;overflow-y: auto" v-if="listObj.length>0" ref="listObjDom">
                        <van-radio-group v-model="radio" @change="item_change">
                            <div v-for="(item, index) in listObj" :key="index" :data-address="item.address" :data-time="item.business_time" :data-phone="item.contact_phone" :data-shopid="item.shop_id" :data-shopname="item.shop_name">
                                <div class="itemContent flex flex-align-center flex-pack-justify">
                                    <div class="xipinhuiIcon xipinhui-blueAddress addressicon"></div>
                                    <div class="addressTxtPart">
                                        <div class="titleItem">{{item.shop_name}}</div>
                                        <div class="concereAddress">{{item.address}}</div>
                                    </div>
                                    <div class="choicePart">
                                        
                                            <van-radio class="van-icon" :name="index"></van-radio>
                                            <!-- <van-radio name="2">单选框 2</van-radio> -->
                                        
                                        <!-- <radio :value='item.shop_id' color='#fb4c72'/> -->
                                    </div>
                                </div>
                            </div>
                            <div class="finish" v-if="finish">到底了~</div>
                        </van-radio-group>
                    </div>
                    <!-- <scroll-div scroll-y="true" style="height:300px" bindscrolltolower="onReachBottom" v-if="listObj.length>0">
                        <radio-group bindchange="item_change" v-for="(item, index) in listObj" :key="index" :data-address="item.address" :data-time="item.business_time" :data-phone="item.contact_phone" :data-shopid="item.shop_id" :data-shopname="item.shop_name">
                            <div class="itemContent flex flex-align-center flex-pack-justify">
                                <div class="xipinhuiIcon xipinhui-blueAddress addressicon"></div>
                                <div class="addressTxtPart">
                                    <div class="titleItem">{{item.shop_name}}</div>
                                    <div class="concereAddress">{{item.address}}</div>
                                </div>
                                <div class="choicePart">
                                    <radio :value='item.shop_id' color='#fb4c72'/>
                                </div>
                            </div>
                        </radio-group>
                    </scroll-div>
                    <div class="bottom_box" v-if="show_none">暂时没有数据~</div>
                    <picker mode="region" bindchange="bindRegionChange" :value="region" :custom-item="customItem">
                        <div class="picker">
                        请选择  ||  筛选
                        <text style='padding-left:35px'>{{region[0]}} {{region[1]}} {{region[2]}}</text>
                        </div>
                    </picker> -->
                </div>
            </div>
        </div>
        <!-- 弹窗end -->
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
            goodsInfo: {},
            nvabarData: {
                showCapsule: 1,
                title: '配送方式',
            },
            height:  40,
            isOne:true,
            isTwo:false,
            closeIfModal:false,
            region: ['', '', ''],
            customItem: '全部',
            addressInfo: {
                province_id:'0',
                city_id:'0',
                area_id:'0'
            },
            concreteAddress: '',
            concreteTime: '',
            concretePhone: '',
            concreteName: '',
            listObj: [],
            page: 0,
            sendWay:1,//1表示快递送货，2表示体验店自提  
            pickerValue: '',
            page: 1,
            show_none: false,
            contentModalShow: false,
            radio: '',
            aboutShopInfo: '',
            finish: false
        }
    },
    created() {
        this.goodsInfo = JSON.parse(sessionStorage['goodsInfo']);
        this.store_id = this.$route.query.store_id || '';
        if(this.store_id){
            this.isOne = false;
            this.isTwo = true;
        }
        this.address_list()
    },
    mounted() {
        this.$nextTick(()=>{
        })
    },
    methods: {
        sureWay(){
            this.$router.push({
                path: '/index/orderInfo_pd',
                query: {
                    ...this.$route.query.query,
                    aboutShopInfo: this.aboutShopInfo,
                }
            })
        },
        choiceWay(way){
            let that = this
            let bool = way == 1? true : false;
            this.isOne = bool? true: false;
            this.isTwo = bool? false: true;
            this.closeIfModal = bool? false: true;  
            if(!bool){
                this.$nextTick(()=>{
                    setTimeout(() => {
                        that.contentModalShow = true;
                        // this.$refs.contentModal.style.bottom = '0';
                    }, 50);
                })
            }else{
                that.contentModalShow = false;
                this.aboutShopInfo = '';
            }
        },
        item_change(){
            let item = this.listObj[this.radio];
            var shop_id=item.shop_id;
            if (shop_id!=''){
                this.closeModal();
                this.isOne = false;
                this.isTwo = true;
                this.concreteAddress = item.address;
                this.concreteName = item.shop_name;
                this.concreteTime = item.business_time;
                this.concretePhone = item.contact_phone;
                var aboutShopInfo={
                    sendWay: 2,
                    shop_name: item.shop_name,
                    shop_id
                }
                aboutShopInfo = JSON.stringify(aboutShopInfo);
                this.aboutShopInfo = aboutShopInfo;
            }
        },
        closeModal(){
            this.closeIfModal = false;
            this.contentModalShow = false;
        },
        async address_list(){
            if(this.page != 1 && this.total_count*1 <= this.listObj.length){
                this.finish = true;
                return;
            }
            let data = {
                token: this.token,
                account: this.account,
                page: this.page,
                province_id:this.addressInfo.province_id,
                city_id: this.addressInfo.city_id,
                area_id: this.addressInfo.area_id
            }
            this.$vux.loading.show({
                text: '加载中...'
            })
            const [err, res_data] = await api.get_offlinestore_list(data);
            this.$vux.loading.hide()
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res_data){
                this.listObj = this.listObj.concat(res_data.data.list);
                this.page ++;
                this.total_count = res_data.data.total_count;
                this.show_none = this.total_count*1 <= 0? true : false;
                if(this.store_id){
                    let item = this.listObj.filter(item =>{
                        if(item.shop_id == this.store_id){
                            return item;
                        }
                    })[0];
                    let aboutShopInfo = {
                        sendWay: 2,
                        shop_name: item.shop_name,
                        shop_id: item.shop_id,
                    }
                    aboutShopInfo = JSON.stringify(aboutShopInfo);
                    this.aboutShopInfo = aboutShopInfo;
                }
                this.$nextTick(()=>{
                    if(this.listObjDomScroll)return;
                    let that = this;
                    let listObjDom = this.$refs.listObjDom
                    this.listObjDomScroll = listObjDom.onscroll = e =>{
                        let boxHeight = listObjDom.clientHeight;
                        let docHeight = listObjDom.firstChild.clientHeight;
                        let crollTop = listObjDom.scrollTop;
                        if(docHeight <= crollTop + boxHeight){
                            that.address_list()
                        }
                    }
                })
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
