import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import tabs from "./modules/tabs";
import basics from "./modules/basics";
import affairs from "./modules/affairs";
import resources from "./modules/resources";
import science from "./modules/science";
import engineer from "./modules/engineer";
import cooperation from "./modules/cooperation";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    tabs,
    basics,
    affairs,
    resources,
    science,
    engineer,
    cooperation
  }
});
