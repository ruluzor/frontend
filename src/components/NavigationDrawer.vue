<template>
    <v-navigation-drawer app permanent>
        <v-treeview :items="items" open-on-click dense class="pt-5">
            <template v-slot:label="{ item }">                
                <a @click="$router.push(item.path).catch(()=>{})">{{item.name}}</a>                                    
            </template>
        </v-treeview>
    </v-navigation-drawer>
</template>

<script>
import { mapActions } from "vuex";

export default {
    computed: {    
        items() {
            return this.$store.state.Navigation.items;
        },
    },
    methods: {
        ...mapActions("Authenticate", ["logout"]),
    },
}
</script>