import { ConstructionInfoDescriptor, ToothDescriptor } from '@/model/ConstructionInfoDescriptor';

export const Mutations = {
    ADD_CONSTRUCTIONINFO_DESCRIPTOR: "AddConstructionInfoDescriptor",    
    REMOVE_CONSTRUCTIONINFO_DESCRIPTOR: "RemoveConstructionInfoDescriptor",    
    ADD_CONSTRUCTIONINFO_FILE: "AddConstructionInfoFile",    
    REMOVE_CONSTRUCTIONINFO_FILE: "RemoveConstructionInfoFile"
}

export const Actions = {
    IMPORT_CONSTRUCTIONINFO_FILE: "ImportConstructionInfoFile",
}

export default {
    namespaced: true,
    state: {
        constructionInfoFile: null,
        constructionInfoDescriptor: null,
    },
    mutations: {

        /**
         * Añade el descriptor de constructionInfo al estado.                  
         */
        [Mutations.ADD_CONSTRUCTIONINFO_DESCRIPTOR] (state, constructionInfoDescriptor) {            
            state.constructionInfoDescriptor = constructionInfoDescriptor;
        },

        /**
         * Elimina el descriptor del constructionInfo.                  
         */
        [Mutations.REMOVE_CONSTRUCTIONINFO_DESCRIPTOR] (state) {            
            state.constructionInfoDescriptor = null;
        },

        /**
         * Añade el fichero en formato 'text/xml' ya analizado del constructionInfo al estado.
         */
        [Mutations.ADD_CONSTRUCTIONINFO_FILE] (state, constructionInfoFile) {
            state.constructionInfoFile = constructionInfoFile;            
        },        

        /**
         * Elimina el fichero constructionInfo del estado.
         */
        [Mutations.REMOVE_CONSTRUCTIONINFO_FILE] (state) {
            state.constructionInfoFile = null;            
        }
    },
    actions: {

        /**
         * Se encarga de añadir un fichero mediante drag and drop al array de ficheros.
         */
        [Actions.IMPORT_CONSTRUCTIONINFO_FILE] ({ commit }, e) {                                                                    
            getConstructionInfoFile(e).then((file) => {
                commit(Mutations.ADD_CONSTRUCTIONINFO_FILE, file);                                                                                        
                commit(Mutations.ADD_CONSTRUCTIONINFO_DESCRIPTOR, getConstructionInfoDescriptor(file))
            });            
        },
    }
}

/**
 * Obtiene una promesa del primer fichero del evento dragOver a través del objeto dataTransfer.
 */
function getConstructionInfoFile(e) {
    return new Promise(resolve => {
        var file = e.dataTransfer.files[0];
        if (file != null) {                                           
            var reader = new FileReader();  
            reader.addEventListener('load', (event) => {
                resolve(event.target.result);                                                                                                        
            });
            reader.readAsText(file);                
        }              
    });
}

/**
 * Obtiene el objeto 'ConstructionInfoDescriptor' a partir del fichero correspondiente en 
 * formato 'text/xml'.
 */
function getConstructionInfoDescriptor(constructionInfoFile) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(constructionInfoFile, "text/xml");    
    var projectName = getInfoByTagName(xmlDoc, "ProjectName");
    var projectGUID = getInfoByTagName(xmlDoc, "ProjectGUID");
    var teeth = getTeeth(xmlDoc);           
    return new ConstructionInfoDescriptor(projectName, projectGUID, teeth)
}

/**
 * Función de ayuda para obtener el listado de dientes del objeto xmlDoc de tipo 'Document'.
 */
function getTeeth(xmlDoc) {
    var result = [];
    var teeth = xmlDoc.getElementsByTagName("Tooth");        
    teeth.forEach(x => {                                        
        var tooth = new ToothDescriptor({                     
            number: x.getElementsByTagName("Number")[0].childNodes[0] != undefined ? x.getElementsByTagName("Number")[0].childNodes[0].nodeValue : null,
            reconstructionType: x.getElementsByTagName("ReconstructionType")[0] != undefined ? x.getElementsByTagName("ReconstructionType")[0].childNodes[0].nodeValue : null,
            implantType: x.getElementsByTagName("ImplantType")[0] != undefined ? x.getElementsByTagName("ImplantType")[0].childNodes[0].nodeValue : null,
            // cutbackPerformed: 
            // isConnectToMesialNeighbor: 
            // emergenceProfileBorderIsBelowImplant: 
            // angulatedScrewChannelType: 
            // axisScrewAngulation: 
            screwDiameter: x.getElementsByTagName("ScrewDiameter")[0] != undefined ? x.getElementsByTagName("ScrewDiameter")[0].childNodes[0].nodeValue : null,
            matrixImplantGeometryTargetOutputConstructionFile: x.getElementsByTagName("MatrixImplantGeometryTargetOutputConstructionFile")[0] != undefined ? x.getElementsByTagName("MatrixImplantGeometryTargetOutputConstructionFile")[0].childNodes[0].nodeValue : null,
            // fileNameImplantGeometry:
            // implantGeometryFileHashSHA:
            implantLibraryEntryDescritor: x.getElementsByTagName("ImplantLibraryEntryDescriptor")[0] != undefined ? x.getElementsByTagName("ImplantLibraryEntryDescriptor")[0].childNodes[0].nodeValue : null,
            // implantLibraryEntryDisplayInformation:
            // implantLibraryEntryWithInterface:
            // implantLibraryEntryWithPremillAbutmentCollider:
            // suggestedStrategy:
            toothColor: x.getElementsByTagName("ToothColor")[0] != undefined ? x.getElementsByTagName("ToothColor")[0].childNodes[0].nodeValue : null,
            // toothScanFileName:
        });                
        result.push(tooth);
    });  
    return result;          
}

/**
 * Función de ayuda para obtenerla propiedad según su nombre de etiqueta a través 
 * del objeto xmlDoc de tipo 'Document'.
 */
function getInfoByTagName(xmlDoc, tagName) {
    return xmlDoc.getElementsByTagName(tagName)[0] != undefined ? xmlDoc.getElementsByTagName(tagName)[0].childNodes[0].nodeValue : null;
}