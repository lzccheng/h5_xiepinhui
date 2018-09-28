let state = {
  center: localStorage['center'] ? JSON.parse(localStorage['center']) : '',
}

let getters = {}
for (let key in state) {
  getters[key] = state => state[key]
}

const actions = {
  updateCenter({
    commit,
    state
  }, info) {
    commit('updateCenter', info)
  },
}

const mutations = {
    updateCenter(state, info) {
    state.center = info
  }
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
