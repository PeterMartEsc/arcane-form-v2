const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/arcane-form/' // Cambia 'arcane-form' por el nombre exacto de tu repositorio
    : '/'
});
