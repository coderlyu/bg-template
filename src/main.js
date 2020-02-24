import '@babel/polyfill' // 兼容性处理，ie9基础
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/elementUI' // 按需引入element ui样式
import './styles/base.scss'
import './icons' // icon
import './permission' // 引入路由守卫
import Blob from './excel/Blob' // 引入导出excel的两个文件
import Export2Excel from './excel/Export2Excel.js' // 引入导出excel的两个文件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
