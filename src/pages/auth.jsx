import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice.jsx";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import styles from '../styles/Auth.module.css';
import LoginIcon from '@mui/icons-material/Login';
import { toast } from "react-toastify";


const Auth = () => {
    const [username, setUsername] = useState("");
    const [city, setCity] = useState("");  // Store user's city
    const [error, setError] = useState(false);
    const themeMode = useSelector((state) => state.theme.mode);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!city || !username){
            setError(true); // Show error if city is empty
            toast.error("Please fill all the details!");
            return;
        }; 
        
        dispatch(login({city, username}));
        toast.success("Logged in successfully!");
        navigate("/");
    };

    const handleEnter =(e) =>{
        if (e.key === "Enter") {
            handleLogin();
        }
    }

    

    return (
        <>
            <Navbar/>

            <div className={styles.authContainer}>
                <h2 className={styles.authTitle}>Login into Task Management App</h2>
                
                <div className={styles.authForm}>
                    <TextField  
                        label="Username" 
                        onChange={(e) => setUsername(e.target.value)} 
                        required error={error} 
                        onKeyDown={handleEnter}
                        sx={{color: "black"}}
                    />

                    <TextField  
                        label="City" 
                        onChange={(e) => setCity(e.target.value)} 
                        required error={error} 
                        onKeyDown={handleEnter} 
                    />

                    <Button  variant="contained" onClick={handleLogin}>
                        <LoginIcon sx={{marginRight: '5px'}}/>
                        Login
                    </Button>
                </div>
                
            </div>

            <Footer/>
        </>
    );
};

export default Auth;
