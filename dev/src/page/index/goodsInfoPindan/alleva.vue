<style scoped lang="less">
.alleva-nav{
  width: 100%;

  background: #fff;
  padding: 10/50rem 0/50rem;
  z-index: 3
}
.alleva-nav .text{
  width: 25%;
  background:#FFF4F6;
  color: #333;
  padding: 2/50rem;
  margin-bottom: 10/50rem;
  font-size: 10pt;
  display: block;
  text-align: center;
  border: 1px #FB4C72 solid;
  border-radius:5/50rem;
  margin-left:5/50rem;
  position: relative;
  min-width:18%;
}
.last{
 margin-right: 15/50rem !important;
}
.alleva-active{
  background:#fff !important;
  color: #FB4C72 !important;
}
.alleva-active .left-title{
  padding-left:15/50rem;
}
.eva-box{
//   margin-top:100/50rem;
    background-color: #fff;
}
.icon-xduihao{
  position: absolute;
  font-size: 12pt;
  left:3/50rem;
  margin-top: -2/50rem;
}
.evabox{
  background: #fff;
}
.evalist{
  background: #fff;
}
.eva-title{
  font-size:11pt;
  padding: 0px 5/50rem;
  background: #fff;
  margin-top: 5/50rem;
  line-height: 35/50rem;
}
.red-color{
  color: red !important;
}
.evalist-header{
  font-size: 10pt;
  padding:10/50rem 15/50rem;
  padding-bottom: 5/50rem;

}
.eva-btn-bottome{
  text-align: center;
  padding-bottom: 5/50rem;
  padding-top: 5/50rem;
}
.all-eva-btn{
  font-size: 10pt;
  padding: 3px 15/50rem;
  border: 1px #f1f1f1 solid;
  text-align: center;
  border-radius: 5/50rem;  
}
.eva-img{
  width: 30/50rem;
  height: 30/50rem;
  border-radius: 100%;
  margin-right: 10/50rem;
}

.eva-list-center{
  padding: 5px 15/50rem;
  font-size: 10pt;
  color: #444;
}
.eva-list-bottom{
  padding: 0px 15/50rem;
  font-size: 9pt;
  color: #888;
  padding-bottom: 5/50rem;
  
}
.eva-list-img{
  padding: 0px 15/50rem;
  background: #fff;
  position: relative;
}
.eva-list-img img{
  width: 25%;
  min-width:70/50rem;
  height:80/50rem;
  padding: 5/50rem;
  padding-left: 0/50rem;
}
.eva-all-img{
  background: rgba(255, 255, 255, .6);
  font-size:12pt;
  position: absolute;
  z-index: 2;
  right: 15/50rem;
  bottom: 5/50rem;
  border-radius:10/50rem;
  padding: 0px 10/50rem;
}
.xingxing{
  font-size:9pt;
  color: #FC446F;
}
.eva-null{
  width:100%;
  text-align: center;
  font-size: 10pt;
  color: #888;
  padding-top: 44/50rem;
}
.eva-null img{
  width:20%;
}
.flex_{
    display: inline-flex;
    flex-wrap: wrap;
}

</style>
<template>
    <div>
        <div class="alleva-nav">
            <div class="flex flex-align-center flex-pack-justify flex_">
                <span 
                @click="changeNav(index)" 
                class="text  flex flex-align-center" 
                :class="nowIndex==index?'alleva-active':''"
                v-for="(item,index) in tabBar"
                :key="index"
                >
                    <span class='iconfont icon-xduihao' v-if="nowIndex==index"></span>
                    <span class="left-title">{{item.name}}({{evaluate_num[index] || 0}})</span>
                </span>
            </div>
        </div>
        <div class="eva-box">
            <div class="eva-null" v-if="nullShow">
                <img src="@/assets/images/null/zanwupingjia.png" alt="">
                <div>当前暂无评论</div>
            </div>
            <div class='evalist line_xi_after' v-for="(item,index) in evalist" :key="index">
                <div class="evalist-header flex flex-align-center flex-pack-justify">
                    <div class='flex flex-align-center '>
                        <img class="eva-img" :src="item.avatar" alt="">
                        <span>{{item.member_nick}}</span>
                        <span>
                            <span class="iconfont icon-xingxing" :class='item.geval_star_level>0?"xingxing":"xingxing-hui"'></span>
                            <span class="iconfont icon-xingxing" :class='item.geval_star_level>1?"xingxing":"xingxing-hui"'></span>
                            <span class="iconfont icon-xingxing" :class='item.geval_star_level>2?"xingxing":"xingxing-hui"'></span>
                            <span class="iconfont icon-xingxing" :class='item.geval_star_level>3?"xingxing":"xingxing-hui"'></span>
                            <span class="iconfont icon-xingxing" :class='item.geval_star_level>4?"xingxing":"xingxing-hui"'></span>
                        </span>
                    </div>
                </div>
                <div class="eva-list-bottom">
                    <span class='time'>{{item.geval_addtime}}</span>
                    <span>{{item.geval_spec_name}}</span>
                </div>
                <div class="eva-list-center">{{item.geval_content}}</div>
                <div class='eva-list-img flex'>
                    <img 
                    :src="item_" 
                    alt="" 
                    v-for="(item_,index_) in item.geval_images" 
                    :key="index_"
                    v-if="index_ < 4"
                    @click="showEvaImg(item_,item.geval_images)">
                    <span class="eva-all-img" v-if="item.geval_images.length>3">共{{item.geval_images.length}}张</span>
                </div>
                <div v-if="item.geval_is_add==1">
                    <div class="zhuijia-eva" v-if="item.geval_add_info.time!=0">
                        购买{{item.geval_add_info.time}}天后追评
                    </div>
                    <div class="zhuijia-eva" v-else>
                        购买当天追评
                    </div>
                    <div class="eva-list-center">
                        {{item.geval_add_info.content}}
                    </div>
                    <div class='eva-list-img flex'>
                        <img 
                        :src="item_" 
                        v-for="(item_,index) in item.geval_add_info.images" 
                        alt=""
                        :key="index"
                        v-if="index < 4"
                        @click="bindtap(item_,item.geval_add_info.images)"/>
                        <span class="eva-all-img" v-if="item.geval_add_info.images.length>3">
                            共{{item.geval_add_info.images.length}}张
                        </span>
                    </div>
                </div>
            </div>
            <div class="loading complete" v-if="upLoadingComplete">
                暂无更多数据
            </div>
            <!-- <div class="gotop iconfont icon-huidaodingbu" v-if="scrollTop.goTop_show" @click="goTopFun"></div> -->
        </div>
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import { mapGetters, mapActions, mapMutations } from "vuex";
import nullData from "@/components/nullData.vue";

export default {
    components: {
        nullData
    },
    props: {
        goodsid: {
            type: String,
            default: ''
        }
    },
    mounted(){
        this.alleva();
    },
    methods: {
        async alleva(){
            let data = {
                plat: '3',
                page: 1,
                goods_id: this.goodsid,
                type: this.nowIndex
            }
            const [err, res] = await api.newevaluatelist(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            
            if(res.code == 2000){
                if (res.data.list == "") {
                    this.nullShow = true;
                    this.evalist = "";
                } else {
                    this.evalist = res.data.list;
                    this.evaluate_num = res.data.evaluate_num;
                    this.nullShow = false;
                }
                this.$emit('conFn',{})
            }
        },
        changeNav(index){
            this.$vux.loading.show();
            this.nowIndex = index;
            this.upLoadingComplete = false;
            this.upLoading = true;
            this.alleva();
        }
    },
    data(){
        return {
            tabBar: [
                {name: '全部'},
                {name: '好评'},
                {name: '中评'},
                {name: '差评'},
                {name: '有图'},
                {name: '追加评价'},
            ],
            nowIndex: 0,
            page: 2,
            evalist: "",
            nullShow: false,
            upLoading: false,
            upLoadingComplete: false,
            evaluate_num:[],
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    },
}
</script>

