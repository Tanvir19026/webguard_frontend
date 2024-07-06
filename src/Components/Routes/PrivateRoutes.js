import React, { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProviders';
import { Navigate } from 'react-router';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    
    if(loading)
    {
        return  <ProgressBar striped variant="info" now={20} />
    }
    if(user)
    {
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoutes;