<style lang="less" scoped>
.float-tabbar {
  height: 50/50rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 50/50rem;
  background: #fff;
  font-size: 16/50rem;
  white-space: nowrap;
  position: fixed;
  /* top: 0; */
  z-index: 9;
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
  padding-top: 50/50rem;
}

.order-item {
  background: #fff;
  margin-bottom: 10/50rem;
}
.order-item-body{
  padding: 0 10/50rem;
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
  line-height:35/50rem;
}
.item-body-center{
  margin-bottom: 5/50rem;
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
  width: 100%;
  padding-left: 10/50rem;
}

.right-center-top-goosname {
  width: 80%;
  font-size: 14/50rem;
  color: #333;
}

.right-content-top {
  width: 100%;
}

.right-center-top-space {
  font-size: 12/50rem;
  color: #999;
}

.right-content-bottom {
  width: 100%;
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
  padding:  0 10/50rem;
  text-align: right;
  line-height: 44/50rem;
  font-size: 13/50rem;
  color: #666;
}
.item-foot-btn{
  padding:10/50rem;
}
.item-foot-btn span{
  border: 1/50rem #999 solid;
  border-radius:5/50rem;
  font-size: 14/50rem;
  padding:2.5/50rem 10/50rem;
  margin-left: 10/50rem;
}
.item-foot-btn .close{
  color: #999;
}
._box{
    background-color: #eee;
}
</style>
<template>
    <div class="">
        <x-header :left-options="{backText:''}" title="补货订单" id="vux-header"></x-header>
        <div class="fixed">
            <tab-bar :data="storeList" @onclick="checkTabbar" v-show="storeList"></tab-bar>
        </div>
        
        <div class="offline-roder-content">
            <loading type="type3" v-if="isLoading"></loading>
            <null-data v-if="orderList == ''">当前暂无数据</null-data>
            <div v-else :class="{'_box': orderList}">
                <div
                class="order-item"
                v-for="(item,index) in orderList"
                :key="index">
                    <div class="order-item-body" @click="orderInfo(item.refit_id)">
                        <div class="item-body-header  flex flex-pack-justify">
                            <div class="order-id">单号：{{item.refit_sn}}</div>
                            <div class="order-time">{{item.refit_addtime}}</div>
                        </div>
                        <div 
                        class="item-body-center flex"
                        v-for="(_item,_index) in item.goods_list"
                        :key="_index">
                            <div class="left-img">
                                <img :src="_item.goods_image" alt="">
                            </div>
                            <div class="right-content flex flex-warp flex-space">
                                <div class="right-content-top">
                                    <div class="right-center-top-goosname">{{_item.goods_name}}</div>
                                </div>
                                <div class="right-content-bottom">
                                    <div class="space-info flex flex-align-center flex-pack-justify">
                                        <span style='color:#333;font-size:15px;'>￥{{_item.purchase_price}}</span>
                                        <span style="font-size:15px;">x{{_item.goods_num}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-body-bottom">
                        <span>共{{item.refit_goods_num}}件商品</span>
                        <span style='padding-left:10px;'>
                            合计：
                            <span style="color:#333;font-size:15px;">￥{{item.pay_amount}}</span>
                        </span>
                    </div>
                    <div class="item-foot-btn line_xi_before flex flex-pack-end">
                        <span v-if="item.pay_status==1" @click="confirm(index, item.refit_id, 'cancel')">取消交易</span>
                        <span v-if="item.pay_status==1" @click="pendingPayment(index, item.refit_id)">待付款</span>
                        <span v-if="item.pay_status==2 && item.is_input==1" @click="confirm(index, item.refit_id, 'sure')">确认收货</span>
                        <span v-if="item.is_input==2" class="close">交易关闭</span>
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
import { wxPay, share } from "@/utils/wx_sdk.js"
export default {
    components: {
        loading,
        XHeader,
        tabBar,
        nullData
    },
    mounted(){
        this.getstoreList()
    },
    data(){
        return {
            isLoading: true,
            storeList: null,
            sub_member_id: '',
            orderList: null,
            page: 1,
            currentTab: 0
        }
    },
    methods: {
        checkTabbar(item){
            let index = item._index;
            if (this.currentTab == index) return;
            var subid = item.sub_member_id;
            this.currentTab = index;
            this.orderList = null;
            this.page = 1;
            this.sub_member_id = subid;
            this.getorderList();
        },
        // 获取线下店铺列表
        async getstoreList(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.sublist(data);
            this.isLoading = false;
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == '2000'){
                if(res.data.list.length > 0){
                    this.storeList = res.data.list;
                    this.sub_member_id = res.data.list[0].sub_member_id;
                }else{
                    this.orderList = '';
                }
                this.getorderList();
            }
        },
        // 获取线下店铺订单
        async getorderList(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                page: this.page,
                type: this.currentTab,
                sub_member_id: this.sub_member_id
            }
            this.isLoading = true;
            const [err, res] = await api.refitorderlist(data);
            this.isLoading = false;
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == '2000'){
                if(!this.orderList){
                    this.orderList = res.data.list;
                }else{
                    if(res.data.list != ""){
                        this.orderList = this.orderList.concat(res.data.list);
                    }
                }
                this.page = this.page + 1;
            }
        },
        // 提示
        confirm(index, orderid, type){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                refit_id: orderid,
                sub_member_id: this.sub_member_id
            }
            let that = this;
            let text = '';
            let fn = '';
            switch (type){
                case 'cancel':
                    text = '是否确认取消当前订单？';
                    fn = 'cancelDealReq';
                    break;
                case 'sure':
                    text = '是否已收到货？';
                    fn = 'confirmReceipt';
                    break;
            }
            this.$vux.confirm.show({
                content: text,
                onConfirm () {
                    that[fn](data, index);
                }
            })
        },
        // 取消交易
        async cancelDealReq(data, index){
            const [err, res] = await api.delrefit(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == '2000'){
                this.orderList.splice(index, 1);
                this.$vux.toast.text('取消成功');
            }
        },
        // 确认收货
        async confirmReceipt(data, index){
            const [err, res] = await api.confirmrefit(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == '2000'){
                let newData = this.orderList[index];
                newData.is_input = 2;
                this.$set(this.orderList,index,newData);
                this.$vux.toast.text('收货成功');
            }
        },
        // 待付款
        async pendingPayment(index, orderid){
            this.$vux.loading.show({
                    text: '支付中...'
                })
            let that = this;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                refit_id: orderid,
                pay_code: 2,
                sub_member_id: this.sub_member_id,
                openid: this.user.openid
            }
            const [err, res] = await api.topay(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == '2000'){
                var selfData = res;
                let success = res =>{
                    that.orderInfo(selfData.data.order_id);
                }
                console.log(res)
                wxPay(this,{...res.data.pay_param,success,debug: true})
            }
            console.log(this.user.openid)
        },
        orderInfo(orderid){
            this.$router.push({
                path: '/centerFull/myshop/replenishmentOrderinfo',
                query: {
                    refit_id: orderid,
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

