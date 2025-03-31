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

        <AppBar position="fixed">
            <Toolbar
                className={styles.navbar}
                sx={{
                    justifyContent: isAuthenticated ? "space-between" : "center",
                    flexWrap: "wrap", // Allow wrapping for responsiveness
                    gap: 2, // Add spacing between elements
                    paddingY: { xs: 1, sm: 0 }, // Extra padding on small screens
                }}
            >
                {isAuthenticated && (
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap", // Allow wrapping within this Box
                            alignItems: "center",
                            gap: { xs: 1, sm: 2 }, // Smaller gap on extra-small screens
                            flexDirection: { xs: "column", sm: "row" }, // Stack vertically on xs, row on sm+
                            width: { xs: "100%", sm: "auto" }, // Full width on small screens
                        }}
                    >
                        <FilterMenu />
                        <Button
                            variant="outlined"
                            sx={{
                                color: "white",
                                borderColor: "white",
                                fontSize: { xs: "10px", sm: "12px" }, // Slightly larger on sm+
                                padding: { xs: "4px 8px", sm: "6px 16px" }, // Responsive padding
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

                {isAuthenticated && (
                    <Button
                        className={styles.logoutBtn}
                        onClick={handleLogout}
                        sx={{ fontSize: { xs: "10px", sm: "14px" } }} // Responsive font size
                    >
                        <LogoutIcon sx={{ marginRight: "5px", height: "15px", width: "15px" }} />
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}
