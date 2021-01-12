import { ConstructionInfoDescriptor, ToothDescriptor } from '@/model/ConstructionInfoDescriptor';

export const Mutations = {
    ADD_CONSTRUCTIONINFO_DESCRIPTOR: "AddConstructionInfoDescriptor",    
    ADD_CONSTRUCTIONINFO_FILE: "AddConstructionInfoFile"
}

export const Actions = {
    IMPORT_CONSTRUCTIONINFO_FILE: "importConstructionInfoFile",
}

export default {
    namespaced: true,
    state: {
        constructionInfoFile: null,
        constructionInfoDescriptor: null,
    },
    mutations: {

        /**
         *                   
         */
        [Mutations.ADD_CONSTRUCTIONINFO_DESCRIPTOR] (state, constructionInfoDescriptor) {            
            state.constructionInfoDescriptor = constructionInfoDescriptor;
        },

        /**
         * 
         */
        [Mutations.ADD_CONSTRUCTIONINFO_FILE] (state, constructionInfoFile) {
            state.constructionInfoFile = constructionInfoFile;            
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
 * 
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
 * 
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
 *  
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
            // implantLibraryEntryDescritor:
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
 *  
 */
function getInfoByTagName(xmlDoc, tagName) {
    return xmlDoc.getElementsByTagName(tagName)[0] != undefined ? xmlDoc.getElementsByTagName(tagName)[0].childNodes[0].nodeValue : null;
}