let state = {
  user: localStorage['user'] ? JSON.parse(localStorage['user']) : '',
  token: localStorage['token'] || '',
  account: localStorage['account'] || ''
}

let getters = {}
for (let key in state) {
  getters[key] = state => state[key]
}

const actions = {
  updateManager({
    commit
  }) {
    commit('updateManager')
  },
  updateUser({
    commit,
    state
  }, info) {
    commit('updateUser', info)
  },
}

const mutations = {
  updateManager(state) {
    console.log('111111')
  },
  updateUser(state, info) {
    state.user = info
  }
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
