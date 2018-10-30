let state = {
  indexUrl: '',
  bottomShow: true
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
  },
  update_bottomShow({commit},bool){
    commit('update_bottomShow',bool)
  }
}

const mutations = {
  updateUrl(state, url) {
    state.indexUrl = url
  },
  update_bottomShow(state,bool){
    state.bottomShow = bool
  }
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
