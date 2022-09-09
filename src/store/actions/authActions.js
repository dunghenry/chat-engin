import { auth } from '../../firebase';
import {
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    GithubAuthProvider,
} from 'firebase/auth';

export const loginGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        return res.user;
    } catch (error) {
        console.log(error);
    }
};
