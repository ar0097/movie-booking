import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/movies" style={{ textDecoration: "none" }}>
          <h1 className="navbar-heading">🎬 CineBook</h1>
        </Link>
        <div className="navbar-links">
          <Link to="/movies" style={{ textDecoration: "none" }}>
            <p style={{ color: "#dc2828", fontWeight: 500 }}>Movies</p>
          </Link>
          <Link to="/my-bookings" style={{ textDecoration: "none" }}>
            <p className="same">My Bookings</p>
          </Link>
          <p className="same" onClick={handleLogout}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
