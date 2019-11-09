<template>
  <div class="resources">
    <div class="page-title">
      <h3>实验资源</h3>
    </div>
    <div class="page-section df">
      <Tabs />
      <transition name="route" mode="out-in">
        <div class="page-main" :key="current">
          <OperationVideo v-if="current==='操作视频演示'" />
          <EquipmentVideo v-if="current==='工艺设备介绍'" />
          <FileDownload v-if="current==='文件下载'" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Tabs from "../components/Tabs";
import OperationVideo from "../components/OperationVideo";
import EquipmentVideo from "../components/EquipmentVideo";
import FileDownload from "../components/FileDownload";
export default {
  name: "resources",
  components: {
    Tabs,
    OperationVideo,
    EquipmentVideo,
    FileDownload
  },
  computed: {
    ...mapState({
      tabs: state => state.resources.tabs,
      current: state => state.tabs.current
    })
  },
  methods: {
    ...mapMutations(["assignTabs", "getCurrent"])
  },
  created() {
    this.assignTabs(this.tabs);
    this.getCurrent(this.tabs[0]);
  }
};
</script>

<style>
</style>