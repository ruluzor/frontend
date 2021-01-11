import Authenticate from '@/api/Authenticate';
import { User } from '@/model/User';
import router from '@/router';

export default {
    namespaced: true,
    state: {

        /**
         * 
         */
        authenticate: Authenticate.getState(),

        /**
         * 
         */
        user: new User()
        
    },
    mutations: {

        /**
         * 
         * @param {*} state 
         * @param {*} authenticate 
         */
        authenticate(state, authenticate) {                                
            state.authenticate = authenticate;
        },

        /**
         * 
         * @param {*} state 
         * @param {*} value 
         */
        setUser(state, value) {
            state.user.username = value.username;
            state.user.password = value.password;
        }
    },
    actions: {

        /**
         * Se encarga de autentificar la sesión llamando al modulo 'api' correspondiente.
         * @param {*} param0 
         * @param {*} username 
         * @param {*} password 
         */
        authenticate(context, payload) {            
            if (Authenticate.authenticate(payload.username, payload.password)) {
                context.commit('authenticate', payload);                
            }            
            router.push('main');
        },

        /**
         * 
         * @param {*} param0 
         */
        logout({commit}) {            
            if (Authenticate.logout()) {
                commit('authenticate', false);                
            }            
            router.push('login');
        }
    }
}