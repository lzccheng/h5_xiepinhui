<style scoped lang="less">
.page {
  padding-bottom: 51px;
}
.contentBox{
  padding:16/100rem 20/100rem;
  background: #fff;
  padding-bottom: 0/100rem;
}
.picWho{
  width:120/100rem;
  max-height:140/100rem;
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
  color: #333;
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
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nvabarData.title' id='vux-header'></x-header>
        <div>
            <div class="contentBox">
   
                <div class="flex flex-pack-justify flex-align-center itemInfoBox" v-for="(item,index) in listObj" :key="index">
                    <div class="flex leftItem">
                        <img  v-if="recordType==1" :src="item.member_info.member_avatar" class="picWho" mode="widthFix"/>
                        <img  v-else-if="recordType==2 || recordType==3" :src="item.order_goods.goods_image" class="picWho" mode="widthFix"/>
                        <div class="flex flex-align-center">
                            <div class="nameWho" v-if="recordType==1">
                                {{item.member_info.member_nick}}
                                <div class="timeis">{{item.red_addtime}}</div>
                            </div>
                            <div class="nameWho" v-else-if="recordType==2 || recordType==3">
                                推广返利
                                <div class="timeis">{{item.red_addtime}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="rightItem">
                        <div class="numRight" v-if="recordType==3">X{{item.order_goods.num}}</div>
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
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            nvabarData: {
                showCapsule: 1,
                title: '返利',
            },
            page: 0,
            listObj: [],
            recordType: 1,
            show_bottom: false
        }
    },
    created() {
        this.recordType = this.$route.query.recordType;
    },
    mounted() {
        let recordType = this.recordType;
        if(recordType == 1){
            this.nvabarData.title = '推广365返利';
        }
        if(recordType == 2){
            this.nvabarData.title = '线下店铺推广返利';
        }
        if(recordType == 3){
            this.nvabarData.title = '推广商品返利';
        }
        this.fanli_list();
    },
    methods: {
        async fanli_list(){
            let recordType = this.recordType;

            var red_type='';
            if(recordType == 1){
                red_type = 5;
            }
            if(recordType == 2){
                red_type = 2;
            }
            if(recordType == 3){
                red_type = 3;
            }
            var page = this.page;//页数
            page++;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                red_type,
                page
            }
            const [err, res_data] = await api.rebate_record(data);
            if(err){
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res_data.code == 2000){
                var resList = res_data.data.list;//返回的列表对象
                var total_count = res_data.data.total_count;//返回的总条数
                var listObj = this.listObj;//data里的列表数组
                var page = this.page;//页数
                page++;
                var newListObj = listObj.concat(resList);
                this.listObj = newListObj;
                this.page = page;
                this.total_count = total_count;
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
