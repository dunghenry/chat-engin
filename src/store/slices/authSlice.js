import { createSlice } from '@reduxjs/toolkit';
import {
    authLoginGoogle,
    authLoginGithub,
    authLoginFacebook,
    authLogin,
    authRegister
} from '../actions/authActions';
const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload;
        },
        logOut: (state, action) => {
            state.currentUser = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authLoginGoogle.pending, (state) => {
                state.loading = true;
            })
            .addCase(authLoginGoogle.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(authLoginGoogle.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(authLoginGithub.pending, (state) => {
                state.loading = true;
            })
            .addCase(authLoginGithub.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(authLoginGithub.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(authLoginFacebook.pending, (state) => {
                state.loading = true;
            })
            .addCase(authLoginFacebook.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(authLoginFacebook.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(authLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.currentUser = action.payload;
            })
            .addCase(authLogin.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(authRegister.pending, (state) => {
                state.loading = true;
            })
            .addCase(authRegister.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(authRegister.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    },
});
export const { setUser, logOut } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
