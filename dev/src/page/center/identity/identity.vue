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
                height: 4.4rem;
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
                    <img :src="img1" v-if="img1" alt="">
                    <img src="@/assets/images/center/iden/face.png" v-else alt="">
                    <input type="file" @change="upimage($event, 'img1')" id="face">
                </div>
                <div class="face">
                    <img :src="img2"  v-if="img2" alt="">
                    <img src="@/assets/images/center/iden/back.png" v-else alt="">
                    <input type="file" id="back" @change="upimage($event, 'img2')">
                </div>
            </div>
            <div class="protocol">
                <span class="select icon" :class="isSelect? 'active': ''" @click="changeIsselect"></span>
                <span class="read">我已阅读<span class="pro" @click="$router.push({path: '/centerFull/myshop/noShop',query: {url: 'https://m.xiepinhui.com.cn/html/protocal/protocal.html',title: '实名认证相关协议'}})">《实名认证相关协议》</span></span>
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
            img2: '',
            img1_sn: '',
            img2_sn: '',
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
        async submit(){
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
            let data = {
                account: this.account,
                token: this.token,
                auth_realname: this.name,
                auth_idcardnum: this.idCode,
                auth_idcardpic_front: this.img1_sn,
                auth_idcardpic_back: this.img2_sn,
            }  
            this.$vux.loading.show({
                text: '提交中...'
            }) 
            const [err, res] = await api.authentication(data);
            this.$vux.loading.hide();
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                console.log(res)
                if(res.data.status == 1){
                    this.$vux.toast.text('提交成功', 'top');
                    this.$router.push({
                        path: '/centerFull/identity/identityStatus'
                    })
                }else{
                    this.$vux.toast.text('提交失败', 'top');
                }
            }
        },
        upimage(e, name){
            let that = this;
            let file = e.target.files[0];
            let data = {
                plat: 3,
                token: this.token,
                account: this.account,
                type: 17,
                num: 1
            };
            if (name === "img1") {
                this._ossImg(data, file, name);
                this.img1 = window.URL.createObjectURL(file);
            } else {
                this._ossImg(data, file, name);
                this.img2 = window.URL.createObjectURL(file);
            }
        },
        async _ossImg(data, file, name){
            let that = this;
            const [err, res] = await api.getpaths(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if (res.code == "2000") {
                let config = {
                secure: true,
                // region: window.location.origin,
                accessKeyId: res.data.AccessKeyId,
                accessKeySecret: res.data.AccessKeySecret,
                bucket: res.data.bucket,
                region: 'oss-cn-shenzhen',
                // stsToken: res.data.SecurityToken
                }
                console.log(res)
                console.log(config)
                this.client = new OSS.Wrapper(config);
                // const result = await this.client.list();
                // console.log('result.objects',result.objects)
                this.client
                .multipartUpload(res.data.files, file)
                .then(function(result) {
                    if (name === "img1") {
                    that.img1_sn = res.data.sn;
                    } else {
                    that.img2_sn = res.data.sn;
                    }
                    console.log("result", result);
                })
                .catch(function(err) {
                    console.log("err", err);
                    console.log("err.name : " + err.name);
                    console.log("err.message : " + err.message);
                });
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
