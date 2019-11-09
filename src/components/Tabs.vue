<template>
  <div class="tabs">
    <div v-for="item in tabs" :key="item.id" class="tab">
      <span :class="{'active':item.txt===current}" @click="switchTab(item)">{{item.txt}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "tabs",
  computed: {
    ...mapState({
      current: state => state.tabs.current,
      tabs: state => state.tabs.tabs
    })
  },
  methods: {
    ...mapMutations(["getCurrent", "clearCurrent", "assignTabs"]),
    switchTab(item) {
      if (item.txt !== this.current) {
        this.clearCurrent();
        this.getCurrent(item);
        this.$emit("clickTab");
        this.$common.slideTo(0);
      }
    }
  }
};
</script>

<style>
.tabs {
  width: 240px;
  flex-shrink: 0;
  background-color: #fff;
}
.tabs .tab {
  border-bottom: 1px solid #ededed;
}
.tabs span {
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  line-height: 52px;
  text-align: center;
  color: #333;
  background-color: #fff;
  cursor: pointer;
  user-select: none;
}
.tabs span.active,
.tabs span:hover {
  color: #fff;
  font-weight: bold;
  background-color: #002856;
}
</style>