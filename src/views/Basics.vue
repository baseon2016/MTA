<template>
  <div class="basics">
    <div class="page-title">
      <h3>中心概况</h3>
    </div>
    <div class="page-section df">
      <Tabs />
      <transition name="route" mode="out-in">
        <div class="page-main" :key="currentBasics.title">
          <h4>{{currentBasics.title}}</h4>
          {{currentBasics.paragraph}}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Tabs from "../components/Tabs";
export default {
  name: "basics",
  components: {
    Tabs
  },
  computed: {
    ...mapState({
      tabs: state => state.basics.tabs
    }),
    ...mapGetters(["currentBasics"])
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
.page-title {
  height: 73px;
  border-bottom: 1px solid #002856;
}
.page-title h3 {
  font-size: 24px;
  color: #002856;
  line-height: 73px;
  font-weight: normal;
  text-indent: 26px;
}
.page-main {
  width: 100%;
  font-size: 14px;
  color: #666;
  padding: 10px 30px;
}
.page-main h4 {
  font-size: 24px;
  color: #333;
  text-align: center;
  margin: 40px 0;
}
</style>