import Cookies from './Cookies';

function getPayloadFromCookies() {
    return {
        token: Cookies.get('token'),
        expiration: Cookies.get('expiration')                                                      
    };      
}

function setPayloadToCookies(payload) {    
    Cookies.set('token', payload.token, 1);
    Cookies.set('expiration', payload.expiration, 1);
}

export default {
    getPayloadFromCookies: getPayloadFromCookies,
    setPayloadToCookies: setPayloadToCookies
}