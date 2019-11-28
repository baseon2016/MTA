import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
const cooperation = {
  state: {
    tabs: [
      {
        Id: "1",
        Title: "校企合作",
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
    getCooperation({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getschlist").then(res => {
        console.log(res);
        commit("assignTabs", res.data.Data);
        commit("getCurrent", res.data.Data[0]);
      });
    }
  },
  getters: {
    currentCooperation(state, getters) {
      const result = state.tabs.find(item => item.Title === getters.currentTxt);
      return result;
    }
  }
};
export default cooperation;
