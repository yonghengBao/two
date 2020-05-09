import request from '@/utils/request'

const state = {
  pressionList:[]
};
const getters = {
  result:(state)=>{
    return function (checkrole) {
      return state.pressionList.indexOf(checkrole)>-1
    }
  },
  getPresion:function (state) {
    return state.pressionList
  }
}
const mutations = {
  ADD_PRESSIONLIST:(state,payload)=>{
    state.pressionList.push(payload)
  },
  DELE_PRESSIONLIST:(state,payload)=>{
    let index = state.pressionList.indexOf(payload);
    if(index>-1){
      state.pressionList.splice(index,1)
    }
  }
};

const actions = {
  asyncSetPression(store,payload){
    return new Promise((resove)=>{
      setTimeout(()=>{
        store.commit("ADD_PRESSIONLIST",payload);
        resove(store.state.pressionList)
      },100)
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
