import store from '../../store'
export default {
  bind (el, binding, vnode) {
  },
  inserted (el, binding) {
    // console.log(store.state.userCopy.pressionList)
    var pression = store.state.userCopy.pressionList
    if (pression.indexOf(binding.value) === -1) {
      el.remove()
    }
  },
  update (el, binding) {
    // console.log(el) // 所在组件的vnode更新时调用
    // var pression = store.state.user.pressionList
    // if (pression.indexOf(binding.value) === -1) {
    //   el.remove()
    // }
  },
  unbind (el) {
    console.log('开始解绑', el)
  }
}
