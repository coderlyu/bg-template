'use strict'
const path = require('path')
// const htmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? './' : '/', // 默认'/'，部署应用包时的基本 URL，如果放到服务器，最好改成 ./ 表示查找public里面的资源时是相对于当前目录
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: '', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: true,
  // runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: process.env.NODE_ENV === 'development',
  chainWebpack (config) {
    config.resolve.alias // 设置别名
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'))
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
  },
  configureWebpack: {
    externals: {
    /**
     * 这里采用Object的形式
     * 更多的形式参考(https://webpack.js.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx)
     * key: 依赖包的名字
     * value: 依赖包挂载在项目中的变量名
     * 挂载的变量必须与依赖包中挂载的一样，在项目中使用也是这个变量名
     */
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios'
    }
    // plugins: [
    //   // eslint-disable-next-line new-cap
    //   new htmlWebpackPlugin({
    //     minify: {
    //       // 移除空格
    //       collapseWhitespace: true,
    //       // 移除注释
    //       removeComments: true
    //     }
    //   })
    // ]
  }
  // // 修改打包后js文件名
  // configureWebpack: { // webpack 配置
  //   output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
  //     filename: `js/[name].${conf.version}.js`,
  //     // chunkFilename: `js/[name].${conf.version}.js`
  //   },
  //   // 修改打包后css文件名
  //   plugins: [
  //     new MiniCssExtractPlugin({
  //       filename: `css/[name].${conf.version}.css`,
  //       // chunkFilename: `css/[name].${conf.version}.css`
  //     })
  //   ]
  // }
}
