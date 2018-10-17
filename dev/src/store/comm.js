let state = {
  indexUrl: ''
}

let getters = {}
for (let key in state) {
  getters[key] = state => state[key]
}

const actions = {
  updateUrl({
    commit,
    state
  }, url) {
    commit('updateUrl', url)
  }
}

const mutations = {
  updateUrl(state, url) {
    state.indexUrl = url
  }
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
