import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
const experiments = {
  state: {},
  mutations: {},
  actions: {
    getExperiments({ commit }, payload) {
      axios.get(PUBLICAXIOS + "/api/index/getproalllist").then(res => {
        let collapseTabs = res.data.Data.filter(item => item.ParentId === "0");
        collapseTabs = collapseTabs.map(item => {
          item.tabItems = res.data.Data.filter(
            ele => ele.ParentId === item.ResProId
          );
          return item;
        });
        commit("assignCollapseTabs", collapseTabs);
        if (payload) {
          const currentTab = collapseTabs.find(item => item.Id == payload);
          commit("assignCollapseCurrent", currentTab);
        } else {
          commit("assignCollapseCurrent", collapseTabs[0]);
        }
      });
    }
  },
  getters: {}
};
export default experiments;
