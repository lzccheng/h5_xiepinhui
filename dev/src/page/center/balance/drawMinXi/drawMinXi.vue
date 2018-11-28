<style lang="less" scoped>
.record-list-item {
    width: 95%;
    padding: 20/100rem 2.5%;
    height: 90/100rem;
    border-bottom: 1px #f2f2f2 solid;
    box-sizing: content-box;
}
.cash{
  color: #61D8D0;
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
        <x-header :left-options="{backText:''}" title="提现明细" id="vux-header"></x-header>
        <div class="withdraw-record">
            <div class="withdraw-record-list" v-if="record.length > 0">
                <div class="record-list-item" v-for="(item,index) in record" :key="index">
                    <div class="type-cash flex-pack-justify">
                        <span class="type">{{item.title}}</span>
                        <span class="cash">¥{{item.with_amount}}</span>
                    </div>
                    <div class="date-state flex-pack-justify">
                        <span class="date">{{item.with_addtime}}</span>
                        <span :class="item.with_status != 1 ? 'state' : 'state c-00A0BE'">{{item.with_status == 1 ? '提现中' : item.with_status == 2 ? '审核通过' : '审核不通过'}}
                        </span>
                    </div>
                </div>
            </div>
            <div v-if="record.length < 1" class="remind-text">
                暂无数据
            </div>
            <div v-if="totalPage > 1">
                <div class="loading" v-if="!upmore">上拉加载更多</div>
                <div class="loading" v-if="!upLoading">加载中...</div>
                <div class="loading complete" v-if="!upLoadingComplete">已加载全部数据</div>
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
        }
    },
    created(){
        
    },
    destroyed () {
        window.onscroll = null;
    },
    mounted(){
        this.$nextTick(()=>{
           this.getRecord();
            isScrollBottom(this.scrollBottomCB);
        })
    },
    methods: {
        async getRecord () {
            var page=this.page;
            let that = this;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                page: page
            }
            const [err, res] = await api.withdrawhistory(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            
            if(res.code==2000){
                
                 if (page === 1) {
                     this.record=res.data.list;
                     this.totalPage=res.data.page_size;
                     
                } else { 
                    let list = this.record
                    list.push(...res.data.list);
                    this.record=list;
                }
                this.showBottom();
            }
        },
        showBottom () {
            if (this.page < parseInt(this.totalPage)) {
                this.upLoading=false;
                this.upmore=true;
            } else {
                this.upLoadingComplete=true;
                this.upLoading=false;
                this.upmore=false;
            }
        },
        scrollBottomCB () {
            if (this.upLoadingComplete) {
                return;
            }
            this.upmore=false;
            this.upLoading=true;
            let p = this.page
            p++;
            this.page=p;
            this.getRecord();
        },
    },
    computed: {
        ...mapGetters(["user", "account", "token", "carpayInfo"])
    },
}
</script>


