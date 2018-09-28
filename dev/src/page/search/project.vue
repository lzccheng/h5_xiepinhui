<template>
  <div>
    <cell-box is-link v-for="item in list" :key="item.id" @click.native="linkTo(item)">
      <div class="project-cell-box">
        <div class="left">
          <img class="img" :src="item.logo">
          <div class="text">
            <p class="name">{{item.name}}</p>
            <p class="financing"><i class="demo-icon icon-history">&#xf1da;</i>{{item.financingStage || '暂无阶段'}}   <i
                      class="demo-icon icon-map-signs">&#xf277;</i>{{item.industryDomain}}</p>
            <p class="financing"><i class="demo-icon icon-user">&#xe803;</i> 
              <span v-if="item.user">{{item.user.name}}</span> 
              <span v-show="projectManageStatus!==0">
                <i class="demo-icon icon-heart">&#xe802;</i> {{item.investorFollow||0}} <i
                class="demo-icon icon-eye">&#xe801;</i> {{item.investorRoadshow||0}} <i
                class="demo-icon icon-hammer">&#xe800;</i> {{item.investorBidding||0}}
              </span>
            </p>
          </div>
        </div>
        <div class="right">
          <p class="text">{{flowStatus(item.flowStatus)}}</p>
        </div>
      </div>
    </cell-box>
  </div>
</template>
<script>
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
  name: "search-project",
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  components: {
    Group,
    Cell,
    LoadMore,
    CellBox,
    Tab,
    TabItem,
    Loading
  },
  data() {
    return {
      projectManageStatus: 0 // 0: 未上线 1: 展示中 2: 融资中 3: 已完成
    };
  },
  methods: {
    linkTo(project) {
      this.$router.push(`/projects/${project.id}/survey`); 
    },
    flowStatus(projectFlowStatus) {
      // 获取状态
      let str;
      switch (projectFlowStatus) {
        case -1:
          str = "上架失败";
          break;
        case 0:
          str = "待上架";
          break;
        case 1:
          str = "上架审核";
          break;
        case 2:
          str = "上架状态";
          break;
        case 3:
          str = "路演状态";
          break;
        case 4:
          str = "竞价状态";
          break;
        case 5:
          str = "竞价完成";
          break;
        case 6:
          str = "下架审核";
          break;
        case 7:
          str = "下架失败";
          break;
        case 8:
          str = "更新审核";
          break;
        case 9:
          str = "更新失败";
          break;
        default:
          str = "项目状态";
          break;
      }
      return str;
    },
    flowPhase(projectFlowPhase) {
      let str;
      switch (projectFlowPhase) {
        case 1:
          str = "下架阶段";
          break;
        case 2:
          str = "上架阶段";
          break;
        case 3:
          str = "路演阶段";
          break;
        case 4:
          str = "竞价阶段";
          break;
        case 5:
          str = "完成阶段";
          break;
        default:
          str = "项目阶段";
          break;
      }
      return str;
    }
  }
};
</script>
<style lang="less" scoped>
.project-cell-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 80%;
    .img {
      float: left;
      width: 5rem;
      height: 5rem;
    }
    .text {
      text-align: left;
      margin-left: 6rem;
      .name {
        color: #000;
        font-size: 1.5rem;
        line-height: 1.8rem;
        margin-bottom: 0.4rem;
      }
      .financing {
        color: #888888;
        font-size: 1.3rem;
        line-height: 1.8rem;
      }
    }
  }
  .right {
    display: flex;
    text-align: right;
    display: -webkit-flex; /* Safari */
    align-items: center; /*指定垂直居中*/
    margin-right: 1.6rem;
    .text {
      font-size: 1.2rem;
      color: #888888;
    }
  }
}
.demo-icon {
  font-family: "legal";
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: 0.2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: 0.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

