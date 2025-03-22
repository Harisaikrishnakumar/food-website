import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  const { getTotalCartAmount } = useContext(StoreContext) || { getTotalCartAmount: () => 0 };

  const handleScroll = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={(e) => handleScroll(e, '#explore-menu')} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={(e) => handleScroll(e, '#app-download')} className={menu === "Mobile-app" ? "active" : ""}>Mobile App</a>
        <a href="#footer" onClick={(e) => handleScroll(e, '#footer')} className={menu === "Contact-us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

// ✅ Add PropTypes validation
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // Ensure setShowLogin is a required function
};

export default Navbar;
