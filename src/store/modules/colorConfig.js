const state = {
  theme: ''
}
const mutations = {
  SET_PIE: (state, theme) => {
    state.theme = theme;
    localStorage.setItem('theme', theme);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
}
