<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-btn class="btn btn-sm btn-primary" @click="logout()">Salir</v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Main",
  computed: {
    authenticate() {
      return this.$store.state.Authenticate.authenticate;
    },
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
