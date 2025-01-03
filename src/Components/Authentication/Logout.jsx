// Logout.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth-service";

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout(); // Assuming you have a logout method in AuthService
    localStorage.clear(); // Clear all local storage
    navigate("/"); // Navigate to home page after logout
    if (onLogout) {
      onLogout(); // Optional callback if needed
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;
