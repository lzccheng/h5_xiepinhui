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
  updateUser({
    commit,
    state
  }, info) {
    commit('updateUser', info)
  },
  updateToken({
    commit,
    state
  }, token) {
    commit('updateToken', token)
  },
  updateAccount({
    commit,
    state
  }, account) {
    commit('updateAccount', account)
  },
}

const mutations = {
  updateUser(state, info) {
    state.user = info
  },
  updateToken(state, token) {
    state.token = token
  },
  updateAccount(state, account) {
    state.account = account
  }
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
