import { createRouter, createWebHistory } from "vue-router";
import { isAuth } from "../shared/auth.service";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/create-event",
    name: "CreateEvent",
    component: () => import("../views/CreateEvent.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/edit-event/:id",
    name: "EditEvent",
    component: () => import("../views/EditEvent.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuth()) next({ name: "Login" });
  else next();
});

export default router;
