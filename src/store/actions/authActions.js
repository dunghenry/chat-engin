import { auth } from '../../firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    GithubAuthProvider,
    updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
} from 'firebase/auth';

export const register = async (user) => {
    try {
        await createUserWithEmailAndPassword(auth, user.email, user.password);
        sendEmailVerification(auth.currentUser).then(() => {
            console.log('Email verification sent!');
        });
    } catch (error) {
        console.log(error);
    }
};

export const login = async (user) => {
    try {
        const res = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password,
        );
        return res.user;
    } catch (error) {
        console.log(error);
    }
};

const loginGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        return res.user;
    } catch (error) {
        console.log(error);
    }
};

export const authLoginGoogle = createAsyncThunk(
    'auth/loginGoogle',
    async (navigate) => {
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);
            navigate('/');
            return res.user;
        } catch (error) {
            console.log(error);
        }
    },
);
export const authRegister = createAsyncThunk('auth/register', async (user) => {
    try {
        return await register(user);
    } catch (error) {
        console.log(error);
    }
});
export const authLogin = createAsyncThunk('auth/login', async (user) => {
    try {
        return await login(user);
    } catch (error) {
        console.log(error);
    }
});

export const authLoginGithub = createAsyncThunk(
    'auth/loginGithub',
    async (navigate) => {
        try {
            const provider = new GithubAuthProvider();
            const res = await signInWithPopup(auth, provider);
            navigate('/');
            return res.user;
        } catch (error) {
            console.log(error);
        }
    },
);

export const authLoginFacebook = createAsyncThunk(
    'auth/loginFacebook',
    async (navigate) => {
        try {
            const provider = new FacebookAuthProvider();
            const res = await signInWithPopup(auth, provider);
            navigate('/');
            return res.user;
        } catch (error) {
            console.log(error);
        }
    },
);
