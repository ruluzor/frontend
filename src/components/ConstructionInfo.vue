<template>
    <div>
        <v-row v-if="constructionInfoDescriptor != null">
            <v-col class="col-12 pt-5" align="right">
                <v-btn class="btn btn-primary" @click="removeConstructionInfo">Eliminar .constructionInfo</v-btn>
            </v-col>
            <v-col>
                <v-list-item two-line class="elevation-1">
                    <v-list-item-content>
                        <v-list-item-title>Proyecto</v-list-item-title>
                        <v-list-item-subtitle>{{constructionInfoDescriptor.projectName}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>  
            </v-col>
            <v-col>
                <v-list-item two-line class="elevation-1">
                    <v-list-item-content>
                        <v-list-item-title>GUID</v-list-item-title>
                        <v-list-item-subtitle>{{constructionInfoDescriptor.projectGUID}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>                                        
            </v-col>
        </v-row>
        <v-row v-if="constructionInfoDescriptor != null">
            <v-col>
                <p class= "pl-4 overline">Posiciones dentales</p>
                <v-data-table :headers="headers" :items="constructionInfoDescriptor.teeth" :items-per-page="5" class="elevation-1" ></v-data-table>
            </v-col>
        </v-row> 
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { Mutations } from '@/modules/Importer';

export default {
    data:() => ({        
        headers: [            
            { text: 'Posición', value: 'number', width: 100 },
            { text: 'Reconstrucción', value: 'reconstructionType', width: 140 },          
            { text: 'Color', value: 'toothColor', width: 100 },          
            { text: 'STL', value: 'matrixImplantGeometryTargetOutputConstructionFile' },
            { text: 'Implante', value: 'implantType' },
            { text: 'Diametro Tornillo', value: 'screwDiameter' },            
            { text: 'Librería', value: 'implantLibraryEntryDescritor' }            
        ]
    }),        
    computed: {
        ...mapMutations('Importer', [Mutations.REMOVE_CONSTRUCTIONINFO_DESCRIPTOR, Mutations.REMOVE_CONSTRUCTIONINFO_FILE]),
        /**
         * 
         */
        constructionInfoDescriptor() {           
            return this.$store.state.Importer.constructionInfoDescriptor;            
        },
    },
    methods: {

        /**
         * Se encarga de eliminar el objeto constructionInfo llamando a las mutaciones correspondientes.
         * Esta acción elimina el descriptor y el fichero correspondiente.
         */
        removeConstructionInfo() {
            this.$store.commit('Importer/' + Mutations.REMOVE_CONSTRUCTIONINFO_DESCRIPTOR);
            this.$store.commit('Importer/' + Mutations.REMOVE_CONSTRUCTIONINFO_FILE);
        }
    }
}
</script>