<style scoped lang="less">
@color: #61D8D0;
.page {
  padding-bottom: 51px;
}
.contentBox{
  padding:16/100rem 20/100rem;
  background: #fff;
  padding-bottom: 0/100rem;
}
.picWho{
  width:80/100rem;
  max-height:80/100rem;
  margin-right: 20/100rem;
  border-radius: 50%;
}
.nameWho{
  color: #333;
  font-size:28/100rem;
}
.timeis{
  color:#999;
  font-size: 20/100rem;
}
.rightItem{
  font-size: 28/100rem;
  color: @color;
}
.itemInfoBox{
  border-bottom: 1/100rem solid #f2f2f2;
  padding: 15/100rem 0/100rem;
}
.numRight{
  font-size: 20/100rem;
  color: #999;
}
.bottom_box{
  margin-top:20/100rem;
  margin-bottom: 20/100rem;
  text-align:center;
font-size:24/100rem;
color:#666;
}
.null{
    text-align: center;
    color: #aaa;
}
page {
  background: #f7f7f7;
  padding-bottom: 51px;
}
.navis{
// width:33.33333%;
text-align: center;
display: inline-block;
font-size: 28/100rem;
color: #333;
}
.navis span{
padding: 18/100rem;
display: inline-block;
white-space: nowrap;
}
.navAboutDetail{
border-top:1px solid #f7f7f7;
border-bottom:1px solid #f7f7f7;
background: #fff;
width: 100%;
overflow-y: auto;
white-space: nowrap;
}
.line_bottom{
border-bottom: 1px solid #61D8D0;
color: #61D8D0;

}
.goodsPrice{
  font-size:30/100rem;
  color: #666;
}
.shouru{
  color: #61D8D0;
  font-size: 30/100rem;
}
.contentBox{
  padding:16/100rem 20/100rem;
  background: #fff;
  padding-bottom: 0/100rem;
}
.picWho{
  width:120/100rem;
  max-height:120/100rem;
  margin-right: 20/100rem;
  border-radius: 50%;
}
.nameWho{
  color: #333;
  font-size:28/100rem;
}
.timeis{
  color:#999;
  font-size: 20/100rem;
}
.rightItem{
  font-size: 28/100rem;
  color: @color;
}
.itemInfoBox{
  border-bottom: 1px solid #f2f2f2;
  padding: 15/100rem 0/100rem;
}
.numRight{
  font-size: 20/100rem;
  color: #999;
}
.bottom_box{
    margin-top:20/100rem;
    margin-bottom: 20/100rem;
    text-align:center;
    font-size:24/100rem;
    color:#666;
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <!-- 标签导航 -->
            <div class="navAboutDetail">
                <div v-for="(item, index) in choiceTabArr" class="navis" :style="{width: tabWidth}" @click="choiceTab(item.red_type)" :key="index">
                    <span :class="recordType==item.red_type ? 'line_bottom':''" >{{item.name}}</span>
                </div>
            </div>
            <div class="contentBox">
   
                <div class="flex flex-pack-justify flex-align-center itemInfoBox" v-for="(item,index) in listObj" v-if="listObj.length" :key="index">
                    <div class="flex leftItem">
                        <img  v-if="recordType==1" :src="item.member_info.member_avatar || 'http://img.xiepinhui.com.cn/mobile/app/task_icon.png'" class="picWho" mode="widthFix"/>
                        <img  v-else-if="recordType==2 || recordType==3" :src="item.order_goods&&item.order_goods.goods_image" class="picWho" mode="widthFix"/>
                        <img  v-else-if="recordType==4" :src="item.task_info.task_icon" class="picWho" mode="widthFix"/>
                        <div class="flex flex-align-center">
                            <div class="nameWho" v-if="recordType==1">
                                {{item.member_info.member_nick || item.red_text}}
                                <div class="timeis">{{item.red_addtime}}</div>
                            </div>
                            <div class="nameWho" v-else-if="recordType==2 || recordType==3">
                                <span>{{recordType==2? item.red_text: '推广返利'}}</span>
                                <div class="timeis">{{item.red_addtime}}</div>
                            </div>
                            <div class="nameWho" v-if="recordType==4">
                                {{item.member_info.member_nick || item.red_text || '任务奖励金'}}
                                <div class="timeis">{{item.red_addtime}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="rightItem">
                        <div class="numRight" v-if="recordType==3">X{{item.order_goods&&item.order_goods.num}}</div>
                        +{{item.red_amount}}
                    </div>
                </div>
                <div  v-if='!listObj.length' class="null" >暂无数据</div>
            </div>
            <div class="bottom_box" v-if="show_bottom">
                已经到达底部~
            </div>
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
            nvabarData: {
                showCapsule: 1,
                title: '奖励金',
            },
            page: 0,
            listObj: [],
            recordType: 1,
            show_bottom: false,
            choiceTabArr: [],
            tabWidth: '50%',
            listData: {}
        }
    },
    created() {
        this.recordType = this.$route.query.recordType;
    },
    mounted() {
        this.getTab();
        this.$nextTick(()=>{
            isScrollBottom(this.fanli_list);
        })
    },
    methods: {
        async getTab(){
            let data = {
                plat: 3,
                token: this.token,
                account: this.account
            }
            const [err, res] = await api.usermoneyprofile(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.choiceTabArr = res.data.money_data[1].list;
                this.tabWidth = 100 / this.choiceTabArr.length + '%';
                if(this.choiceTabArr.length > 3){
                    this.tabWidth = '30%';
                }
                this.choiceTabArr.some((item, i) => {
                    let data = {
                        page: 0,
                        list: [],
                        total_count: ''
                    }
                    this.listData[item.red_type] = data;
                })
                this.fanli_list();
            }
        },
        async fanli_list(){
            let recordType = this.recordType;
            let currentData = this.listData[recordType];
            if(currentData.total_count && currentData.list.length >= Number(currentData.total_count)){
                this.listObj = currentData.list;
                return;
            };
            var page = this.listData[recordType].page;//页数
            page++;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                red_type: recordType,
                page
            }
            this.$vux.loading.show({
                text: '加载中...'
            });
            const [err, res_data] = await api.rebate_record(data);
            this.$vux.loading.hide()
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res_data.code == 2000){
                this.listData[recordType].list = this.listData[recordType].list.concat(res_data.data.list);//返回的列表对象
                this.listData[recordType].total_count = res_data.data.total_count;//返回的总条数
                this.listData[recordType].page = page;
                this.listObj = this.listData[recordType].list;
            }
        },
        choiceTab(tab){
            this.recordType = tab;
            if(this.recordType == 4){
                this.nvabarData.title = this.choiceTabArr[this.recordType - 2].name;
            }else{
                this.nvabarData.title = this.choiceTabArr[this.recordType - 1].name;
            }
            this.fanli_list();
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
