import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/detalhes/:categoria/:postagem_id",
    name: "detalhes",
    component: () =>
      import(/* webpackChunkName: "detalhes" */ "../pages/DetalhesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
