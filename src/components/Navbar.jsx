import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.scss'; // Assuming custom styling is here

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-tagline">
       {/* Logo as a link */}
       <Link to="/">
        <img src="/images/iconlogo-02.png" alt="Giyani TVET College Logo" className="logo" />
      </Link>
      
        <h1 className="tagline">GIYANI TVET COLLEGE</h1>
     
    </div>
    <ul className="nav-links">
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/apply">Apply Now</Link></li>
      <li><Link to="/visit">About us</Link></li>
    </ul>
  </nav>
);

export default Navbar;

