<template>
  <div class="cooperation">
    <div class="page-title">
      <h3>校企合作</h3>
    </div>
    <div class="page-section df">
      <Tabs />
      <transition name="route" mode="out-in">
        <div class="page-main" :key="currentCooperation.title">
          <h4>{{currentCooperation.title}}</h4>
          {{currentCooperation.paragraph}}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Tabs from "../components/Tabs";
export default {
  name: "cooperation",
  components: {
    Tabs
  },
  computed: {
    ...mapState({
      tabs: state => state.cooperation.tabs
    }),
    ...mapGetters(["currentCooperation"])
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