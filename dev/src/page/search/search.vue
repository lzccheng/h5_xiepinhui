<template>
  <div class="search-wrap">
    <scroll @onPullup="onPullupLoading" @onPulldown="onPulldownLoading" height="-97" :list="list">
      <div class="box2">
        <group>
          <div v-if="list.length">
            <project-box :list="list" v-if="origin==='project'"></project-box>
            <entrepreneur-box :list="list" v-if="origin==='entrepreneur'"></entrepreneur-box>
            <enterprise-box :list="list" v-if="origin==='enterprise'"></enterprise-box>
          </div>
          <div v-if="!list.length && !searchVal.length && !isLoading" class="min-box">
            {{searchVal||'输入关键词进行搜索'}}
          </div>
          <load-more v-if="!list.length && searchVal.length && !isLoading" class="min-box" tip="暂无数据" :show-loading="false" background-color="#fbf9fe"></load-more>
          <load-more v-if="!list.length && isLoading" class="min-box" tip="正在加载"></load-more>
        </group>
      </div>
    </scroll>
  </div>
</template>
<script>
import { projectSearch, searchEntrepreneur, institutionsList } from "utils/api";
import projectBox from "./project";
import entrepreneurBox from "./entrepreneur";
import enterpriseBox from "./enterprise";
import scroll from "@/components/vuxscroll";

import {
  Group,
  Cell,
  Scroller,
  LoadMore,
  CellBox,
  Tab,
  TabItem,
  Toast,
  Loading
} from "vux";
export default {
  name: "search",
  components: {
    Group,
    Cell,
    Scroller,
    LoadMore,
    CellBox,
    Tab,
    TabItem,
    Loading,
    projectBox,
    entrepreneurBox,
    enterpriseBox,
    scroll
  },
  props: {
    searchVal: {
      type: String
    },
    origin: {
      type: String,
      default: "project" // entrepreneur enterprise
    }
  },
  data() {
    return {
      height: 0,
      searchConfig: {
        //搜索配置
        keyword: "",
        page: 1,
        pageSize: 20,
        recoTimestamp: new Date().getTime()
      },
      isLoading: false,
      list: [] // 搜索结果列表
    };
  },
  mounted() {
    this.height = document.body.clientHeight;
  },
  watch: {
    async searchVal() {
      this.isLoading = true;
      this.searchConfig.keyword = this.searchVal;
      this.searchConfig.page = 1;
      switch (this.origin) {
        case "project":
          this.list = await this.searchProject();
          break;
        case "entrepreneur":
          this.list = await this.searchEntrepreneur();
          break;
        case "enterprise":
          this.list = await this.searchEnterprise();
          break;
      }
      await setTimeout(() => {
        this.isLoading = false;
      }, 200);
    }
  },
  methods: {
    async searchProject() {
      //搜索项目
      const [err, res] = await projectSearch(this.searchConfig);
      if (err) {
        this.$vux.toast.text(err.message);
      }
      if (res) {
        const { list } = res.data;
        list ? list : [];
        return list;
      }
    },
    async searchEntrepreneur() {
      //搜索创业者
      const [err, res] = await searchEntrepreneur(this.searchConfig);
      if (err) {
        this.$vux.toast.text(err.message);
      }
      if (res) {
        const { list } = res.data;
        list ? list : [];
        return list;
      }
      return;
    },
    async searchEnterprise() {
      //搜索投资企业
      const [err, res] = await institutionsList(
        Object.assign(this.searchConfig, { integrity: 1 })
      );
      if (err) {
        this.$vux.toast.text(err.message);
      }
      if (res) {
        const { list } = res.data;
        list ? list : [];
        return list;
      }
      return;
      console.log("searchEnterprise");
    },
    async onPullupLoading() {
      //上拉加载
      if (this.onFetching) {
        return;
      }
      let newlist = [];
      if (!this.list.length) {
        // 首次防抖
        this.list = [];
        return;
      } else {
        this.onFetching = true;
        this.searchConfig.page++;
        switch (this.origin) {
          case "project":
            newlist = await this.searchProject();
            break;
          case "entrepreneur":
            newlist = await this.searchEntrepreneur();
            break;
          case "enterprise":
            newlist = await this.searchEnterprise();
            break;
        }
        if (!newlist.length) {
          this.$vux.toast.text("暂无更多数据");
        }
        this.list = this.list.concat(newlist);
      }
      await setTimeout(() => {
        this.onFetching = false;
      }, 200);
    },
    async onPulldownLoading() {
      let newlist = [];
      if (!this.list.length) {
        this.list = [];
        return;
      } else {
        this.searchConfig.page = 1;
        switch (this.origin) {
          case "project":
            newlist = await this.searchProject();
            break;
          case "entrepreneur":
            newlist = await this.searchEntrepreneur();
            break;
          case "enterprise":
            newlist = await this.searchEnterprise();
            break;
        }
      }
      await setTimeout(() => {
        this.list = newlist;
        this.$vux.toast.text("刷新成功");
      }, 200);
    }
  },
  beforeDestroy() {
    // 注销
    this.$emit("endSearch");
  },
  destroyed() {
    console.log(`搜索组件注销完成 searchVal: ${this.searchVal.length}`);
  }
};
</script>
<style lang="less" scoped>
.search-wrap {
  margin-top: 3.95rem;
  text-align: center;
  color: #666;
  font-size: 1.5rem;
}
.box2 {
  margin-top: -1.4647059rem;
  min-height: calc(~"100vh - 4.4rem");
}
.min-box {
  min-height: calc(~"100vh - 4.4rem");
  box-sizing: border-box;
  padding-top: 8.4rem;
}
</style>

