import { createRouter, createWebHistory } from "vue-router";
import user from "../views/user.vue";
import shopping from "../views/shopping-cart"
import like from "../views/like"
import wesh from "../views/wesh"
const routes = [
  {
    path: "/",
    name: "user",
    component: user,
  },
  {
    path: "/wesh",
    name: "wesh",
    component: wesh,
  },
  {
    path: "/shopping-cart",
    name: "shopping-cart",
   
    component: shopping
  },
  {
    path: "/like",
    name: "like",
   component: like
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
