import Products from "@/views/Products";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () => import("../views/Product.vue"),
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

export default router;
