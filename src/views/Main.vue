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
        <v-footer app> </v-footer>
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
