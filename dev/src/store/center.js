let state = {
  center: localStorage['center'] ? JSON.parse(localStorage['center']) : '', //个人中心数据缓存
  _storeInfo: {}, // 我的店铺数据缓存
  carpayInfo: {}, //补货购物车结算缓存
  shareCode: false,
  codeInvite: ''
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
  update_codeInvite({
    commit,
    state
  }, info) {
    commit('update_codeInvite', info)
  },
  update_storeInfo({
    commit,
    state
  }, info) {
    commit('update_storeInfo', info)
  },
  update_shareCode({
    commit,
    state
  }, info) {
    commit('update_shareCode', info)
  },
  update_carpayInfo({
    commit,
    state
  }, info){
    commit('update_carpayInfo', info)
  }
}

const mutations = {
  updateCenter(state, info) {
    state.center = info
  },
  update_storeInfo(state, info) {
    state._storeInfo = info;
  },
  update_codeInvite(state, info) {
    state.codeInvite = info;
  },
  update_carpayInfo(state, info){
    state.carpayInfo = info
  },
  update_shareCode(state, info) {
    state.shareCode = info
  }
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
