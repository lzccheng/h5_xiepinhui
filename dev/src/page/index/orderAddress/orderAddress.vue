<style lang="less" scoped>
    .content{
    margin-bottom: 50/50rem;
    }
    .list-centent{
    background: #fff;
    margin-bottom: 5/50rem;
    padding-top: 10/50rem;
    // padding-bottom: 10/50rem;
    }
    .caozuo-address-box{
    background: #fff;
    padding: 3px 15/50rem;
    font-size: .75rem;
    }
    .right-caozuo{
    font-size: .2rem;
    }
    .right-caozuo .icon-bianji{
    padding-right:10/50rem;
    }
    /* 地址列表 */
    .address{
    padding: 5px 10/50rem;
    }
    .address-text span{
    padding-right: 10/50rem;
    }
    .address-name{
    width: 50%;
    font-size: .85rem;
    padding-left: 15/50rem;
    }
    .address-phone{
    width: 50%;
    text-align: right;
    font-size: .85rem;
    padding-right: 15/50rem;
    }
    .top-address{
    margin-bottom: 10/50rem;
    }
    .address-header{
    padding: 0px 15/50rem;
    margin-bottom: 10/50rem;
    }
    .address-text{
    padding: 0px 15/50rem;
    }
    .address-text span{
    font-size: .85rem;
    position: relative;
    top: 2/50rem;
    }

    .address-select-list{
    padding: 5px 0/50rem;
    background: #fff;
    }
    .add-btn{
    position: fixed;
    bottom:0/50rem;
    width: 100%;
    text-align: center;
    line-height: 44/50rem;
    background:#61D8D0;
    color: #fff;
    z-index: 3
    }
    .fontSize{
        font-size: 13pt;
    }
    .content{
        background-color: #F8F8F8;
    }
</style>
<template>
    <div class="idnexWrapBox">
        <x-header :left-options="{backText:''}" :title="nvabarData.title" id="vux-header"></x-header>
        <loading type="type3" v-if="loadingShow"></loading>
        <div class='add-btn' @click="add">添加地址</div>
        <div class="content">
            <div @click="select_address(index)" class="list-centent" :key="index" v-for="(item,index) in addresslist">
                <div class="address-select-list line_xi_after">
                    <div class='flex  flex-align-center flex-pack-justify top-address'>
                        <div class="address-name fontSize">收货人:{{item.real_name}}</div>
                        <div class="address-phone fontSize">{{item.contact_phone}}</div>
                    </div>
                    <div class="flex flex-align-center address-text ">
                        <span class="fontSize" style="font-size: 13pt">{{item.area_info}}{{item.address}}</span>
                    </div>
                </div>
                <div class='flex caozuo-address-box flex-pack-end flex-align-center' @click.stop="">
                    <div class="right-caozuo">
                        <span v-if="item.is_default == 1" style="color: #61D8D0;">[默认]</span>
                        <span  class="iconfont icon-bianji" @click.capture="bianji_address(item.address_id,item.is_default,index)">
                            <span class="fontSize">编辑</span>
                        </span>
                        <span class="iconfont icon-shanchu" @click.capture="delete_address(item.address_id,item.is_default,index)">
                            <span class="fontSize">删除</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin ,XSwitch ,Picker } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
export default {
    components: {
        loading,
        XHeader
    },
    data(){
        return {
            loadingShow: true,
            addresslist: "",
            addressInfoArry: "",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '地址管理', //导航栏 中间的标题
            },
        }
    },
    mounted(){
        this.showAddressList();
        console.log(this.$route.query.group_id)
        this.group_id = this.$route.query.group_id;
        if(this.group_id){
            this.$store.dispatch('update_group_id',56)
        }
    },
    methods: {
        async showAddressList(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.addressdetail(data);
            this.loadingShow = false;
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.addresslist = res.data;
            }
        },
        select_address(index){
            if(this.$route.query.from === 'center')return;
            let address = this.addresslist[index];
            address.__index = index;
            this.$store.dispatch('update_addressInfo',address);
            this.$router.push({
                path: '/index/orderInfo_pd',
                group_id: this.group_id
            })
        },
        bianji_address(addressid,is_default,index){
            let info = this.addresslist[index];
            this.$router.push({
                path: '/index/editaddress',
                query: {
                    info
                }
            })
        },
        add(){
            this.$router.push({
                path: '/index/editaddress',
                query: {
                    info: ''
                }
            })
        },
        async deladdress(data,index){
            let that = this;
            const [err, res] = await api.addressdetail(data);
            if (err) {
                that.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                var newdata = that.addresslist;
                newdata.splice(index, 1);
                that.addresslist = newdata;
                that.$vux.toast.text('删除成功');
            }
        },
        delete_address(addressid,is_default,index){
            let that = this;
            this.$vux.confirm.show({
                title: '删除地址',
                content: '是否要删除当前地址？',
                onCancel () {
                },
                onConfirm () {
                    let data = {
                        plat: 3,
                        account: that.account,
                        token: that.token,
                        address_id: addressid,
                        is_default: is_default
                    }
                    that.deladdress(data,index);
                }
            })
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token","addressInfo"])
    },
}
</script>


