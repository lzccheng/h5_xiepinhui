<style scoped lang="less">
    @import '~@/assets/mobileSelect.less';
    .weui-cell,
    .area-text-cell{
    background: #fff;
    }
    .area-text-cell{
    padding: 0 15/50rem;
    }
    .weui-cell > picker{
    width: 100%;
    }

    .area-text-cell >textarea {
    height: 80/50rem !important;
    }
    .area-label{
    line-height: 44/50rem;
    }
    .weui-label,
    .weui-input,
    .picker,
    .area-text-cell{
    font-size:11pt;
    }
    .bianji-btn{
    width: 90%;
    background: #61D8D0;
    margin: 20/50rem auto;
    text-align: center;
    line-height: 40/50rem;
    color: #fff;
    border-radius: 5/50rem;
    font-size: 11pt;
    }
    input{
        border: none;
        height: 25/50rem;
    }
    textarea{
        border: none;
        width: 100%;
    }
</style>
<template>
    <div class="idnexWrapBox">
        <x-header :left-options="{backText:''}" :title="nvabarData.title" id="vux-header"></x-header>
        <!-- <loading type="type3" v-if="loadingShow"></loading> -->
        <div class="weui-cell weui-cell_input line_xi_after ">
            <div class="weui-cell__hd">
                <div class="weui-label">收货人</div>
            </div>
            <div class="weui-cell__bd">
                <input type="text" class="weui-input" v-model="addressInfo.real_name" placeholder="请输入收货人"/>
            </div>
        </div>
        <div class="weui-cell weui-cell_input line_xi_after ">
            <div class="weui-cell__hd">
               <div class="weui-label">联系电话</div>
            </div>
            <div class="weui-cell__bd">
                <input type="number" class="weui-input" v-model="addressInfo.contact_phone" placeholder="请输入联系电话"/>
            </div>
        </div> 
        <div class="weui-cell line_xi_after ">
            <div class="weui-cell__hd">
                <div class="weui-label">所在地区</div>
            </div>
            <div class="weui-cell__bd">
                <span style="display: inline-block;width: 90%;" id="select">{{regionVal}}</span>
                <span class="iconfont icon-right-jiantou"></span>
            </div>
        </div>
        <div class="area-text-cell">
            <div class="area-label">所在街道</div>
            <textarea placeholder="请输入所在街道" v-model='addressInfo.address'></textarea>
        </div>
        <div class="weui-cell weui-cell_input line_xi_after ">
            <div class="weui-cell__hd">
               <div class="weui-label">设为默认地址</div>
            </div>
            <div class="weui-cell__bd" style="text-align: right;">
                <van-switch v-model="is_default" />
            </div>
        </div> 
        <div class="bianji-btn" @click="subXiugai">{{btnText}}</div>
    </div>
</template>
<script>
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin ,XSwitch ,Picker } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import cityObj from '@/assets/js/city.js';
import MobileSelect from 'mobile-select';

export default {
    components: {
        XHeader,
        loading,
        Group,
        XSwitch
    },
    mounted(){
        this.init();
    },
    data(){
        return {
            loadingShow: true,
            nvabarData: {
                title: '修改地址'
            },
            addressInfo: {
                real_name: '',
                contact_phone: '',
                address: ''
            },
            is_default: false,
            addresslist: "",
            region: '',
            addressInfoArry: "",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '修改地址', //导航栏 中间的标题
            },
            btnText: '修改',
            routerInfo: ''
        }
    },
    methods: {
        init(){
            let that = this;
            this.routerInfo = this.$route.query.info;
            if(this.routerInfo){
                this.addressInfo = this.$route.query.info;
                this.is_default = this.addressInfo.is_default == 0?false:true;
            }
            if(this.routerInfo){
                this.nvabarData.title = '修改地址';
            }else{
                this.nvabarData.title = '添加地址';
                this.btnText = '添加';
            }
            this.addresslist = cityObj;
            if(this.addressInfo.area_info){
                this.region = this.addressInfo.area_info.split("_");
            }
            this.mobileSelect1 = new MobileSelect({
                trigger: '#select',
                title: '选择地区',
                wheels: [
                    {
                        data: this.addresslist.all.slice(1)
                    }
                ],
                callback: function(indexArr,data){
                    that.bindRegionChange(indexArr,data)
                },
                keyMap: {
                    id:'area_id',
                    value: 'area_name',
                    childs: 'child_list'
                },
                ensureBtnColor: '#61D8D0',
            })
        },
        async subXiugai(){
            if(!this.addressInfo.real_name){
                return this.$vux.toast.text("请填写收货人");
            }
            if(!this.addressInfo.contact_phone){
                return this.$vux.toast.text("请填写联系电话");
            }
            if(this.addressInfo.contact_phone.length > 15 || this.addressInfo.contact_phone.length < 6){
                return this.$vux.toast.text("请填写正确的联系电话");
            }
            if(!this.addressInfo.address){
                return this.$vux.toast.text("请填写详细街道信息");
            }
            let that = this;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                province_id: that.addressInfo.province_id,
                city_id: that.addressInfo.city_id,
                area_id: that.addressInfo.area_id,
                area_info: that.addressInfo.area_info,
                real_name: that.addressInfo.real_name,
                address: that.addressInfo.address,
                contact_phone: that.addressInfo.contact_phone,
                is_default: that.is_default?'1':'0'
            }
            let  err,res;
            if(this.routerInfo){
                data.address_id = that.addressInfo.address_id;
                [err, res] = await api.addressupdate(data);
            }else{
                [err, res] = await api.address(data);
            }
            if(err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                let txt = '修改成功';
                if(!this.routerInfo){
                    txt = '添加成功';
                }
                this.$vux.toast.text(txt);
                this.$router.back();
            }
        },
        bindRegionChange(indexArr,data){
            var addressInfoArry = {};
            let region = [];
            let addressInfo = this.addressInfo;
            data.forEach((item)=>{
                region.push(item.area_name);
            })
            addressInfoArry.shengname = data[0].area_name;
            addressInfoArry.shiname = data[1].area_name;
            addressInfoArry.quname = data[2].area_name;
            addressInfo.province_id = data[0].area_id;
            addressInfo.city_id = data[1].area_id;
            addressInfo.area_id = data[2].area_id;
            addressInfo.area_info = region.join('_');
            this.region = region;
            this.addressInfoArry = addressInfoArry;
            this.addressInfo = addressInfo;
        }
    },
    watch: {
        addressInfo(){
            if(this.addressInfo.area_info){
                this.region = this.addressInfo.area_info.split("_");
            }
        }
    },
    computed: {
        regionVal(){
            return this.region?this.region[0]+this.region[1]+this.region[2]:'请选择地区';
        },
        ...mapGetters(["user", "account", "token"])
    },
}
</script>


