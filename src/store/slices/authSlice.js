import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginGoogle } from '../actions/authActions';
export const authLoginGoogle = createAsyncThunk(
    'auth/loginGoogle',
    async (_, { rejectWithValue }) => {
        try {
            return await loginGoogle();
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);
const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
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
            });
    },
});
export const {} = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
