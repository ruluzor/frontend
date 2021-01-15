<template>
    <div>
        <v-row>
            <v-spacer></v-spacer>
            <v-col class="col-sm-4">
                <v-text-field v-model="data" class="form-control" append-icon="mdi-magnify" label="Buscar clientes" single-line outlined dense @keydown.enter="filter()"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-data-table class="elevation-1" :headers="listCustomers.headers" :items="listCustomers.items" :loading="listCustomers.loading" :items-per-page="15"></v-data-table>
            </v-col>
        </v-row>        
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Actions } from '@/modules/Customers';

export default {
    created() {
        this.$store.dispatch('Customers/' + Actions.INIT_LIST_CUSTOMERS);
    },
    data:() => ({
        data: null,
    }),    
    computed: {

        /**
         * 
         */
        listCustomers() {
            return this.$store.state.Customers.listCustomers;    
        }
    },
    methods: {

        /**
         * 
         */
        ...mapActions('Customers', [Actions.INIT_LIST_CUSTOMERS]),

        /**
         * 
         */
        filter() {
            this.$store.dispatch('Customers/' + Actions.FILTER_LIST_CUSTOMERS, this.data);
        }
    }
}
</script>