<template>
  <div class="cooperation">
    <div class="page-title">
      <h3>校企合作</h3>
    </div>
    <div class="page-section df">
      <Tabs />
      <transition name="route" mode="out-in">
        <div
          class="page-main"
          :key="currentCooperation.Title"
          v-if="currentCooperation"
        >
          <h4>{{ currentCooperation.Title }}</h4>
          {{ currentCooperation.Remark }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Tabs from "../components/Tabs";
export default {
  name: "cooperation",
  components: {
    Tabs
  },
  computed: {
    ...mapGetters(["currentCooperation"])
  },

  methods: {
    ...mapActions(["getCooperation"])
  },
  created() {
    this.getCooperation();
  }
};
</script>

<style></style>
