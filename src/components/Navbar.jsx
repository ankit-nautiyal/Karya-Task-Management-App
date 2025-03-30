import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import FilterMenu from "./FilterMenu.jsx"; 
import { logout } from "../features/authSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {

    const navigate= useNavigate();
    const dispatch= useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth");
    };

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <AppBar position="fixed"  >
            <Toolbar className={styles.navbar} sx={{justifyContent: isAuthenticated ? "space-between" : "center"}}>

                {isAuthenticated && <FilterMenu className={styles.filterMenu}/>  }
                
                <Typography variant="h5" className={styles.navTitle}>
                    <img src="favicon.webp" alt="logo" />
                    Task Management App
                </Typography>

                {isAuthenticated && <Button className={styles.logoutBtn} onClick={handleLogout} >
                    <LogoutIcon sx={{marginRight: '5px'}} />
                    Logout
                </Button> }
                
            </Toolbar>
        </AppBar>
    );
}
