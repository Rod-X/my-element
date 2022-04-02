const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  // 方便本地liveServe查看 
  publicPath:'./',
});
