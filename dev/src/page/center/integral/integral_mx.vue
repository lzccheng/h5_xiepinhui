<style scoped lang="less">
.now-jifen{
  background: #fff;
  padding:10px 15px;
  margin-bottom: 10px;
  font-size: 12pt;
}
.now_num{
  font-size: 14pt;
  color:#61D8D0
}
.item{
  padding:10px 15px;
  background: #fff;
}
.item-left-title{
  font-size: 12pt;
}
.item-left-time{
  font-size:10pt;
  color: #888
}
.right-color{
 color: #61D8D0;
}

</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div class="now-jifen line_xi_after">
                当前积分：
                <span class="now_num">{{pageInfo.member_points}}</span>
            </div>

            <div class="jifen-jilu">
                <div class='item flex flex-pack-justify flex-align-center line_xi_after' :key="index" v-for="(item, index) in listInfo">
                <div class="item-left">
                    <div class="item-left-title">{{item.pl_desc}}</div>
                    <div class="item-left-time">{{item.pl_addtime}}</div>
                </div>
                <div :class="item.point_type==2?'right-color':item-right">
                    {{item.pl_points}}
                </div>
                </div>
            </div>
            <div class="loading" v-if="upmore">上拉加载更多</div>
            <div class="loading" v-if="upLoading">加载中...</div>
            <div class="loading complete" v-if="upLoadingComplete">已加载全部数据</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { isScrollBottom } from '@/utils/comm.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            pageInfo:"",
            page:1,
            upLoading: false,
            upLoadingComplete: false,
            listInfo:"",
            // 组件所需的参数
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '积分明细', //导航栏 中间的标题
            },
        }
    },
    created() {
        this.showPage();
    },
    mounted() {
        this.$nextTick(()=>{
            isScrollBottom(this.onBottom);
        })
    },
    methods: {
        async showPage(){
            let that = this;
            let data = {
                account: this.account,
                token: this.token,
                page:this.page     
            }
            const [err, res] = await api.pointsLog(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                if(this.page == 1){
                    this.pageInfo = res.data;
                    this.listInfo = res.data.list;
                }else{
                    if (res.data.list!= "") {
                        that.listInfo = that.listInfo.concat(res.data.list);
                        this.upLoading = false;
                        this.upmore = true;
                    } else {
                        this.upLoadingComplete = true;
                        this.upLoading = false;
                        this.upmore = false;
                    }           
                }
                this.page ++;
            }
        },
        onBottom(){
            if(this.pageInfo){
                if(Number(this.pageInfo.total_count) <= this.listInfo.length){
                    this.upLoadingComplete = true;
                    this.upLoading = false;
                    this.upmore = false;
                    return;
                }
            }
            this.upmore = false;
            this.upLoading = true;
            this.showPage();
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
