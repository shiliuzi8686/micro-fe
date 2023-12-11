const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  resolve: {
    alia: {
      "simple-micro-app": path.resolve(__dirname, '../../src/index.js'),
    }
  }
})
