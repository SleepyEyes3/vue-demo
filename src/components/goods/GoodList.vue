<template>
  <div class="goods-list">
    <!-- 商品列表 -->
    <div
      class="goods-item"
      v-for="(item, index) in goodsList"
      :key="item.id"
      @click="goGoodsDetail(item.id)"
    >
      <img :src="'{{item.img_url}}'" alt="" :class="{ full: isfull }" />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <!-- 加载更多 -->
    <mt-button type="danger" size="large" @click="getMoreGoods"
      >加载更多</mt-button
    >
  </div>
</template>

<script>
import Toast from "mint-ui";
export default {
  data() {
    return {
      goodsList: [],
      pageIndex: 1,
      isfull: true
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http.get("api/getgoods?pageindex=" + this.pageIndex).then(res => {
        if (res.body.status === 0) {
          this.goodsList = this.goodsList.concat(res.body.message); // 加载更多
        } else {
          Toast("获取商品列表失败！");
        }
      });
    },
    getMoreGoods() {
      this.pageIndex++;
      this.getGoodsList();
    },
    goGoodsDetail(id) {
      // 编程式导航 （这边注意参数的传递）
      this.$router.push({ name: "goodsInfo", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
