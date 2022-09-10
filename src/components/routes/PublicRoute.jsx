import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const RedirectPublic = () => {
    const [count, setCount] = React.useState(1);
    const navigate = useNavigate();
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
        count === 0 && navigate('/');
        return () => clearInterval(interval);
    }, [count, navigate]);
    return <h2 style={{ color: 'white' }}>Redirecting HomePage</h2>;
};
const PublicRoute = ({ children }) => {
    const { currentUser } = useSelector((state) => state.authReducer);
    return currentUser ? <RedirectPublic /> : children;
};
export default PublicRoute;
