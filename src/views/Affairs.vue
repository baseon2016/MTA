<template>
  <div class="affairs">
    <div class="page-title">
      <h3>中心动态</h3>
    </div>
    <div class="page-section df">
      <Tabs />
      <transition name="route" mode="out-in">
        <div class="page-main">
          <List :listData="newsList" :maxWidth="700+'px'" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Tabs from "../components/Tabs";
import List from "../components/List";
export default {
  name: "affairs",
  components: {
    Tabs,
    List
  },
  computed: {
    ...mapState({
      tabs: state => state.affairs.tabs,
      newsList: state => state.affairs.newsList
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