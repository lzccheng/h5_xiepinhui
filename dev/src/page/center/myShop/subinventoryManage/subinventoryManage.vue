<style lang="less" scoped>
    .tabBar{
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        background: #fff; 
        font-size: 16/50rem;
        white-space: nowrap;
        border-bottom: 2px #eee solid;
    }
    .tabItem{
        width: 125/50rem;
        display: inline-block;
        text-align: center;
        background-color: #fff; 
        color: #666;
        line-height:40px;
        &.active{
            color:rgba(97,216,208,1);
            position: relative;
        }
        &.active:after{
            content: "";
            display: inline-block;
            height: 2px;
            position: absolute;
            width: 125/50/2rem;
            background:rgba(97,216,208,1);
            bottom: 0;
            border-radius:5px;
            left: 0;
            right: 0;
            margin: auto;
        }
    }
    .inventory-content{
        background: #fff;
        padding: 0 10/50rem;
        width: 100%;
    }
    .inventory-item{
        padding: 5px 0;
        margin-bottom: 10px;
    }
    .inventory-item-img img {
        width: 100/50rem;
        height:100/50rem;
        border-radius: 5/50rem;
        vertical-align: middle;
    }
    .inventory-item-body {
        padding-left:10px;
    }

    .inventory-item-body div {
        // width: 100%;
    }
    .body-title .goodsName {
        width: 100%;
        font-size: 15/50rem;
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
    }
    .item-prcice{
        font-size: 16/50rem;
        color: #666;
        text-align: right;
        width: 100%;
        padding-bottom: 5/50rem;
    }
    .body-title .time {
        font-size: 13/50rem;
        color: #666;
    }
    .body-foot span {
        font-size: 11/50rem;
        color: #666;
    }

    .body-foot .foot-btn {
        font-size: 14/50rem;
        background: linear-gradient(45deg, rgba(129, 215, 210, 1), rgba(132, 231, 225, 1));
        border-radius: 5/50rem;
        color: #fff;
        height: 25/50rem;
        line-height: 25/50rem;
        padding: 0 15/50rem;
    }
    .goreplenishment{
        background:linear-gradient(45deg,rgba(251,76,114,1),rgba(235,67,104,1)) !important;
    }
    .noMore{
        text-align: center;
        font-size: 12px;
        color: #888;
        padding-bottom: 10/50rem;
    }
    .width100{
        width: 100%;
    }
</style>
<template>
    <div class="kucun">
        <x-header :left-options="{backText:''}" title="库存管理" id="vux-header"></x-header>
        <tab-bar :data="storeList" @onclick="handlClick" v-show="storeList"></tab-bar>
        <!-- <div class="tabBar" v-show="storeList" ref="tab">
            <div class="tabContent" ref="tabContent">
                <div class="tabItem" :class="{active: currentTab == index}" @click="onTabClick(index)" ref="tabItem" v-for="(item,index) in storeList">
                    {{item.member_name}}
                </div>
            </div>
        </div> -->
        <loading type="type3" v-if="isLoading"></loading>
        <div class="inventory-content">
            <div class="inventory-item flex flex-align-center" v-for="(item,index) in goodsData" :key="index">
                <div class="inventory-item-img">
                    <img :src="item.goods_image" alt="">
                </div>
                <div class="inventory-item-body flex flex-space flex-warp">
                    <div class="body-title">
                        <div class="goodsName">{{item.goods_name}}</div>
                        <div class="time">上架时间：{{item.goods_addtime}}</div>
                    </div>
                    <div class="item-prcice">￥{{item.goods_price}}</div>
                    <div class="body-foot flex flex-pack-justify flex-align-center width100">
                        <span>库存：{{item.goods_storage}}/{{item.goods_pro_storage}}</span>
                        <span>中央剩余：{{item.totao_goods_storage}}</span>
                        <span class="foot-btn goreplenishment" @click="replenishment(item.goods_commonid)">去补货</span>
                    </div>
                </div>
            </div>
        </div>
        <null-data v-if="goodsData == ''">当前暂无数据</null-data>
        <div v-if="endMore" class="noMore">没有更多数据了</div>
        
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import nullData from "@/components/nullData.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import BScroll from 'better-scroll';
import tabBar from "@/components/tabBar.vue";
export default {
    name: "subStoreList",
    props: {},
    components: {
        loading,
        XHeader,
        tabBar,
        nullData
    },
    data(){
        return {
            storeList: null,
            goodsData: null, // 子店铺库存列表
            plat: 3,
            page: 1,
            keyword: "",
            endMore: false,
            currentTab: 0,
            isLoading: true
        }
    },
    created(){
        this.getBarList();
    },
    methods: {
        async getBarList(){
            let that = this;
            let data = {
                plat: this.plat,
                page: this.page,
                token: this.token,
                account: this.account,
                kw: this.keyword
            }
            const [err, res] = await api.sublist(data);
             if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }     
            if(res.code == "2000"){
                if(res.data.list.length > 0){
                    that.storeList = res.data.list;
                    that.sub_member_id = res.data.list[0].sub_member_id;                    
                }
                that.getgoodslist()
            }
        },
        async getgoodslist(){
            let that = this;
            this.isLoading = true;
            let data = {
                plat: this.plat,
                account: this.account,
                token: this.token,
                page: this.page,
                kw: this.keyword,
                sub_member_id: this.sub_member_id?this.sub_member_id:''
            }
            const [err, res] = await api.goodslist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                this.isLoading = false
                return;
            }
            if(res.code == "2000"){
                // console.log(res)
                if(!that.goodsData){
                    that.goodsData = res.data.list;
                    that.page = that.page + 1;
                }else{
                    if(res.data.list == ''){
                        return this.endMore = true;
                    }
                    this.goodsData = this.goodsData.concat(res.data.list);
                    this.page = this.page + 1;
                }
            }
            this.isLoading = false
        },
        onTabClick(index){
            if (index == this.currentTab) return;
            this.currentTab = index;
            this.page = 1;
            this.goodsData = null;
            this.endMore = false;
            this.sub_member_id = this.storeList[index].sub_member_id;
            // this.checkCor();
            this.getgoodslist();
        },
        checkCor(){
            if (this.data.currentTab > 1) {
                this.scrollLeft =  this.nav_item_width * (this.currentTab - 1)
            } else {
                this.scrollLeft =  0
            }
        },
        replenishment(goods_commonid){
            console.log(goods_commonid)
            console.log(this.sub_member_id)
            this.$router.push({
                path: '/centerFull/myshop/replenishInfo',
                query: {
                    goods_commonid,
                    sub_member_id: this.sub_member_id
                }
            })
        },
        handlClick(item){
            this.onTabClick(item._index)
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    },
}
</script>


