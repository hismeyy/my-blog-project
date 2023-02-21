<template>
  <scroll-page style="width: 1000px">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span style="font-size: 24px; font-weight: bold">标签</span>
        </div>
      </template>
      <tags-item style="margin-left: 20px; margin-right: 20px" v-for="i in 100" :text="i" :key=i></tags-item>
    </el-card>
  </scroll-page>
</template>

<script>
import ScrollPage from "@/views/ScrollPage.vue";
import TagsItem from "@/components/tags/TagsItem.vue";
export default {
  name: "TagsPage",
  components: {TagsItem, ScrollPage},
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>