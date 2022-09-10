import React from 'react';
import { useSelector } from 'react-redux';
const Home = () => {
    const { currentUser } = useSelector((state) => state.authReducer);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;
