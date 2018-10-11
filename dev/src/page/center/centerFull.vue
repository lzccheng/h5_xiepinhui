<template>
    <div class="center-wrap">
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
  created() {}
};
</script>

<style scoped>
.center-wrap {
  width: 100%;
  min-height: 100%;
}
</style>