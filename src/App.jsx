import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/routes/PrivateRoute';
import Register from './pages/Register';
import { useSelector, useDispatch } from 'react-redux';
import PublicRoute from './components/routes/PublicRoute';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Users from './pages/Users';
import Students from './pages/Students';
import Storage from './pages/Storage';
function App() {
    const { currentUser } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user && !user.emailVerified) {
                user.emailVerified = true;
            } else {
                console.log(user);
            }
        });
    }, []);

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
                <Route path="/users" element={<Users />} />
                <Route path="/students" element={<Students />} />
                <Route path="/storage" element={<Storage />} />
            </Routes>
        </div>
    );
}

export default App;
