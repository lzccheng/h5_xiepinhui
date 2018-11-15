<style lang="less" scoped>
    .float-header {
  width: 100%;
  position: fixed;
  /* top: 0; */
  z-index: 9;
  height: 70/50rem;
}
.delete-title{
  padding:  0 15/50rem;
  font-size: 14/50rem;
  background: #fff;
  color: #333;
}
.float-tabbar {
  height: 50/50rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 50/50rem;
  background: #fff;
  font-size: 15/50rem;
  white-space: nowrap;
}

.float-tabbar-item {
  width:calc(100% / 3);
  display: inline-block;
  text-align: center;
  color: #666;
}

.float-tabbar-item.active {
  color: rgba(97, 216, 208, 1);
  position: relative;
}

.float-tabbar-item.active:after {
  content: "";
  display: block;
  height: 2/50rem;
  position: absolute;
  width: 50%;
  background: rgba(97, 216, 208, 1);
  bottom: 0;
  border-radius: 5/50rem;
  left: 0;
  right: 0;
  margin: auto;
}

.offline-roder-content {
//   padding-top:70/50rem;
}

.order-item-body {
  background: #fff;
  padding: 0 10/50rem;
  padding-bottom: 50/50rem;
}
.item-select {
  margin-right:15/50rem;
  line-height:80/50rem;
  font-size: 26/50rem;
  margin-top: 5/50rem;
}
.icon-live-unselect{
  color: #999;
}
.order-item-header {
  padding: 5/50rem 0;
}

.order-shop-name {
  font-size: 15/50rem;
  color: #333;
  padding-left: 10/50rem;
}

.order-status {
  font-size: 12/50rem;
  color: #999;
}

.item-body-header {
  line-height: 35/50rem;
}

.item-body-center {
  padding: 10/50rem 0;
}

.order-id {
  font-size: 14/50rem;
  color: #333;
}

.order-time {
  font-size: 12/50rem;
  color: #666;
}

.left-img {
  padding-top: 5/50rem;
}

.left-img img {
  width: 80/50rem;
  height: 80/50rem;
  border-radius: 5/50rem;
  vertical-align: middle;
}

.right-content {
//   width: 100%;
  padding-left: 10/50rem;
}

.right-center-top-goosname {
   width: 100%;
  font-size: 14/50rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.right-content-top {
  width: 100%;
}

.right-center-top-space {
  font-size: 12/50rem;
  color: #999;
}

.right-content-bottom {
  width: 80%;
}

.right-content-bottom-num {
  text-align: right;
  font-size: 12/50rem;
  color: #999;
}

.space-info {
  font-size: 12/50rem;
  color: #999;
}

.space-info-pirce {
  font-size: 17/50rem;
  color: #333;
}

.item-body-bottom {
  padding: 0 10/50rem;
  text-align: right;
  line-height: 44/50rem;
  font-size: 13/50rem;
  color: #666;
}

.item-foot-btn {
  padding: 10/50rem;
}

.item-foot-btn text {
  border: 1/50rem #999 solid;
  border-radius: 5/50rem;
  font-size: 14/50rem;
  padding: 2.5/50rem 10/50rem;
  margin-left: 10/50rem;
}
.bottom-btn{
  width: 100%;
  height: 50/50rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 2
}
.bottom-btn .item-select{
  line-height: 50/50rem;
  margin-left: 10/50rem;
}
.bottom-btn{
  width: 100%;
  height: 50/50rem;
  background: #fff;
  position: fixed;
  bottom: 0;
}
.bottom-btn .item-select{
  line-height: 50/50rem;
  margin-left: 10/50rem;
}
.bottom-left-select .lable{
  font-size: 14/50rem;
}
.bottom-heji{
  font-size: 14/50rem;
  color: #666;
}
.goSettlement{
  background:linear-gradient(0deg,rgba(132,230,223,1),rgba(82,212,203,1));
  height: 50/50rem;
  line-height: 50/50rem;
  color: #fff;
  text-align: center;
  padding: 0 15/50rem;
  font-size: 17/50rem;
}
.desc_left_part_con{
  width:50%;
  float:left;
  box-sizing: border-box;
  padding-right: 4%;
}
.desc_right_part_con{
  width:30%;
  float:right;
  font-size:12/50rem;
}
.purchase_p{
  color:#333;
font-size:15/50rem;
width:70%;
float:left;
box-sizing:border-box;
padding-right:4%;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;

}
.googs_re_num{
  font-size:13/50rem;
width:45%;
float:right;
}
</style>
<template>
    <div>
        <x-header :left-options="{backText:''}" title="补货购物车" id="vux-header"></x-header>
        <loading type="type3" v-if="isLoading"></loading>
        <div class="float-header">
            <div class="delete-title flex flex-pack-end" @click="deleteList" v-if="storeList">删除</div>
            <div v-if="storeList && storeList.length > 0">
                <tab-bar :data="storeList" @onclick="checkTabbar" v-if="storeList"></tab-bar>
            </div>
            <div class="offline-roder-content">
                <loading type="type3" v-if="isLoading2"></loading>
                <null-data v-if="!isLoading2 && storeList && storeList[currentTab].list && !storeList[currentTab].list.length">您还没有补货订单哦!~</null-data>
                <div v-if="storeList">
                    <div class="order-item-body" :style="{'height': pageHeight + 'px','overflow-y': 'auto'}">
                        <div 
                        v-for="(item,index) in storeList[currentTab].list"
                        class="item-body-center flex"
                        :key="index"
                        v-if="index!=currentTab"
                        
                        >
                            <span class="item-select iconfont" @click="switchSelect(index)" :class="{'icon-live-select':item.isSelect,'icon-live-unselect':!item.isSelect}"></span>
                            <div class="left-img">
                                <img :src="item.goods_image" alt="">
                            </div>
                            <div class="right-content flex flex-warp flex-space">
                                <div class="desc_left_part_con">
                                    <div class="right-content-top">
                                        <div class="right-center-top-goosname">{{item.goods_name}}</div>
                                    </div>
                                    <div style='color:#999;font-size:12px;'>
                                        {{item.goods_spec}}
                                    </div>
                                </div>
                                <div class="desc_right_part_con">
                                    <div>配货库存:{{item.goods_pro_storage}}</div>
                                    <div>店内库存:{{item.goods_storage}}</div>
                                </div>
                                <div class="right-content-bottom">
                                    <div class="space-info flex flex-align-center flex-pack-justify">
                                        <div style='color:#333;font-size:15px;' class="purchase_p">
                                            ￥{{item.purchase_price}}
                                        </div>
                                        <div style="font-size:13px;" class="googs_re_num">补货数量:{{item.goods_num}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-btn line_xi_before flex flex-align-center flex-pack-justify" v-if="storeList[currentTab].list && storeList[currentTab].list.length">
                        <div class="bottom-left-select flex flex-align-center">
                            <span 
                            class="item-select iconfont" 
                            :class="{'icon-live-select':storeList[currentTab].isAllSelect,'icon-live-unselect':!storeList[currentTab].isAllSelect}" 
                            @click="allSelect"></span>
                            <span class="lable">全选</span>
                        </div>
                        <div class="bottom-heji">
                            <span>共{{storeList[currentTab].allNum || 0}}件</span>
                            <span style='padding-left:10px;'>
                                合计:
                                <span style='color:#FB4C72;padding-left:5px;'>￥{{storeList[currentTab].allPrice || 0}}</span>
                            </span>
                        </div>
                        <div class="goSettlement" @click="Settlement">去结算</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import tabBar from "@/components/tabBar.vue";
import nullData from "@/components/nullData.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
export default {
    name: "inventoryManage",
    props: {},
    components: {
        XHeader,
        loading,
        tabBar,
        nullData
    },
    data(){
        return {
            storeList: null,
            plat: 3,
            page: 1,
            kw: '',
            currentTab: 0,
            sub_member_id: '',
            isLoading: true,
            isLoading2: false,
            pageHeight: window.innerHeight
        }
    },
    mounted(){
    },
    created(){
        this.getBarList()
    },
    methods: {
        checkTabbar(item){
            let cleckIndex = item._index;
            if (cleckIndex == this.currentTab) return;
            let subid = item.sub_member_id;
            let newstoreList = this.storeList[cleckIndex];
            //重置
            newstoreList.allNum=0;
            newstoreList.allPrice=0;
            newstoreList.carIdString='';
            newstoreList.isAllSelect=false;
            newstoreList.list=null;
            //重置end
            this.currentTab = cleckIndex;
            this.page = 1;
            this.$set(this.storeList,cleckIndex,newstoreList);
            this.sub_member_id = subid;
            this.getorcarList()
        },
        async getorcarList(){
            let data = {
                plat: this.plat,
                account: this.account,
                page: this.page,
                type: this.currentTab,
                sub_member_id: this.sub_member_id,
                token: this.token
            }
            this.isLoading2 = true;
            const [err, res] = await api.cartlist(data);
            this.isLoading2 = false;
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == "2000"){
                let index = this.currentTab;
                let newnewstoreList = this.storeList[index];
                if(this.storeList && !newnewstoreList.list){
                    newnewstoreList.list = res.data.list;
                    this.page = this.page + 1;
                    this.isLoading = false
                }else{
                    if(res.data.list != ""){
                        let index = this.currentTab;
                        newnewstoreList.list = newnewstoreList.list.concat(res.data.list);
                        this.page = this.page + 1;
                        this.isLoading = false;
                    }
                }
                this.$set(this.storeList,index,newnewstoreList)
            }
        },
        async getBarList(){
            let that = this;
            let data = {
                plat: this.plat,
                token: this.token,
                account: this.account,
            }
            const [err, res] = await api.sublist(data);
             if (err) {
                this.$vux.toast.text(err.msg);
                this.isLoading = false;
                return;
            }     
            if(res.code == "2000"){
                if(res.data.list.length > 0){
                    that.storeList = res.data.list;
                    that.sub_member_id = res.data.list[0].sub_member_id;
                }
                that.getorcarList()
            }
            this.isLoading = false;
        },
        // 点击单个
        switchSelect(index){
            let cleckIndex = index;
            let fatherIndex = this.currentTab;
            let newstoreList = this.storeList[fatherIndex];
            newstoreList.list[cleckIndex].isSelect = !newstoreList.list[cleckIndex].isSelect;
            this.$set(this.storeList,fatherIndex,newstoreList);
            this.isAll();
        },
        // 判断是否应该全选  
        isAll(){
            let fatherIndex = this.currentTab;
            let newstoreList = this.storeList[fatherIndex];
            let carList = newstoreList.list;
            let isAll = true;
            let allNum = 0;
            let allPrice = 0;
            let carIdString = "";
            
            carList.forEach((item) => {
                if(!item.isSelect){
                    isAll = false
                    return false;
                }
                if(item.isSelect){
                    allNum = parseInt(allNum) + parseInt(item.goods_num);
                    var singlePrice=0;
                    //自己补的
                    if (item.goods_pro_storage > item.goods_storage){//预配库存大于店铺库存
                        singlePrice = [item.goods_num - (item.goods_pro_storage - item.goods_storage)] * item.purchase_price;
                        if(singlePrice<0){
                            singlePrice=0;
                        }else{
                            singlePrice=singlePrice;
                        }
                    }else{
                        //自己补的end
                        // allPrice = allPrice + singlePrice;//(item.goods_num * item.purchase_price)
                        singlePrice = item.goods_num * item.purchase_price;
                    }
                    carIdString = this.setCrdIds(carIdString, item)
                    allPrice = allPrice + singlePrice;
                }
            })
            
            newstoreList.isAllSelect = isAll;
            newstoreList.allNum = allNum;
            newstoreList.allPrice = parseFloat(allPrice).toFixed(2);
            newstoreList.carIdString = carIdString;
            this.$set(this.storeList,fatherIndex,newstoreList);
        },
        setCrdIds(carIdString, item){
            if (carIdString == "") {
                carIdString = item.refit_cart_id;
            } else {
                carIdString = carIdString + "," + item.refit_cart_id;
            }
            // console.log(carIdString)
            return carIdString
        },
        // 全选  这里遍历数组将所有的全部选中 然后 计算选中数量 和价钱  
        allSelect(){
            let allNum = 0;
            let allPrice = 0;
            let isAll = true;
            let fatherIndex = this.currentTab;
            let newstoreList = this.storeList[fatherIndex]
            let carList = newstoreList.list;
            let carIdString = "";
            carList.forEach((item) => {
                item.isSelect = !newstoreList.isAllSelect;
                if(item.isSelect){
                    allNum = parseInt(allNum) + parseInt(item.goods_num);
                    var singlePrice = 0;
                    //自己补的
                    if (item.goods_pro_storage > item.goods_storage) {//预配库存大于店铺库存
                        singlePrice = [item.goods_num - (item.goods_pro_storage - item.goods_storage)] * item.purchase_price;
                        if (singlePrice < 0) {
                            singlePrice = 0;
                        } else {
                            singlePrice = singlePrice;
                        }
                    }else{
                        singlePrice = item.goods_num * item.purchase_price;
                    }
                    allPrice = allPrice + singlePrice;
                    carIdString = this.setCrdIds(carIdString, item)
                }
            })
            newstoreList.isAllSelect = !newstoreList.isAllSelect;
            newstoreList.allNum = allNum;
            newstoreList.allPrice = parseFloat(allPrice).toFixed(2);
            newstoreList.carIdString = carIdString;
            this.$set(this.storeList,fatherIndex,newstoreList)
        },
         // 去结算
        async Settlement(){
            let fatherIndex = this.currentTab;
            let storeListItem = this.storeList[fatherIndex];
            if (storeListItem.allNum == 0 || !storeListItem.allNum) {
                this.$vux.toast.text("请选择要结算的商品");
                return;
            }
            this.$store.dispatch('update_carpayInfo',storeListItem);
            var token = this.token;
            if(token){
                if(window.isClick){
                    return;
                }
                window.isClick = true;
                this.$router.push({
                    path: 'carPay'
                })
                setTimeout(()=>{
                    window.isClick = false;
                },1000)
            }
        },
        // 点击删除事件
        deleteList(){
            let fatherIndex = this.currentTab;
            if (this.storeList[fatherIndex].allNum == 0 || !this.storeList[fatherIndex].allNum) {
                this.$vux.toast.text("请选中一个商品,再进行删除哦!");
                return;
            }
            let that = this;
            this.$vux.confirm.show({
                title: '提示',
                content: '确定要删除该商品?删除后无法恢复!',
                onConfirm () {
                    that.deleteListReq();
                }
            })
        },
        async deleteListReq(){
            let fatherIndex = this.currentTab;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                cart_id: this.storeList[fatherIndex].carIdString,
                sub_member_id: this.sub_member_id
            }
            const [err, res] = await api.delcart(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }  
            if(res.code == '2000'){
                let newcarList = this.storeList[fatherIndex];
                let carList = newcarList.list;
                if(newcarList.isAllSelect){
                    carList = newcarList.list = [];
                }
                // for (let i = 0; i < carList.length; i++) {
                //     if (carList[i].isSelect) {
                //         carList.splice(i, 1);
                //     }
                // }
                newcarList.list = carList.filter((item)=>{
                    if(!item.isSelect){
                        return item;
                    }
                })
                this.$set(this.storeList,fatherIndex,newcarList);
                this.$vux.toast.text("删除成功");
            }
        }
    },
    filters: {
        fiterNull(val){
            return val?val:'0'
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token", "carpayInfo"])
    },
}
</script>
