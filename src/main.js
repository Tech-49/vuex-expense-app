import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import VueRouter from 'vue-router'
import {appRoutes} from './routes'
import {store} from './store'

window._ = require('lodash');

Vue.config.productionTip = false

Vue.use(VueRouter)

const routerObj = new VueRouter({
  routes:appRoutes, // short for `routes: routes`
  mode:'history'
});

new Vue({
  render: h => h(App),
  router:routerObj,
  store
}).$mount('#app')
