<style lang="less" scoped>
.inventory-header{
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 9;
}
.search{
  width: 80%;
  background:rgba(230,230,230,1);
  border-radius:14/50rem;
  font-size: 14/50rem;
  line-height: 30/50rem;
  padding: 3/50rem 10/50rem;
  margin: auto;
  margin-bottom:10/50rem;
}
.float-tabbar {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background: #fff;
  font-size: 16/50rem;
  white-space: nowrap;
}

.float-tabbar-item {
  width: calc(100% / 3);
  display: inline-block;
  text-align: center;
  color: #666;
  line-height:40/50rem;
}

.float-tabbar-item.active {
  color:rgba(97,216,208,1);
  position: relative;
}

.float-tabbar-item.active:after {
  content: "";
  display: block;
  height: 2/50rem;
  position: absolute;
  width: 50%;
  background:rgba(97,216,208,1);
  bottom: 0;
  border-radius:5/50rem;
  left: 0;
  right: 0;
  margin: auto;
}
.inventory-content{
  background: #fff;
  padding: 0 10/50rem;
}
.inventory-item{
  margin-bottom: 10/50rem;
  padding-bottom: 10/50rem;
}
.inventory-item-img img {
  width: 100/50rem;
  height: 100/50rem;
  border-radius: 5/50rem;
  vertical-align: middle;
}

.inventory-item-body {
  padding-left: 5/50rem;
}

.inventory-item-body div {
  width: 100%;
}

.body-title .goodsName {
  font-size: 16/50rem;
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
  font-size: 12/50rem;
  color: #888;
  padding-bottom: 10/50rem;
}
</style>
<template>
    <div>
        <x-header :left-options="{backText:''}" title="库存管理" id="vux-header"></x-header>
        <loading type="type3" v-if="isLoading"></loading>
        <div>
            <div v-if="!goodsData" class="null-bg">
                <img src="@/assets/images/null/null_fan.png" alt="" class="null-img">
                <div class="null-title">当前暂无商品</div>
            </div>
            <div v-else>
                <div class="inventory-content" style="padding-top:40px">
                    <div class="inventory-item flex flex-align" v-for="(item,index) in goodsData">
                        <div class="inventory-item-img">
                            <img :src="item.goods_image" alt="">
                        </div>
                        <div class="inventory-item-body flex flex-space flex-warp">
                            <div class="body-title">
                                <div class="goodsName">{{item.goods_name}}</div>
                                <div class="time">上架时间：{{item.goods_addtime}}</div>
                                <div class="body-foot flex flex-pack-justify flex-align-center">
                                    <span>库存：{{item.goods_storage}}/{{item.goods_pro_storage}}</span>
                                    <span>中央剩余：{{item.totao_goods_storage}}</span>
                                    <span class="foot-btn goreplenishment" @click="replenishment(item.goods_commonid)">去补货</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import tabBar from "@/components/tabBar.vue";
export default {
    name: "inventoryManage",
    props: {},
    components: {
        XHeader,
        loading,
        tabBar
    },
    data(){
        return {
            goodsData: null, // 子店铺库存列表
            page: 1,
            keyword: "",
            userType: "sub", // 账户类型 1 2 7总店或 4 5 6 3子店铺
            currentTab: 0,
            plat: 3,
            isLoading:true,
            sub_member_id:"",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '库存管理', //导航栏 中间的标题
            },
            // 此页面 页面内容距最顶部的距离
            // height: app.globalData.height + 40, 
        }
    },
    mounted(){
        this.userType = this.$router.currentRoute.query.type;
        this.getgoodslist();
    },
    methods: {
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
                this.isLoading = false
            }
        },
        replenishment(goods_commonid){
            console.log(goods_commonid)
            this.$router.push({
                path: '/centerFull/myshop/replenishInfo',
                query: {
                    goods_commonid,
                    sub_member_id: this.sub_member_id
                }
            })
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    },
}
</script>

