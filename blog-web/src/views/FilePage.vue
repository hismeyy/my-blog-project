<template>
  <scroll-page style="width: 1000px;" >
    <el-card class="box-card" style="height: 600px; overflow:scroll">
      <template #header>
        <div class="card-header">
          <span style="font-size: 24px; font-weight: bold">归 档</span>
        </div>
      </template>
      <div>
        <el-timeline>
          <el-timeline-item v-for="i in 20" :key=i>
            <el-link type="primary">202{{i}}年{{i}}篇</el-link>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </scroll-page>
</template>

<script>
import ScrollPage from "@/views/ScrollPage.vue";

export default {
  name: "FilePage",
  components: {ScrollPage}
}
</script>

<style scoped>
.box-card::-webkit-scrollbar {
  display: none;
}
</style>