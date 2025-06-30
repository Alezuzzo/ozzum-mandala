import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo/Marca Atualizada */}
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          {/* CORREÇÃO: O caminho da imagem foi atualizado para o seu ficheiro local. */}
          <img
            style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
            src="/logo.png" 
            alt="Mandalas Artísticas Logo" 
            className="navbar-logo-img" 
          />
          <span>Mandalas Artísticas</span>
        </Link>

        {/* Links de Navegação (Desktop) */}
        <ul className="navbar-links-desktop">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">Sobre</NavLink></li>
          <li><NavLink to="/gallery">Galeria</NavLink></li>
          <li><NavLink to="/comissions" className="navbar-cta-link">Encomendas</NavLink></li>
        </ul>

        {/* Botão do Menu Mobile */}
        <button className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Menu de Navegação (Mobile - Overlay) */}
      <div className={`navbar-links-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMobileMenu}>Sobre</NavLink></li>
          <li><NavLink to="/gallery" onClick={closeMobileMenu}>Galeria</NavLink></li>
          <li><NavLink to="/comissions" onClick={closeMobileMenu}>Encomendas</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};
