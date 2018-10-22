<style lang="less" scoped>

</style>
<template>
    <div class="kucun">
        <x-header :left-options="{backText:''}" title="库存管理" id="vux-header"></x-header>
        <div>
            <div v-for="(item,index) in storeList">{{item.member_name}}</div>
        </div>
        <loading type="type3"></loading>
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
    name: "subStoreList",
    props: {},
    components: {
        loading,
        XHeader
    },
    data(){
        return {
            storeList: [],
            plat: 3,
            page: 1,
            keyword: "",
        }
    },
    created(){
        this.getBarList()
    },
    methods: {
        async getBarList(){
            let that = this;
            let data = {
                plat: this.plat,
                page: this.page,
                token: this.token,
                account: this.account,
                kw: this.keyword
            }
            const [err, res] = await api.sublist(data);
             if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }     
            if(res.code == "2000"){
                if(res.data.list.length > 0){
                    that.storeList = res.data.list;
                    that.sub_member_id = res.data.list[0].sub_member_id;
                }
                that.getgoodslist()
            }
        },
        async getgoodslist(){
            let that = this;
            let data = {
                plat: this.plat,
                account: this.account,
                token: this.token,
                page: this.page,
                kw: this.keyword,
                sub_member_id: this.sub_member_id?this.sub_member_id:''
            }
            const [err, res] = await api.goodslist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == "2000"){
                // console.log(res)
            }
        }
    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    },
}
</script>


