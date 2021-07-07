// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'babel-polyfill'

import * as directives from './directives'
import * as components from './components'
import store from './store'
import './icons'
// import './guard' // 路由权限

// 全局自定义组件
Object.keys(components).forEach(componentName => {
  Vue.component(componentName, components[componentName])
})
// 全局自定义指令
Object.keys(directives).forEach(direcName => {
  Vue.directive(direcName, directives[direcName])
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
