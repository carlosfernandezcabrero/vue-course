import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Heroes from "../views/Heroes.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Heroes",
    component: Heroes,
  },
  {
    path: "/:name",
    name: "Hero",
    component: () => import("../views/Hero.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
