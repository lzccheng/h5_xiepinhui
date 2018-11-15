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
                <div class="tabItem" :class="{active: currentTab == index}" :key="index" @click="onclick(item,index)" ref="tabItem" v-for="(item,index) in data">
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
        data: {
            type: Array,
            default: null
        },
        
    },
    data(){
        return {
            currentTab: 0,
            BS: null
        }
    },
    mounted(){
        console.log('=====店铺导航栏实例化mounted======')
        this.createBar();
    },
    methods: {
        onclick(item,index){
            if (index == this.currentTab) return;
            this.currentTab = index;
            item._index = index;
            this.$emit('onclick',item)
        },
        createBar(){
            if(this.data && this.data.length){
                let that = this;
                this.$nextTick(()=>{
                    if(that.BS)return;
                    let tab = that.$refs.tab;
                    let tabContent = that.$refs.tabContent;
                    tabContent.style.width = that.data.length*125/50 + 'rem';
                    let BS = new BScroll(tab,{
                        scrollX: true,
                        eventPassthrough:'vertical'
                    });
                    that.BS = BS;
                })
            }
        }
    },
    watch: {
        data(){
            // console.log('=====店铺导航栏实例化watch======')
            this.createBar();
        }
    }
    
}
</script>

