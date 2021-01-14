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

/**
 * Se encarga de autentificar el payload correspondiente.
 */
async function authenticate(data) {               
    return await axios.post(url + '/api/authentication/authenticate', data, header);    
}

export default {
    login: login,
    authenticate: authenticate
}