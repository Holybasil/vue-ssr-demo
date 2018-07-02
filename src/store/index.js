import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
// import { fetchItem } from './api'
import axios from "axios"

export function createStore() {
  return new Vuex.Store({
    state: {
      xiaozhanItems: [],
      zhuyilongItems: []
    },
    actions: {
      getXiaozhanItems({ commit }) {
        return axios
          .get(
            "/api/v4/questions/273612872/similar-questions?include=data%5B*%5D.answer_count%2Cauthor%2Cfollower_count&limit=5"
          )
          .then(res => {
            console.log(res)
            if (res.status === 200) {
              commit("setXiaozhanItems", res.data.data)
            }
          })
      }
    },
    mutations: {
      setXiaozhanItems(state, data) {
        // Vue.set(state.items, id, data)
        state.xiaozhanItems = data
      },
      setZhuyilongItems(state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    }
  })
}
