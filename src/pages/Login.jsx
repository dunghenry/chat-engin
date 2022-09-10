import React from 'react';
import {
    GoogleOutlined,
    FacebookOutlined,
    GithubOutlined,
} from '@ant-design/icons';
import {
    authLoginGoogle,
    authLoginFacebook,
    authLoginGithub,
} from '../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../components/login/LoginForm';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.authReducer);
    const loginWithGoogle = () => {
        dispatch(authLoginGoogle(navigate));
    };
    const loginWithFacebook = () => {
        dispatch(authLoginFacebook(navigate));
    };
    const loginWithGithub = () => {
        dispatch(authLoginGithub(navigate));
    };
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Firebase Auth</h2>
                <LoginForm />
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
