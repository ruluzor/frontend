<template>
    <div>        
        <v-container fluid>             
            <v-row>
                <v-col @drop.prevent="importConstructionInfoFile" @dragover.prevent align="center">                    
                    <h3 class="grey lighten-3 pa-10">
                        Arrastra tu archivo .contructionInfo aquí
                    </h3>                                                                    
                </v-col>
            </v-row>                   
            <r-construction-info></r-construction-info>              
        </v-container>                     
    </div>    
</template>

<script>
import { mapActions } from 'vuex';
import { Actions } from '@/modules/Importer';
import ConstructionInfo from '@/components/ConstructionInfo';

export default {    
    components: {
        'r-construction-info': ConstructionInfo
    },
    methods: {            

        /**
         * 
         */
        ...mapActions('Importer', [Actions.IMPORT_CONSTRUCTIONINFO_FILE]),                

        /**
         * 
         */
        importConstructionInfoFile(e) {            
            this.$store.dispatch('Importer/' + Actions.IMPORT_CONSTRUCTIONINFO_FILE, e );
        }
    }    
}
</script>