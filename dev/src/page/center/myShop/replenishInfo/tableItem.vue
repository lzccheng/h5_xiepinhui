<template>
        <div class="stock-panel-item flex flex-align-center" v-if="data">
            <span class="panel-item-lable"><slot></slot></span>
            <div class="over-scroll panel-item-scroll">
                <span
                class="panel-item-stockNum"
                :style="{width: data.width_size + 'px'}"
                v-for="(item_,index_) in data[list]"
                :key="index_">{{itemName(item_)}}</span>
            </div>
        </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: null
        },
        list: {
            type: String,
            default: 'total_storage_list'
        }
    },
    methods: {
        itemName(item){
            return this.list === 'store_storage_list'?item.goods_storage:item;
        }
    }
}
</script>
<style lang="less" scoped>
.stock-panel-item{
  width: 100%;
}
.stock-panel .panel-item-lable {
  display: inline-block;
  font-size: 12/50rem;
  color: #666;
  width: 55/50rem;
  white-space: nowrap;
}
.over-scroll{
  width:60%;
   -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    white-space: nowrap;
}
.panel-item-scroll{
  width: 85%;
}
.panel-item-stockNum {
  display: inline-block;
  width:10%;
  text-align: center;
  font-size: 12/50rem;
  color: #666;
}
</style>


