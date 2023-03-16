import { Routes } from "@/utils/constants";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    alias: Routes.HOME,
  },
  {
    path: Routes.SHOP,
    name: "shop",
    component: () => import("../views/ShopView.vue"),
  },
  {
    path: Routes.CONTACT,
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: Routes.CART,
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: Routes.DETAIL,
    name: "detail",
    component: () => import("../views/DetailView.vue"),
  },
  {
    path: Routes.LOGIN,
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: Routes.SEARCH,
    name: "search",
    component: () => import("../views/SearchView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app")?.scrollIntoView();
  },
});

export default router;
