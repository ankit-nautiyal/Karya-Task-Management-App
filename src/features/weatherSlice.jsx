import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../api/weatherAPI";



const initialState= {
    data: null,  //  Set to null initially to avoid undefined errors
    status: "idle",
    error: null,
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {  
        clearWeatherError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeather.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
        })
        .addCase(fetchWeather.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message; // Store the error message
        });
    }
});

export const { clearWeatherError } = weatherSlice.actions;
export default weatherSlice.reducer;
