import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userData: {},
    },
    getters: {
        USER_DETAILS: state => {
            return state.userData
        },

    },
    mutations: {
        SET_USER_DETAILS: (state, payload) => {
            state.userData = payload
        },

    },
    actions: {
        GET_USER_DETAILS: async (context, payload) => {
            context.commit('SET_USER_DETAILS', payload)
        },
    },
})