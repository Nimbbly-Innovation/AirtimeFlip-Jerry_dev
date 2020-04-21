import Vue from 'vue'
import Router from 'vue-router'
import Web from './views/Web.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import Webapp from './views/Webapp.vue'
import Mail from './views/Mail.vue'
import Logout from './views/Logout.vue'

import Home from './views/web/Home.vue'
import About from './views/web/About.vue'
import Faq from './views/web/Faq.vue'
import Services from './views/web/Services.vue'
import Charges from './views/web/Charges.vue'
import Datapin from './views/web/Datapin.vue'
import Contact from './views/web/Contact.vue'

import Dashboard from './views/webapp/Dashboard.vue'
import Convert from './views/webapp/Convert.vue'
import Wallet from './views/webapp/Wallet.vue'
import Withdrawal from './views/webapp/Withdrawal.vue'
import Transfer from './views/webapp/Transfer.vue'
import Airtime from './views/webapp/Airtime.vue'
import Data from './views/webapp/Data.vue'
import Bills from './views/webapp/Bills.vue'
import History from './views/webapp/History.vue'
import Settings from './views/webapp/Settings.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Web',
      component: Web,
      children: [
        {path: '', component: Home},
        {path: 'About', component: About},
        {path: 'Faq', component: Faq},
        {path: 'Services', component: Services},
        {path: 'Charges', component: Charges},
        {path: 'Datapin', component: Datapin},
        {path: 'Contact', component: Contact},
      ]
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/Mail',
      name: 'Mail',
      component: Mail,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/Logout',
      name: 'Logout',
      component: Logout,
    },
    {
      path: '/Webapp',
      name: 'Webapp',
      component: Webapp,
      meta: {
        requiresAuth: true,
      },
      children: [
        {path: '', component: Dashboard, meta: {requiresAuth: true,}},
        {path: 'Convert', component: Convert, meta: {requiresAuth: true,}},
        {path: 'Wallet', component: Wallet, meta: {requiresAuth: true,}},
        {path: 'Withdrawal', component: Withdrawal, meta: {requiresAuth: true,}},
        {path: 'Transfer', component: Transfer, meta: {requiresAuth: true,}},
        {path: 'Airtime', component: Airtime, meta: {requiresAuth: true,}},
        {path: 'Data', component: Data, meta: {requiresAuth: true,}},
        {path: 'Bills', component: Bills, meta: {requiresAuth: true,}},
        {path: 'History', component: History, meta: {requiresAuth: true,}},
        {path: 'Settings', component: Settings, meta: {requiresAuth: true,}},
      ],
    }
  ]
})