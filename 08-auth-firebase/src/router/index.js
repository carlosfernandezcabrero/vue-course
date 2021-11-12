import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AuthService from "@/services/AuthService";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { protectedRoute: true },
  },
  {
    path: "/incident/:id",
    name: "EditIncident",
    component: () => import("../views/EditIncident.vue"),
    meta: { protectedRoute: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: { protectedRoute: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //next();
  if (to.meta.protectedRoute) {
    if (AuthService.isAuthenticated(AuthService.state)) {
      next();
    }
    next("/login");
  }
  next();
});

export default router;
