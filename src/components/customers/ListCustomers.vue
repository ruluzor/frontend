<template>
    <div>
        <v-row>
            <v-spacer></v-spacer>
            <v-col class="col-sm-4">
                <v-text-field v-model="filter" class="form-control" append-icon="mdi-magnify" label="Buscar clientes" single-line outlined dense @keydown.enter="load()"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-data-table class="elevation-1" :headers="headers" :items="items" :loading="loading" :items-per-page="15"></v-data-table>
            </v-col>
        </v-row>        
    </div>    
</template>

<script>
import Customers from '@/api/Customers';

  export default {
    mounted () {        
        this.load();
    },
    data:() => ({ 
        loading: true,
        filter: null,                 
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
            if (this.filter == null) {
                this.selectMultiples();
            }
            else {
                this.filterMultiples();
            }                        
        },        

        /**
         * 
         */
        selectMultiples() {            
            Customers.selectMultiples(150).then((result) => {                
                this.items = result.data.customers;
                this.total = result.data.total;
                this.loading = false;
            })
            .catch((error) => {
                console.error(error);
                this.loading = false;
            });  
        },

        /**
         * 
         */
        filterMultiples() {                      
            Customers.filterMultiples({ filter: this.filter, size: 150 }).then((result) => {                
                this.items = result.data.customers;
                this.total = result.data.total;
                this.loading = false;
            })
            .catch((error) => {
                console.error(error);
                this.loading = false;
            });  
        }
    },
  }
</script>