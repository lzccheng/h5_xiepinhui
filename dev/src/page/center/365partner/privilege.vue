<style scoped lang="less">
@color: #61d8d0;
.content{
    padding: 0.2rem;
    background-color: #f8f8f8;
}
.scrollTop{
    background-color: #fff;
    border-radius: 0.15rem;
    overflow-y: auto;
    white-space: nowrap;
    .scrollItem{
        width: 23%;
        display: inline-block;
        text-align: center;
        flex-direction: column;
        padding: 0.1rem 0;
        img{
            width: 0.34*2rem;
            height: 0.34*2rem;
            display: inline-block;
        }
        &.active{
            color: #fff;
            background-color: @color;
            // border-radius: 0.15rem;
        }
        .text{
            white-space: nowrap;
            font-size: 12px;
        }
        .img{
            @num: 1rem;
            // background-color: #fff;
            width: @num;
            height: @num;
            margin: 0 auto;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            line-height: @num;
            // border: 1px solid @color;
        }
    }
}
.scrollBody{
    background-color: #fff;
    border-radius: 0.15rem;
    margin-top: 0.2rem;
    padding-top: 0.1rem;
    .Item{
        border-bottom: 1px solid #ddd;
        padding: 0.2rem;
        &:last-child{
            border-bottom: none;
        }
        img{
            width: .36*2rem;
            height: .36*2rem;
        }
        .desc{
            padding-left: 0.2rem;

            .title{
                font-size: 14px;
            }
            .text{
                font-size: 12px;
                color: #666;
            }
        }
    }
}
.btn2{
    border-radius: 5px;
    position: fixed;
    left: 2.5%;
    bottom: .2rem;
    width: 95%;
    margin: .1rem 0;
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" title='365特权' id='vux-header'></x-header>
        <div v-if="info" class="content">
            <div class="scrollTop">
                <div class="scrollItem" @click="onHandleTop(i)" :class="{active: i == scrollTopIndex}" v-for="(item, i) in info.privilege_list" :key="i">
                    <div class="img flex"><img :src="item.icon" alt=""></div>
                    <div class="text">{{item.title}}</div>
                </div>
            </div>
            <div class="scrollBody">
                <div class="Item flex" v-for="(item, i) in descList" :key="i">
                    <div class="icon"><img :src="item.icon" alt=""></div>
                    <div class="desc">
                        <div class="title">{{item.title}}</div>
                        <div class="text" v-html="item.desc.replace(/\\n/g, '<br/>')"></div>
                    </div>
                </div>
            </div>
            <div class="btn btn2" v-if="user.user_type == 1" @click="$router.push('introduce365')">
                <span>开通365小店>></span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            info: null,
            scrollTopIndex: 0,
            descList: []
        }
    },
    created() {
        this.getData();
        this.scrollTopIndex = this.$route.query.index? this.$route.query.index - 1 : 0;
    },
    mounted() {

    },
    methods: {
        async getData(){
            let data = {
                desc: 1
            }
            this.$vux.loading.show({
                text: '加载中...'
            });
            const [err, res] = await api.privilege_info(data);
            this.$vux.loading.hide();
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.info = res.data;
                this.descList = this.info.privilege_list[this.scrollTopIndex].desc;
            }
        },
        onHandleTop(i){
            this.scrollTopIndex = i;
            this.descList = this.info.privilege_list[i].desc;
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
