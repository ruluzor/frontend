<template>
    <div>
        <v-row v-if="constructionInfoDescriptor != null">
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
export default {
    data:() => ({        
        headers: [            
            { text: 'Posición', value: 'number', width: 100 },
            { text: 'Reconstrucción', value: 'reconstructionType', width: 140 },          
            { text: 'Color', value: 'toothColor', width: 100 },          
            { text: 'STL', value: 'matrixImplantGeometryTargetOutputConstructionFile' },
            { text: 'Implante', value: 'implantType' },
            { text: 'Diametro Tornillo', value: 'screwDiameter' }            
        ]
    }),        
    computed: {

        /**
         * 
         */
        constructionInfoDescriptor() {           
            return this.$store.state.Importer.constructionInfoDescriptor;            
        },
    },
}
</script>