import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'

import Home from '../views/Home.vue'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

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