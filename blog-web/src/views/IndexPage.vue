<template>
  <div >
    <el-container>

      <el-main class="me-articles">
        <article-scroll-page />
      </el-main>

      <el-aside>
        <card-me class="me-area"></card-me>
        <side-card cardHeader="最热标签" :articles="hotArticles"></side-card>
        <side-card cardHeader="最热文章" :articles="hotArticles"></side-card>
        <side-card cardHeader="最新文章" :articles="hotArticles"></side-card>
        <side-card cardHeader="文章归档" :articles="hotArticles"></side-card>
      </el-aside>

    </el-container>
  </div>
</template>

<script>
  import CardMe from "@/components/card/CardMe.vue";
  import SideCard from "@/components/card/SideCard.vue";
  import ArticleScrollPage from "@/views/common/ArticleScrollPage.vue";

  export default {
    name: 'IndexPage',
    components: {
      ArticleScrollPage,
      SideCard,
      CardMe
    }
  }
</script>

<style scoped>
.el-container {
  width: 960px;
}

.el-aside {
  margin-left: 20px;
  width: 260px;
}

.el-main {
  padding: 0;
  line-height: 16px;
}

.el-card {
  border-radius: 0;
}

.el-card:not(:first-child) {
  margin-top: 20px;
}
</style>
