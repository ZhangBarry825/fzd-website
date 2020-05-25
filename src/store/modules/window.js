
const state = {
  isShow: false,
  screenWidth: 0,
}

const mutations = {
  CHANGE_SHOW: (state, data) => {
    state.isShow=data.isShow
  },
  CHANGE_WIDTH:(state, data)=>{
    state.screenWidth=data.screenWidth
    if(data.screenWidth>992){
      state.isShow=true
    }else {
      state.isShow=false
    }
  }

}

const actions = {
  changeWindow({ commit }, data) {
    commit('CHANGE_SHOW', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

