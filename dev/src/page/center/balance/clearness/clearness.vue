<style lang="less" scoped>
    .record-list-item {
    width: 95%;
    padding: 20/100rem 2.5%;
    height: 120/100rem;
    border-bottom: 1px #f2f2f2 solid;
    }
    .bottom_box{
    margin-top:20/100rem;
    margin-bottom: 20/100rem;
    text-align:center;
    font-size:24/100rem;
    color:#666;
    }
    .type-cash {
    font-size: 30/100rem;
    color: rgba(51,51,51,1);
    display: flex;
    }
    .c-00A0BE {
    color: #61D8D0;
    }
    .date-state {
    margin-top: 10/100rem;
    font-size: 28/100rem;
    color: rgba(153,153,153,1);
    display: flex;
    }
    .remind-text {
    margin-top: 50/100rem;
    font-size: 28/100rem;
    color: rgba(153,153,153,1);
    text-align: center;
    }
    .navis{
    width:50%;
    text-align: center;
    font-size: 28/100rem;
    color: #333;
    }
    .navis span{
    padding: 18/100rem;
    display: inline-block;
    }
    .navAboutDetail{
    border-top:1px solid #f7f7f7;
    border-bottom:1px solid #f7f7f7;
    }
    .line_bottom{
    border-bottom: 1px solid #61D8D0;
    color: #61D8D0;
    }
    .type{
    color:#333;
    font-size: 28/100rem;
    }
    .date{
    color:#999;
    font-size:20/100rem;
    }
    .cash{
    font-size:28/100rem;
    color:#61D8D0;
    }
</style>
<template>
    <div class="idnexWrapBox">
        <x-header :left-options="{backText:''}" title="明细" id="vux-header"></x-header>
        <!-- 标签导航 -->
        <div class="flex flex-pack-justify navAboutDetail">
            <div class="navis" @click="choiceTab(1)">
                <span :class="currentTab==1 ? 'line_bottom':''">充值记录</span>
            </div>
            <div class="navis" @click="choiceTab(2)">
                <span :class="currentTab==2 ? 'line_bottom':''">荟币记录</span>
            </div>
        </div>
        <!-- 标签导航 end-->
        <div class="withdraw-record">
            <div class="withdraw-record-list">
                <div  v-if="listObj.length>0">
                    <div class="flex flex-pack-justify record-list-item" v-for="(item,index) in listObj" :key="index" >
                        <div>
                            <div class="type">{{item.title}}</div>
                            <div class="date">{{item.addtime}}</div>
                        </div>
                        <div class="date-state">
                            <div class="cash">{{item.amount}}</div>
                            <!-- <div class="cash" v-else-if="currentTab==2">-{{item.amount}}</div>
                            <div class="cash" v-else>{{item.amount}}</div> -->
                            
                        </div>
                    </div>
                </div> 
                <div class="bottom_box" v-if="show_none">
                    暂无数据~
                </div>
                <div class="bottom_box" v-if="show_bottom">
                    已经到达底部~
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { isScrollBottom } from "@/utils/comm.js";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin ,XSwitch } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
export default {
    components: {
        XHeader
    },
    data(){
        return {
            currentTab:1,
            listObj: [],
            page: 0,
            show_none:false,
            show_bottom:false
        }
    },
    created(){
       
    },
    destroyed () {
       
    },
    mounted(){
        this.$nextTick(()=>{
            var typeNum='';//options.recordType;
            typeNum=Number(typeNum);
            if (typeNum){
                this.currentTab=typeNum;
                this.record_list(typeNum);
            }else{
                this.record_list(1);
            }
            isScrollBottom(this.scrollBottomCB);
        });
    },
    methods: {
        //滚动到底部回调
        scrollBottomCB() {
            var that=this;
            var total_count = that.total_count;
            var listObjLen = that.listObj.length;
            var currentTab = that.currentTab;
            currentTab = Number(currentTab);
            
            if(currentTab){
                if (total_count > listObjLen) {
                    this.record_list(currentTab);
                } else {
                    this.show_bottom=true;
                    return false;
                }
            }
        },
        choiceTab(tab){
            this.$vux.loading.show({
                text: `正在加载数据`
            });
            
            this.currentTab=tab;
            this.page=0;
            this.listObj=[];
            this.show_bottom=false;
            tab=Number(tab);
            this.record_list(tab);
            
        },
        async record_list(recordType){
            var that=this;
            var page = that.page;//页数
            page++;
            let data = {
                plat: 4,
                token:this.token,
                account:this.account,
                page:page,
                record_type: recordType
            }
            const [err, res_data] = await api.detailRecord(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res_data.code == 2000){
                //2000
                var resList = res_data.data.list;//返回的列表对象
                var total_count = res_data.data.total_count;//返回的总条数
                var listObj = that.listObj;//data里的列表数组
                var page = that.page;//页数
                page++;

                var newListObj = listObj.concat(resList);
                // wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
                // title: '加载中',
                // icon: 'loading',
                // success:function(){
                //     if (total_count <= 0) {
                //     that.setData({
                //         show_none: true
                //     });
                //     } else {
                //     that.setData({
                //         show_none: false
                //     });
                //     }
                // }
                // });
                if(total_count<=0){
                    that.show_none=true;
                }else{
                    that.show_none=false;
                }
                //setTimeout(() => {
                    that.listObj=newListObj;
                    that.page=page;
                    that.total_count=total_count;
                    this.$vux.loading.hide();
                //}, 1500);
                //2000 end
            }
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token", "carpayInfo"])
    },
}
</script>


