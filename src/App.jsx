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
import { sendEmailVerification, signOut } from 'firebase/auth';
import { setUser, logOut } from './store/slices/authSlice';
import VefifyEmail from './pages/VefifyEmail';
function App() {
    const { currentUser } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(() => {
        // dispatch(logOut()); //logOut
        // signOut(auth)
        //     .then(() => {
        //         console.log('Sign-out successfully');
        //     })
        //     .catch((error) => {
        //         console.log('Sign-out failure');
        //     });
    }, []);
    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const providerId = user?.providerData.some(
                (p) => p.providerId === 'password',
            );
            if (providerId && !user.emailVerified) {
                sendEmailVerification(auth.currentUser).then(() => {
                    console.log('Email verification sent!');
                });
                signOut(auth)
                    .then(() => {
                        console.log('Sign-out successfully');
                    })
                    .catch((error) => {
                        console.log('Sign-out failure');
                    });
                return navigate('/verify_email');
            } else {
                if (user) {
                    setUser(user);
                    navigate('/');
                }
            }
        });
    }, [dispatch]);

    return (
        <div style={{ fontFamily: 'Avenir' }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/users" element={<Users />} />
                <Route path="/students" element={<Students />} />
                <Route path="/storage" element={<Storage />} />
                <Route path="/verify_email" element={<VefifyEmail />} />
            </Routes>
        </div>
    );
}

export default App;
