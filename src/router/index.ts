import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/home.vue";
Vue.use(VueRouter);

// 动态生成路由 路由名称由vue组件里面的name决定
const ElRouter: any = [];
const files: any = require.context("../views", false, /\.vue$/); // 引入对应的资源
files.keys().forEach((path: any) => {
  const component = files(path).default || {};
  const name = component.options.name || component.name;
  ElRouter.push({
    path: "/" + name,
    name: name,
    component: () =>
      import(/* webpackChunkName: "input" */ `@/views${path.replace(".", "")}`),
  });
});

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: Home,
  },
  ...ElRouter,
  // {
  //   path: "/input",
  //   name: "input",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "input" */ "@/views/input.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
