<template>
    <v-app v-if="authenticated">
        <r-navigation-drawer></r-navigation-drawer>
        <v-app-bar app>
            <v-btn class="btn btn-sm btn-primary" @click="logout()">Salir</v-btn>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <v-footer app>             
            <v-row>                
                <v-col align="right" class="caption">
                    Se ha iniciado sesión como "{{ payload.username }}" a las {{ expiration }}. Puedes contactar con soporte en <a href="mailto://developer@soadco.com">developer@soadco.com</a>. Archimedes Platform&trade; 2020.
                </v-col>
            </v-row>                 
        </v-footer>
    </v-app>
</template>

<script>
import { mapActions } from "vuex";
import { Actions } from '@/modules/Authentication';
import NavigationDrawer from "@/components/NavigationDrawer";

export default {
    name: "Main",    
    components: {
        "r-navigation-drawer": NavigationDrawer,
    },    
    computed: {
        authenticated() {
            return this.$store.state.Authentication.authenticated;
        },
        payload() {
            console.log(this.$store.state.Authentication.payload)
            return this.$store.state.Authentication.payload;
        },
        expiration() {            
            return new Date(this.$store.state.Authentication.expiration).toLocaleTimeString( 'es-ES', {timeZone: 'UTC'})
        }
    },
    created() {        
        this.$store.dispatch('Authentication/' + Actions.INIT);          
    },    

    methods: {

        /**
         * 
         */
        ...mapActions("Authentication", [Actions.INIT, Actions.LOGOUT]),

        logout() {
            this.$store.dispatch("Authentication/" + Actions.LOGOUT)
        }
    },
};
</script>
