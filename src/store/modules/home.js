import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
const home = {
  state: {
    bannerSwiper: [],
    affairs: [
      {
        NewsId: "",
        Title: "",
        Remark: "",
        Createtime: ""
      }
    ],
    learnResource: [
      {
        id: "1",
        ResId: "",
        Title: "我校获批2019年教育部工程研究中心建设项目",
        Remark: ""
      }
    ],
    downloadFiles: [
      {
        id: "1",
        Title: "环境管理体系（ISO14001） 环境管理体系（ISO14001） "
      }
    ],
    projects: [
      {
        Id: "1",
        Title: "煤基甲醇制芳烃（MTA ）",
        Remark: ""
      }
    ]
  },
  mutations: {
    assignBannerSwiper(state, payload) {
      state.bannerSwiper = payload;
    },
    assignAffairs(state, payload) {
      state.affairs = payload;
    },
    assignDownloadFiles(state, payload) {
      state.downloadFiles = payload;
    },
    assignLearnResource(state, payload) {
      state.learnResource = payload;
    },
    assignProjects(state, payload) {
      state.projects = payload;
    }
  },
  actions: {
    getHomeData({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getImgFile").then(res => {
        // console.log(res);
        commit("assignBannerSwiper", res.data.Data);
      });
      axios.get(PUBLICAXIOS + "/api/index/getnewlist").then(res => {
        // console.log(res);
        commit("assignAffairs", res.data.Data);
      });
      axios.get(PUBLICAXIOS + "/api/index/getfiledownlist").then(res => {
        commit("assignDownloadFiles", res.data.Data);
        // console.log(res);
      });
      axios.get(PUBLICAXIOS + "/api/index/getresourcelist").then(res => {
        // console.log(res);

        commit("assignLearnResource", res.data.Data);
      });
      axios.get(PUBLICAXIOS + "/api/index/getproalllist").then(res => {
        // console.log(res);
        const experiments = res.data.Data.filter(item => item.ParentId === "0");
        commit("assignProjects", experiments);
      });
    }
  },
  getters: {
    affairsL(state) {
      return state.affairs.filter((item, ind) => ind < 6);
    },
    affairsR(state) {
      return state.affairs.filter((item, ind) => ind < 12 && ind >= 6);
    }
  }
};
export default home;
