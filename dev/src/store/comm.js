let state = {
  indexUrl: '',
  bottomShow: true,
  goodsInfo: {}
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
  },
  update_goodsInfo({commit},goodsInfo){
    commit('update_goodsInfo',goodsInfo)
  }
}

const mutations = {
  updateUrl(state, url) {
    state.indexUrl = url
  },
  update_bottomShow(state,bool){
    state.bottomShow = bool
  },
  update_goodsInfo(state,goodsInfo){
    state.goodsInfo = goodsInfo
  }
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
