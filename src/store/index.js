import Vue from 'vue'
import Vuex from 'vuex'
import userCopy from './modules/user_copy'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,permission,userCopy
  }
})
export default store
