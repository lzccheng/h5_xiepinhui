let state = {
  indexUrl: '',
  bottomShow: true,
  goodsInfo: {},
  _addressInfo: null,
  group_id: ""
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
  update_group_id({commit},group_id){
    commit('update_group_id',group_id)
  },
  update_goodsInfo({commit},goodsInfo){
    commit('update_goodsInfo',goodsInfo)
  },
  update_addressInfo({commit},addressInfo){
    commit('update_addressInfo',addressInfo)
  }
}

const mutations = {
  updateUrl(state, url) {
    state.indexUrl = url
  },
  update_bottomShow(state,bool){
    state.bottomShow = bool
  },
  update_group_id(state,group_id){
    state.group_id = group_id
  },
  update_goodsInfo(state,goodsInfo){
    state.goodsInfo = goodsInfo
  },
  update_addressInfo(state,addressInfo){
    state._addressInfo = addressInfo
  }
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}
