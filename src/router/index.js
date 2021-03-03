import Vue from "vue";
import VueRouter from "vue-router";
import Breweries from "../views/Breweries.vue";
import Random from "../views/Random.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Breweries",
    component: Breweries
  },
  {
    path: "/random",
    name: "Beer",
    component: Random
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
