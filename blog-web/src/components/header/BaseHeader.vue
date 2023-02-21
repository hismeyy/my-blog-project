<template>
  <div>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        default-active="1"
    >
      <el-menu-item style="margin-left: 3%" index="0">
        <h1 style="font-size: 20px; font-weight: bold; ">博 客 技 术 栈</h1>
      </el-menu-item>

      <div style="margin-left: 10%; display: flex">
        <el-menu-item index="1"><router-link to="/index">首页</router-link></el-menu-item>
        <el-menu-item index="2">分类</el-menu-item>
        <el-menu-item index="3">标签</el-menu-item>
        <el-menu-item index="4">归档</el-menu-item>
      </div>

      <el-menu-item index="5" style="margin-left: 25%">
        <el-icon :size="20">
          <Edit />
        </el-icon>
        写文章
      </el-menu-item>

      <div class="flex-grow" />
      <div style="display:flex; margin-right: 3%">
        <el-menu-item index="6" style="color:#409EFF;">登录</el-menu-item>
        <el-menu-item index="7" style="color:#409EFF;">注册</el-menu-item>
      </div>

    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'BaseHeader'
  }
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
