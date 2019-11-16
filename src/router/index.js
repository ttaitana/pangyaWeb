import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Index from "@/views/Index.vue";
import CreateAccount from "@/views/CreateAccount.vue";
import Download from "@/views/Download.vue";
import Dashboard from "@/views/Dashboard.vue";
import UserProfile from "@/views/UserProfile.vue";
import Shop from "@/views/Shop.vue";
import CreateGuild from "@/views/CreateGuild.vue"

import WOW from "wowjs";
import AOS from "aos";
import QueryLoader2 from "queryloader2";
import icheck from "icheck";

AOS.init({
  easing: "ease-out-back",
  duration: 1000
});

var queryloader2 = QueryLoader2(document.querySelector("body"), {
  barColor: "#2d3438",
  backgroundColor: "#d9e9ff",
  percentage: false,
  barHeight: 0,
  completeAnimation: "grow",
  minimumTime: 1000
});

Vue.use(VueRouter);
Vue.use(WOW);
Vue.use(queryloader2);
Vue.use(icheck);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/main",
    name: "index",
    component: Index
  },
  {
    path: "/create_account",
    name: "create_account",
    component: CreateAccount
  },
  {
    path: "/download",
    name: "download",
    component: Download
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfile
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop
  },
  {
    path: "/guild",
    name: "guild",
    component: CreateGuild
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
