import { Box, Typography } from "@mui/material";
import styles from "../styles/Footer.module.css"; // Import modular CSS

export default function Footer() {
    return (
        <Box component="footer" className={styles.footer}>
                    
            <Typography >© 2025 <img src="favicon.webp" alt="logo" /> Karya - Task Management App</Typography>
        </Box>
    );
}
