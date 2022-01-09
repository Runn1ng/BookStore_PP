import Vue from 'vue'
import VueRouter from 'vue-router'

import vCatalog from '../views/catalog/v-catalog.vue'
import vCart from '../views/cart/v-cart.vue'
import vProfile from '../views/v-profile.vue'
import vLogin from '../views/authentication/v-auth.vue'
import vRegistration from '../views/authentication/v-registration.vue'

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
      path: '/profile',
      name: 'profile',
      component: vProfile
  },
  {
      path: '/auth/login',
      name: 'login',
      component: vLogin
  },
  {
      path: '/auth/registration',
      name: 'registration',
      component: vRegistration
  }
]

const router = new VueRouter({
  routes
})

export default router
