import React from 'react';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';
const PrivateRoute = ({ children }) => {
    const { currentUser } = useSelector((state) => state.authReducer);
    return currentUser ? children : <LoadingToRedirect />;
};

export default PrivateRoute;
