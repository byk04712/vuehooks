import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    redirect: "/normal",
  },
  {
    path: "/normal",
    component: () => import("../pages/normal.vue"),
  },
  {
    path: "/normalWithHandleError",
    component: () => import("../pages/normalWithHandleError.vue"),
  },
  {
    path: "/useSelectHook",
    component: () => import("../pages/useSelectHook.vue"),
  },
  {
    path: "/useAutoRequestHook",
    component: () => import("../pages/useAutoRequestHook.vue"),
  },
  {
    path: "/skeletonView",
    component: () => import("../pages/skeletonView.vue"),
  },
  {
    path: "/skeletonViewDirectives",
    component: () => import("../pages/skeletonViewDirectives.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});