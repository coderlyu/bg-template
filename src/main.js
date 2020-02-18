import '@babel/polyfill' // 兼容性处理，ie9基础
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/elementUI' // 按需引入element ui样式
import './styles/base.scss'
import './permission' // 引入路由守卫
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
