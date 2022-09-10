import React from 'react';
import { useSelector } from 'react-redux';
import RedirectPrivate from './RedirectPrivate';
const PrivateRoute = ({ children }) => {
    const { currentUser } = useSelector((state) => state.authReducer);
    return currentUser ? children : <RedirectPrivate />;
};

export default PrivateRoute;
