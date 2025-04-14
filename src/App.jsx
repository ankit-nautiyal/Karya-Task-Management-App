import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from './pages/home.jsx';
import Auth from './pages/auth.jsx';
import { ToastContainer } from "react-toastify";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const themeMode = useSelector((state) => state.theme.mode);

  const theme = createTheme({
    palette: {
        mode: themeMode,
        ...(themeMode === "light"
            ? {
                  primary: { main: "rgb(99, 24, 191)" }, // Match Navbar bg
                  background: { default: "#ffffff", paper: "#f5f5f5" },
                  text: { primary: "#000000", secondary: "#555555" },
              }
            : {
                  primary: { main: "#90caf9" }, // Lighter for dark mode
                  background: { default: "#121212", paper: "#1d1d1d" },
                  text: { primary: "#ffffff", secondary: "#bbbbbb" },
              }),
    },
});

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalize styles across themes */}
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/auth" />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={themeMode} // Sync with Redux theme
        />
    </ThemeProvider>
  );
}


export default App;
