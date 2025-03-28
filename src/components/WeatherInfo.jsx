import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/WeatherInfo.module.css"

export default function WeatherInfo({ weather, error }) {

    // console.log("Weather Data in WeatherInfo.jsx:", weather); // Debugging log
    const city = useSelector((state) => state.auth.city);
    const username = useSelector((state) => state.auth.username);


    if (!weather || !weather.main || !weather.weather) {
        return <p>Loading weather...</p>; // Handle case where weather data is not ready
    }

    return (
        <div className={styles.container}>
            <h4>Hi {username}!</h4>
            <h3>🌤️ Outdoor Task Alert⚠️ - Weather in {city}</h3>
        
            {error ? (
                <p style={{ color: "red" }}><strong>Error:</strong> {error}</p>
            ) : weather ? (
                <>
                    <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
                    <p><strong>Feels Like:</strong> {weather.main.feels_like}°C</p>
                    <p><strong>Condition:</strong> {weather.weather[0].description}</p>
                </>
            ) : (
                <p>Loading weather...</p>
            )}
        
        </div>
    );
}


