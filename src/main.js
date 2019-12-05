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

var car = JSON.parse(localStorage.getItem("car") || "[]");

var store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addGoodsToCar(state, goodsInfo) {
      var flag = false;
      // 如果购物车中已经存在，则只增加数量
      state.car.some(item => {
        if (item.id == goodsInfo.id) {
          item.count += parseInt(goodsInfo.count);
          flag = true;
          return true;
        }
      });
      if (!flag) {
        state.car.push(goodsInfo);
      }
      localStorage.setItem("car", JSON.stringify(state.car));

      // 不存在，则添加到购物车
    },
    updateGoodsInfo(state, params) {
      state.car.forEach(ele => {
        if (ele.id == params.id) {
          ele.count = parseInt(params.count);
        }
      });
      localStorage.setItem("car", JSON.stringify(state.car));
    },
    removeGoods(state, id) {
      // 根据Id，从store 中的购物车中删除对应的那条商品数据
      // 无敌的some & splice
      state.car.some((ele, index) => {
        if (ele.id == id) {
          state.car.splice(index, 1);
          return true;
        }
      });
      localStorage.setItem("car", JSON.stringify(state.car));
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected;
        }
      });
      // 把最新的 所有购物车商品的状态保存到 store 中去
      localStorage.setItem("car", JSON.stringify(state.car));
    }
  },
  getters: {
    getGoodsNumInCar(state) {
      // 这边的state参数一定要写
      var count = 0;
      state.car.forEach(element => {
        count += parseInt(element.count);
      });
      return count;
    },
    getGoodsCountObj(state) {
      var temp = {};
      state.car.forEach(ele => {
        temp[ele.id] = ele.count;
      });
      return temp;
    },
    getGoodsCountAndAmount(state) {
      var temp = {};
      var count = 0;
      var price = 0;
      state.car.forEach(ele => {
        if (ele.selected) {
          count += ele.count;
          price += ele.price * ele.count;
        }
      });
      temp["totalCount"] = count; // 这边的key一定要是一个字符串
      temp["totalPrice"] = price;
      return temp;
      //   var o = {
      //     count: 0, // 勾选的数量
      //     amount: 0 // 勾选的总价
      //   }
      //   state.car.forEach(item => {
      //     if (item.selected) {
      //       o.count += item.count
      //       o.amount += item.price * item.count
      //     }
      //   })
      //   return o
    },
    getGoodsSelected(state, id) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.selected;
      });
      return o;
    }
  }
});

var vm = new Vue({
  el: "#app",
  render: c => c(App),
  router,
  store
});
