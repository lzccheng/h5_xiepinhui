<style scoped lang="less">
.page{
    img{
        width: 100%;
    }
}
</style>
<template>
    <div class="page" :class="{ [className]: className }">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in arrData" :key="index"  :data-index="index" :data-type="item.type" :data-id="item.data">
                <img :src="item.image.image" @click="goToBanner(item)" class="slide-image"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
import "swiper/dist/css/swiper.css";
import "./swiper.less";
export default {
    props: {
        className: {
            type: String,
            default: ''
        },
        arrData: {
            type: Array,
            default: []
        }
    }, 
    components: {
        XHeader
    },
    data() {
        return {
            swiperOption: {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination"
                }
            }
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        goToBanner(item){
            console.log(item)
            // this.$emit('clickImg', item);
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
