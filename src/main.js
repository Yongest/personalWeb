import Vue from 'vue'
// import 'mint-ui/lib/style.css'
// import {Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/base.scss'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
