import Customers from '@/api/Customers';

export const Mutations = {
    SET_LOADING: "SetLoading",
    ADD_CUSTOMERS: "AddCustomers",    
}

export const Actions = {
    GET_ALL_CUSTOMERS: "GetAllCustomers",
}

export default {
    namespaced: true,
    state: {
        customers: [],   
        loading: true     
    },
    mutations: {

        /**
         * Se encarga de añadir los clientes al estado.
         */
        [Mutations.ADD_CUSTOMERS] (state, customers) {
            state.customers = customers;
        },

        /**
         * Se encarga de añadir los clientes al estado.
         */
        [Mutations.SET_LOADING] (state, loading) {
            state.loading = loading;
        },
    },
    actions: {

        /**
         * Obtiene los clientes de la api 'Customers'.         
         */
        [Actions.GET_ALL_CUSTOMERS] ({commit}) {                               
            Customers.getAll().then((customers) => {                     
                commit(Mutations.ADD_CUSTOMERS, customers);                                                              
            })                                                
        }
    }
}