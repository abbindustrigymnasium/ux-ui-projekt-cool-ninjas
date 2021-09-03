import Vue from 'vue';
import Vuesax from 'vuesax';
import App from './App.vue';
import router from './router';
import store from './store'
import 'vuesax/dist/vuesax.css';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

Vue.config.productionTip = false;

Vue.use(Vuesax, {
  // ja
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
