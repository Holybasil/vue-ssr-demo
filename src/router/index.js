import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

export function createRouter() {
  return new Router({
    // mode: "history",
    // fallback: false,
    routes: [
      {
        path: "/",
        name: "xiaozhan",
        component: () => import("@/components/xiaozhan"), // 异步加载路由组件
        meta: {
          title: "xiaozhan",
          keepAlive: true
        }
      },
      {
        path: "/long",
        name: "zhuyilong",
        component: () => import("@/components/zhuyilong")
      }
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        console.log(to, from, savedPosition, "有吗")
        return savedPosition
      } else {
        console.log(to, from, savedPosition, "没有")
        if (from.meta.keepAlive) {
          from.meta.savedPosition = document.body.scrollTop
        }
        return { x: 0, y: to.meta.savedPosition || 0 }
      }
    }
  })
}
