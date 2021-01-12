<template>
  <v-app>
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
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import NavigationDrawer from '@/components/NavigationDrawer';

export default {
  name: "Main",
  components: {
      'r-navigation-drawer': NavigationDrawer
  },
  computed: {
    authenticate() {
      return this.$store.state.Authenticate.authenticate;
    }
  },
  mounted() {      
    if (this.authenticate === "false") {
      this.$router.push("/login");
    }
  },
  methods: {
    ...mapActions("Authenticate", ["logout"]),
  },
};
</script>
