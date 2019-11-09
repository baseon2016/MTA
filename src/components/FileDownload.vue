<template>
  <div class="file-download">
    <IconList :listData="downloadFiles" imgSrc="exe" :hasBtn="true" :maxWidth="700+'px'">
      <template v-slot:subTitle="subTitle">
        <span class="sub-title">{{subTitle.item.remark}}</span>
      </template>
      <template v-slot:fileInfo="fileInfo">
        <div class="item-info df">
          <span>标签:{{fileInfo.item.tag}}</span>
          <span>大小:{{fileInfo.item.size}}</span>
          <span>时间:{{fileInfo.item.createTime}}</span>
          <span class="mg-r-120">{{fileInfo.item.downloadTimes}}下载</span>
        </div>
      </template>
    </IconList>
  </div>
</template>

<script>
import { mapState } from "vuex";
import IconList from "./IconList";
export default {
  name: "file-download",
  components: {
    IconList
  },
  computed: {
    ...mapState({
      downloadFiles: state => state.resources.downloadFiles
    })
  }
};
</script>

<style>
</style>