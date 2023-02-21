<template>

  <div ref="scroll" id="scroll-page" style="overflow: hidden" v-loading="false">
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "ScrollPage",


  }
</script>

<style>

</style>
