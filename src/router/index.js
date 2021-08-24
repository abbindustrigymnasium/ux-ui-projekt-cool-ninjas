import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')