import Vue from 'vue';
import Vuesax from 'vuesax';
import App from './App.vue';
import router from './router';
import store from './store';
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
  beforeCreate() {
    store.commit('initialiseStore');
  },
  render: (h) => h(App),
}).$mount('#app');

// TODO: make localStorage optional if 'remember me' is unchecked
/* store.subscribe((mutation, state) => {
  localStorage.setItem('user', JSON.stringify(state));
});
 */
