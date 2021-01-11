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
        authenticate(state, value) {                                
            state.authenticate = value;
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
                context.commit('authenticate', Authenticate.getState());                
            }            
            router.push('/main/dashboard');
        },

        /**
         * 
         * @param {*} param0 
         */
        logout(context) {            
            if (Authenticate.logout()) {
                context.commit('authenticate', Authenticate.getState());                         
            }            
            router.push('/login');
        }
    }
}