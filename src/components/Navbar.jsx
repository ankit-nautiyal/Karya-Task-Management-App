import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import FilterMenu from "./FilterMenu.jsx"; 
import { logout } from "../features/authSlice.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Navbar() {

    const navigate= useNavigate();
    const dispatch= useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth");
    };

    return (
        <AppBar position="fixed"  >
            <Toolbar className={styles.navbar}>
            
                <FilterMenu className={styles.filterMenu} />

            
                <Typography variant="h5" className={styles.navTitle}>
                    <img src="favicon.webp" alt="logo" />
                    Task Management App
                </Typography>

            
                <Button className={styles.logoutBtn} onClick={handleLogout} >Logout</Button>
            
                
            </Toolbar>
        </AppBar>
    );
}
