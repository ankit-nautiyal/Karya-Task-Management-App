import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from './app/store.js';
import Home from './pages/home.jsx';
import Auth from './pages/auth.jsx';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
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
