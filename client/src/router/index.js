import Vue from 'vue'
import VueRouter from 'vue-router'

import vCatalog from '../views/v-catalog.vue'
import vCart from '../views/v-cart.vue'

import Registration from '../views/Registration.vue'
import Authorization from '../views/Authorization.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: vCatalog
  },
  {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/auth',
    name: 'auth',
    component: Authorization
  },
  {
      path: '/profile',
      name: 'profile',
      component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
