<template>
    <div class="wrap">
        <router-view></router-view>
        <bottom></bottom>
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
  created() {
    
  }
};
</script>

<style scoped>
.wrap{
  box-sizing: border-box;
  padding-bottom: 1.03rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>