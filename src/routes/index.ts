import { createRouter, createWebHashHistory } from 'vue-router'

const files = import.meta.glob('../pages/*.vue')

const routes = []
for (const [path, file] of Object.entries(files)) {
  const shortName = path.substring(path.lastIndexOf('/'), path.length - 4)
  routes.push({
    path: shortName,
    component: file,
  })
}

// 根路径重定向
routes.unshift({
  path: "/",
  redirect: routes[0].path,
});

// const routes = [
//   {
//     path: "/",
//     redirect: "/normal",
//   },
//   {
//     path: "/normal",
//     component: () => import("../pages/normal.vue"),
//   },
//   {
//     path: "/normalWithHandleError",
//     component: () => import("../pages/normalWithHandleError.vue"),
//   },
// ];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});