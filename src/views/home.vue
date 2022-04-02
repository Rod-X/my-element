<template>
  <div>
    <div v-for="val in routerLlist" :key="val">
      <router-link :to="val">{{ val }}</router-link>
    </div>
  </div>
</template>
<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";
@Component({ name: "home" })
export default class Page extends Vue {
  private routerLlist: string[] = [];
  mounted() {
    router.options.routes?.forEach((v: any) => {
      if (!["index", "home"].includes(v.name)) {
        this.routerLlist.push(v.name);
      }
    });
  }
}
</script>

<style lang="less" scoped></style>
