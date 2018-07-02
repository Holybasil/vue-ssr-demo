// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import { createRouter } from "./router"
import { createStore } from "./store"
import { sync } from "vuex-router-sync"

Vue.config.productionTip = false
// Vue.use(axios)
/* eslint-disable no-new */
export function createApp() {
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  const app = new Vue({
    router,
    store,
    // 根实例简单的渲染应用程序组件（render 和 template 区别）
    render: h => h(App)
  })
  return { app, router, store }
}
// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>"
// })
