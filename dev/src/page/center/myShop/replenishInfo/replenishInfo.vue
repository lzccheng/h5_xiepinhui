<style lang="less" scoped>

.masker{
  position: fixed;
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,.4);
  z-index: 5;
  top: 0;
}
.replenishInfo-header {
  padding: 10/50rem;
  background: #fff;
  height: 95/50rem;
}

.header-left img {
  width: 74/50rem;
  height: 74/50rem;
  border-radius: 5/50rem;
}
.xuanzhuan{
  transition: .3s;
  transform:rotate(10deg) !important;
}
.header-right {
  padding-left: 10/50rem;
}
.list-left{
  width:70%;
}
.header-title {
  width: 100%;
  font-size: 16/50rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.header-right-foot {
  width: 100%;
}

.header-right-foot .price {
  font-size: 17/50rem;
  color: #fb4c72;
}

.header-right-foot .volume {
  font-size: 12/50rem;
  color: #999;
}
.stock-panel-item{
  width: 100%;
}
.stock-table {
  background: #fff;
  padding: 10/50rem;
  padding-top: 0;
  height: 155/50rem;
}
.table-top{
  padding-bottom: 2/50rem;
}
.table-top .table-lable {
  font-size: 16/50rem;
  color: #333;
  padding: 5/50rem 0;
  width:90/50rem;
}
.over-scroll{
  width:60%;
   -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    white-space: nowrap;
}
.table-top .space-item {
  background: #f2f2f2;
  border-radius: 3/50rem;
  margin-left: 20/50rem;
  color: #999;
  font-size: 14/50rem;
  padding: 2/50rem 10/50rem;
}

.space-item-active {
  background: #61d8d0 !important;
  color: #fff !important;
}
.panel-item-scroll{
  width: 85%;
}
.stock-panel .panel-item-lable {
  display: inline-block;
  font-size: 12/50rem;
  color: #666;
  width: 55/50rem;
}

.panel-item-stockNum {
  display: inline-block;
  width:10%;
  text-align: center;
  font-size: 12/50rem;
  color: #666;
}

.stockNum-red {
  color: #ff3f73;
}

.stock-select-panel {
  height: 60%;
}

.scroll-view_left {
  width: 30%;
  background: #f2f2f2;
}

.scroll-view_left1{
    // overflow: hidden;
    overflow-y: auto;
}

.scroll-view-item_left {
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 15/50rem;
  color: #999;
  margin-top: 27/50rem;
  position: relative;
}

.item-text {
  background: #fff;
  padding: 5/50rem 15/50rem;
  border: 1px #ddd solid;
  border-radius: 3/50rem;
}

.item-text-active {
  background: #61d8d0;
  padding: 5/50rem 15/50rem;
  border: 0;
  border-radius: 3/50rem;
  color: #fff;
  display: block;
}

.item-allSelect {
  position: absolute;
  background: rgba(255, 63, 115, 1);
  border-radius: 15/50rem;
  color: #fff;
  display: inline-block;
  font-size:9px;
  height: 15/50rem;
  line-height: 15/50rem;
  padding: 1/50rem 5/50rem;
  text-align: center;
  white-space: nowrap;
  right: 15/50rem;
  margin-top: -10/50rem;
  top:0/50rem;
}

.scroll-view_right {
  width: 70%;
  background: #fff;
}

.scroll-view-item_right {
  padding: 10px;
}

.item_right-space {
  width: 50%;
  text-align: center;
  font-size: 14px;
  color: #666;
  padding-left: 10/50rem;
}

/*主容器*/

.stepperBox {
  background: #fff;
  padding: 10/50rem 15/50rem;
}

.stepper {
  width: 90/50rem;
  height: 28/50rem;
  /*给主容器设一个边框*/
  border-radius: 3/50rem;
}

/*加号和减号*/

.stepper text {
  width: 30/50rem;
  line-height: 25/50rem;
  text-align: center;
  border: 1px #e6e6e6 solid;
  box-sizing: border-box;
}

/*数值*/

.stepper input {
  width: 30/50rem;
  height: 26/50rem;
  text-align: center;
  font-size: 12/50rem;
  border: 1px solid #e6e6e6;
  border-left: 0;
  border-right: 0;
  background-color: #fff;
}

/*普通样式*/

.stepper .normal {
  color: black;
  border: 1px solid #e6e6e6;
  display: inline-block;
  width: 30/50rem;
  height: 26/50rem;
  text-align: center;
  font-size: 12/50rem;
  line-height: 26/50rem;
  background-color: #fff;
}
.normalSize{
    font-size: 12/50rem;
}
/*禁用样式*/

.stepper .disabled {
  color: #ccc;
}
.stock-bottom-btn{
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index:9
}
.bottom-Information {
  padding: 0 10/50rem;
  line-height: 40/50rem;
  background: #effffe;
}

.Information-lable {
  font-size: 14/50rem;
  color: #333;
}

.Information-num {
  color: #ff3f73;
  font-size: 14/50rem;
}

.bottom-btn {
  line-height: 51px;
  text-align: center;
  background: linear-gradient(45deg, rgba(129, 215, 210, 1), rgba(132, 231, 225, 1));
  color: #fff;
  font-size: 18/50rem;
}

.Selection-list{
 background: #fff;
}
.Selection-list-item{
  padding: 10/50rem;
}
</style>
<template>
    <div ref="box">
        <div ref="header">
            <x-header :left-options="{backText:''}" title="补货详情" id="vux-header" ></x-header>
        </div>
        
        <loading type="type3" v-if="isLoading"></loading>
        <div v-if="replenishInfo">
            <div class="replenishInfo-header flex line_xi_after" ref="product">
                <div class="header-left">
                    <img :src="replenishInfo.goods_image" alt="">
                </div>
                <div class="header-right flex flex-warp flex-space">
                    <div class="header-title">{{replenishInfo.goods_name}}</div>
                    <div class="header-right-foot flex flex-pack-justify flex-align-center">
                        <span class='price'>￥{{replenishInfo.goods_price}}</span>
                        <span class="volume">销量：{{replenishInfo.goods_salenum}}</span>
                    </div>
                </div>
            </div>

            <div class="stock-table line_xi_after" ref="table">
                <div class="table-top flex flex-align-center line_xi_after">
                    <span class="table-lable">库存对照表</span>
                    <div class="over-scroll">
                        <span 
                        class="space-item" 
                        :class="{'space-item-active':itemActive==index}"
                        v-for="(item,index) in replenishInfoList" 
                        :key="index"
                        @click="checkItem(index)">{{item.color_title}}</span>
                    </div>
                </div>
                <div 
                class="stock-panel  flex flex-align-center flex-warp" 
                v-for="(item,index) in replenishInfoList" 
                :key="index"
                v-if="index==itemActive">
                    <table-item :data="item" list="size_list">尺码</table-item>
                    <table-item :data="item" list="total_storage_list">中央库存</table-item>
                    <table-item :data="item" list="store_pro_storage_list">配货库存</table-item>
                    <table-item :data="item" list="store_storage_list">店铺库存</table-item>
                </div>
            </div>
            <div class="stock-select-panel flex" :style="{height: (windowHeight - elseHeight - headerHeight) + 'px'}">
                <div class="scroll-view_left scroll-view_left1" style="height:100%">
                    <div 
                    class="scroll-view-item_left"
                    v-for="(item,index) in replenishInfoList"
                    :key="index"
                    @click="checkItem(index)">
                        <span :class="{'item-text-active': index==itemActive,'item-text': index!=itemActive&&item.AllselectNum>0}">{{item.color_title}}</span>
                        <span class="item-allSelect" v-if="item.AllselectNum && item.AllselectNum!=0">{{item.AllselectNum}}</span>
                    </div>
                </div>
                <div 
                class="scroll-view_right scroll-view_left1" style="height:100%" 
                v-show="index==itemActive"
                v-for="(item,index) in replenishInfoList"
                :key="index">
                    <div 
                    class="scroll-view-item_right  flex flex-pack-justify flex-align-center"
                    v-for="(_item,_index) in item.size_list"
                    :key="_index">
                        <span class="item_right-space">{{_item}}</span>
                        <div class="stepper flex">
                            <!-- 减号 -->
                            <span @click="bindMinus(_index,index,'')" class="normal">-</span>
                            <!-- 数值 -->
                            <input type="number" class="normalSize" @change="bindManual" :value="item.store_storage_list[_index].selectNum || 0" disabled>
                            <!-- 加号 -->
                            <span class="normal" @click="bindPlus(_index,index)">+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stock-bottom-btn">
                <div class="bottom-Information flex flex-pack-justify flex-align-center" @click="showList">
                    <div class="Information-left">
                        <span class="Information-lable">采购总计：</span>
                        <span class="Information-num">{{replenishInfo.allPrice || 0}}</span>
                    </div>
                    <div class="Information-right" ref="total">
                        <span class="Information-lable">共选购</span>
                        <span class="Information-num">{{replenishInfo.allNum || 0}}</span>
                        <span class='Information-lable'>双</span>
                        <span class="iconfont" :class="{'icon-chaoxia': iSshowList,'icon-chaoshang': !iSshowList}"></span>
                    </div>
                </div>
                <div class="Selection-list" v-show="iSshowList">
                    <div v-for="(item,index) in replenishInfoList" :key="index">
                        <div 
                        class="Selection-list-item"
                        v-for="(item_,idnex_) in item.store_storage_list"
                        :key="idnex_"
                        v-if="item_.selectNum && item_.selectNum>0">
                            <div class=" flex flex-pack-justify flex-align-center">
                                <div class=" list-left flex flex-align-center">
                                    <span @click="bindMinus(idnex_,index,'delete')" class="iconfont icon-delete"></span>
                                    <span class="item_right-space">{{item_.spaceName}}</span>
                                </div>
                                <div class="stepper flex">
                                    <!-- 减号 -->
                                    <span class="normal" @click="bindMinus(idnex_,index,'')">-</span>
                                    <!-- 数值 -->
                                    <input type="number" @click="bindManual" class="normalSize" :value="item.store_storage_list[idnex_].selectNum || 0" disabled />
                                    <!-- 加号 -->
                                    <span class="normal" @click="bindPlus(idnex_,index)">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-btn" @click="addCar" ref="sure">确认补货</div>
            </div>
        </div>
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import tableItem from './tableItem';
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { setTimeout } from 'timers';
export default {
    name: "inventoryManage",
    props: {},
    components: {
        XHeader,
        loading,
        tableItem
    },
    data(){
        return {
            replenishInfo: null,
            replenishInfoList: [],
            page: 1,
            goods_commonid: '',
            sub_member_id: '0',
            isLoading: true,
            itemActive: 0,
            windowHeight: window.innerHeight + 10,
            headerHeight: 0,
            elseHeight: 0,
            iSshowList: false,
        }
    },
    mounted(){
        this.goods_commonid = this.$route.query.goods_commonid? this.$route.query.goods_commonid : '';
        this.sub_member_id = this.$route.query.sub_member_id? this.$route.query.sub_member_id : '0';
        this.getInfo()
        this.$nextTick(()=>{
            this.headerHeight = this.$refs.box.offsetHeight;
        })
    },
    created(){
    },
    methods: {
        async getInfo(){
            let data = {
                plat: 1,
                account: this.account,
                token: this.token,
                page: this.page,
                goods_commonid: this.goods_commonid,
                sub_member_id: this.sub_member_id
            }
            const [err, res] = await api.goodsdetail(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                this.isLoading = false
                return;
            }
            if(res.code == "2000"){
                let winWidth = window.innerWidth;
                let listObj = res.data.list;
                for(let t=0;t<listObj.length;t++){
                    let listObj_length = listObj[t].size_list.length;
                    listObj[t].width_size = winWidth / listObj_length;
                }
                this.replenishInfo = res.data;
                this.replenishInfoList = listObj;
                this.$nextTick(()=>{
                    this.elseHeight = this.$refs.product.offsetHeight + this.$refs.table.offsetHeight + this.$refs.total.offsetHeight + this.$refs.sure.offsetHeight;
                })
            }
            this.isLoading = false;
            
        },
        // 规格切换
        checkItem(index){
            this.itemActive = index;
        },
        // 点击减号
        bindMinus(_idx,_index,type){
            let bindType = type;  // 当前点击的下标
            let idx = _idx;         // 当前点击的下标
            let index = _index;      // 当前选择的规格
            let newList = this.replenishInfo.list[index];
            let num = newList.store_storage_list[idx].selectNum; // 当前点击加号的数量
            let allNum = newList.AllselectNum; // 当前选择规格的所有数量
            let p_stockNum = newList.store_pro_storage_list[idx]; // 当前选择规格的配货库存
            let goods_stockNum = newList.store_storage_list[idx].goods_storage; // 当前选择规格的店铺库存
            let last_Num = p_stockNum - goods_stockNum; // 剩余可补货库存
            let ckeckSpaceType = this.replenishInfo.goods_spec[0].sp_name; // 当前选择的规格类型--颜色
            let ckeckSpaceName = this.replenishInfo.goods_spec[0].values[index]; // 当前选择的规格值--颜色
            let ckeckSpaceType_right = this.replenishInfo.goods_spec[1].sp_name; // 当前选择的规格类型--尺码
            let ckeckSpaceName_right = this.replenishInfo.goods_spec[1].values[idx]; // 当前选择的规格值--尺码
            if (!num || num == undefined) {
                return;
            }
            if (bindType && bindType == "delete") {
                allNum = parseInt(allNum) - num;
                num = 0;
            } else {
                allNum = parseInt(allNum) - 1;
                num = num - 1;
            }
            newList.AllselectNum = allNum;
            newList.store_storage_list[idx].selectNum = num;
            let allspace = this.replenishInfo.all_spec_goodid;
            allspace.forEach((item) => {
                let spaceString = ckeckSpaceType + ":" + ckeckSpaceName;
                if (ckeckSpaceType_right) {
                    spaceString = spaceString + "," + ckeckSpaceType_right + ":" + ckeckSpaceName_right
                }
                if (item.spec == spaceString) {
                    item.isSelect = true;
                    if (num == 0 || num < 0 || !num) {
                    item.isSelect = false;
                    }
                    item.selectNum = num
                    newList.store_storage_list[idx].spaceName = item.spec
                }
            })
            this.$set(this.replenishInfo.list,index,newList);
            this.allNumAndPrice();
        },
        bindManual(){

        },
        // 点击加号
        bindPlus(_idx,_index){
            let idx = _idx; // 当前点击的下标
            let index = _index; // 当前选择的规格
            let num = this.replenishInfo.list[index].store_storage_list[idx].selectNum; // 当前点击加号的数量
            let allNum = this.replenishInfo.list[index].AllselectNum; // 当前选择规格的所有数量
            let p_stockNum = this.replenishInfo.list[index].store_pro_storage_list[idx]; // 当前选择规格的配货库存
            let goods_stockNum = this.replenishInfo.list[index].store_storage_list[idx].goods_storage; // 当前选择规格的店铺库存
            let central_stockNum = this.replenishInfo.list[index].total_storage_list[idx]; // 当前选择规格的中央库存
            let last_Num = p_stockNum - goods_stockNum; // 剩余可补货库存
            let central_Num = central_stockNum - goods_stockNum; // 剩余可补货中央库存
            let ckeckSpaceType = this.replenishInfo.goods_spec[0].sp_name; // 当前选择的规格类型--颜色
            let ckeckSpaceName = this.replenishInfo.goods_spec[0].values[index]; // 当前选择的规格值--颜色
            let ckeckSpaceType_right = this.replenishInfo.goods_spec[1].sp_name; // 当前选择的规格类型--尺码
            let ckeckSpaceName_right = this.replenishInfo.goods_spec[1].values[idx]; // 当前选择的规格值--尺码
            if (!num || num == undefined) {
                num = 0;
            }
            if (!allNum || allNum == undefined) {
                allNum = 0;
            }
            if (central_stockNum == 0){
                this.$vux.toast.text("中央库存不足不可补货");
                return;
            } else if (num >= central_Num){
                this.$vux.toast.text("中央库存不足不可补货");
                return;
            }
            allNum = parseInt(allNum) + 1;
            num = num + 1;
            let allspace = this.replenishInfo.all_spec_goodid;
            let newAllselectNum = this.replenishInfo.list[index];
            allspace.forEach((item) => {
                let spaceString = ckeckSpaceType + ":" + ckeckSpaceName;
                if (ckeckSpaceType_right) {
                    spaceString = spaceString + "," + ckeckSpaceType_right + ":" + ckeckSpaceName_right
                }
                if (item.spec == spaceString) {
                    item.isSelect = true;
                    item.selectNum = num
                    newAllselectNum.store_storage_list[idx].spaceName = item.spec
                }
            })
            newAllselectNum.AllselectNum = allNum;
            newAllselectNum.store_storage_list[idx].selectNum = num;
            this.$set(this.replenishInfo.list,index,newAllselectNum);
            this.allNumAndPrice();
        },
        // 计算总数量和总价 
        allNumAndPrice(){
            let listInfo = this.replenishInfo.list;
            let allNum = 0;
            listInfo.forEach((item) => {
                if (!item.AllselectNum) {
                    item.AllselectNum = 0;
                }
                allNum = allNum + item.AllselectNum;
            })
            let allPrice = allNum * this.replenishInfo.goods_price;
            this.replenishInfo.allNum = allNum;
            this.replenishInfo.allPrice = parseFloat(allPrice).toFixed(2);
        },
        showList(){
            this.iSshowList = !this.iSshowList
        },
        // 补货添加购物车
        async addCar(){
            if (!this.replenishInfo.allNum || this.replenishInfo.allNum == 0) {
                this.$vux.toast.text("当前还没选择补货规格");
                return;
            }
            let allspace = this.replenishInfo.all_spec_goodid;
            let spaceJson = [];
            allspace.forEach((item) => {
                if (item.isSelect) {
                    let jsonObject = {};
                    jsonObject.goods_commonid = this.goods_commonid;
                    jsonObject.goods_itemid = item.goods_id;
                    jsonObject.goods_num = item.selectNum;
                    spaceJson.push(jsonObject)
                }
            })
            var jsonString = JSON.stringify(spaceJson);
            let data = {
                token: this.token,
                account: this.account,
                plat: '3',
                sub_member_id: this.sub_member_id,
                json_info: jsonString,
            }
            const [err, res] = await api.addtocart(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == '2000'){
                this.$vux.toast.text('添加成功');
                this.show();
            }
        },
        show(){
            this.getInfo();
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    },
}
</script>
