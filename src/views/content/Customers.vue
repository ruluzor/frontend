<template>
    <v-container fluid>
        <v-row>
            <v-spacer></v-spacer>
            <v-col class="col-sm-4">
                <v-text-field class="form-control" append-icon="mdi-magnify" label="Buscar clientes" single-line outlined dense ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-data-table class="elevation-1" :headers="headers" :items="items" :loading="loading" :items-per-page="10"></v-data-table>
            </v-col>
        </v-row>        
    </v-container>    
</template>

<script>
import Customers from '@/api/Customers';

  export default {
    mounted () {        
        this.load()
    },
    data:() => ({ 
        loading: true,               
        items: [],                
        headers: [          
            { text: 'Nombre', value: 'name' },
            { text: 'EMail', value: 'eMail' },          
        ],
    }),    
    methods: {

        /**
         * 
         */
        load() {            
            this.loading = true;
            Customers.selectMultiples(200).then((result) => {                
                this.items = result.data.customers;
                this.total = result.data.total;
                this.loading = false;
            })
            .catch((error) => {
                console.error(error);
                this.loading = false;
            })                             
        },
    },
  }
</script>