<template>
  <div class="operation" v-if="operationVideos.length">
    <Videos title="操作视频演示" :videoData="operationVideos[0]" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Videos from "./Videos";
export default {
  name: "operation",
  components: {
    Videos
  },

  computed: {
    ...mapState({
      operationVideos: state => state.resources.operationVideos
    })
  },
  methods: {
    ...mapActions(["getOperationVideos"])
  },
  created() {
    this.getOperationVideos();
  }
};
</script>

<style></style>
