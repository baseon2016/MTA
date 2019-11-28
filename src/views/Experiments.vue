<template>
  <div class="experiments">
    <div class="page-title">
      <h3>实验项目</h3>
    </div>
    <div class="page-section df">
      <CollapseTab />
      <transition name="route" mode="out-in">
        <div class="page-main" :key="collapseCurrent.Title">
          <h4>{{ collapseCurrent.Title }}</h4>
          {{ collapseCurrent.Remark }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CollapseTab from "../components/CollapseTab";
export default {
  name: "experiments",
  components: {
    CollapseTab
  },
  computed: {
    ...mapState({
      collapseCurrent: state => state.collapseTabs.collapseCurrent
    })
  },

  methods: {
    ...mapActions(["getExperiments"])
  },
  created() {
    this.getExperiments();
  }
};
</script>

<style></style>
