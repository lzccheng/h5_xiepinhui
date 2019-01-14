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
    .scrollItem{
        width: 25%;
        display: inline-block;
        text-align: center;
        flex-direction: column;
        padding: 0.2rem 0;
        img{
            width: 0.8rem;
            display: inline-block;
        }
        &.active{
            color: #fff;
            background-color: @color;
            border-radius: 0.15rem;
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
            width: 1rem;
            height: 1rem;
        }
        .desc{
            padding-left: 0.2rem;
            .title{
                font-size: 18px;
            }
            .text{
                font-size: 12px;
            }
        }
    }
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" title='365特权' id='vux-header'></x-header>
        <div v-if="info" class="content">
            <div class="scrollTop">
                <div class="scrollItem" @click="onHandleTop(i)" :class="{active: i == scrollTopIndex}" v-for="(item, i) in info.privilege_list" :key="i">
                    <div><img :src="item.icon" alt=""></div>
                    <div>{{item.title}}</div>
                </div>
            </div>
            <div class="scrollBody">
                <div class="Item flex" v-for="(item, i) in descList" :key="i">
                    <div class="icon"><img :src="item.icon" alt=""></div>
                    <div class="desc">
                        <div class="title">{{item.title}}</div>
                        <div class="text">{{item.desc}}</div>
                    </div>
                </div>
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
    },
    mounted() {

    },
    methods: {
        async getData(){
            let data = {
                desc: 1
            }
            const [err, res] = await api.privilege_info(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.info = res.data;
                this.descList = this.info.privilege_list[0].desc;
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
