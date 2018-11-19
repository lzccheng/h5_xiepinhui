<style scoped lang="less">

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
                <div  v-if='!listObj.length'>暂无数据</div>
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
        switch (this.recordType) {
            case 1:
                this.nvabarData.title = '推广365返利';
                break;
            case 2:
                this.nvabarData.title = '线下店铺推广返利';
                break;
            case 3:
                this.nvabarData.title = '推广商品返利';
                break;
        }
        this.fanli_list();
    },
    methods: {
        async fanli_list(){
            let recordType = this.recordType;

            var red_type='';
            switch (recordType){
                case '1':
                    red_type = 5;
                    break;
                case 2:
                    red_type = 2;
                    break;
                case 3: 
                    red_type = 3
                    break;
                default: 
                    console.log(recordType)
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
