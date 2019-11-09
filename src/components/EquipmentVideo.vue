<template>
  <div class="equipment">
    <Videos title="工艺设备介绍" :videoData="videoData" />
  </div>
</template>

<script>
import Videos from "./Videos";
export default {
  name: "equipment",
  components: {
    Videos
  },
  data() {
    return {
      videoData: {
        src: "#",
        info:
          "      太原理工大学是国家“双一流”重点建设高校，由原太原工业大学和原山西矿业学院合并组建而成。历经117年传承发展，学校业已建设成为以工为主、理工结合、多学科协调发展的高等学府。"
      }
    };
  }
};
</script>

<style>
</style>