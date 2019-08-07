import axios from '../../hoc/axios-orders';

export const userCreate = ( userData ) => {
    return dispatch => {
        
        axios.post( '/users.json', userData)
            
    };
};