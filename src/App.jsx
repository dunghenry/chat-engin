import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/routes/PrivateRoute';
import Register from './pages/Register';
import { useSelector, useDispatch } from 'react-redux';
import VerifiedEmail from './pages/VerifiedEmail';
import PublicRoute from './components/routes/PublicRoute';
function App() {
    const { currentUser } = useSelector((state) => state.authReducer);
    return (
        <div style={{ fontFamily: 'Avenir' }}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/email_verified" element={<VerifiedEmail />} />
            </Routes>
        </div>
    );
}

export default App;
