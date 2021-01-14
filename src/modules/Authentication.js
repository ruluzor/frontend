import Authentication from '@/api/Authentication';
import router from '@/router';
import Cookies from '@/utils/Cookies';
import Errors from '@/utils/Errors';
import Payloads from '@/utils/Payloads';

export const Mutations = {
    AUTHENTICATE: "Authenticate",
    SET_ERROR: "SetError",        
    SET_PAYLOAD: "SetPayload",       
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
        error: null,
        payload: null,   
        
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

        /**
         * Actualiza el estado del payload.
         */
        [Mutations.SET_PAYLOAD] (state, payload) {     
            state.payload = payload;                              
        },  

        /**
         * Actualiza el estado del error de la autentificación
         */
        [Mutations.SET_ERROR] (state, error) {     
            state.error = error;                              
        },    
    },
    actions: {

        /**
         * Se encarga de iniciar la sesión del sistema.
         */
        [Actions.INIT]({commit}) {                                    
            var payload = Payloads.getPayloadFromCookies();  
            Authentication.authenticate(payload).then((response) => {               
                commit(Mutations.SET_PAYLOAD, response.data);
                commit(Mutations.AUTHENTICATE, payload);                
            })
            .catch((error) => {
                Errors.manage(error);                  
            });                                     
        },

        /**
         * Se encarga de autentificar la sesión llamando al modulo 'api' correspondiente.         
         */
        async [Actions.AUTHENTICATE] ({commit}, user) {                                              
            Authentication.login(user).then((response) => {                                    
                Payloads.setPayloadToCookies({token: response.data.token, expiration: response.data.expiration });
                commit(Mutations.AUTHENTICATE, response.data);                                                        
                router.push('/main/dashboard');
            })
            .catch((error) => {                                                          
                Errors.manage(error, "No se puede iniciar la sesión correctamente.");                  
            });                                                                         
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