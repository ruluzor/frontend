<template>
    <v-app>
        <v-container class="panel">
            <v-row>
                <v-col align="center">
                    <r-login></r-login>
                </v-col>
            </v-row>    
        </v-container>            
    </v-app>
</template>

<script>

import Login from '@/components/Login.vue'

export default {
    name: 'Login',
    components: {
        'r-login': Login
    },
    computed: {
        username() {
            return this.$store.state.Authenticate.username;
        }
    }    

}
</script>

<style scoped>

.panel {
    padding-top:200px; 
    width:500px;
}

</style>