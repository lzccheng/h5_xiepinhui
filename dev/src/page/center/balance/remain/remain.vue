<style lang="less" scoped>
.record-list-item {
    width: 95%;
    padding: 20/100rem 2.5%;
    height: 135/100rem;
    border-bottom: 1px #f2f2f2 solid;

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

</style>
<template>
    <div class="idnexWrapBox">
        <x-header :left-options="{backText:''}" title="余额明细" id="vux-header"></x-header>
        <div>
            <div class="withdraw-record">
                <div class="withdraw-record-list" v-if="record.length > 0">
                    <div class="record-list-item" v-for="(item,index) in record" :key="index">
                        <div class="type-cash flex-pack-justify">
                            <span class="type">{{nick_name}}</span>
                            <span class="cash" v-if="item.log_type==1"><span style="color:#333;">获得收益</span> &nbsp;{{item.amount}}</span>
                            <span class="cash" v-else-if="item.log_type==2"><span style="color:#ec655f">提现金额</span> &nbsp;{{item.amount}}</span>
                            <span class="cash" v-else-if="item.log_type==3"><span style="color:#bbb">提现失败</span> &nbsp;{{item.amount}}</span>
                        </div>
                        <div class="date-state flex-pack-justify">
                            <span class="date" style="float:left;line-height:0.28rem;">{{item.log_addtime}}</span>
                            <span class="state" style="float:right;line-height:28rpx0.28rem;">{{item.log_desc_type}}</span>
                        </div>
                    </div>
                </div>
                <div v-if="record.length < 1" class="remind-text">
                    暂无数据
                </div>
                <div v-if="totalPage > 1">
                    <div class="loading" v-if="upmore">
                        上拉加载更多
                    </div>
                    <div class="loading" v-if="upLoading">
                        加载中...
                    </div>
                    <div class="loading complete" v-if="upLoadingComplete">
                        已加载全部数据
                    </div>
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
            record: [],
            totalPage: 0,
            page: 1,
            upLoading: false,
            upLoadingComplete: false,
            upmore: true,
            nick_name: ''
        }
    },
    created(){
        this.getRecord();
    },
    destroyed () {
        window.onscroll = null;
    },
    mounted(){
        this.$nextTick(()=>{
            isScrollBottom(this.onReachBottom)
        })
    },
    methods: {
        async getRecord(){
            let that = this;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                page: this.page
            }
            const [err, res] = await api.balancelog(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                if(this.page == 1){
                    this.nick_name = this.user.nick;
                    this.record = res.data.list;
                    this.totalPage = res.data.page_size;
                }else{
                    let list = that.record;
                    list.push(...res.data.list);
                }
                this.showBottom()
            }
        },
        showBottom(){
            if (this.page < parseInt(this.totalPage)) {
                this.upLoading = false;//把"加载中"的变量设为false，隐藏
                this.upmore = true;
            } else {
                this.upLoadingComplete = true;//把“没有数据”设为true，显示
                this.upLoading = false;         //把"加载中"的变量设为false，隐藏
                this.upmore = false;
            }
        },
        onReachBottom(){
            if (this.upLoadingComplete) {
                return
            }
            this.upmore = false;
            this.upLoading = true;//把"加载中"的变量设为true，显示
            let p = this.page
            p++;
            this.page = p;
            this.getRecord()
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token", "carpayInfo"])
    },
}
</script>


