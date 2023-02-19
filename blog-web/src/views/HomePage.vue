<template>
  <div id="home">
    <base-header/>
  </div>
</template>

<script>
import baseHeader from "@/components/header/BaseHeader.vue";
export default {
  name: "HomePage",
  components:{
    'base-header': baseHeader
  }
}
</script>

<style>

</style>