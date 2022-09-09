import React from 'react';
import {
    GoogleOutlined,
    FacebookOutlined,
    GithubOutlined,
} from '@ant-design/icons';
// import {
//     GoogleAuthProvider,
//     signInWithRedirect,
//     FacebookAuthProvider,
//     GithubAuthProvider,
// } from 'firebase/auth';
// import { auth } from '../firebase';
import { authLoginGoogle } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';
const Login = () => {
    const dispatch = useDispatch();
    const loginWithGoogle = () => {
        dispatch(authLoginGoogle());
    };
    const loginWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const loginWithGithub = () => {
        const provider = new GithubAuthProvider();
        signInWithRedirect(auth, provider);
    };
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Firebase Auth</h2>
                <div className="login-button google" onClick={loginWithGoogle}>
                    <GoogleOutlined /> Sign In with Google
                </div>
                <br />
                <br />

                <div className="login-button github" onClick={loginWithGithub}>
                    <GithubOutlined /> Sign In with Github
                </div>
                <br />
                <br />
                <div
                    className="login-button facebook"
                    onClick={loginWithFacebook}
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
    );
};

export default Login;
