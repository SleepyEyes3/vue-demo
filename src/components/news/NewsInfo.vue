<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
      <span>点击：{{newsInfo.click}}次</span>
    </p>

    <hr>

    <!-- 注意这边是怎么获取页面内容的  -->
    <div class="content" v-html="newsInfo.content"></div>

    <!-- 评论区 -->
    <Comment-box :id="this.id" ></Comment-box>
  </div>
</template>

<script>
import Toast from 'mint-ui'
import Comment from '../subcomponents/comments.vue'
export default {
  data(){
    return {
      id:this.$route.params.id,
      newsInfo:{}
    }
  },
  created(){
    this.getNewsInfo()
  },
  methods:{
    getNewsInfo(){
      this.$http.get('api/getnew/'+this.id).then(res => {
        if(res.body.status === 0){
          this.newsInfo = res.body.message[0]
        }else{
          Toast('获取新闻失败！')
        }
      })
    }
  },
  // 注册子组件
  components:{
    "Comment-box":Comment // key 要加上引号
  }
}
</script>

<style lang="scss">
  .newsinfo-container{
    padding: 0 4px;
    .title{
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color: red;
    }
    .subtitle{  
      font-size: 13px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
    .content{
      img{
        width: 100%;
      }
    }
  }

</style>