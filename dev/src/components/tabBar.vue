<style lang="less" scoped>
    .tabBar{
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        background: #fff; 
        font-size: 16/50rem;
        white-space: nowrap;
        border-bottom: 2px #eee solid;
    }
    .tabItem{
        width: 125/50rem;
        display: inline-block;
        text-align: center;
        background-color: #fff; 
        color: #666;
        line-height:40px;
        &.active{
            color:rgba(97,216,208,1);
            position: relative;
        }
        &.active:after{
            content: "";
            display: inline-block;
            height: 2px;
            position: absolute;
            width: 125/50/2rem;
            background:rgba(97,216,208,1);
            bottom: 0;
            border-radius:5px;
            left: 0;
            right: 0;
            margin: auto;
        }
    }
</style>
<template>
    <div>
        <div class="tabBar" v-show="data" ref="tab">
            <div class="tabContent" ref="tabContent">
                <div class="tabItem" :class="{active: currentTab == index}" @click="onclick(item,index)" ref="tabItem" v-for="(item,index) in data">
                    {{item.shop_name}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';

export default {
    props: {
        data: Array,
        default: []
    },
    data(){
        return {
            currentTab: 0,
        }
    },
    mounted(){
    },
    methods: {
        onclick(item,index){
            if (index == this.currentTab) return;
            this.currentTab = index;
            item._index = index;
            this.$emit('onclick',item)
        }
    },
    watch: {
        data(){
            if(this.data && this.data.length){
                let that = this;
                let tab = this.$refs.tab;
                let tabContent = this.$refs.tabContent;
                tabContent.style.width = that.data.length*125/50 + 'rem';
                let BS = new BScroll(tab,{
                    scrollX: true,
                    eventPassthrough:'vertical'
                });
            }
        }
    }
    
}
</script>

