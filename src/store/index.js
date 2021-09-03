import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('user')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('user'))));
      }
    },
    setUser(state, user) {
      state.user = user;
    },
    forgetUser(state) {
      // TODO: fixa buggen där .removeItem inte tar bort 'user' från localStorage, utan endast sätter den till user: {}
      localStorage.removeItem('user');
      state.user = {};
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
