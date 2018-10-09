<template>
  <div>
    <x-header :left-options="{backText:''}" title="我的粉丝" id="vux-header"></x-header>
    <div class="top_content_part">
      <div class="summarize_fans_box">
        <div class="txt_fansLi"><span class="txt_fansLiTab">粉丝人数：</span>{{fansContent.fansNumber || 0}}人</div>
        <div class="txt_fansLi"><span class="txt_fansLiTab">粉丝收益：</span>{{fansContent.fanAmount || 0}}元</div>
      </div>
      <div class="bg_invite_box">
        <div class="invite_title_box">邀请好友开通365合伙人</div>
        <div class="invite_tip_box">最高获得180元奖励<span class="icon_row">></span></div>
      </div>
    </div>
    <div class="bottom_content_part">
      <div class="tab_header_nav" id="fix" :style="menuFixed?'about_h':'position: static;'">
        <div class="tabLi">
          <div style="margin:auto;" v-if="fansContent" class="fans_tab" :class=" isTabOne ? 'active_tab' : ''" @click="choseTab">
            我的粉丝({{fansContent.fansNumber || 0}})
          </div>
        </div>
        <div class="tabLi">
          <div style="margin:auto;" v-if="fansContent" class="fans_tab" :class=" isTabTwo ? 'active_tab' : ''" @click="choseTab">
            我邀请的365合伙人({{fansContent.list[1].num || 0}})
          </div>
        </div>
      </div>
      <div class="fans_content_box">
        <!-- 我的粉丝 -->
        <div class="fansContentContainer" v-if="isTabOne">
          <img v-if="listObj.length<=0" :src="'../../../../pages/img/null/null_fan.png'" class="null_bg" />
          <div class="fansContentLi" v-if="listObj" v-for="(item,index) in listObj" :key="index" @click="goFansDetail" :data-fanid="item.member_id">
            <img :src="item.member_avatar" class="avatarPic" />
            <div class="right_part">
              <div class="userInfo">
                <div class="userName">{{item.member_name}}</div>
                <div class="zongxiaofei">总消费:{{item.order_amount}}</div>
              </div>
              <div class="tip_when_fun">
                <div class="binding_box">
                  <div class="timeBind" v-if="item.is_smallshop==0">{{item.add_time}}绑定</div>
                  <div class="timeBind" v-if="item.is_smallshop==1">
                    <div class="style_sign">365</div>985
                  </div>
                  <div class="benefit">收益：{{item.amount}}元</div>
                </div>
                <div class="btnInvite" catchtap="now_invitefun" v-if="item.is_smallshop==0">立即推荐</div>
              </div>
              <div class="explain_part">
                <div class="explainTxt" v-if="item.is_smallshop==0">
                  推荐好友开通365合伙人，我最高可得180元
                </div>
                <div class="explainTxt" v-if="item.is_smallshop==1">
                  {{item.add_time}}开通365合伙人
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- 我的粉丝end -->
        <!-- 我邀请的365合伙人 -->
        <div class="fansContentContainer" v-if="isTabTwo">
          <img v-if="listObj.length<=0" :src="'../../../../pages/img/null/null_fan.png'" class="null_bg" />
          <div class="fansContentLi" v-if="listObj" v-for="(item,index) in listObj" :key="index" @click="goFansDetail" :data-fanid="item.member_id">
            <img :src="item.member_avatar" class="avatarPic"/>
            <div class="right_part">
              <div class="userInfo">
                <div class="userName">{{item.member_name}}</div>
                <div class="zongxiaofei">总消费:{{item.order_amount}}</div>
              </div>
              <div class="tip_when_fun">
                <div class="binding_box">
                  <div class="timeBind">
                    <div class="style_sign">365</div>985
                  </div>
                  <div class="benefit">收益：{{item.amount}}元</div>
                </div>
              </div>
              <div class="explain_part">
                <div class="explainTxt">
                  {{item.add_time}}开通365合伙人
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 我邀请的365合伙人end -->
      </div>
    </div>
    <div class="none_data_box" v-if="show_bottom">
      没有更多数据了
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { api } from "@/utils/api.js";
import { XHeader } from "vux";
export default {
  name: "",
  props: {},
  components: {
    XHeader
  },
  data() {
    return {
      fansContent: "",
      show_bottom: false,
      listObj: ""
    };
  },
  methods: {
    menuFixed() {},
    isTabOne() {},
    choseTab() {},
    isTabTwo() {}
  },
  computed: {
    ...mapGetters(["user", "account", "token"])
  }
};
</script>

<style lang="less" scoped>
.top_content_part {
  padding: 36/100rem 20/100rem;
  color: #9c5c14;
  background: -webkit-linear-gradient(#fff4d3, #fffaf1);
  background: -o-linear-gradient(#fff4d3, #fffaf1);
  background: -moz-linear-gradient(#fff4d3, #fffaf1);
  background: linear-gradient(#fff4d3, #fffaf1);
}
.txt_fansLiTab {
  font-size: 28/100rem;
}
.txt_fansLi {
  font-size: 34/100rem;
}
.bg_invite_box {
  background: #fadba4
    url(http://img.xiepinhui.com.cn/small_app/programOldImgFile/bg_quan_bar.png)
    no-repeat;
  width: 710/100rem;
  height: 142/100rem;
  background-size: 100%;
  margin: auto;
  margin-top: 38/100rem;
  padding: 30/100rem;
  box-sizing: border-box;
}
.invite_title_box {
  font-size: 30/100rem;
}
.invite_tip_box {
  font-size: 24/100rem;
}
.icon_row {
  display: inline-block;
  width: 30/100rem;
  height: 30/100rem;
  border-radius: 50%;
  color: #fff;
  background: #9c5c14;
  text-align: center;
  line-height: 26/100rem;
  margin-left: 4/100rem;
}
.bottom_content_part {
  font-size: 28/100rem;
  color: #333;
  margin-top: 20/100rem;
}
.tab_header_nav {
  width: 100%;
  background: #fff;
  overflow: hidden;
  line-height: 80/100rem;
  border-bottom: 1/100rem solid #efefef;
}
.tab_header_nav .tabLi {
  float: left;
  width: 50%;
  text-align: center;
}
.fans_tab {
  padding-left: 36/100rem;
  padding-right: 36/100rem;
}
.active_tab {
  color: #61d8d0;
  border-bottom: 1/100rem solid #61d8d0;
}
.fansContentLi {
  overflow: hidden;
  padding: 25/100rem 20/100rem;
}
.avatarPic {
  float: left;
  width: 90/100rem;
  height: 90/100rem;
  border-radius: 50%;
  margin-right: 30/100rem;
  margin-top: 16/100rem;
}
.tip_when_fun {
  overflow: hidden;
}
.userName {
  font-size: 28/100rem;
  color: #333;
  float: left;
  width: 170/100rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 56/100rem;
}
.zongxiaofei {
  float: left;
  font-size: 24/100rem;
  color: #666;
}
.binding_box {
  overflow: hidden;
  float: left;
  margin-top: 12/100rem;
}
.timeBind {
  float: left;
  color: #999;
  font-size: 22/100rem;
  margin-right: 56/100rem;
  width: 170/100rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.benefit {
  float: right;
  color: #666;
  font-size: 24/100rem;
}
.btnInvite {
  float: right;
  color: #ecb67b;
  width: 140/100rem;
  line-height: 52/100rem;
  text-align: center;
  border: 1/100rem solid #ecb67b;
  border-radius: 30/100rem;
  font-size: 28/100rem;
}
.explain_part {
  font-size: 22/100rem;
  color: #ecb67b;
}
.none_data_box {
  font-size: 24/100rem;
  color: #999;
  text-align: center;
  margin-top: 28/100rem;
}
.style_sign {
  display: inline-block;
  margin-right: 18/100rem;
  width: 60/100rem;
  text-align: center;
  color: #fff;
  background: #000;
  border-top-left-radius: 20/100rem;
  border-top-right-radius: 10/100rem;
}
.userInfo {
  overflow: hidden;
}
.null_bg {
  width: 50%;
  display: block;
  margin: auto;
}
</style>
