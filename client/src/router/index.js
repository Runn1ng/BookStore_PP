import Vue from 'vue'
import VueRouter from 'vue-router'

import vCatalog from '../views/catalog/v-catalog.vue'
import vCart from '../views/cart/v-cart.vue'
import vProfile from '../views/v-profile.vue'
import vLogin from '../views/authentication/v-auth.vue'
import vRegistration from '../views/authentication/v-registration.vue'
import vBook from '../views/forms/v-book.vue'
import vPurchase from '../views/forms/v-purchase.vue'
import vPublisher from '../views/forms/v-publisher.vue'
import vAuthor from '../views/forms/v-author.vue'

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
  },
  {
      path: '/forms/book',
      name: 'book',
      component: vBook
  },
  {
      path: '/forms/publisher',
      name: 'publisher',
      component: vPublisher
  },
  {
      path: '/forms/purchase',
      name: 'purchase',
      component: vPurchase
  },
  {
      path: '/forms/author',
      name: 'author',
      component: vAuthor
  }
]

const router = new VueRouter({
  routes
})

export default router
