<style scoped lang="less">
.bottom{
    border-bottom: 1px solid #eee;
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" title='鞋品荟' id='vux-header'></x-header>
        <div v-if="dataInfo">
            <div class="weui-form-preview">
                <div class="weui-form-preview__hd">
                    <div class="weui-form-preview__item bottom">
                        <div class="weui-form-preview__label">退款金额</div>
                        <div class="weui-form-preview__value_in-hd">¥{{dataInfo.refund_info.refund_amount}}</div>
                    </div>
                </div>
                <div class="weui-form-preview__bd">
                    <div class="weui-form-preview__item">
                        <div class="weui-form-preview__label">退款方式</div>
                        <div class="weui-form-preview__value">{{dataInfo.refund_info.refund_success_desc}}</div>
                    </div>
                    <div class="weui-form-preview__item">
                        <div class="weui-form-preview__label">退款状态</div>
                        <div class="weui-form-preview__value" v-if="dataInfo.setp.length==1">{{dataInfo.setp[0].title}}</div>
                        <div class="weui-form-preview__value" v-if="dataInfo.setp.length==2">{{dataInfo.setp[1].title}}</div>
                        <div class="weui-form-preview__value" v-if="dataInfo.setp.length==3">{{dataInfo.setp[2].title}}</div>
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
            refund_id:"",
            dataInfo:"",
        }
    },
    created() {
        this.refund_id = this.$route.query.refund_id;
        this.show();
    },
    mounted() {

    },
    methods: {
        async show(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                refund_id: this.refund_id
            }
            const [err, res] = await api.refundplace(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.dataInfo = res.data;
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
