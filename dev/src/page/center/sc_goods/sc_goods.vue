<style scoped lang="less">
.top-header{
  background: #fff;
  line-height:35/50rem;
  font-size: 12pt;
  color: #999;
  position:fixed;
  width: 100%;
  /* top: 0; */
  z-index: 3
}
.sc-bianji{
  position: relative;
  right: 15/50rem;
}
.sc-content{
  padding-bottom: 51/50rem;
}
.sc-list-box:first-of-type{
  margin-top:35/50rem;
}
.sc-list-box{
  width: 100%;
  background: #fff;
  padding-top: 5/50rem;
}
.check-box{
  padding-left: 10/50rem;
  font-size: 12pt;
}
.check-box .item-select{
  font-size:18pt;
}
.item-list-left{
  padding:5/50rem 10/50rem;
  position: relative;
}
.item-list-left img{
  width:100/50rem;
  height:100/50rem;
}
.item-list-right{
  padding-right: 15/50rem;
  width:70%;
  color: #000;
  font-size: 11pt;
  position: relative;
}
.item-list-right-goodsname{
  padding-top:2/50rem;
  height: 50/50rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.item-list-right-pirce{
  height: 50/50rem;
  line-height:90/50rem;
}
.allselect{
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
  background: #fff;
  line-height: 51/50rem;
}
.delete-btn{
  background: #000;
  color: #fff;
  padding: 0 30/50rem;
}
</style>
<template>
    <div class="page">
        <x-header :left-options="{backText:''}" title='我的收藏' id='vux-header'></x-header>
        <div>
            <div class="top-header flex flex-pack-end  line_xi_after">
                <span class="sc-bianji" v-if="isbianji" @click='bianji'>完成</span>
                <span class="sc-bianji" v-else @click='bianji'>编辑</span>
            </div>
            <div class="weui-loadmore" style='margin-top:35px;' v-if="listLoading">
                <div class="weui-loading"></div>
                <div class="weui-loadmore__tips">正在加载</div>
            </div>
            <div v-else :class="isbianji?'sc-content':''" style="padding-top: 0.7rem;">
                <div class="sc-list-box flex " v-for="(item,index) in sc_info" style="margin-top: 0;" :key="index" @click.stop='touchend' :data-index='index' :data-goodsid='item.fav_goods_id' @click='goInfo(item.type,item.fav_goods_id)' :data-type="item.type">
                <div class="check-box flex flex-align-center" @click.stop='switchSelect(index)' :data-index='index' v-if="isbianji">
                    <span class="item-select iconfont" :class="item.isSelect?'icon-live-select':'icon-live-unselect'"></span>
                </div>
                <div class="item-list-left">
                    <img mode='widthFix' :src='item.goods_image'/>
                </div>
                <div class="item-list-right line_xi_after">
                    <div class="item-list-right-goodsname">{{item.goods_name}}</div>
                    <div class="item-list-right-pirce">￥{{item.purchase_price}}</div>
                </div>
                </div>
                <div class="weui-loadmore" v-if="nowLoading">
                <div class="weui-loading"></div>
                <div class="weui-loadmore__tips">正在加载</div>
                </div>
                <div class="loading complete" v-if="upLoadingComplete">已加载全部</div>
                <div class="allselect flex flex-pack-justify" v-if="isbianji">
                <div class="check-box flex flex-align-center" @click='allSelect'>
                    <span class="item-select iconfont" :class="isallSelect?'icon-live-select':'icon-live-unselect'" style='padding-right:5px;'></span> 全选
                </div>
                <div class="delete-btn" @click='qxScgoods'>删除</div>
                </div>
            </div>
            <div style='margin-top:55px; text-align:center' v-if="isNull">暂无收藏商品</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { isScrollBottom } from "@/utils/comm.js";
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { api } from '@/utils/api.js';
import { Group, Cell, XButton, Badge, XHeader } from 'vux';
export default {
    components: {
        XHeader
    },
    data() {
        return {
            sc_info: "",
            listLoading: true,
            isNull: false,
            upLoading: false,
            upLoadingComplete: false,
            page: 2,
            nowLoading: false,
            lock: false,
            isallSelect: false,
            isbianji: false,
        }
    },
    created() {
        this.showSc();
    },
    mounted() {
        this.$nextTick(()=>{
            isScrollBottom(this.onReachBottom);
        })
    },
    destroyed () {
        window.onscroll = null;
    },
    methods: {
        async showSc(){
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                page: 1
            }
            const [err, res] = await api.collectgoodslist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                var isNull;
                if (res.data.list == "") {
                    isNull = true;
                } else {
                    isNull = false;
                }
                for (var i = 0; i < res.data.list.length; i++) {
                    res.data.list[i].isSelect = false;
                }
                this.sc_info = res.data.list;
                this.listLoading = false;
                this.isNull = isNull;
            }
        },
        bianji(){
            this.isbianji = !this.isbianji;
        },
        allSelect(){
            for (var i = 0; i < this.sc_info.length; i++) {
                this.sc_info[i].isSelect = !this.isallSelect;
            }
            this.isallSelect = !this.isallSelect;
            this.sc_info = this.sc_info;
        },
        isallSelectFn(){
            for (let i = 0; i < this.sc_info.length; i++) {
                if(!this.sc_info[i].isSelect){
                    this.isallSelect = false;
                    return;
                }
            }
            this.isallSelect = true;
        },
        switchSelect(index){
            this.sc_info[index].isSelect = !this.sc_info[index].isSelect;
            this.isallSelectFn();
        },
        touchend(){
            if (this.lock) {
                let that = this;
                //开锁
                setTimeout(() => {
                    that.lock = false;
                }, 100);
            }
        },
        goInfo(type,goodsid){
            if (this.lock) {
                return;
            }
            var url = '/index/goodsInfoPindan';
            // if (type == "1") {
            //     url = '/index/goodsInfoPindan/goodsInfoPindan';
            // } else if (type == "2") {
            //     url = '/index/live_goodsinfo';
            // }
            this.$router.push({
                path: url,
                query: {
                    goodsId: goodsid
                }
            })
        },
        async onReachBottom(){
            if(this.upLoadingComplete)return;
            this.nowLoading = true;
            this.upLoading = true;
            let that = this;
            let data = {
                plat: 3,
                account: this.account,
                token: this.token,
                page: this.page
            }
            const [err, res] = await api.collectgoodslist(data);
            if (err) {
                this.$vux.toast.text(err.msg);
                return;
            }
            if(res.code == 2000){
                if (res.data.list != "") {
                    if (that.isallSelect){
                        for (var i = 0; i < res.data.list.length; i++) {
                            res.data.list[i].isSelect = true;
                        }
                    }else{
                        for (var i = 0; i < res.data.list.length; i++) {
                            res.data.list[i].isSelect = false;
                        }
                    }
                    that.sc_info = that.sc_info.concat(res.data.list);
                    that.upLoading = false;
                    that.nowLoading = false;
                    that.page = that.page + 1;
                } else {
                    that.upLoadingComplete = true;
                    that.upLoading = true;
                    that.nowLoading = false;
                }
            }
        },
        qxScgoods(){
            this.lock = true;
            let that = this;
            var selectArry = "";
            for (var i = 0; i < this.sc_info.length; i++) {
                if (this.sc_info[i].isSelect) {
                    if (selectArry == "") {
                        selectArry = this.sc_info[i].fav_goods_id;
                    } else {
                        selectArry = selectArry + "," + this.sc_info[i].fav_goods_id;
                    }
                }
            }
            if (selectArry == "") {
                this.$vux.toast.text('请选择要取消收藏的商品');
                return false;
            }
            this.$vux.confirm.show({
                title: '',
                content: '是否要取消收藏？',
                async onConfirm(){
                    let data = {
                        plat: 3,
                        account: that.account,
                        token: that.token,
                        goods_id: selectArry,
                        type: 2
                    }
                    const [err, res] = await api.cancelcollectgoods(data);
                    if (err) {
                        that.$vux.toast.text(err.msg);
                        return;
                    }
                    if(res.code == 2000){
                        that.$vux.toast.text('取消收藏成功');
                        that.page = 2;
                        that.upLoadingComplete = false;
                        that.isbianji = false;
                        that.showSc();
                    }
                }
            })
        }
    },
    computed: {
        ...mapGetters(['user', 'account', 'token'])
    }
}
</script>
