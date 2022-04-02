<template>
  <div>
    <!-- 区分textare 和 单纯的输入框 -->
    <template><input type="text" /></template>
    <template><textarea name="" id="" cols="30" rows="10"></textarea></template>
    <!-- 限制最大输入长度时，当前输入字符的长度 / 最大输入长度 -->
    <span>{{ textLength }}/{{ upperLimit }}</span>
  </div>
</template>
<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import emitter from "@/utils/mixns/emitter";
//命名方便使用
//
@Component({ name: "MyInput", mixins: [emitter] })
export default class MyInputComponent extends Vue {
  private textLength = 0;
  private upperLimit = 0;
}
</script>

<style lang="less" scoped>
.div1 {
  ::v-deep .myinputdiv {
    color: blue;
  }
}
</style>
