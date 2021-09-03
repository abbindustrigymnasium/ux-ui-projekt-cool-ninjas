import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Cakes from '../views/Cakes.vue';
import Cake from '../views/Cake.vue'
import Cart from '../views/Cart.vue'
import Orders from '../views/Orders.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/cakes',
    name: 'Cakes',
    component: Cakes,
  },
  {
    path: '/cake/:id',
    name: 'Cake',
    component: Cake
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
