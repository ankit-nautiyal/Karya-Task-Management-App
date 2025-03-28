import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false, // Load from local storage
    city: localStorage.getItem("city") || "",  // Load city from localStorage
    username: localStorage.getItem("username") || "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            localStorage.setItem("isAuthenticated", JSON.stringify(true)); // Save login state

            state.city = action.payload.city;
            state.username = action.payload.username;

            localStorage.setItem("city", action.payload.city);
            localStorage.setItem("username", action.payload.username);
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.city = "";
            localStorage.removeItem("city");
            localStorage.removeItem("username");
            localStorage.setItem("isAuthenticated", JSON.stringify(false));
        },
        setCity: (state, action) => {
            state.city = action.payload.city;
        }
        
    },
});


export const { login, logout, setCity } = authSlice.actions;
export default authSlice.reducer;