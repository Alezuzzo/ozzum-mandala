import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import { MdColorLens } from 'react-icons/md';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-brand">
          <MdColorLens className="logo-icon" />
          <span>Mandalas Artísticas</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
                Galeria
              </Link>
            </li>
            <li>
              <Link to="/commission" onClick={() => setIsMobileMenuOpen(false)}>
                Encomendas
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="navbar-icons">
          <Link to="/account" className="icon-link">
            <FaUser />
          </Link>
          <Link to="/cart" className="icon-link">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};