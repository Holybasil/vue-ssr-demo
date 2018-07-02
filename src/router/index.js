import Vue from "vue"
import Router from "vue-router"
import xiaozhan from "@/components/xiaozhan"
import zhuyilong from "@/components/zhuyilong"
Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "xiaozhan",
      component: xiaozhan,
      meta: {
        title: "xiaozhan",
        keepAlive: true
      }
    },
    {
      path: "/long",
      name: "zhuyilong",
      component: zhuyilong
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
