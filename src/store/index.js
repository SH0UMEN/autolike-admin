import Vue from 'vue'
import Vuex from 'vuex'
import Auth from "./modules/auth/index"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rootAPI: "http://62.113.114.128/api/admin"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getAPIurl(state) {
      return state.rootAPI
    }
  },
  modules: {
    Auth
  }
})
