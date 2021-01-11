export default {
    namespaced: true,
    state: {
        constructionInfoFile: ""
    },
    mutations: {

        /**
         * Se encarga de añadir un fichero mediante drag and drop al array de ficheros.
         */
        importConstructionInfoFile(state, e) {                               
            var file = e.dataTransfer.files[0];
            if (file != null) {                                           
                var reader = new FileReader();  
                reader.addEventListener('load', (event) => {
                    state.constructionInfoFile = event.target.result;            
                });
                reader.readAsText(file);                
            }            
        },
    },
    actions: {

    },
    getters: {

    }
}