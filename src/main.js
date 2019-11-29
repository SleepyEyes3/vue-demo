import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import router from '../router.js'

// //mint-ui的使用
// import MintUI from 'mint-ui' // 导入了所有的组件
// import 'mint-ui/lib/style.css' // 省略了node_modules
// Vue.use(MintUI)

// tabbar
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import App from './APP.vue'

// swipe
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm = new Vue({
  el:'#app',
  render:c => c(App),
  router
})