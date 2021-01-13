import axios from 'axios';
import environment from '../environment';
import {header} from '@/utils/Headers';

let url = environment.url(environment.types.backend);

/**
 * Se encarga de iniciar sesión en el sistema.
 */
async function login(data) {        
    return await axios.post(url + '/api/authentication/login', data);    
}

// /**
//  * Se encarga de obtener el status del token.
//  */
async function payload(data) {               
    return await axios.post(url + '/api/authentication/payload', data, header);    
}

export default {
    login: login,
    payload: payload
}