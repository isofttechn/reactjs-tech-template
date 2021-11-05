import React from 'react';
import {Route, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import RedirectOnLoad from './RedirectOnLoad';


const UserRoute = ({children, ...rest}) =>{
    const {user} = useSelector((state) =>({...state}));

    return user && user.token ? (
    <Route {...rest} render={() =>children} />
    ) : (
        <RedirectOnLoad />
    )
}


export default UserRoute;