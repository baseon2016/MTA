<template>
  <div class="collapse-tabs">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        v-for="item in collapseTabs"
        :title="item.Title"
        :name="item.Title"
        :key="item.Id"
        class="collapse-tab"
      >
        <div class="collapse-tab-item" @click="switchCollapseTab">
          工艺介绍
        </div>
        <div class="collapse-tab-item">
          实验特色
        </div>
        <div class="collapse-tab-item">虚拟仿真实验介绍</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "collapse-tab",
  data() {
    return {
      activeName: ""
    };
  },
  computed: {
    ...mapState({
      //   collapseCurrent: state => state.collapseTabs.collapseCurrent,
      collapseTabs: state => state.collapseTabs.collapseTabs
    })
  },
  methods: {
    switchCollapseTab() {}
  }
};
</script>

<style>
.collapse-tabs {
  width: 240px;
  flex-shrink: 0;
  background-color: #fff;
}
.collapse-tabs .collapse-tab {
  border-bottom: 1px solid #ededed;
}

.collapse-tabs .el-collapse {
  border-top: 0;
  border-bottom: 0;
}
.collapse-tabs .el-collapse-item__header {
  font-size: 18px;
  color: #333;
  background-color: #fff;
  height: 52px;
  line-height: 52px;
  padding-left: 25px;
  font-weight: normal;
}
.el-collapse-item__header.is-active {
  color: #fff;
  background-color: #002856;
}
.collapse-tab-item {
  font-size: 16px;
  color: #666;
  background-color: #fff;
  cursor: pointer;
  user-select: none;
  line-height: 52px;
  height: 52px;
  padding-left: 25px;
}
</style>
