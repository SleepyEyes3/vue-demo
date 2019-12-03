import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 导入tabbar对应的component
import home from "./src/components/tabbar/Home.vue";
import member from "./src/components/tabbar/Member.vue";
import search from "./src/components/tabbar/Search.vue";
import shopCar from "./src/components/tabbar/Shopcar.vue";

// 导入newList
import newsList from "./src/components/news/NewList.vue";
import newsInfo from "./src/components/news/NewsInfo.vue";
import photoList from "./src/components/photos/PhotoList.vue";
import photoInfo from "./src/components/photos/PhotoInfo.vue";
import goods from "./src/components/goods/GoodList.vue";
import goodsInfo from "./src/components/goods/GoodsInfo.vue";
import goodsDesc from "./src/components/goods/GoodsDesc.vue";
import goodsComment from "./src/components/goods/GoodsComment.vue";

var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: home },
    { path: "/home/news", component: newsList },
    { path: "/home/newsinfo/:id", component: newsInfo }, // 这边的id的写法要注意了
    { path: "/home/photos", component: photoList },
    { path: "/home/photoinfo/:id", component: photoInfo },
    { path: "/home/goods", component: goods },
    { path: "/home/goodsinfo/:id", component: goodsInfo, name: "goodsInfo" },
    { path: "/home/goodsdesc/:id", component: goodsDesc, name: "goodsDesc" },
    {
      path: "/home/goodscomment/:id",
      component: goodsComment,
      name: "goodsComment"
    },
    { path: "/member", component: member },
    { path: "/shopcar", component: shopCar },
    { path: "/search", component: search }
  ],
  linkActiveClass: "mui-active"
});

export default router;
