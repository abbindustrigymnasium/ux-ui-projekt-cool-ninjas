import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
    cart: [],
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    cart: (state) => {
      return state.cart;
    },
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('user')) {
        state.user = JSON.parse(localStorage.getItem('user'));
      }
      state.cart = [];
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    forgetUser(state) {
      // TODO: fixa buggen där .removeItem inte tar bort 'user' från localStorage, utan endast sätter den till user: {}
      state.user = {};
      localStorage.removeItem('store');
    },
    addToCart(state, cake) {
      state.cart.push(cake); // {id: 3, amount: 2}
    },
    incrementAmount(state, cake) {
      for (let item in state.cart) {
        if (state.cart[item].id === cake.id) {
          state.cart[item].amount++;
        }
      }
    },
    decrementAmount(state, cake) {
      for (let item in state.cart) {
        if (state.cart[item].id === cake.id) {
          state.cart[item].amount--;
          if (state.cart[item].amount <= 0) {
            state.cart.pop(state.cart[item]);
          }
        }
      }
    },
  },
  actions: {
    async setUser({ commit }, { email, password }) {
      let user = {};
      try {
        user = await Axios.get('http://localhost:3000/customers?email=' + email);
      } catch (e) {
        console.error(e);
      }
      if (user && password === user.data[0].password) {
        commit('setUser', user.data[0]);
      }
    },
  },
});

export default store;
