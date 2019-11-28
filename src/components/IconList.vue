<template>
  <div class="list">
    <ul class="list-ul">
      <li v-for="item in listData" :key="item.Id" class="df">
        <div>
          <img
            :src="imgSrc === 'exe' ? exeUrl : imgSrc === 'txt' ? txtUrl : ''"
            alt="下载文件"
            v-if="imgSrc"
          />
          <i v-else>·</i>
        </div>
        <div class="list-title">
          <div class="item-name" :style="{ width: maxWidth }">
            <p class="item-title">{{ item.Title }}</p>
            <slot name="subTitle" :item="item" class="sub-title"></slot>
          </div>
          <slot name="fileInfo" :item="item" class="item-info"></slot>
        </div>
        <span class="list-date" v-if="hasDate">{{ item.createTime }}</span>
        <span class="btn-download" v-if="hasBtn">立即下载</span>
      </li>
    </ul>
  </div>
</template>

<script>
import txtIcon from "../assets/images/txt.png";
import exeIcon from "../assets/images/exeIcon.png";
export default {
  name: "icon-list",
  data() {
    return {
      txtUrl: txtIcon,
      exeUrl: exeIcon
    };
  },
  props: {
    imgSrc: {
      type: String,
      default: ""
    },
    listData: {
      type: Array,
      required: true
    },
    hasBtn: {
      type: Boolean,
      default: false
    },
    hasDate: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: 340 + "px"
    }
  }
};
</script>

<style>
.list {
  font-size: 16px;
  color: #333;
  line-height: 1;
}
.list ul li {
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 18px;
}
.list ul li .list-title {
  align-items: center;
}
.list ul li img,
.list ul li i {
  display: block;
  margin-right: 10px;
}
.list .item-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list .item-title {
  margin-bottom: 10px;
}
.list .sub-title {
  font-size: 14px;
  color: #666;
}
.list .item-info {
  margin-top: 10px;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
}
.list span.list-date {
  font-size: 14px;
  color: #ddd;
}
.list ul.list-ul li:hover,
.list ul.list-ul li:hover .sub-title {
  color: #2a4793;
}
span.btn-download {
  display: block;
  width: 88px;
  font-size: 14px;
  font-weight: bold;
  line-height: 34px;
  color: #fff;
  background-color: #003262;
  border-radius: 17px;
  text-align: center;
}
</style>
