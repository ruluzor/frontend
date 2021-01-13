import Cookies from '@/utils/Cookies';

/**
 * 
 */
export const header = {
    headers: { Authorization: `Bearer ${ Cookies.get('token') }` }
};