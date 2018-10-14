// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'  // 1、引入路由类
import VueResource from 'vue-resource'  // http
import App from './App'

import Home from './components/Home'
import HelloWorld from './components/HelloWorld'

// import Users from './components/Users'

Vue.config.productionTip = false
Vue.use(VueRouter)  // 2、使用路由
Vue.use(VueResource)

// 3、配置路由 参数是固定的
const router = new VueRouter({
  routes: [
    {path:"/",component:Home},
    {path:"/helloworld",component:HelloWorld},
  ],
  mode: "history"
})

// 全局注册组件
// Vue.component("users",Users)

/* eslint-disable no-new */
new Vue({
  router, // 4、实例化使用 router: router
  el: '#app',
  components: { App },
  template: '<App/>'
})

// index.html -> main.js -> App.vue
