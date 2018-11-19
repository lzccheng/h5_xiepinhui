<template>
    <div class="index-wrap">
        <router-view :key="$route.fullPath"></router-view>
        <bottom v-show="$store.state.comm.bottomShow"></bottom>
    </div>
</template>

<script>
import bottom from "@/components/bottom";

export default {
  name: "index",
  props: {},
  components: {
    bottom
  },
  data() {
    return {};
  },
  created() {},
  mounted () {
    
  },
};
</script>

<style scoped>
.index-wrap {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding-bottom: 1.03rem;
}


</style>