<style lang="less" scoped>

.steps-cards {
	width: 100%;
	background: #fff;
	border-radius: 5/50rem;
	padding: 5/50rem 0;
	margin-top: 10/50rem;
}

.steps-cards-content {
	padding: 5/50rem 10/50rem;
	position: relative
}

.steps-cards-content img {
	width: 55/50rem;
	height: 55/50rem;
	margin-right: 10/50rem;
}

.cards-bottom {
	margin-top: 5/50rem;
	padding-top: 5/50rem;
	font-size: 10pt
}

.cards-title {
	font-size:10pt
}

.pColor {
	color: #888
}

.time-small {
	font-size:10pt;
	position: absolute;
	bottom: 0
}

.cards-footer-item {
	padding: 2.5/50rem 10/50rem;
}

.after-card-box {
	background: #fff;
	border-radius: 10/50rem;
	margin-top: 10/50rem;
	text-align: center;
	padding: 10/50rem;
}

.after-card-box img {
	width: 75/50rem;
}

.card-title {
	line-height: 30/50rem;
	font-size: 10pt
}

.card-title-p {
	font-size: 10pt;
	color: #888
}
</style>
<template>
    <div>
        <x-header :left-options="{backText:''}" :title="nvabarData.title" id="vux-header"></x-header>
        <div>
            <div class="steps-cards" v-for="(item,index) in list" :key="index">
                <div class="steps-cards-content  flex ">
                <img mode='widthFix' :src='item.operation_img'/>
                <div class="steps-cards-right">
                    <div class="cards-title">{{item.logo_title}}</div>
                    <div class="pColor time-small">{{item.log_time}}</div>
                </div>
                </div>
                <div class="cards-bottom line_xi_before pColor">
                <div class='cards-footer-item' v-for="(itemlist,index_) in item.log_desc" :key="index_">{{itemlist}}</div>
                </div>
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
            refund_id: "",
            list: "",
            nvabarData: {
                showCapsule: 1, //是否显示左上角图标
                title: '鞋品荟', //导航栏 中间的标题
            },
        }
    },
    created(){
        this.refund_id = this.$route.query.refund_id;
        this.showsteps();
    },
    methods: {
        async showsteps(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                refund_id: this.refund_id
            }
            const [err, res] = await api.refundconsult(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].log_desc = res.data[i].log_desc.split("\\n");
                    res.data[i].log_time = this.getLocalTime(res.data[i].log_time);
                }
                this.list = res.data;
            }
        },
        getLocalTime(nS){
            var time = new Date(nS * 1000);
            var date = (time.getFullYear()) + "-" +
                        (time.getMonth() + 1) + "-" +
                        (time.getDate()) + " " +
                        (time.getHours()) + ":" +
                        (time.getMinutes()) + ":" +
                        (time.getSeconds());
            return date;
        },
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    }
}
</script>


