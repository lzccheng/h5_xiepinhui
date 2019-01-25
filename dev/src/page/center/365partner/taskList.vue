<style scoped lang="less">
@color: #666;
@color2: #999;
@color3: #F9525C;
.page{
    min-height: 100%;
    background: #f8f8f8;
}
.task{
    padding: .2rem;
    .taskItem{
        margin: .2rem 0;
        border-radius: 5px;
        background-color: #fff;
        flex-direction: column;
        padding: .2rem;
        .top{
            color: @color2;
            font-size: 12px;
            border-bottom: 1px solid #eee;
            padding-bottom: .2rem;
            align-items: center;
            justify-content: space-between;
            .img{
                vertical-align: middle;
                width: .4rem;
                height: .4rem;
                margin-left: .05rem;
            }
        }
        .title{
            color: @color3;
            font-size: 16px;
            position: relative;
            .topImg{
                position: absolute;
                left: 0;
                top: -.2rem;
                width: .18rem;
                height: .36rem;
            }
        }
        .bottom{
            font-size: 14px;
            color: @color2;
            padding-top: .2rem;
        }
        .padL{
            padding-left: .4rem;
        }
    }
}
.tips{
    color: #666;
    text-align: center;
    padding: .2rem;
}
.noList{
    text-align: center;
    margin-top: 2rem;
    img{
        width: 4.5rem;
    }
    p{
        margin: .6rem;
        color: @color2;
        font-size: 14px;
    }
}
</style>
<template>
    <div class="page" :style="{minHeight: pageHeight - 46 + 'px'}">
        <x-header :left-options="{backText:''}" title='任务中心' id='vux-header'></x-header>
        <div class="content">
            <div class="task">
                <div class="taskItem flex" v-for="(item, i) in taskList" :key="i">
                    <div class="top flex">
                        <div class="title padL"><img class="topImg" :src="[require('@/assets/images/new365/task_ingTag.png'),require('@/assets/images/new365/task_finishTag.png'),require('@/assets/images/new365/task_getTag.png')][item.record_status]" alt="">{{item.task_name}}</div>
                        <div>{{['任务进行中','已完成任务','可领取任务'][item.record_status]}} <img class="img" :src="[require('@/assets/images/new365/task_ing.png'),require('@/assets/images/new365/task_finish.png'),require('@/assets/images/new365/task_get.png')][item.record_status]"></div>
                    </div>
                    <div class="bottom padL">{{item.task_desc}}</div>
                </div>
            </div>
            <div class="noList" v-if="complete && !taskList.length">
                <img src="@/assets/images/new365/no_task.png" alt="">
                <p>你当前还没有任务哦</p>
            </div>
            <div v-if="loading" class="tips">加载中...</div>
            <div v-if="complete && taskList.length" class="tips">到底了~</div>
            <div v-if="upload" class="tips">上拉加载更多</div>
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
            page: 1,
            info: null,
            pageHeight: '0',
            taskList: [],
            loading: true,
            complete: false,
            upload: false
        }
    },
    created() {
        this.pageHeight = window.innerHeight;
        this.getData()
    },
    mounted() {
        this.$nextTick(()=>{
            isScrollBottom(this.getData)
        })
    },
    methods: {
        async getData(){
            if(this.isComplete())return;
            let data = {
                account: this.account,
                token: this.token,
                page: this.page
            }
            this.loading = true;
            this.upload = false;
            const [err, res] = await api.my_task_list(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.taskList = this.taskList.concat(res.data.list);
                if(this.page == 1){
                    this.info = res.data;
                }
                this.page ++;
                this.loading = false;
                this.upload = true;
                this.isComplete();
            }
        },
        isComplete(){
            if(this.page != 1 && this.info.total_count*1 <= this.taskList.length){
                this.loading = false;
                this.complete = true;
                this.upload = false;
                return true;
            }
            return false;
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
