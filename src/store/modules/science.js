import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
const science = {
  state: {
    tabs: [
      {
        Id: "1",
        Title: "其他工艺的简介",
        Remark: "",
        Createtime: ""
      }
    ]
  },
  mutations: {
    assignTabs(state, payload) {
      state.tabs = payload;
    }
  },
  actions: {
    getScience({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getsciencelist").then(res => {
        console.log(res);
        commit("assignTabs", res.data.Data);
        commit("getCurrent", res.data.Data[0]);
      });
    }
  },
  getters: {
    currentScience(state, getters) {
      const result = state.tabs.find(item => item.Title === getters.currentTxt);
      return result;
    }
  }
};
export default science;
