<template>
  <el-card :body-style="{ padding: '8px 18px' }">
    <div class="me-category-header">
      <span>{{cardHeader}}</span>
    </div>

    <ul class="me-category-list" >
      <el-link type="primary" style="margin-left: 5px">标签1</el-link>
      <el-link type="primary" style="margin-left: 5px">标签2</el-link>
      <el-link type="primary" style="margin-left: 5px">标签3</el-link>
    </ul>
  </el-card>

</template>

<script>
  export default {
    name: 'SideCard',
    props: {
      cardHeader: {
        type: String,
        required: true
      },

      itemStyle: Object
    },
    data() {
      return {}
    },
    methods: {
    }
  }
</script>

<style scoped>
  .me-category-header {
    font-weight: 600;
  }

  .me-category-list {
    list-style-type: none;
  }

  .me-category-item {
    padding: 4px;
    font-size: 14px;
    color: #5FB878;
  }

  .me-category-item a:hover {
    text-decoration: underline;
  }
</style>
