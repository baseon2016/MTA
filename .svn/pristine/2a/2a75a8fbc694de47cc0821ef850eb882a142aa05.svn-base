import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
const basics = {
  state: {
    tabs: [
      {
        Id: "1",
        Title: "中心介绍",
        Remark: ""
      }
    ]
  },
  mutations: {
    assignTabs(state, payload) {
      state.tabs = payload;
    }
  },
  actions: {
    getBasics({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getcenterlist").then(res => {
        // console.log(res);
        commit("assignTabs", res.data.Data);
        commit("getCurrent", res.data.Data[0]);
      });
    }
  },
  getters: {
    currentBasics(state, getters) {
      const result = state.tabs.find(item => item.Title === getters.currentTxt);
      // console.log(result);

      return result;
    }
  }
};
export default basics;
