import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
    user: {},
}

const mutations = {
    User (state, Status) {
        state.user = Status;
    }
}

const actions = {
    User: ({ commit }, Status) => {
        commit('User', Status)
    }
}

const getters = {
    user: state => state.user
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})