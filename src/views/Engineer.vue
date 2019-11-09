<template>
  <div class="engineer">
    <div class="page-title">
      <h3>智能化工</h3>
    </div>
    <div class="page-section df">
      <Tabs />
      <transition name="route" mode="out-in">
        <div class="page-main" :key="currentEngineer.title">
          <h4>{{currentEngineer.title}}</h4>
          {{currentEngineer.paragraph}}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Tabs from "../components/Tabs";
export default {
  name: "engineer",
  components: {
    Tabs
  },
  computed: {
    ...mapState({
      tabs: state => state.engineer.tabs
    }),
    ...mapGetters(["currentEngineer"])
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