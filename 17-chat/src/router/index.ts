import { USER_COOKIE_NAME } from "@/config/globalVariables";
import { readLocalStorage } from "@/service/localStorageService";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/Chat/Chat.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/Logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!readLocalStorage(USER_COOKIE_NAME)) next({ path: "/" });
    else next();
  } else next();
});

export default router;
