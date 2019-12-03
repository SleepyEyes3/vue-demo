<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeMsg" :key="item.id">
        <img :src="item.img" alt="" :class="{ full: isfull }" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  created() {
    this.print();
  },
  methods: {
    print() {
      console.log(this.isfull);
    }
  },
  props: ["swipeMsg", "isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}

.mint-swipe-item {
  text-align: center;
  // &:nth-child(1) {
  //   background-color: red;
  // }
  // &:nth-child(2) {
  //   background-color: black;
  // }
  // &:nth-child(3) {
  //   background-color: cyan;
  // }
  img {
    height: 100%;
    // width: 100%;
  }
}

.full {
  width: 100%;
}
</style>
