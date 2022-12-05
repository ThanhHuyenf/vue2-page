import {createRouter, createWebHistory} from "vue-router";
import ErrorPage from "@/views/ErrorPage"

const routes = [
  {
    path: "/hihi",
    component: ErrorPage,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});
export default router