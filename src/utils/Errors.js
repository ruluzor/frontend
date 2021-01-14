import router from '../router';

function manage(error) {    
    if(error.response.status == 401) {
        router.push('/login');
    }
    if(error.response.status == 400) {        
        console.log(error.response.data.Message);
    }
}

export default {
    manage: manage,
}