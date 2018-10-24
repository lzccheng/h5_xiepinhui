<style lang="less" scoped>
.add-item {
  padding: 10/50rem;
  background: #fff;
}

.add-item-lable {
  font-size: 15/50rem;
  color: #333;
}
.add-item-right {
  width: 50%;
}
.logo {
  width: 45/50rem;
  height: 45/50rem;
  border-radius: 100%;
}

.LogoErro {
  background: #d8d8d8;
}

.icon-right-jiantou {
  font-size: 14/50rem !important;
  color: #999;
  padding-left: 5/50rem;
}

.add-item-title {
  color: #666;
  line-height: 40/50rem;
  font-size: 15/50rem;
  text-align: right;
}

.add-account-tip {
  padding: 20/50rem 10/50rem;
  padding-right: 40/50rem;
  font-size: 14/50rem;
  color: #999;
}

.suspension-btn {
  position: fixed;
  width: 100%;
  line-height: 51/50rem;
  font-size: 16/50rem;
  bottom: 0;
  text-align: center;
  color: #fff;
  background: rgba(97, 216, 208, 1);
  box-shadow: 0px 0px 0px 0px rgba(230, 230, 230, 0.5);
  z-index: 9;
}

.select-masker {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
}

.select-model {
  position: absolute;
  width: 80%;
  // height: 192px;
  background: #fff;
  border-radius: 5px;
  top: 200/50rem;
  // bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.model-title {
  width: 90%;
  margin: auto;
  text-align: center;
  line-height: 44/50rem;
  font-size: 16/50rem;
  font-weight: bold;
}
.model-body {
  padding: 20/50rem 0;
}
.model-body-option {
  width: 50%;
  text-align: center;
  position: relative;
}

.model-body-option .iconfont {
  font-size: 24/50rem;
}

.option-title {
  font-size: 11/50rem;
}
.model-foot {
  line-height: 51/50rem;
  text-align: center;
  font-size: 16/50rem;
  color: #61d8d0;
}
.add-item-right input{
  border:none;
}
.model-body-option input[type="file"]{
  opacity: 0;
}
.paizhao{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
input[type="number"]:disabled,{
  background-color:#fff;
}
</style>

<template>
  <div class="shopindex">
    <x-header :left-options="{backText:''}" title="店铺设置" id="vux-header"></x-header>
    <!-- 主体内容 storeList-->
    <div class="select-masker " v-if="selectModelStatus" @click='hideSelectModel'>
      <div class="select-model" catchtap="prevent">
        <div class="model-title line_xi_after">选择头像</div>
        <div class="model-body df fpj line_xi_after">
          <div class="model-body-option" bindtap='ChooseImage' data-type="album">
            <div class="iconfont icon-tupian"></div>
            <input type="file" accept="image/*" @change.stop="upimg($event,'img1')" id="" class="paizhao"><!-- $event,'img1' -->
            <div class="option-title">从相册选择</div>
          </div>
          <div class="model-body-option" bindtap='ChooseImage' data-type="camera">
            <div class="iconfont icon-paizhao"></div>
            <input type="file" accept="image/*" capture="camera" @change.stop="upimg($event,'img1')" id="" class="paizhao">
            <div class="option-title">拍照</div>
          </div>
        </div>
        <div class="model-foot" @click='hideSelectModel'>知道了</div>
      </div>
    </div>
    <div class="add-account">
      <div class="add-item df fac fpj line_xi_after">
        <span class="add-item-lable">店铺LOGO</span>
        <div class="add-item-right df fac fpe" @click='selectImage'>
          <img  class="logo LogoErro" v-if="!img1"/>
          <img :src="img1" alt="" class="logo" v-else>
          <span class="iconfont icon-right-jiantou"></span>
        </div>
      </div>
      <div class="add-item df fac fpj line_xi_after">
        <span class="add-item-lable">店铺名称</span>
        <div class="add-item-right df fac">
          <input class="add-item-title" v-model="shopStr" data-type='shop_name' placeholder='请输入店铺名称' placeholder-style="color:#999"/>
          <span class="iconfont icon-right-jiantou"></span>
        </div>
      </div>
      <div class="add-item df fac fpj line_xi_after">
        <span class="add-item-lable">店长名称</span>
        <div class="add-item-right df fac">
          <span class="add-item-title"></span>
          <input class="add-item-title" v-model="shopOwnerStr" data-type='real_name' placeholder='请输入店长名称' placeholder-style="color:#999"/>
          <span class="iconfont icon-right-jiantou"></span>
        </div>
      </div>
      <div class="add-item df fac fpj line_xi_after">
        <span class="add-item-lable">店长手机</span>
        <div class="add-item-right df fac">
          <input class="add-item-title" disabled v-model="shopTel" data-type='tel' maxlength="13" type="number" placeholder='请输入店长手机' placeholder-style="color:#999"/>
          <span class="iconfont icon-right-jiantou"></span>
        </div>
      </div>
    </div>
    <div class="add-account-tip">
      <div>初始密码为
        <span style='color:#61D8D0'>123456</span>，请通知员工自行修改.
      </div>
      <div>
        添加子账号的手机号码必须填写为线下合伙人手机号码， 末尾添加两位数字(如新增1号店添加手机号码格式为： 1328586031201)
      </div>
    </div>
    <div class="suspension-btn" @click='getUploadInfo'>确定</div>
    

    <!-- 主体内容end -->
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { api } from "@/utils/api.js";
import loading from "@/components/loading.vue";
import { Group, Cell, XButton, Badge, XHeader, ConfirmPlugin } from "vux";
export default {
  name: "subStoreList",
  props: {},
  components: {
    Group,
    Cell,
    XButton,
    Badge,
    XHeader,
    loading
  },
  data() {
    return {
      storeList: [],
      store_list_page: 1,
      fanShow_bottom: false,
      loading_bottom: false,
      selectModelStatus:false,
      img1:false,
      img1_sn:'',
      shopStr:'',
      shopOwnerStr:'',
      shopTel:''
    };
  },
  created() {
    
  },
  mounted(){
    this.img1=this.user.avatar;
    this.shopStr=this.$store.state.center._storeInfo.shop_name;
    this.shopOwnerStr=this.$store.state.center._storeInfo.real_name;
    this.shopTel=this.user.tel;
    
  },
  methods: {
    
    selectImage() {
      this.selectModelStatus=true;
    },
    hideSelectModel(){
      this.selectModelStatus=false;
    },
    upimg(e,name){
      let that=this;
      let file=e.target.files[0];
      let data={
        plat: 3,
        token: this.token,
        account: this.account,
        type: 17,
        num: 1
      };
      if(name=='img1'){
        this._ossImg(data, file, name);
        this.img1=window.URL.createObjectURL(file);
      }
    },
    // 上传图片到阿里云
   async _ossImg(data, file, name) {//async 
      const [err, res] =await api.getpaths(data);//await 
      console.log('上传图片到阿里云res：',res)
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      if (res.code == "2000") {
        this.client = new OSS.Wrapper({//连接阿里云存储
          region:'oss-cn-shenzhen',
          //secure: true,
          accessKeyId: 'LTAIUw12WNr8VYLU',
          accessKeySecret: res.data.AccessKeySecret,
          bucket:res.data.bucket //res.data.bucket
        });
        console.log('img1_sn',res.data.sn);
        console.log('name',name);
        console.log(this.client)
        this.client
          .multipartUpload(res.data.files, file)
          .then(function(result) {
            if (name === "img1") {
              this.img1_sn = res.data.sn;
              console.log('this.img1_sn',this.img1_sn);
            }
            console.log("result", result);
          })
          .catch(function(err) {
            console.log("err", err);
          });
      }
    },
    async getUploadInfo(){
      console.log('getUploadInfo',this.shopStr);
      var that=this;
      var shopStr=this.shopStr;
      var shopOwnerStr=this.shopOwnerStr;
      var shopTel=this.shopTel;
      var img1=this.img1;
      var shopId=this.$route.query.sub_member_id;
      console.log(shopId);
      console.log('this.img1_sn',this.img1_sn);
      if(!img1){
        this.$vux.toast.text('请设置店铺LOGO');
        return;
      }else if(!shopStr){
        this.$vux.toast.text('请填写店铺名称');
        return;
      }else if(!shopOwnerStr){
        this.$vux.toast.text('请填写店长名称');
        return;
      }else if(!shopTel){
        this.$vux.toast.text('请填写店长手机号');
        return;
      }
      this.$vux.loading.show({
        text: '添加中...'
      });

      let data={
        plat: 3,
        token: this.token,
        account: this.account,
        sn: this.img1_sn,
        shop_name: shopStr,
        real_name: shopOwnerStr,
        tel: shopTel,
        sub_member_id:shopId
      };
      const [err, res] = await api.editStoreInfo(data);
      if (err) {
        this.$vux.toast.text(err.msg);
        return;
      }
      if (res.code == "2000") {
        console.log('成功2000')
      }
      
    },
    
  },
  filters: {},
  computed: {
    ...mapGetters(["user", "account", "token"])
  },
  
};
</script>
