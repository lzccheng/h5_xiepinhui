import Vue from 'vue'
import Vuex from 'vuex'

const user = require('./user.js')
const center = require('./center.js')
const comm = require('./comm.js')
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    center,
    comm
  }
})
