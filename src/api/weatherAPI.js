import api from "./axiosClient.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (city, { rejectWithValue }) => {
        try {
            const response = await api.get("/", { params: { q: city } });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch weather data");
        }
    }
);
