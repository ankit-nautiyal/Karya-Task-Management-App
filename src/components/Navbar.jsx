import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import styles from "../styles/Navbar.module.css";
import FilterMenu from "./FilterMenu.jsx"; 
import { logout } from "../features/authSlice.jsx";
import { toggleTheme } from "../features/themeSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { setFilterOption } from "../features/taskSlice.jsx";
import { toast } from "react-toastify";



export default function Navbar({}) {
    
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const themeMode = useSelector((state) => state.theme.mode);
    
    const handleLogout = () => {
        dispatch(logout());
        toast.success("Logged out successfully!");
        navigate("/auth");
    };

    const handleResetFilter = () => {
        dispatch(setFilterOption("")); // Reset filterOption to empty string
    };

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };
    

    return (
        <AppBar position="fixed">
            <Toolbar
                className={styles.navbar}
                sx={{
                    justifyContent: isAuthenticated ? "space-between" : "center",
                    flexWrap: "wrap", 
                    gap: 2, 
                    paddingY: { xs: 1, sm: 0 }, 
                }}
            >
                {isAuthenticated && (
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap", 
                            alignItems: "center",
                            gap: { xs: 1, sm: 2 }, 
                            flexDirection: { xs: "column", sm: "row" }, 
                            width: { xs: "100%", sm: "auto" }, 
                        }}
                    >
                        <FilterMenu />
                        <Button
                            variant="outlined"
                            sx={{
                                color: "white",
                                borderColor: "white",
                                fontSize: { xs: "10px", sm: "12px" }, 
                                padding: { xs: "4px 8px", sm: "6px 16px" },
                                minWidth: "auto", // Allow natural width
                            }}
                            onClick={handleResetFilter}
                        >
                            <RotateLeftIcon sx={{ height: "15px", width: "15px", mr: 0.5 }} />
                            Reset
                        </Button>
                    </Box>
                )}

                <Typography variant="h5" className={styles.navTitle} sx={{ flexShrink: 0 }}>
                    <img src="favicon.webp" alt="logo" />
                    Task Management App
                </Typography>

                
                    <Box className={styles.rightButtons}>
                        <IconButton
                            className={styles.themeBtn}
                            onClick={handleThemeToggle}
                            color="inherit"
                            >
                            {themeMode === "dark" ? (
                                <LightModeOutlinedIcon sx={{ height: "20px", width: "20px" }} />
                            ) : (
                                <DarkModeOutlinedIcon sx={{ height: "20px", width: "20px" }} />
                            )}
                        </IconButton>
                        
                        {isAuthenticated && (
                            <Button
                                className={styles.logoutBtn}
                                onClick={handleLogout}
                                sx={{ fontSize: { xs: "10px", sm: "14px" } }} 
                            >
                                <LogoutIcon sx={{ height: "15px", width: "15px" }} />
                                Logout
                            </Button>
                        )}
                    </Box>
                
            </Toolbar>
        </AppBar>
    );
}
