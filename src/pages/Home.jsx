import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.authReducer);
    React.useEffect(() => {
        if (!currentUser) {
            navigate('/login');
        }
    }, [navigate, currentUser]);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;
