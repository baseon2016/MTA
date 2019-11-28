import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
import common from "../../js/common";
const affairs = {
  state: {
    tabs: [
      {
        Id: "1",
        Title: "新闻动态列表"
      }
    ],
    newsList: [
      {
        Id: "1",
        Title: "我校获批2019年教育部工程研究中心建设项目",
        Remark: "",
        Createtime: "2019-08-06"
      }
    ]
  },
  mutations: {
    assignNewsList(state, payload) {
      state.newsList = payload;
    }
  },
  actions: {
    getAffairs({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getnewlist").then(res => {
        const showList = res.data.Data.map(item => {
          const newItem = {
            ...item,
            Createtime: common.transDate(item.Createtime)
          };
          return newItem;
        });
        commit("assignNewsList", showList);
      });
    }
  },
  getters: {}
};
export default affairs;
