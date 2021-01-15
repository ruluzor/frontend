import Vue from 'vue'
import Vuex from 'vuex'
import Authentication from '@/modules/Authentication';
import Importer from '@/modules/Importer';
import Navigation from '@/modules/Navigation';
import Customers from '@/modules/Customers';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        Authentication,
        Importer,
        Navigation,
        Customers
    }
})
