<style lang="less" scoped>

</style>
<template>
    <div>
        <x-header :left-options="{backText:''}" title="补货详情" id="vux-header"></x-header>
        补货详情
    </div>
</template>
<script>
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
    name: "inventoryManage",
    props: {},
    components: {
        XHeader,
        loading
    },
    data(){
        return {

        }
    },
    mounted(){

    },
    created(){

    },
    methods: {

    },
    computed: {
        ...mapGetters(["user", "account", "token"])
    },
}
</script>
