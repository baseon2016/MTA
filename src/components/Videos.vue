<template>
  <div class="videos">
    <h4 class="videos-title">{{title}}</h4>
    <div class="videos-wrap">
      <video :src="videoData.src" controls="controls" class="video" :id="videoData.src"></video>
      <div v-if="videoData.info" class="video-info">{{videoData.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videos",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    videoData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
video.video {
  width: 100%;
}
</style>