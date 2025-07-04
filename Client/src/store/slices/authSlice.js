import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
})
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;