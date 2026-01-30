import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/cars">Cars</Link>
    <Link to="/rentals">Rentals</Link>
    <Link to="/sell">Sell a Car</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;
