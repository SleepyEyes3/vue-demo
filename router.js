import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

// 导入tabbar对应的component
import home from './src/components/tabbar/Home.vue'
import member from './src/components/tabbar/Member.vue'
import search from './src/components/tabbar/Search.vue'
import shopcar from './src/components/tabbar/Shopcar.vue'

// 导入newList
import newsList from './src/components/news/NewList.vue'
import newsInfo from './src/components/news/NewsInfo.vue'

var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/home/news',component:newsList},
    {path:'/home/newsinfo/:id',component:newsInfo}, // 这边的id的写法要注意了
    {path:'/member',component:member},
    {path:'/shopcar',component:shopcar},
    {path:'/search',component:search},
  ],
  linkActiveClass:'mui-active'
})

export default router
