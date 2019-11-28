import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

import router from '../router.js'

// //mint-ui的使用
// import MintUI from 'mint-ui' // 导入了所有的组件
// import 'mint-ui/lib/style.css' // 省略了node_modules
// Vue.use(MintUI)

import App from './APP.vue'

var vm = new Vue({
  el:'#app',
  render:c => c(App),
  router
})