import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import FastClick from 'fastclick'

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

//解决移动端300ms延迟
FastClick.attach(document.body)

Vue.use(VueLazyLoad,{
  loading: require('assets/image/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
