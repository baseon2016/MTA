import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import Basics from "../views/Basics.vue";
import Affairs from "../views/Affairs.vue";
import Experiments from "../views/Experiments.vue";
import Resources from "../views/Resources.vue";
import Science from "../views/Science.vue";
import Engineer from "../views/Engineer.vue";
import Cooperation from "../views/Cooperation.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "",
        component: Home
      },
      {
        path: "home",
        component: Home
      },
      {
        path: "basics",
        name: "basics",
        component: Basics
      },
      {
        path: "affairs",
        name: "affairs",
        component: Affairs
      },
      {
        path: "experiments",
        name: "experiments",
        component: Experiments
      },
      {
        path: "resources",
        name: "resources",
        component: Resources
      },
      {
        path: "science",
        name: "science",
        component: Science
      },
      {
        path: "engineer",
        name: "engineer",
        component: Engineer
      },
      {
        path: "cooperation",
        name: "cooperation",
        component: Cooperation
      }
    ]
  }
];
const router = new VueRouter({
  routes,
  mode: "hash"
});

export default router;
