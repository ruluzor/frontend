<template>    
    <v-container fluid>
        <v-row>
            <v-col>
                <v-img src="@/assets/logo.png" width="60%" class="mb-10"></v-img>
                <v-text-field class="form" outlined v-model="user.username" dense label="Nombre de usuario"></v-text-field>
                <v-text-field class="form" outlined v-model="user.password" type="password" dense label="Contraseña"></v-text-field>
                <v-btn class="btn btn-sm btn-primary mt-3" @click="authenticate">Iniciar sesión</v-btn>
            </v-col>
        </v-row>        
    </v-container>           
</template>
<script>
import { mapActions } from 'vuex'
import { Actions } from '@/modules/Authentication';

import { User } from '@/model/User';

export default {
    data:() => ({
        user: new User()
    }),    
    methods: {
        ...mapActions('Authentication', [Actions.AUTHENTICATE]),

        /**
         * Se encarga de autentificar un usuario llamando a la acción correspondiente.
         */
        authenticate() {
            this.user.eMail = this.user.username;
            this.$store.dispatch('Authentication/' + Actions.AUTHENTICATE, this.user);
        }
    }
}
</script>