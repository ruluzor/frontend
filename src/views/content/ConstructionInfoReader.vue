<template>
    <div>
        ConstructionInfo Reader 
        <a @click="$router.push('/main/customers')">Ir a customers</a>
        <div @drop.prevent="importConstructionInfoFile" @dragover.prevent align="center">
            <h3 class="grey lighten-3 pa-10">
                Arrastra tu archivo .contructionInfo aquí
            </h3>                                                
        </div>         
        {{constructionInfoFile}}
    </div>    
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    computed: {
        constructionInfoFile() {
            return this.$store.state.Importer.constructionInfoFile;
        }
    },
    methods: {            
        ...mapMutations('Importer', ['importConstructionInfoFile']),        
    }
    
}
</script>