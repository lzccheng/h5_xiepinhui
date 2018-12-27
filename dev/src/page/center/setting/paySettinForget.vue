<style scoped lang="less">

</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" title='title' id='vux-header'></x-header>
        <div>
            paySettinForget
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

        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
