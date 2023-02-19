<template>
  <div id="home">
    <base-header/>
    <el-container>

      <router-view class="me-container"/>

    </el-container>
    <base-footer />
  </div>
</template>

<script>
import baseHeader from "@/components/header/BaseHeader.vue";
import baseFooter from "@/components/fooder/BaseFooter.vue";
export default {
  name: "HomePage",
  components:{
    'base-header': baseHeader,
    'base-footer': baseFooter
  }
}
</script>

<style>
.me-container{
  margin: 100px auto 140px;
}
</style>