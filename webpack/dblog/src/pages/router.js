import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import name from "../components/name"
import aboutapp from "../components/about"
import home from "../components/home"
const routes = [
  {
    path: "/about",
    component: aboutapp
  },
  {
    path: "/home",
    component: home,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'name',
        component: name
      }
    ]
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]

var router =  new VueRouter({
  routes
})
export default router;
