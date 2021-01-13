import Authentication from '@/api/Authentication';
import router from '@/router';
import Cookies from '@/utils/Cookies';

export const Mutations = {
    AUTHENTICATE: "Authenticate"        
}

export const Actions = {
    INIT: "Init",
    AUTHENTICATE: "Authenticate", 
    LOGOUT: "Logout", 
}

export default {
    namespaced: true,
    state: {

        /**
         * 
         */
        token: null,    
        expiration: null,    
        authenticated: false,        
        
    },
    mutations: {

        /**
         * Actualiza el estado de la autentificación de la sesión.
         */
        [Mutations.AUTHENTICATE] (state, value) {     
            if (value == null) {
                state.token = null;
                state.expiration = null;
                state.authenticated = false;
            }                   
            else {
                state.token = value.token;
                state.expiration = value.expiration;
                state.authenticated = true;
            }                              
        },        
    },
    actions: {

        /**
         * 
         */
        [Actions.INIT]({commit}) {                                    
            var payload = {
                token: Cookies.get('token'),
                expiration: Cookies.get('expiration')                                                      
            }            
            Authentication.payload(payload).then((payload) => {                
                commit(Mutations.AUTHENTICATE, payload);                
            })
            .catch((error) => {
                console.error(error);
                router.push('/login');    
            });                                     
        },

        /**
         * Se encarga de autentificar la sesión llamando al modulo 'api' correspondiente.         
         */
        async [Actions.AUTHENTICATE] ({commit}, user) {                    
            try {                
                Authentication.login(user).then((response) => {                    
                    Cookies.set('token', response.data.token, 1);
                    Cookies.set('expiration', response.data.expiration, 1);
                    commit(Mutations.AUTHENTICATE, response.data);                                                        
                    router.push('/main/dashboard');
                });                                
            }   
            catch (ex) {
                router.push('/login');    
            }                                  
        },

        /**
         * Se encarga de salir de la sesión llamando al módulo 'api' correspondiente.         
         */
        [Actions.LOGOUT]({commit}) {                                    
            Cookies.remove('token');
            Cookies.remove('expiration');
            commit(Mutations.AUTHENTICATE, null);                                             
            router.push('/login');
        },        
    }
}