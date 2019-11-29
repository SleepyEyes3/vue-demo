<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="Say what you want to say,metherfxxkers" maxlength="120"></textarea>
    <mt-button type="primary" size='large'>发表评论</mt-button>

    <div class="cmt-list" v-for="(item, index) in comments" :key="index">
      <div class="cmt-item">
        <div class="cmt-title">
          第{{index+1 }}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
          无fuck说！
        </div>
      </div>
    </div>
    <mt-button type="danger" size='large' @click="getMore">加载更多</mt-button>

  </div>
</template>

<script>
import Toast from 'mint-ui'
export default {
  data(){

    return {
      pageIndex:1, // 默认展示第一页数据
      comments:[]
    }
  },
  created(){
    this.getComments()
  },
  methods:{
    getComments(){
      this.$http.get('api/getcomments/'+this.id +'?pageindex=' + this.pageIndex).then(res => {
        if(res.body.status === 0){
          console.log(res)
          this.comments = this.comments.concat(res.body.message)
        }else{
          Toast("获取评论列表失败！")
        }
      })
    },
    getMore(){
      this.pageIndex++
      this.getComments()
    }
  },
  props:["id"]
  
}
</script>


<style lang="scss" scoped>
  .cmt-container{
    h3{
      font-size: 18px;
    }
    textarea{
      font-size: 18px;
      height: 85px;
      margin: 0;
    }
  }
  
  .cmt-list{
    margin:10px 0;
    .cmt-item{
      font-size: 13px;
      .cmt-title{
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body{
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
</style>