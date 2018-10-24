<style lang="less" scoped>
    .delete-title{
        padding:  0 15px;
        font-size: 14px;
        background: #fff;
        color: #333;
    }
</style>
<template>
    <div>
        <x-header :left-options="{backText:''}" title="补货购物车" id="vux-header"></x-header>
        <div class="delete-title flex flex-pack-end">删除</div>
        <div v-if="storeList.length>0">
            <tab-bar :data="storeList" @onclick="handlClick" v-show="storeList.length"></tab-bar>
            <div v-if="storeList[currentTab]">
                {{storeList[currentTab].list}}
            </div>
            <null-data v-else text="您还没有补货订单哦!~"></null-data>
        </div>
        
        <div v-else>
            <null-data></null-data>
        </div>
        <loading type="type3" v-if="isLoading"></loading>
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
            storeList: [],
            plat: 3,
            page: 1,
            kw: '',
            currentTab: 0,
            sub_member_id: '',
            isLoading: true
        }
    },
    mounted(){

    },
    created(){
        this.getBarList()
    },
    methods: {
        handlClick(item){
            console.log(item)
            // let cleckIndex = item._index;

            // this.storeList[cleckIndex].allNum=0;
            // this.storeList[cleckIndex].allPrice = 0;
            // this.storeList[cleckIndex].carIdString = '';
            // this.storeList[cleckIndex].isAllSelect = false;
            // this.storeList[cleckIndex].list=null;

            // this.currentTab = cleckIndex;
            // this.page = 1;
            // this.sub_member_id = item.sub_member_id;
            // this.getorcarList();
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
            const [err, res] = await api.cartlist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                this.isLoading = false
                return;
            }
            if(res.code == "2000"){
                let index = this.currentTab;
                if(this.storeList && !this.storeList[index].list){
                    this.storeList[index].list = res.data.list;
                    this.page = this.page + 1;
                    this.isLoading = false
                }else{
                    if(res.data.list != ""){
                        let index = this.currentTab;
                        this.storeList[index].list = this.storeList[index].list.concat(res.data.list);
                        this.page = this.page + 1;
                        this.isLoading = false;
                    }
                }
            }
            console.log(res)
        },
        async getBarList(){
            let that = this;
            let data = {
                plat: this.plat,
                page: this.page,
                token: this.token,
                account: this.account,
                kw: this.keyword,
                sub_member_id: this.sub_member_id
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
                // that.getorcarList()
            }
        },
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    },
}
</script>
