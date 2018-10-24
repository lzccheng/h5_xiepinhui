<style >

</style>
<template>
    <div>
        <div class="null-bg">
            <img src="@/assets/images/null/null_fan.png" alt="" class="null-img">
            <div class="null-title">{{text}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: '当前暂无数据'
        }
    }
}
</script>

