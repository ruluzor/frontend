/**
 * Tipos de aplicación.
 */
let types = {
    frontend: 0,
    backend: 1, 
    order: 2,
};

/**
 * Entornos de trabajo.
 */
let environments = {    
    develop: 0,
    production: 1
};

/**
 * Se encarga de obtener la url según el entorno de trabajo seleccionado y el tipo de aplicación.
 */
function url(type) {    

    switch (environment)
    {    
        case environments.develop :
            {                
                switch(type)
                {
                    case types.frontend :
                        {
                            return "http://localhost:8080"; 
                        }
                    case types.backend :
                        {
                            return "https://platform-back.azurewebsites.net"; // return "https://localhost:44329"; 
                        }                        
                }  
                break; 
            }            
        case environments.production :
            {                
                switch(type)
                {
                    case types.frontend :
                        {
                            return "https://platform-front.azurewebsites.net"; // return "http://localhost:8080"; 
                        }
                    case types.backend :
                        {
                            return "https://platform-back.azurewebsites.net";
                        }                              
                }  
                break; 
            }
    }    
    return null;    
}

// Declara el entorno de trabajo.
let environment = environments.develop;
 
export default {
    environments: environments,
    types: types,
    url: url,
}