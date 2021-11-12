import store from "@/store";
import BookmarkHome from "@/views/BookmarkHome.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "BookmarkHome",
    component: BookmarkHome,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/bookmark/new",
    name: "SaveBookmark",
    component: () => import("../views/SaveBookmark.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/bookmark/:id",
    name: "EditBookmark",
    component: () => import("../views/EditBookmark.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "RegisterUser",
    component: () => import("../views/RegisterUser.vue"),
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
  const user = store.getters.GET_USER;

  if (Object.keys(user).length === 0 && to.meta.requiresAuth) {
    next({ name: "Logout" });
  } else {
    next();
  }
});

export default router;
