<template>
  <div class="home mg-t-20 df">
    <div class="home-content">
      <div class="swiper po-r">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in bannerSwiper" :key="item.Id">
            <div class="swiper-item">
              <img :src="$publicUrl + item.FilePath" alt="太原理工大学" />
            </div>
          </swiper-slide>
        </swiper>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
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
              <template v-slot:fileInfo="slotProps">
                <div class="item-info df">
                  <span>标签:{{ slotProps.item.Tags }}</span>
                  <span
                    >{{
                      slotProps.item.DownCount ? slotProps.item.DownCount : 0
                    }}
                    下载</span
                  >
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
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      }
    };
  },
  components: {
    ListContainer,
    List,
    IconList,
    ImgList
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    ...mapState({
      bannerSwiper: state => state.home.bannerSwiper,
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
.home {
  padding-bottom: 30px;
}
.home-content {
  width: 810px;
}
.swiper-item {
  width: 100%;
}
.swiper-slide img {
  display: block;
  width: 100%;
}
.swiper-pagination {
  bottom: 5px;
  right: 14px;
}
.my-bullet {
  width: 6px;
  height: 6px;
  margin-left: 6px;
  display: inline-block;
  border-radius: 100%;
  background: #fff;
  opacity: 0.2;
}

.my-bullet-active {
  opacity: 1;
  background: #fff;
}
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
