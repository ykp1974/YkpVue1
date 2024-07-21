const { defineConfig } = require('@vue/cli-service')
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: "https://vuetest1.netlify.app",
  }  
}
// module.exports = defineConfig({
//   transpileDependencies: true
// })
