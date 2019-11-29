import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

// 导入tabbar对应的component
import home from './src/components/tabbar/Home.vue'
import member from './src/components/tabbar/Member.vue'
import search from './src/components/tabbar/Search.vue'
import shopcar from './src/components/tabbar/Shopcar.vue'
var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/shopcar',component:shopcar},
    {path:'/search',component:search},
  ],
  linkActiveClass:'mui-active'
})

export default router
