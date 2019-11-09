<template>
  <div class="science">
    <div class="page-title">
      <h3>科学普及</h3>
    </div>
    <div class="page-section df">
      <Tabs />
      <transition name="route" mode="out-in">
        <div class="page-main" :key="currentScience.title">
          <h4>{{currentScience.title}}</h4>
          {{currentScience.paragraph}}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Tabs from "../components/Tabs";
export default {
  name: "science",
  components: {
    Tabs
  },
  computed: {
    ...mapState({
      tabs: state => state.science.tabs
    }),
    ...mapGetters(["currentScience"])
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