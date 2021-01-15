import Customers from '@/api/Customers';

export const Mutations = {
    INIT_LIST_CUSTOMERS: "1",
    SET_LOADING_LIST_CUSTOMERS: "2",
    SET_ITEMS_LIST_CUSTOMERS: "3",
    SET_FILTER_LIST_CUSTOMERS: "4",
}

export const Actions = {
    INIT_LIST_CUSTOMERS: "1",
    FILTER_LIST_CUSTOMERS: "2",
}

export default {
    namespaced: true,
    state: {
        listCustomers: null,
    },
    mutations: {

        /**
         *          
         */
        [Mutations.INIT_LIST_CUSTOMERS] (state, listCustomers) {
            state.listCustomers = listCustomers;
        },

        /**
         *          
         */
        [Mutations.SET_LOADING_LIST_CUSTOMERS] (state, loading) {
            state.listCustomers.loading = loading;
        },

        /**
         *          
         */
        [Mutations.SET_ITEMS_LIST_CUSTOMERS] (state, items) {
            state.listCustomers.items = items;
        },

        /**
         *          
         */
        [Mutations.SET_FILTER_LIST_CUSTOMERS] (state, filter) {
            state.listCustomers.filter = filter;
        }
    },
    actions: {

        /**
         *          
         */
        [Actions.INIT_LIST_CUSTOMERS]({commit}) {            
            commit(Mutations.INIT_LIST_CUSTOMERS, {
                loading: true,
                filter: null,
                items: [],  
                headers: [          
                    { text: 'Nombre', value: 'name' },
                    { text: 'EMail', value: 'eMail' },          
                ],              
            }); 
            Customers.selectMultiples(150).then((result) => {                
                commit(Mutations.SET_ITEMS_LIST_CUSTOMERS, result.data.customers);                    
                commit(Mutations.SET_LOADING_LIST_CUSTOMERS, false);
            })
            .catch((error) => {
                console.error(error);
                commit(Mutations.SET_LOADING_LIST_CUSTOMERS, false);
            });           
        },

        /**
         *          
         */
        [Actions.FILTER_LIST_CUSTOMERS]({commit}, data) {            
            commit(Mutations.SET_LOADING_LIST_CUSTOMERS, true);
            if (data == null) {
                Customers.selectMultiples(150).then((result) => {                
                    commit(Mutations.SET_ITEMS_LIST_CUSTOMERS, result.data.customers);                    
                    commit(Mutations.SET_LOADING_LIST_CUSTOMERS, false);
                })
                .catch((error) => {
                    console.error(error);
                    commit(Mutations.SET_LOADING_LIST_CUSTOMERS, false);
                });
            }
            else {
                Customers.filterMultiples({ filter: data, size: 150 }).then((result) => {                
                    commit(Mutations.SET_ITEMS_LIST_CUSTOMERS, result.data.customers);                    
                    commit(Mutations.SET_LOADING_LIST_CUSTOMERS, false);
                })
                .catch((error) => {
                    console.error(error);
                    commit(Mutations.SET_LOADING_LIST_CUSTOMERS, false);
                });
            }
        }

    },    
}