<template>
  <div class="home mg-t-20 df">
    <div class="home-content">
      <div class="banner">
        <img src="../assets/images/banner.png" alt />
      </div>
      <div class="affair-list">
        <ListContainer title="中心动态" moreUrl="#">
          <div class="df">
            <List :listData="affairsL"></List>
            <List :listData="affairsR" class="mg-l-40"></List>
          </div>
        </ListContainer>
      </div>
      <div class="mg-t-40 df">
        <div class="home-download">
          <ListContainer title="文件下载" moreUrl="#">
            <IconList :listData="downloadFiles" imgSrc="txt">
              <template v-slot:fileInfo>
                <div class="item-info df">
                  <span>标签:表格</span>
                  <span>7 下载</span>
                </div>
              </template>
            </IconList>
          </ListContainer>
        </div>
        <div class="home-learn mg-l-40">
          <ListContainer title="学习资源" moreUrl="#">
            <List :listData="learnResource"></List>
          </ListContainer>
        </div>
      </div>
    </div>
    <div class="home-aside mg-l-40">
      <div class="platform-entrance">
        <img src="../assets/images/entrance.png" alt />
      </div>
      <div class="projects mg-t-40">
        <ListContainer title="实验项目">
          <ImgList :listData="projects"></ImgList>
        </ListContainer>
      </div>
    </div>
  </div>
</template>

<script>
import ListContainer from "../components/ListContainer";
import List from "../components/List";
import IconList from "../components/IconList";
import ImgList from "../components/ImgList";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    ListContainer,
    List,
    IconList,
    ImgList
  },
  computed: {
    ...mapState({
      learnResource: state => state.home.learnResource,
      downloadFiles: state => state.home.downloadFiles,
      projects: state => state.home.projects
    }),
    ...mapGetters(["affairsL", "affairsR"])
  },
  methods: {
    ...mapActions(["getHomeData"])
  },
  created() {
    this.getHomeData();
  }
};
</script>

<style>
.home-aside {
  margin-left: 40px;
}
.affair-list {
  margin-top: 40px;
}
.home-download,
.home-learn {
  width: 50%;
}
</style>
