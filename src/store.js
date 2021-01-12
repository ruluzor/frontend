import Vue from 'vue'
import Vuex from 'vuex'
import Authenticate from '@/modules/Authenticate';
import Importer from '@/modules/Importer';
import Navigation from '@/modules/Navigation';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        Authenticate,
        Importer,
        Navigation
    }
})
