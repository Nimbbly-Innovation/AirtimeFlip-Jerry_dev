import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { store } from './store/store'
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL= 'https://deltaairinternational.com/airtimeflip/';

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        path: '/signin',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        path: '/webapp',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

/*router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: '/signin',
      })
    } else {
      next()
    } 
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: '/webapp',
      })
    } else {
      next()
    } 
  }else {
    next() // make sure to always call next()!
  }
})*/