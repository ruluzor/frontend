import axios from 'axios';
import {header} from '@/utils/Headers';
import environment from '../environment';

// Entorno de trabajo.
let url = environment.url(environment.types.backend);

/**
 * Se encarga de seleccionar multiples clientes.
 */
async function selectMultiples(size) {           
    return await axios.get(url + '/api/customers/select/multiples/' + size, header);    
}

/**
 * Se encarga de filtrar multiples clientes.
 */
async function filterMultiples(data) {           
    return await axios.post(url + '/api/customers/filter/multiples', data, header);    
}

/**
 * Se encarga de crear un nuevo cliente.
 */
async function add(model) {            
    return await axios.post(url + '/api/customers/add', model, header);    
}

/**
 * Se encarga de actualizar un nuevo cliente.
 */
async function update(model) {            
    return await axios.post(url + '/api/customers/update', model, header);    
}

/**
 * Se encarga de eliminar un nuevo cliente.
 */
async function removeRange(models) {            
    return await axios.post(url + '/api/customers/removeRange', models, header);    
}

export default {
    selectMultiples: selectMultiples,
    filterMultiples: filterMultiples,
    add: add,
    update: update,
    removeRange: removeRange
}