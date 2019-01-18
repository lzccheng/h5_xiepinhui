<style scoped lang="less">
@color: #61d8d0;
.top{
    padding: .8rem;
    img{
        vertical-align: middle;
    }
    >div{
        white-space: nowrap;
    }
}
.color{
    color: @color;
    margin-left: .2rem;
}
.to{
    color: @color;
    padding: .5rem 0;
    font-size: 12px;
    white-space: nowrap;
    .line{
        border-top: 2px solid #ddd;
        display: inline-block;
        width: 70%;
        position: relative;
        top: -.08rem;
        left: .3rem;
    }
    .span{
        margin-left: .2rem;
        display: inline-block;
    }
    img{
        vertical-align: middle;
        margin-left: .5rem;
    }
    
}
input{
    border: 1px solid #eee;
    border-radius: 5px;
    text-align: center;
    line-height: .6rem;
    font-size: 20px;
    width: 4rem;
}
.color2{
    margin-left: .2rem;
    color: #FFAF34;
}
.btn2{
    border-radius: 5px;
    margin: 0 auto;
}
.tip{
    color: @color;
    font-size: 12px;
    text-align: center;
    padding: .3rem;
}
.vcoin_amount{
    font-size: 12px;
    color: @color;
    text-align: center;
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" title='荟豆兑换' id='vux-header'></x-header>
        <div>
            <div class="top">
                <div>
                    <img src="@/assets/images/new365/huidou.png" alt="">
                    <span class="span">荟豆<span class="color"><input type="num" style="width: 4rem" v-model="vcoin_amount"></span></span>
                    <p class="vcoin_amount">您当前共有{{info.vcoin_amount || 0}}个荟豆</p>
                </div>
                <div class="to">
                    兑换到
                    <div class="line"></div>
                    <img src="@/assets/images/new365/bottomarrow.png" alt="">
                </div>
                <div>
                    <img src="@/assets/images/new365/money.png" alt="">
                    <span class="span">现金<span class="color2">{{money}}元</span></span>
                </div>
            </div>
            <div class="btn btn2" @click="submit">
                <span>立即兑换</span>
            </div>
            <div v-if="info.vcoin_exchange_recharge_rate" class="tip">兑换比例 ( 10荟豆 : {{info.vcoin_exchange_recharge_rate * 10}}元现金 )</div>
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
            info: {},
            vcoin_amount: ''
        }
    },
    created() {
        this.getData();
    },
    mounted() {

    },
    methods: {
        submit(){
            let vcoin_amount = this.vcoin_amount;
            if(vcoin_amount == 0 || !vcoin_amount){
                return this.$vux.toast.text('请输入荟豆数量', 'top');
            }
            let num = Math.floor(vcoin_amount);
            if(vcoin_amount != num){
                return this.$vux.toast.text('请输整数', 'top');
            }
            if(num > Number(this.info.vcoin_amount)){
                return this.$vux.toast.text('荟豆不足', 'top');
            }
            this.handleSubmit();
        },
        async handleSubmit(){
            let data = {
                account: this.account,
                token: this.token,
                vcoin_amount: this.vcoin_amount
            }
            this.$vux.loading.show()
            const [err, res] = await api.smallstoreExchange(data);
            this.$vux.loading.hide()
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.$vux.toast.text(res.msg);
                this.getData();
            }
        },
        async getData(){
            let data = {
                account: this.account,
                token: this.token
            }
            const [err, res] = await api.vcoinexchangepageinfo(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            this.info = res.data;
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token']),
        money(){
            let num = 0;
            let vcoin_amount = this.vcoin_amount;
            if(vcoin_amount && vcoin_amount != 0 && typeof Number(vcoin_amount) === 'number'){
                num = (vcoin_amount*this.info.vcoin_exchange_recharge_rate).toFixed(2);
            }
            return num;
        }
    }
}
</script>
