<template>
    <div class="text">
        <div class="title" v-html="title"></div>
        <span v-html="text"></span>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '新品上市&nbsp;&nbsp;&nbsp;&nbsp;品质上新'
        },
        text: {
            type: String,
            default: '经典尖货一站购'
        }
    }
}
</script>

<style scoped lang="less">
.text{
    padding: 0.1rem;
    color: #333;
    span{
        font-size: 15px;
    }
    .title{
        font-size: 18px;
        font-weight: bold;
    }
}
</style>

