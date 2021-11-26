import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations/mutations'
import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import getters from './getters/getters'

const actions = {...commonActions, ...apiRequests};

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters
});

export default store;