import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from './pages/home.jsx';
import Auth from './pages/auth.jsx';

function App() {
  return (
        <AppRoutes />
  );
}

function AppRoutes() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/auth" />} />
    </Routes>
  );
}

export default App;
