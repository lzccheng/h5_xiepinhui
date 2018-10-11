let state = {
  center: localStorage['center'] ? JSON.parse(localStorage['center']) : '', //个人中心数据缓存
  _storeInfo: {} // 我的店铺数据缓存
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
  update_storeInfo({
    commit,
    state
  }, info) {
    commit('update_storeInfo', info)
  },
}

const mutations = {
  updateCenter(state, info) {
    state.center = info
  },
  update_storeInfo(state, info) {
    state._storeInfo = info
  },
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
