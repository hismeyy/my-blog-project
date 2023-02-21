<template>
  <div>
    <scroll-page>
      <article-item />
      <article-item />
      <article-item />
      <article-item />
    </scroll-page>

    <div style="display: flex; justify-content: center; margin-top: 30px">
      <el-pagination
          small
          background=false
          layout="prev, pager, next"
          :total="50"
          class="mt-4"
      />
    </div>

  </div>
</template>

<script>
import ScrollPage from "@/views/ScrollPage.vue";
import ArticleItem from "@/components/article/ArticleItem.vue";
  export default {
    name: "ArticleScrollPage",
    components: {ScrollPage,ArticleItem},
  }
</script>

<style scoped>
  .el-card {
    border-radius: 0;
  }

  .el-card:not(:first-child) {
    margin-top: 10px;

  }
</style>
