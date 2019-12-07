import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
const engineer = {
  state: {
    tabs: [
      {
        Id: "1",
        Title: "智能化工",
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
    getEngineer({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getailist").then(res => {
        console.log(res);
        commit("assignTabs", res.data.Data);
        commit("getCurrent", res.data.Data[0]);
      });
    }
  },
  getters: {
    currentEngineer(state, getters) {
      const result = state.tabs.find(item => item.Title === getters.currentTxt);
      return result;
    }
  }
};
export default engineer;
