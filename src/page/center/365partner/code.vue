<template>
  <div class="wrap">
    
  </div>
</template>

<script>
import { api } from "@/utils/api.js";
import { isWeiXin, getQueryString } from "@/utils/comm.js";
import { mapActions, mapMutations, mapGetters } from "vuex";
import { wxShare } from "@/utils/wx.js";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      isWx: isWeiXin()
    };
  },
  created() {
    wxShare({},()=>{console.log(111)})
  },
  mounted() {},
  methods: {
    ...mapMutations(["updateManager", "updateToken", "updateAccount"]),
    ...mapActions(["updateUser"]),
    getJssdkConfig() {
      let that = this;
    }
  },
  computed: {
    ...mapGetters(["user", "account", "token", "indexUrl"])
  }
};
</script>

<style lang="less" scoped>
</style>
