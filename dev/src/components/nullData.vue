<style >
.null-bg{
    background-color: #fff;
}
 .null-img1{
    margin-top: 1rem;
}
.null-title{

}
</style>
<template>
    <div>
        <div class="null-bg">
            <img src="@/assets/images/null/null_fan.png" alt="" class="null-img1" style="width: 2.880rem;">
            <div class="null-title">{{text}}<slot></slot></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

