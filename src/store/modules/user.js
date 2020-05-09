import {login, getInfo} from '@/api/user';

const state = {
  token: localStorage.getItem("token"),
  // 用户角色信息
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};

const actions = {
  // 模拟用户登录
  login({ commit }, userInfo) {
    // 调用并处理结果，错误处理已拦截无需处理
    return login(userInfo).then((res) => {
      commit("SET_TOKEN", res.data);
      localStorage.setItem("token", res.data);
    });
  },
  getInfo({commit, state}) {
    return getInfo(state.token).then(({data: roles}) => {
      commit("SET_ROLES", roles);
      return roles
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
