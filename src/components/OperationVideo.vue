<template>
  <div class="operation">
    <Videos title="操作视频演示" :videoData="videoData" />
  </div>
</template>

<script>
import Videos from "./Videos";
export default {
  name: "operation",
  components: {
    Videos
  },
  data() {
    return {
      videoData: {
        src: "#"
      }
    };
  }
};
</script>

<style>
</style>