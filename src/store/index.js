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
import experiments from "./modules/experiments";
import collapseTabs from "./modules/collapseTabs";
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
    cooperation,
    experiments,
    collapseTabs
  }
});
