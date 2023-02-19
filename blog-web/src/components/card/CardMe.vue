<template>
  <el-card>
    <h1 class="me-author-name">一只小猿猿</h1>
    <div class="me-author-description">
      <p>
        <el-icon :size="13">
          <Location />
        </el-icon>
        <i style="line-height: 40px"> 陕西·西安</i>
      </p>
      <p>
        <el-icon :size="13">
          <Calendar />
        </el-icon>
        <i style="line-height: 40px"> java后端开发</i>
      </p>
      <p>
        <i style="line-height: 40px"> R1942886312@gmail.com</i>
      </p>
    </div>
  </el-card>

</template>

<script>
  export default {
    name: 'CardMe',
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .me-author-name {
    text-align: center;
    font-size: 30px;
    border-bottom: 2px solid #5cc478;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .me-author-description {
    padding: 8px 0;
  }

  .me-author-tool i {
    cursor: pointer;
    padding: 4px 10px;
    font-size: 30px;
  }
</style>
