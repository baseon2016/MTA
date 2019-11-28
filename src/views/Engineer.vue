<template>
  <div class="engineer">
    <div class="page-title">
      <h3>智能化工</h3>
    </div>
    <div class="page-section df" v-if="currentEngineer">
      <Tabs />
      <transition name="route" mode="out-in">
        <div class="page-main" :key="currentEngineer.Title">
          <h4>{{ currentEngineer.Title }}</h4>
          {{ currentEngineer.Remark }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Tabs from "../components/Tabs";
export default {
  name: "engineer",
  components: {
    Tabs
  },
  computed: {
    ...mapGetters(["currentEngineer"])
  },

  methods: {
    ...mapActions(["getEngineer"])
  },
  created() {
    this.getEngineer();
  }
};
</script>

<style></style>
