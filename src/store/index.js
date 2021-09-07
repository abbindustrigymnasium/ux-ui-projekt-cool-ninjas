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
      state.cart = [
        {
          id: 1,
          title: 'Lemon cheesecake',
          previewDescription: 'A cheesecake made of lemon',
          detailDescription:
            'Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar; if there is a bottom layer it often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sponge cake. It may be baked or unbaked (usually refrigerated). Cheesecake is usually sweetened with sugar and may be flavored or topped with fruit, whipped cream, nuts, cookies, fruit sauce, and/or chocolate syrup. Cheesecake can be prepared in many flavors, such as strawberry, pumpkin, key lime, chocolate, Oreo, chestnut, or toffee.',
          image:
            'https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg',
          price: 4,
          amount: 3,
        },
      ];
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
