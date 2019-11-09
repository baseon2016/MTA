<template>
  <div class="list-container">
    <div class="list-container-top df">
      <h3 class="list-title">{{title}}</h3>
      <router-link :to="moreUrl" class="more df" v-if="moreUrl">
        <span>更多</span>
        <img src="../assets/images/more.png" />
      </router-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "list-container",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    moreUrl: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.list-container-top {
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
}
.list-container-top h3.list-title {
  display: block;
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  padding: 0 15px;
  color: #fff;
  background-color: #003262;
  text-align: center;
}
.list-container-top .more {
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.list-container-top .more span {
  font-size: 14px;
  color: #999;
}
.list-container-top .more img {
  display: block;
  margin-left: 7px;
}
</style>