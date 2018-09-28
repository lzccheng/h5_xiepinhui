<template>
    <div class="wrap">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: "index",
  props: {},
  components: {
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
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>