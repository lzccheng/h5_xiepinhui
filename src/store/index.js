import Vue from 'vue'
import Vuex from 'vuex'

const user = require('./user.js')
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})
