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
      <div class="tab_header_nav" id="fix">
        <div class="tabLi">
          <div style="margin:auto;" v-if="fansContent" class="fans_tab" :class=" isTabOne ? 'fans_tab active_tab' : 'fans_tab'" @click="choseTab">
            我的粉丝({{fansContent.list[0].num || 0}})
          </div>
        </div>
        <div class="tabLi">
          <div style="margin:auto;" v-if="fansContent" class="fans_tab" :class=" isTabTwo ? 'fans_tab active_tab' : 'fans_tab'" @click="choseTab">
            我邀请的365合伙人({{fansContent.list[1].num || 0}})
          </div>
        </div>
      </div>
      <div class="fans_content_box">
        <!-- 我的粉丝 -->
        <div class="fansContentContainer" v-if="isTabOne">
          <img v-if="listObj.length<=0" src="@/assets/images/null/null_fan.png" class="null_bg" />
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
          <img v-if="listObj.length<=0" src="@/assets/images/null/null_fan.png" class="null_bg" />
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

    <!-- 收益礼包注释 -->
    <div class="incomePicBgBox" @click='incomeModal'></div>
      <!-- 弹窗-->
      <div class="rankModalBox" v-if="showIncomeModal">
          <div class="bg_shadeBox" @click='closeIncomeModal'></div>

          <div class="middle_content_part">
              <div class="bgTopContentBg">
                  <div class="xipinhuiIcon xipinhui-close closeIcon" @click='closeIncomeModal'></div>
                  <div class="headlineTxt">领取奖励</div>
                  <div class="have_benefit_box">累积收益<text class="num_show">{{fansContent.fanAmount || 0}}</text>元</div>
              </div>
              <div class="giftRankBox">
                  <div  class="scrollHeight">
                      <div class="itemGift" v-for="(itemRank,idx) in redBackList" :key="idx">
                          <img src="@/assets/images/firstGift.png" class="giftPic" v-if="idx==0 && itemRank.type==3"/>
                          <img src="@/assets/images/getGift.png" class="giftPic" v-else-if="itemRank.type==3"/>

                          <img src="@/assets/images/failGift.png" class="giftPic" v-else-if="(itemRank.type==1) || (itemRank.type==2)"/>

                          <div class="txtRankNum">{{itemRank.redMoney}}</div>
                      </div>
                  </div>
                  
              </div>
              <div class="content_gift_rank_box">
                  
                  <div class="itemContentCollection">

                      <div v-for="(item,index) in redBackList" :key="index" class="itemContentRank flex flex-align-center flex-pack-justify">
                          <div class="leftPartRank">
                              <div class="txtRank">触发收益达到{{item.redMoney}}</div>
                              <div class="valueRank">
                                  <img src="@/assets/images/gold.png" class="goldPic" mode="widthFix"/>{{item.award}}
                              </div>
                          </div>
                          <div class="aboutProgrss">
                              <div class="progressBgBox">
                                  <div class="hasProgressBg"></div>
                              </div>
                              <div class="progressIndex">{{item.percentage+'%'}}</div>
                          </div>
                          <div class="rightPartRank" v-if="item.type==2" @click='lingquFun'>领取</div>
                          <div class="rightPartRank yilingquBg" v-if="item.type==3">已领取</div>
                          <div class="rightPartRank grayBtnWay" v-if="item.type==1">未激活</div>
                      </div>

                  </div>
                  
              </div>
          </div>

      </div>
      <!-- 弹窗 end-->

      <!-- 领取粉丝消费奖励的弹窗 -->
      <div class="receiveHitBox" v-if="closeComsumeModal">
          <div class="shade_bg"></div>
          <div class="content_yellowModal">
              <div class="top_partBox">
                  <div class="closeMImg">
                      <div class="xipinhuiIcon xipinhui-close closeIcon2" @click="closeReceiveModal"></div>
                  </div>
                  <div class="title_content">你领取了粉丝消费奖励了</div>
              </div>
              <div class="middle_partBox">
                  <div class="contentPart">
                      <div class="p1">你已经领取了</div>
                      <div class="p2">奖励800元</div>
                  </div>
                  <div class="searchBtn">立即查看</div>
              </div>
          </div>
      </div>
      <!-- 领取粉丝消费奖励的弹窗 end-->






  </div>
  
</template>

<script>
var redBackList=[
   //收益红包弹窗数据
    {
      "redMoney": "10000",//触发金
      "award": "800",//奖金
      "percentage": "100",//百分比
      "type": 3 //类型:1未激活 2待领取 3已领取
    },
    {
      "redMoney": "15000",
      "award": "1500",
      "percentage": "62.5",
      "type": 3
    },
    {
      "redMoney": "20000",
      "award": "2000",
      "percentage": "82.5",
      "type": 3
    },
    {
      "redMoney": "25000",
      "award": "2500",
      "percentage": "0",
      "type": 2
    },
    {
      "redMoney": "30000",
      "award": "3000",
      "percentage": "0",
      "type": 1
    },
    
];
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
      show_reward:false,
      isTabOne: true,
      isTabTwo: false,
      menuTop: '',
      listObj: [],
      page: 1,
      type_num:0,
      objData:{},
      showIncomeModal:false,
      fansContent:{
        list:[
          {
            num:0,
          },
          {
            num:0,
          }
        ]
      },
      show_bottom:false,
      redBackList: [],//收益红包弹窗数据
      closeComsumeModal:false
    };
  },
  mounted(){
    this.$nextTick(function() {
      this.fans_list();
      this.fanStatistic();
    });
  },
  methods: {
    incomeModal(){
      this.showIncomeModal=true;
    },
    closeIncomeModal(){
      this.showIncomeModal=false;
    },
    lingquFun(){
      this.closeComsumeModal=true;
    },
    closeReceiveModal() {
      this.closeComsumeModal=false;
    },
    choseTab(e){
      var isTabOne = !(this.isTabOne);
      var isTabTwo = !(this.isTabTwo);
      this.isTabOne=isTabOne;
      this.isTabTwo=isTabTwo;
      
      if (isTabOne) {//如果是我的粉丝

        this.page=0;
        this.listObj=[];
        this.show_bottom=false;
        this.fans_list();
      } else {//如果是邀请排行榜
        this.page=0;
        this.listObj=[];
        this.show_bottom=false;
        this.rank_list();
      }
    },
    async fanStatistic(){
        let data={
          plat: 3,
          account: this.account,
          token: this.token,
        };
        const [err, res] = await api.fancontentstatistic(data);
        if (err) {
          this.$vux.toast.text(err.msg);
          return;
        }else{
          if(res.code==2000){
            this.fansContent=res.data;
            this.redBackList=res.data.redBackList;//;redBackList
            
          }
        }
    },
    async fans_list() {//这个是我的粉丝列表请求方法
      let data={
        plat: 3,
        account: this.account,
        token: this.token,
        page: this.page,
        type:1
      };
      this.page++;
      const [err, res] = await api.storefan1(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
          this.listObj = this.listObj.concat(res.data.list);
          this.total_count=res.data.total_count;
        }
      }
    },
    async rank_list() {//合伙人接口

      let data={
        plat: 3,
        account: this.account,
        token: this.token,
        page: this.page,
        type:2
      };
      this.page++;
      const [err, res] = await api.storefan1(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }else{
        if(res.code==2000){
          this.listObj = this.listObj.concat(res.data.list);
          this.total_count=res.data.total_count;
        }
      }

    },

    goFansDetail(e){
      // console.log(e.currentTarget.dataset.fanid);
      // var fanid = e.currentTarget.dataset.fanid;
      // wx.navigateTo({
      //   url: '../../../User/pages/myNewFansDetail/myNewFansDetail?fanid=' + fanid,
      // });
    },
    


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
.incomePicBgBox{
  width:157/100rem;
  height:118/100rem;
  background:url('http://img.xiepinhui.com.cn/small_app/programOldImgFile/incomeIndex.png') no-repeat;
  background-size: 100%;
  position: fixed;
  top:200/100rem;
  right:0px;
}
.rankModalBox{
  width:100%;
  height: 100%;
  position:fixed;
  top:0px;
}
.bg_shadeBox{
  background:rgba(0, 0, 0, 0.7);
  width:100%;
  height: 100%;
  position: absolute;
}
.progressBgBox{
  width:140/100rem;
  height: 8px;
  background: #ffe5a0;
  border-radius: 4px;
  float: left;
  margin-top:8px;
}
.hasProgressBg{
  width:60/100rem;
  height: 8px;
  background: #FFCC41;
  border-radius: 4px;
}
.progressIndex{
  font-size: 24/100rem;
  color: #FFCC41;
  margin-left: 6px;
  float: left;
  line-height:24/100rem;
}
.aboutProgrss{
  overflow: hidden;
}
.incomePicBgBox{
  width:157/100rem;
  height:118/100rem;
  background:url('http://img.xiepinhui.com.cn/small_app/programOldImgFile/incomeIndex.png') no-repeat;
  background-size: 100%;
  position: fixed;
  top:200/100rem;
  right:0px;
}
.receiveHitBox{
  height:100%;
  overflow:hidden;
  position:fixed;
  top:0px;
  width:100%;
  z-index:999;
}
.shade_bg{
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: absolute;
  width:100%;
}
.content_yellowModal{
  background:#FFCC41;
  width:5rem;
  height: 6rem;
  position: absolute;
  top:50%;
  margin-top:-3rem;
  left:50%;
  margin-left:-250/100rem;
  border-radius: 50/100rem;
  box-shadow:0px 5px 10px 0px rgba(172, 163, 163, 0.5);
}
.closeMImg{
  position: absolute;
  right: 0px;
  top:20/100rem;
}
.closeIcon2{
  color: #fff;
  font-size: 22/100rem;
}
.title_content{
  color: #333333;
  font-size: 28/100rem;
  text-align: center;
  margin-top:74/100rem;
}
.middle_partBox{
  margin-top: 120/100rem;
  text-align: center;
  font-size: 50/100rem;
  color: #CF7B0F;
}
.searchBtn{
  background: #fff;
  text-align: center;
  width:300/100rem;
  line-height: 90/100rem;
  margin:auto;
  font-size: 34/100rem;
  border-radius: 46/100rem;
  margin-top:50/100rem;
}
.bgTopContentBg{
  background: url('http://img.xiepinhui.com.cn/small_app/programOldImgFile/rankHeaderBg.png') no-repeat;
  width:750/100rem;
  height: 359/100rem;
  background-size: 100%;
  position: relative;
}
.closeIcon{
  position: absolute;
  right:0/100rem;
  top:100/100rem;
}
.middle_content_part{
  /* background: linear-gradient(to right,#F4DB53,#EBAA3B); */
  border-radius: 10/100rem;
  position: fixed;
  bottom:0px;
  width:100%;
  z-index: 9;
}
.headlineTxt{
  padding-top:1.7rem;
  text-align: center;
  font-size: 50/100rem;
  color: #333;
  line-height: 50/100rem;
  margin-bottom: 28/100rem;
}
.have_benefit_box{
  color: #fff;
  font-size: 24/100rem;
  line-height: 48/100rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  margin:auto;
  border-radius: 24/100rem;
  width:240/100rem;
}
.num_show{
  color: #FFD45F;
}
.giftPic{
  width:152/100rem;
  display: block;
  margin:auto;
}
.goldPic{
  width: 44/100rem;
  vertical-align: middle;
  margin-right: 16/100rem;
}
.scrollHeight{
  min-height: 188/100rem;
  // display: flex;
  white-space: nowrap;
}
.itemGift{
  display: inline-block;
  width:25%;
  text-align: center;
  color: #fff;
  margin-bottom: 14/100rem;
}
.content_gift_rank_box{
  background: url('http://img.xiepinhui.com.cn/small_app/programOldImgFile/blackBgBenift.png') no-repeat;
  width:750/100rem;
  height: 472/100rem;
  background-size: 100%;
  border-radius: 20/100rem;
  padding: 20/100rem 38/100rem;
  box-sizing: border-box;
  
}
.giftRankBox{
  overflow: scroll;
  background: #fff;
  padding-top:12/100rem;
}
.txtRankNum{
  font-size: 34/100rem;
  line-height: 28/100rem;
  margin-top:12/100rem;
  color: #E3302E;
}
.rightPartRank{
  width:140/100rem;
  height: 70/100rem;
  line-height: 70/100rem;
  text-align: center;
  color: #fff;
  font-size: 30/100rem;
  background: #FCD53A;
  border-radius: 36/100rem;
  padding-right: 0/100rem;
}
.yilingquBg{
  background: #EAD9AD;
}
.txtRank{
  color: #E4D5AD;
  font-size: 28/100rem;
}
.valueRank{
  color: #E4D5AD;
  font-size:28/100rem;
}
.rankLadderBox{
  height: 46/100rem;
  width:612/100rem;
  /* margin:auto; */
  margin-bottom: 36/100rem;
  margin-left:58/100rem;
}
.rankHonorTxt:before{
  content:'';
  position: absolute;
  bottom:-12/100rem;
  width:24/100rem;
  height: 24/100rem;
  background:url('http://img.xiepinhui.com.cn/small_app/programOldImgFile/yellow_quan.png') no-repeat;
  background-size: contain;
}
.rankHonorTxt{
  float: left;
  font-size: 20/100rem;
  color: #E4D5AD;
  width:76/100rem;
  position: relative;
  background:url('http://img.xiepinhui.com.cn/small_app/programOldImgFile/xuxian.png') no-repeat bottom;
  padding-bottom: 16/100rem;
  box-sizing:border-box; 
}
.itemContentCollection{
  clear:both;
  height: 450/100rem;
  overflow-y: scroll;
}
.itemContentRank{
  clear: both;
  height: 132/100rem;
  background: #333333;
  padding:46/100rem 18/100rem 42/100rem 36/100rem;
  box-sizing: border-box;
  border-radius: 16/100rem;
  margin-bottom: 18/100rem;
}
.grayBtnWay{
  background:#777;
}
</style>
