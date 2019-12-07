<template>
  <div class="science">
    <div class="page-title">
      <h3>科学普及</h3>
    </div>
    <div class="page-section df">
      <Tabs />
      <transition name="route" mode="out-in">
        <div
          class="page-main"
          :key="currentScience.Title"
          v-if="currentScience"
        >
          <h4>{{ currentScience.Title }}</h4>
          {{ currentScience.Remark }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Tabs from "../components/Tabs";
export default {
  name: "science",
  components: {
    Tabs
  },
  computed: {
    ...mapGetters(["currentScience"])
  },

  methods: {
    ...mapActions(["getScience"])
  },
  created() {
    this.getScience();
  }
};
</script>

<style></style>
