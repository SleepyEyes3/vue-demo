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
import { Swipe, SwipeItem,Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button)

// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// router 全局配置
Vue.http.options.root='http://www.liulongbin.top:3005'

// 配置时间过滤器
// 导入格式化插件
import Moment from 'moment' 
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return Moment(dataStr).format(pattern)
})

var vm = new Vue({
  el:'#app',
  render:c => c(App),
  router
})