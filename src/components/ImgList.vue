<template>
  <div class="list">
    <ul>
      <li v-for="item in listData" :key="item.id" class="df">
        <div class="projects-text po-r">
          <img src="../assets/images/btn.png" alt="下载文件" />
          <span class="po-a">{{item.Title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "img-list",
  props: {
    listData: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.projects-text img {
  display: block;
  width: 100%;
}
.projects-text span {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
</style>