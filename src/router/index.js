import Vue from "vue";
import VueRouter from "vue-router";
import routers from './routers'
import auth from "../common/auth";

//加载路由中间件
Vue.use(VueRouter)

//定义路由
const router = new VueRouter({
  routes: routers,
  mode: 'history'
})

//登录判断验证
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !auth.isLoggedIn()) {
    next({path:'/login', query: {redirect: to.fullPath}})
  }else {
    next()
  }
})
export default router
