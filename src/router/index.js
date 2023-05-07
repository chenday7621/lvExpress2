import { createRouter, createWebHistory } from "vue-router";
import Info from "@/views/Info";
const routes = [
  {
    path: "/",
    name: "Info",
    component: Info,
    meta: {
      title: "“绿”箱计划——数据展示"
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
