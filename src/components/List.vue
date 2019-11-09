<template>
  <div class="list">
    <ul>
      <li v-for="item in listData" :key="item.id" class="df">
        <span class="list-title df" :style="{'max-width':maxWidth}">
          <i>·</i>
          {{item.Title}}
        </span>
        <span class="list-date" v-if="item.createTime">{{item.createTime}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    listData: {
      type: Array,
      required: true
    },
    maxWidth: {
      type: String,
      default: 380 + "px"
    }
  }
};
</script>

<style>
</style>