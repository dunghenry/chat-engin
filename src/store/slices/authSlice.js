import { createSlice } from '@reduxjs/toolkit';
import {
    authLoginGoogle,
    authLoginGithub,
    authLoginFacebook,
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
        addUser: (state, action) => {
            state.currentUser = action.payload;
        },
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
            });
    },
});
export const { addUser } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
