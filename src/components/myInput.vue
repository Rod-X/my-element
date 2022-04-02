<template>
  <div >
    <div class="myinputdiv">33333</div>
  </div>
</template>
<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class InputComponent extends Vue {}
</script>

<style lang="less" scoped>
.div1 {
  ::v-deep .myinputdiv {
    color: blue;
  }
}
</style>
