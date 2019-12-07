import axios from "axios";
import { PUBLICAXIOS } from "../../js/publicUrl";
const experiments = {
  state: {},
  mutations: {},
  actions: {
    getExperiments({ commit }) {
      axios.get(PUBLICAXIOS + "/api/index/getprolist").then(res => {
        console.log(res);

        commit("assignCollapseTabs", res.data.Data);
        commit("assignCollapseCurrent", res.data.Data[0]);
      });
    }
  },
  getters: {}
};
export default experiments;
