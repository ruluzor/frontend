<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <r-list-customers></r-list-customers>
            </v-col>  
                     
        </v-row>     
                
    </v-container>
</template>

<script>
import ListCustomers from '@/components/customers/ListCustomers';
export default {
    components: {     
        'r-list-customers': ListCustomers,  
    }
}
</script>