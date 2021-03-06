import axios from 'axios';


//Initiallizing axios call
export const createOrUpdateUser = async (authtoken) =>{
    return await axios.post(
        `${process.env.REACT_APP_API}/create-or-update-user`, 
        {}, 
        {
        headers: {
            authtoken,
        }
    }
    );
};


//Initiallizing axios call
export const currentUser = async (authtoken) =>{
    return await axios.post(
        `${process.env.REACT_APP_API}/current-user`, 
        {}, 
        {
        headers: {
            authtoken,
        }
    }
    );
};