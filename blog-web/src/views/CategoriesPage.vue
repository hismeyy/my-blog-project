<template>
  <scroll-page style="width: 1000px">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span style="font-size: 24px; font-weight: bold">分 类</span>
        </div>
      </template>
      <item style="margin-left: 20px; margin-right: 20px" v-for="i in 100" :text="i" :key=i></item>
    </el-card>
  </scroll-page>
</template>

<script>
import ScrollPage from "@/views/ScrollPage.vue";
import Item from "@/components/tags/TagAndCategoriessItem.vue";

export default {
  name: "CategoriesPage",
  components: {ScrollPage,Item}
}
</script>

<style scoped>

</style>