<template>
  <div>
    <!-- 轮播图 -->
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeMsg" :key="item.id">
        <img :src="item.img" alt="" />
      </mt-swipe-item>
    </mt-swipe> -->

    <Swiper :swipeMsg="swipeMsg" :isfull="true"></Swiper>

    <!-- 6宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/news">
          <img :src="'../../images/menu1.png'" alt="" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photos">
          <img :src="'../../images/menu2.png'" alt="" />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goods">
          <img :src="'../../images/menu3.png'" alt="" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img :src="'../../images/menu4.png'" alt="" />
          <div class="mui-media-body">留言反馈</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img :src="'../../images/menu5.png'" alt="" />
          <div class="mui-media-body">视频专区</div></a
        >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img :src="'../../images/menu6.png'" alt="" />
          <div class="mui-media-body">联系我们</div></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Swiper from "../../components/subcomponents/Swiper.vue"
export default {
  data() {
    // 这边不可以写成 data: () => {} 的形式
    return {
      swipeMsg: []
    };
  },
  methods: {
    getSwipeMsg() {
      this.$http.get("api/getlunbo").then(response => {
        // success
        console.log(response.body);
        if (response.body.status === 0) {
          this.swipeMsg = response.body.message;
        } else {
          Toast("get msg failed");
        }
      });
    }
  },
  created() {
    this.getSwipeMsg();
  },
  components:{
    Swiper
  }
};
</script>

<style lang="scss" scoped>


.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
  img {
    height: 60px;
    width: 60px;
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: white;
}
</style>
