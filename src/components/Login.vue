<template>    
    <v-container fluid>
        <v-row>
            <v-col>
                <v-img src="@/assets/logo.png" width="60%" class="mb-10"></v-img>
                <v-text-field class="form" outlined v-model="user.username" dense label="Nombre de usuario"></v-text-field>
                <v-text-field class="form" outlined v-model="user.password" type="password" dense label="Contraseña"></v-text-field>
                <v-btn class="btn btn-sm btn-primary mt-3" @click="authenticate({ username: user.username, password: user.password } )">Iniciar sesión</v-btn>
            </v-col>
        </v-row>        
    </v-container>           
</template>
<script>
import { mapActions } from 'vuex'
import { User } from '@/model/User';

export default {
    data:() => ({
        user: new User()
    }),    
    methods: {
        ...mapActions('Authenticate', ['authenticate']),
    }
}
</script>