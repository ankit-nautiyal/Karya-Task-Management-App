import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice.jsx";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from '../styles/Auth.module.css';


const Auth = () => {
    const [username, setUsername] = useState("");
    const [city, setCity] = useState("");  // Store user's city
    const [error, setError] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!city || !username){
            setError(true); // Show error if city is empty
            return;
        };  // Ensure city is provided
        
        dispatch(login({city, username}));
        navigate("/");
    };

    const handleEnter =(e) =>{
        if (e.key === "Enter") {
            handleLogin();
        }
    }


    return (

            <div className={styles.authContainer}>
                <h2 className={styles.authTitle}>Login into Task Manager App</h2>
                
                <div className={styles.authForm}>
                    <TextField  label="Username" onChange={(e) => setUsername(e.target.value)} required error={error} onKeyDown={handleEnter}/>
                    <TextField  label="City" onChange={(e) => setCity(e.target.value)} required error={error} onKeyDown={handleEnter} />
                    <Button  variant="contained" onClick={handleLogin}>Login</Button>
                </div>
                
            </div>

    );
};

export default Auth;
