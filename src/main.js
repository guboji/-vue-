// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Cell } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Button.name,Button)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//代表引入得组件
  template: '<App/>'//app组件模板
})
