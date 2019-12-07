<template>
  <div class="main">
    <HomeTop />
    <div class="container">
      <transition name="route" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import HomeTop from "../components/HomeTop";
export default {
  name: "main-wrap",
  components: {
    HomeTop
  }
};
</script>
<style >
.route-enter {
  opacity: 0;
}
.route-enter-active {
  transition: all 1s ease;
}
.route-enter-to {
  opacity: 1;
}
.route-leave {
  opacity: 1;
}
.route-leave-active {
  transition: all 0.2s ease;
}
.route-leave-to {
  opacity: 0;
}
</style>