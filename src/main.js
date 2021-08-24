import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Item from './views/Item.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/item/:id',
        name: 'Item',
        component: Item
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')