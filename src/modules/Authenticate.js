import Authenticate from '@/api/Authenticate';
import router from '@/router';

export const Mutations = {
    AUTHENTICATE: "Authenticate"        
}

export const Actions = {
    AUTHENTICATE: "Authenticate", 
    LOGOUT: "Logout", 
}

export default {
    namespaced: true,
    state: {

        /**
         * 
         */
        authenticate: Authenticate.getState(),                
        
    },
    mutations: {

        /**
         * Actualiza el estado de la autentificación de la sesión.
         */
        [Mutations.AUTHENTICATE] (state, value) {                                
            state.authenticate = value;
        },        
    },
    actions: {

        /**
         * Se encarga de autentificar la sesión llamando al modulo 'api' correspondiente.         
         */
        [Actions.AUTHENTICATE] ({commit}, payload) {                     
            if (Authenticate.authenticate(payload.username, payload.password)) {                
                commit(Mutations.AUTHENTICATE, Authenticate.getState());                
            }            
            router.push('/main/dashboard');
        },

        /**
         * Se encarga de salir de la sesión llamando al módulo 'api' correspondiente.         
         */
        [Actions.LOGOUT]({commit}) {            
            if (Authenticate.logout()) {
                commit(Mutations.AUTHENTICATE, Authenticate.getState());                         
            }            
            router.push('/login');
        }
    }
}