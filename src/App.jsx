import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from './pages/home.jsx';
import Auth from './pages/auth.jsx';
import { ToastContainer } from "react-toastify";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
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
        // theme="dark"
      />
    </>
  );
}


export default App;
