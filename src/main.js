import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/routes.js'
import './congig/rem.js'
import './style/common.less'
import Vuex from 'vuex'
import store from './store/store.js'


Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  store,
  // 这段代码 直接渲染app 模块
  render: h => h(App)  
})
