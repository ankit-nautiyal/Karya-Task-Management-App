import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: localStorage.getItem("themeMode") || "light", // Default to light, persist in localStorage
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = (state.mode === "light" ? "dark" : "light");
            localStorage.setItem("themeMode", state.mode);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;