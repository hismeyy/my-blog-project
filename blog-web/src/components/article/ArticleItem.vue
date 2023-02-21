<template>
  <el-card class="me-area" :body-style="{ padding: '16px' }">
    <div class="me-article-header">
      <div>
        <a class="me-article-title" style="cursor: pointer">SpringBoot教程</a>
        <el-button type="primary" link style="margin-left: 10px">置頂</el-button>
        <span style="float: right; color: #adadad">
          <span><el-icon><View /></el-icon> 100 </span>
          <span><el-icon><ChatDotRound /></el-icon> 80</span>
        </span>
      </div>
      <p style="color: #adadad; font-size: 10px; margin-top: 10px">这是教程，这是教程，这是教程，这是教程，这是教程</p>
      <div style="margin-top: 20px">
        <span style="font-size: 15px"><el-icon><Avatar /></el-icon> 猿猿</span>
        <span style="margin-left: 10px">
          <el-link type="primary" style="margin-left: 5px">教程</el-link>
          <el-link type="primary" style="margin-left: 5px">学习</el-link>
        </span>
        <span style="float: right; color: #adadad">
          <el-icon><Clock /></el-icon> 2022-12-12
        </span>
      </div>


    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'ArticleItem',
  }
</script>

<style scoped>

  .me-article-header {
    /*padding: 10px 18px;*/
    padding-bottom: 19px;
  }

</style>
