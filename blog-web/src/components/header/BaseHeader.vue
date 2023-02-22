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
        <router-link to="/index"><el-menu-item index="1">首页</el-menu-item></router-link>
        <router-link to="/tags"><el-menu-item index="2">标签</el-menu-item></router-link>
        <router-link to="/categories"><el-menu-item index="3">分类</el-menu-item></router-link>
        <router-link to="/file"><el-menu-item index="4">归档</el-menu-item></router-link>
      </div>

      <el-menu-item index="5" style="margin-left: 25%">
        <el-icon :size="20">
          <Edit />
        </el-icon>
        写文章
      </el-menu-item>

      <div class="flex-grow" />
      <div style="display:flex; margin-right: 3%">
        <router-link to="/login"><el-menu-item index="6" style="color:#409EFF;">登录</el-menu-item></router-link>
        <router-link to="/register"><el-menu-item index="7" style="color:#409EFF;">注册</el-menu-item></router-link>
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
