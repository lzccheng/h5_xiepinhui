<style lang="less" scoped>

.after-card-box {
	background: #fff;
	border-radius: 10/50rem;
	text-align: center;
	padding: 10/50rem 0/50rem;
  margin: 0/50rem 10/50rem;
	margin-top: 10/50rem;
  
}

.after-card-box img {
	width: 75/50rem;
  height: 75/50rem;
}

.card-title {
	line-height: 30/50rem;
	font-size:10pt;
}

.card-title-p {
	font-size: 9pt;
	color: #888
}
.bg_{
    background: #F8F8F8;
    height: 100%;
}
</style>
<template>
    <div class="bg_">
        <x-header :left-options="{backText:''}" title="申请售后" id="vux-header"></x-header>
        <div class="">
            <div class="after-card-box" v-for="(item,index) in rtypeList" @click='aftersalerInfo(item.value)' :key="index">
                <img :src="item.img"/>
                <div class="card-title">{{item.title}}</div>
                <div class="card-title card-title-p">{{item.desc}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import { Group, Cell, XButton, Badge, XHeader } from "vux";
export default {
    components: {
        XHeader
    },
    data(){
        return {
            rtypeList: "",
            order_id: "",
        }
    },
    created(){
        this.order_id = this.$route.query.order_id;
        this.aftertype();
    },
    mounted(){

    },
    methods: {
        async aftertype(){
            let data = {
                plat: 3
            }
            const [err, res] = await api.rtype(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.rtypeList = res.data;
            }
        },
        aftersalerInfo(index){
            this.$router.push({
                path: 'aftersalerInfo',
                query: {
                    orderid: this.order_id,
                    type: index
                }
            })
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    }
}
</script>


