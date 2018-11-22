<style lang="less" scoped >
.iframe{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    border: none;
}
</style>
<template>
    <div>
        <x-header :left-options="{backText:''}" title="帮助中心" id="vux-header"></x-header>
        <iframe :style="{height: height + 'px'}" class="iframe" src="https://m.xiepinhui.com.cn/webnine/help?type=app" frameborder="0"></iframe>
    </div>
</template>
<script>
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin ,XSwitch ,Picker } from "vux";
export default {
    components: {
        XHeader
    },
    created(){
        console.log(window.innerHeight)
        this.height = window.innerHeight - 60;
    },
    data(){
        return {
            height: 500
        }
    }
}
</script>

