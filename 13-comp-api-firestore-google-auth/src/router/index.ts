import { firebase } from "@/config/firebase";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BookmarkHome from "../views/BookmarkHome.vue";

const routes: Array<RouteRecordRaw> = [
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
  firebase.auth().onAuthStateChanged((user) => {
    if (!user && to.meta.requiresAuth) next("/logout");
    next();
  });
});

export default router;
