import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import FilterMenu from "./FilterMenu.jsx"; 
import { logout } from "../features/authSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { setFilterOption } from "../features/taskSlice.jsx";

export default function Navbar({}) {
    
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    
    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth");
    };

    const handleResetFilter = () => {
        dispatch(setFilterOption("")); // Reset filterOption to empty string
    };

    

    return (
        <AppBar position="fixed"  >
            <Toolbar className={styles.navbar} sx={{justifyContent: isAuthenticated ? "space-between" : "center"}}>

            {isAuthenticated && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <FilterMenu />

                        <Button
                            variant="outlined"
                            sx={{ color: "white", borderColor: "white", fontSize: '10px' }}
                            onClick={handleResetFilter}
                        >
                            <RotateLeftIcon sx={{height: '15px', width: '15px'}}/>
                            Reset
                        </Button>
                    </Box>
                )}
                
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
