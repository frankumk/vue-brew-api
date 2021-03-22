import Vue from "vue";
import VueRouter from "vue-router";
import Breweries from "../views/Breweries.vue";
import Random from "../views/Random.vue";
import Brewery from "../views/Brewery.vue";
import MyList from "../views/MyList.vue";

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
  {
    path: "/brewery/:breweryname",
    name: "Brewery",
    component: Brewery,
    props: true
  },
  {
    path: "/saved",
    name: "SavedList",
    component: MyList,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
