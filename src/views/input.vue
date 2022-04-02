<template>
  <div>
    <h3>v-model测试</h3>
    <MyInput ></MyInput>
    <el-input v-model="input1" placeholder="请输入内容"></el-input>
  </div>
</template>
<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import MyInput from "@/components/myInput.vue";
@Component({ name: "myinput", components: { MyInput } })
export default class InputPage extends Vue {
  private input1 = "";

}
</script>

<style lang="less" scoped></style>
