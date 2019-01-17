<style scoped lang="less">
.top{
    img{
        width: 100%;
        display: inline-block;
        border: none;
    }
    .info{
        position: absolute;
        left: 0;
        top: 2.3rem;
        width: 100%;
        text-align: center;
        color: #584719;
        p{
            &:first-child{
                font-weight: bold;
                font-size: 18px;
            }
            &:last-child{
                font-size: 14px;
                margin-top: 0.5rem;
            }
        }
    }
}
.privilege{
    .title{
        text-align: center;
        .text{
            color: #1C4643;
            font-size: 18px;
            font-weight: bold;
            img{
                &:last-child{
                    transform: rotateY(180deg);
                }
            }
        }
        .say{
            float: right;
            font-size: 12px;
            color: #666666;
            img{
                width: .35rem;
                vertical-align: middle;
                margin-left: .06rem;
                position: relative;
                top: -.05rem;
            }
        }
    }
    .privilegeList{
        padding: 0.25rem 0;
        .privilegeItem{
            display: inline-block;
            width: 20%;
            text-align: center;
            img{
                width: 0.8rem;
                height: .8rem;
                display: inline-block;
                margin: 0 auto;
            }
            .item{
                flex-direction: column;
                font-size: 12px;
                color: #999999;
                white-space: nowrap;
            }
        }
    }
}
.pad25{
    padding: 0 0.25rem;
}
.line{
    height: 0.15rem;
    background-color: #f8f8f8;
}
._title{
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding-top: 0.2rem;
    img{
        width: 0.16*2rem;
        vertical-align: middle;
    }
}
._text{
    color: #666;
    font-size: 14px;
    text-align: center;
}
.discount{
    .discountContent{
        img{
            width: 100%;
        }
    }
}
.welfare{
    .welfareList{
        flex-wrap: wrap;
        padding-bottom: 0.2rem;
    }
    .welfareItem{
        width: 50%;
        display: inline-block;
        padding: 0.1rem 0;
        .bg{
            width: 1.68*2rem;
            height: 0.65*2rem;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            color: #666;
            .value{
                font-size: 24px;
                font-weight: bold;
            }
            .ico{
                font-size: 12px;
                position: relative;
                top: -.2rem;
                left: .1rem;
            }
            div{
                &:first-child{
                    width: 1.3rem;
                    line-height: 0.65*2rem;
                    text-align: center;
                }
                &:last-child{
                    width: cale(100% - 1.3rem);
                    line-height: 0.65*2rem;
                    text-align: center;
                    font-size: 14px;
                }
            }
        }
    }
}
.btnimg{
    text-align: center;
    img{
        width: 7.19rem;
        display: inline-block;
        margin: 0.3rem auto 0.1rem;;
    }
    
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" :title='nav.title' id='vux-header'></x-header>
        <div v-if="info">
            <div class="top">
                <!-- <img src="@/assets/images/new365/header.png" alt="">
                <img src="@/assets/images/new365/top2.png" alt="">
                <img src="@/assets/images/new365/top3.png" alt="">
                <img src="@/assets/images/new365/top4.png" alt=""> -->
                <img src="@/assets/images/new365/header.png" alt="">
                <div class="info">
                    <p>{{info.header.module_name}}</p>
                    <p>多邀多得</p>
                </div>
            </div>
            <div class="privilege pad25">
                <p class="title">
                    <span class="text"><img src="@/assets/images/new365/icon.png" alt="">{{info.privileges.module_name}}<img src="@/assets/images/new365/icon.png" alt=""></span>
                    <span class="say">特权说明<img src="@/assets/images/photo.png" alt=""></span>
                </p>
                <div class="privilegeList">
                    <div class="privilegeItem" @click.stop="gotoPrivilege(item.privilege_id)" v-for="(item, i) in info.privileges.list" :key="i">
                        <div class="item flex">
                            <img :src="item.icon" alt="">
                            <span>{{item.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="welfare pad25">
                <p class="_title">
                    <span><img :src="info.welfare.icon" alt=""></span>
                    <span>{{info.welfare.module_name}}</span>
                </p>
                <p class="_text">
                    {{info.welfare.module_desc}}
                </p>
                <div class="welfareList flex">
                    <div class="welfareItem" v-for="(item, i) in info.welfare.list" :key="i">
                        <div class="bg flex" :style="{backgroundImage: `url(${item.icon})`}">
                            <div>
                                <span class="ico">￥</span>
                                <span class="value">{{item.value}}</span>
                            </div>
                            <div>{{item.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="discount">
                <p class="_title">
                    <span><img :src="info.commission.icon" alt=""></span>
                    <span>{{info.commission.module_name}}</span>
                </p>
                <p class="_text">
                    {{info.commission.module_desc}}
                </p>
                <div class="discountContent">
                    <img :src="info.commission.content_image.image" alt="">
                </div>
            </div>
            <div class="line"></div>
            <div class="discount">
                <p class="title _title">
                    <span><img :src="info.discount.icon" alt=""></span>
                    <span>{{info.discount.module_name}}</span>
                </p>
                <p class="_text">
                    {{info.discount.module_desc}}
                </p>
                <div class="discountContent">
                    <img :src="info.discount.content_image.image" alt="">
                </div>
            </div>
            <div class="line"></div>
            <div class="btnimg">
                <img src="@/assets/images/new365/btn.png" @click="$router.push('code')" alt="">
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
        XHeader,
            },
    data() {
        return {
            nav: {
                title: '365小店'
            },
            info: null
        }
    },
    created() {
        this.getData();
    },
    mounted() {

    },
    methods: {
        gotoPrivilege(privilege_id){
            ///centerFull/partner/privilege
            this.$router.push({
                path: 'privilege',
                query: {
                    index: privilege_id
                }
            })
        },
        async getData(){
            let data = {
                account: this.account,
                token: this.token
            }
            this.$vux.loading.show({
                text: '加载中...'
            })
            const [err, res] = await api.smallstoreIntroduce(data);
            this.$vux.loading.hide();
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                this.info = res.data;
            }
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
