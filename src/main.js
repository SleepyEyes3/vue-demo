import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);

import router from "../router.js";

// //mint-ui的使用
// import MintUI from 'mint-ui' // 导入了所有的组件
// import 'mint-ui/lib/style.css' // 省略了node_modules
// Vue.use(MintUI)

// tabbar
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
import App from "./APP.vue";

// swipe
// import { Swipe, SwipeItem,Button } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name,Button)
import MintUI from "mint-ui";
Vue.use(MintUI);

// vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource);

// router 全局配置
Vue.http.options.root = "http://www.liulongbin.top:3005";
Vue.http.options.emulateJSON = true;

// 配置时间过滤器
// 导入格式化插件
import Moment from "moment";
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return Moment(dataStr).format(pattern);
});

// 缩略图plugin导入
import VuePreview from "vue-preview";
// defalut install
Vue.use(VuePreview);

//vuex
import Vuex from "vuex";
Vue.use(Vuex);

var store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{

  }
})

var vm = new Vue({
  el: "#app",
  render: c => c(App),
  router,
  store
});
