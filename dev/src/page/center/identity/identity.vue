<style scoped lang="less">
.content{
    width: 7.5rem;
    background-color: #f8f8f8;
    .head{
        img{
            width: 100%;
        }
    }
    .info{
        background-color: #fff;
        .row{
            border-bottom: 1px solid #eee;
            input{
                border: none;
                margin-left: 0.5rem;
                &::placeholder{
                    color: #999;
                }
            }
            p{
                padding: 0.24rem 0.16rem;
            }
        }
    }
    .idenimg{
        padding: 0.2rem 0.16rem 0.8rem;;
        margin-top: 0.2rem;
        background-color: #fff;
        .face{
            margin-top: 0.3rem;
            width: 7.18rem;
            height: 4.4rem;
            position: relative;
            img{
                width: 7.18rem;
            }
            input{
                width: 7.18rem;
                height: 4.4rem;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 9;
                opacity: 0;
            }
        }
    }
    .protocol{
        padding: 0.3rem 0.3rem;
        .select{
            display: inline-block;
            width: 0.3rem;
            height: 0.3rem;
            padding: 0;
            margin: 0;
            border: 1.5px solid #999;
            border-radius: 5px;
            vertical-align: middle;
        }
        .read{
            color: #999999;
            font-size: 11pt;
            .pro{
                color: #61D8D0
            }
        }
    }
    .btn{
        margin: 0 auto;
        span{
            display: inline-block;
        }
    }
    .icon {
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.1rem;
      border: 1px solid #61d8d0;
      border-radius: 2px;
    }
    .icon.active {
      border: none;
      background: url("~@/assets/images/center/partner/yes.png") no-repeat;
      background-size: contain;
      border: 1.5px solid #61d8d0;
    }
}
</style>
<template>
    <div class="page idnexWrapBox">
        <x-header :left-options="{backText:''}" :title='nav.title' id='vux-header'></x-header>
        <div class="content">
            <div class="head">
                <img src="@/assets/images/center/iden/top.png" alt="">
            </div>
            <div class="info">
                <div class="row flex">
                    <p>真实姓名</p>
                    <p><input placeholder="请输入姓名" v-model="name" type="text"></p>
                </div>
                <div class="row flex">
                    <p>身份证号</p>
                    <p><input placeholder="请输入身份证号码" v-model="idCode" type="text"></p>
                </div>
            </div>
            <div class="idenimg">
                <div>上传身份证</div>
                <div class="face">
                    <img src="@/assets/images/center/iden/face.png" alt="">
                    <input type="file" @change="upimage" id="face">
                </div>
                <div class="face">
                    <img src="@/assets/images/center/iden/back.png" alt="">
                    <input type="file" id="back">
                </div>
            </div>
            <div class="protocol">
                <span class="select icon" :class="isSelect? 'active': ''" @click="changeIsselect"></span>
                <span class="read">我已阅读<span class="pro">《实名认证相关协议》</span></span>
            </div>
            <div class="btn">
                <span @click="submit">确定</span>
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
            isSelect: false,
            idCode: '',
            name: '',
            img1: '',
            img2: ''
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        changeIsselect(){
            this.isSelect = !this.isSelect;
        },
        submit(){
            if(!this.name){
                return this.$vux.toast.text('请输入真实姓名', 'top');
            }
            if(!this.idCode){
                return this.$vux.toast.text('请输入身份证号码', 'top');
            }
            if(!this.img1){
                return this.$vux.toast.text('请上传身份正面', 'top');
            }
            if(!this.img2){
                return this.$vux.toast.text('请上传身份反面', 'top');
            }
            if(!this.isSelect){
                return this.$vux.toast.text('请勾选实名认证相关协议', 'top');
            }

        },
        upimage(e){
            console.log(e.target.files)
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
