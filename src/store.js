import Vue from 'vue'
import Vuex from 'vuex'
import Authenticate from '@/modules/Authenticate';
import Importer from '@/modules/Importer';

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
        Importer
    }
})
