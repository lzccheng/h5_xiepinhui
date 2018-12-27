<style scoped lang="less">
.content{
    .ing{
        text-align: center;
        padding: 0.3rem;
        img{
            display: inline-block;
            width: 4rem;
        }
        .text{
            padding: 0.5rem;
            span{
                font-size: 18px;
                font-weight: bold;
            }
            .spc{
                font-size: 14px;
                color: #666666;
            }
        }
    }
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nav.title' id='vux-header'></x-header>
        <div class="content">
            <div class="ing" v-if="status == 0">
                <img src="@/assets/images/center/iden/ing.png" alt="">
                <div class="text">
                    <span>正在审核中...</span>
                </div>
                <div class="btn">
                    <span @click="$router.push('/center')">返回</span>
                </div>
            </div>
            <div class="ing" v-if="status == 2">
                <img src="@/assets/images/center/iden/actiden.png" alt="">
                <div class="text">
                    <span>实名认证成功</span>
                    <p class="spc">当前账户{{returnTel}}实名认证成功拍摄并上传身份证，可大幅提高账户安全等级和交易收款额度。</p>
                </div>
                <div class="btn">
                    <span @click="$router.push('/center')">完成</span>
                </div>
            </div>
            <div class="ing" v-if="status == 1">
                <img src="@/assets/images/center/iden/fail.png" alt="">
                <div class="text">
                    <span>认证失败</span>
                </div>
                <div class="btn">
                    <span @click="$router.push('/centerFull/identity')">重新认证</span>
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
            nav: {
                title: '实名认证'
            },
            status: 1
        }
    },
    created() {
        
    },
    mounted() {
        this.status = this.$route.query.status || 0;
    },
    methods: {

    },
    computed: {
        returnTel(){
            let tel = this.user.tel;
            return tel.slice(0,3) + '****' + tel.slice(7,11)
        },
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
