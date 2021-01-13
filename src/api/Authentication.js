import Cookies from '@/utils/Cookies';

/**
 *
 */
function authenticate(username, password) {   
    if (username == undefined && password == undefined) {                
        Cookies.set("authenticate", true, 1);        
        return true;
    }
    else {
        Cookies.set("authenticate", false, 1);        
        return false;
    }
}

/**
 * 
 */
function logout() {    
    Cookies.set("authenticate", false, 1);    
    return true;
}

/**
 * 
 */
function getState() {        
    return Cookies.get("authenticate");    
}

export default {
    authenticate: authenticate,
    logout: logout,
    getState: getState
}