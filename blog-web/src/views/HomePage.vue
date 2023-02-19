<template>
  <div id="home">
    <base-header/>
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

</style>